#!/usr/bin/env python3
"""Apply WebP picture elements, CSS image-set, fonts, and img dimensions to index.html."""
from __future__ import annotations

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
INDEX = ROOT / "index.html"

# src -> (webp, width, height) for main images; thumbs use *-thumb.webp
IMG_DIMS: dict[str, tuple[str, int, int]] = {
    "GOPR1314.jpg": ("GOPR1314.webp", 1200, 1600),
    "dropoff.jpg": ("dropoff.webp", 1200, 800),
    "coral-garden.jpg": ("coral-garden.webp", 1200, 1050),
    "DC1.jpg": ("DC1.webp", 1200, 675),
    "DC2.jpg": ("DC2.webp", 1200, 900),
    "DC3.jpg": ("DC3.webp", 1200, 831),
    "DC4.jpg": ("DC4.webp", 1200, 900),
    "DC5.jpg": ("DC5.webp", 1200, 900),
    "intro-bg1.jpg": ("intro-bg1.webp", 1280, 1707),
    "intro-bg2.jpg": ("intro-bg2.webp", 1080, 1440),
    "double-room-overview.JPG": ("double-room-overview.webp", 1200, 1600),
    "bedroom-art.JPG": ("bedroom-art.webp", 1200, 2135),
    "bedroom-garden-view.JPG": ("bedroom-garden-view.webp", 1200, 2134),
    "twin-room-pendant.JPG": ("twin-room-pendant.webp", 1200, 900),
    "twin-room-warm.JPG": ("twin-room-warm.webp", 1200, 2133),
    "vanity-wardrobe.JPG": ("vanity-wardrobe.webp", 1200, 2135),
    "bathroom-vanity-2.JPG": ("bathroom-vanity-2.webp", 1200, 2135),
    "bathroom-shower.JPG": ("bathroom-shower.webp", 1200, 1600),
    "amenities.JPG": ("amenities.webp", 1200, 2135),
}

THUMB_DIMS: dict[str, tuple[str, int, int]] = {
    "intro-bg1.jpg": ("intro-bg1-thumb.webp", 400, 533),
    "intro-bg2.jpg": ("intro-bg2-thumb.webp", 400, 533),
    "double-room-overview.JPG": ("double-room-overview-thumb.webp", 400, 533),
    "bedroom-art.JPG": ("bedroom-art-thumb.webp", 400, 712),
    "bedroom-garden-view.JPG": ("bedroom-garden-view-thumb.webp", 400, 711),
    "twin-room-pendant.JPG": ("twin-room-pendant-thumb.webp", 400, 300),
    "twin-room-warm.JPG": ("twin-room-warm-thumb.webp", 400, 711),
    "vanity-wardrobe.JPG": ("vanity-wardrobe-thumb.webp", 400, 712),
    "bathroom-vanity-2.JPG": ("bathroom-vanity-2-thumb.webp", 400, 712),
    "bathroom-shower.JPG": ("bathroom-shower-thumb.webp", 400, 533),
    "amenities.JPG": ("amenities-thumb.webp", 400, 712),
}

BG_IMAGE_SET: dict[str, tuple[str, str]] = {
    "hero.jpg": ("hero.webp", "hero.jpg"),
    "intro-bg1.jpg": ("intro-bg1.webp", "intro-bg1.jpg"),
    "3285.JPG": ("3285.webp", "3285.JPG"),
    "intro-bg2.jpg": ("intro-bg2.webp", "intro-bg2.jpg"),
    "3280.JPG": ("3280.webp", "3280.JPG"),
    "story-bg.jpg": ("story-bg.webp", "story-bg.jpg"),
    "practical-bg.jpg": ("practical-bg.webp", "practical-bg.jpg"),
    "courses-bg.jpg": ("courses-bg.webp", "courses-bg.jpg"),
}


def bg_image_set_css(jpg: str) -> str:
    webp, fallback = BG_IMAGE_SET[jpg]
    return (
        f"url('{fallback}');\n"
        f"      background-image: image-set(\n"
        f"        url('{webp}') type('image/webp'),\n"
        f"        url('{fallback}') type('image/jpeg')\n"
        f"      )"
    )


def picture_img(
    src: str,
    alt: str,
    *,
    lazy: bool = True,
    webp: str | None = None,
    w: int | None = None,
    h: int | None = None,
) -> str:
    info = IMG_DIMS.get(src) if webp is None else (webp, w, h)
    assert info
    webp_path, width, height = info
    attrs = [f'src="{src}"', f'alt="{alt}"', f'width="{width}"', f'height="{height}"']
    if lazy:
        attrs.extend(['loading="lazy"', 'decoding="async"'])
    img = "<img " + " ".join(attrs) + " />"
    return f'<picture><source srcset="{webp_path}" type="image/webp">{img}</picture>'


def main() -> None:
    html = INDEX.read_text(encoding="utf-8")

    # Preload hero WebP (LCP) + JPEG fallback for older browsers
    html = html.replace(
        '<link rel="preload" as="image" href="hero.jpg" fetchpriority="high" />',
        '<link rel="preload" as="image" href="hero.webp" type="image/webp" fetchpriority="high" />\n'
        '  <link rel="preload" as="image" href="hero.jpg" fetchpriority="high" />',
    )

    # Non-blocking Google Fonts
    old_fonts = """  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&display=swap" rel="stylesheet" />"""
    new_fonts = """  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&display=swap" rel="stylesheet" media="print" onload="this.media='all'" />
  <noscript><link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&display=swap" rel="stylesheet" /></noscript>"""
    html = html.replace(old_fonts, new_fonts)

    # Defer gtag inline block (external already async)
    html = html.replace(
        "  <script async src=\"https://www.googletagmanager.com/gtag/js?id=G-2G09F7820Y\"></script>\n  <script>",
        "  <script async src=\"https://www.googletagmanager.com/gtag/js?id=G-2G09F7820Y\"></script>\n  <script defer>",
    )

    # Hero background
    html = html.replace(
        "      background: url('hero.jpg') center/cover no-repeat;",
        "      background: center/cover no-repeat;\n"
        "      background-image: url('hero.jpg');\n"
        "      background-image: image-set(\n"
        "        url('hero.webp') type('image/webp'),\n"
        "        url('hero.jpg') type('image/jpeg')\n"
        "      );",
    )

    for jpg in (
        "intro-bg1.jpg",
        "3285.JPG",
        "intro-bg2.jpg",
        "3280.JPG",
    ):
        html = html.replace(
            f"background-image: url('{jpg}');",
            f"background-image: {bg_image_set_css(jpg)};",
        )

    for block in (
        ("      padding: 0; background: url('story-bg.jpg') center/cover no-repeat;", "story-bg.jpg"),
        (
            "    #practical { padding: 110px 60px; background: url('practical-bg.jpg') center/cover no-repeat fixed; position: relative; }",
            "practical-bg.jpg",
        ),
        (
            "    #courses { padding: 110px 60px; background: url('courses-bg.jpg') center/cover no-repeat fixed; position: relative; }",
            "courses-bg.jpg",
        ),
    ):
        old, jpg = block
        webp, fallback = BG_IMAGE_SET[jpg]
        if "story-bg" in jpg:
            new = (
                "      padding: 0;\n"
                "      background: center/cover no-repeat;\n"
                f"      background-image: url('{fallback}');\n"
                "      background-image: image-set(\n"
                f"        url('{webp}') type('image/webp'),\n"
                f"        url('{fallback}') type('image/jpeg')\n"
                "      );"
            )
        else:
            section = "#practical" if "practical" in jpg else "#courses"
            new = (
                f"    {section} {{ padding: 110px 60px;\n"
                "      background: center/cover no-repeat fixed;\n"
                f"      background-image: url('{fallback}');\n"
                "      background-image: image-set(\n"
                f"        url('{webp}') type('image/webp'),\n"
                f"        url('{fallback}') type('image/jpeg')\n"
                "      ); position: relative; }}"
            )
        html = html.replace(old, new)

    # Dive cards
    html = html.replace(
        '<img src="GOPR1314.jpg" alt="Diver exploring the USAT Liberty shipwreck draped in coral in Tulamben, Bali" loading="lazy" />',
        picture_img(
            "GOPR1314.jpg",
            "Diver exploring the USAT Liberty shipwreck draped in coral in Tulamben, Bali",
        ),
    )
    html = html.replace(
        '<img src="dropoff.jpg" alt="Diver descending the Tulamben Drop Off coral wall, Bali" loading="lazy" />',
        picture_img(
            "dropoff.jpg",
            "Diver descending the Tulamben Drop Off coral wall, Bali",
        ),
    )
    html = html.replace(
        '<img src="coral-garden.jpg" alt="Colourful reef fish over the Coral Garden dive site in Tulamben, Bali" loading="lazy" />',
        picture_img(
            "coral-garden.jpg",
            "Colourful reef fish over the Coral Garden dive site in Tulamben, Bali",
        ),
    )

    for n in range(1, 6):
        pat = re.compile(
            rf'<img src="DC{n}\.jpg" alt="([^"]*)" loading="lazy" />'
        )
        html = pat.sub(
            lambda m, n=n: picture_img(f"DC{n}.jpg", m.group(1)),
            html,
            count=1,
        )

    # Room modal main images (lazy — modal hidden until opened)
    room_alts = [
        ("intro-bg1.jpg", "Infinity Pool &amp; Ocean View"),
        ("intro-bg2.jpg", "Aerial — Beachfront Property"),
        ("double-room-overview.JPG", "Double Room — Overview"),
        ("bedroom-art.JPG", "Double Room — Balinese Artwork"),
        ("bedroom-garden-view.JPG", "Double Room — Garden View"),
        ("twin-room-pendant.JPG", "Twin Room — Rattan Lighting"),
        ("twin-room-warm.JPG", "Twin Room — Garden Views"),
        ("vanity-wardrobe.JPG", "Room Amenities &amp; Wardrobe"),
        ("bathroom-vanity-2.JPG", "Bathroom Vanity"),
        ("bathroom-shower.JPG", "Bathroom — Wet Room Shower"),
        ("amenities.JPG", "Sensatia Botanical Toiletries"),
    ]
    for src, alt in room_alts:
        html = html.replace(
            f'<img src="{src}" alt="{alt}" />',
            picture_img(src, alt),
        )

    # Thumbnails
    for src, (webp, w, h) in THUMB_DIMS.items():
        stem = Path(src).stem
        html = html.replace(
            f'<img src="{src}" alt="" />',
            f'<picture><source srcset="{webp}" type="image/webp"><img src="{src}" alt="" width="{w}" height="{h}" loading="lazy" decoding="async" /></picture>',
        )

    html = html.replace(
        '<script src="translations.js"></script>',
        '<script src="translations.js" defer></script>',
    )

    INDEX.write_text(html, encoding="utf-8")
    print("Patched", INDEX)


if __name__ == "__main__":
    main()
