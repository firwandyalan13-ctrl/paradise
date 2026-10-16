#!/usr/bin/env python3
"""Generate WebP variants for homepage images (EXIF-aware)."""
from __future__ import annotations

import os
from pathlib import Path

from PIL import Image, ImageOps

from designer_webp_sources import DESIGNER_ARCHIVE_TO_SRC
from webp_names import WEBP_STEM, webp_for_src

DESIGNER_SRCS = frozenset(DESIGNER_ARCHIVE_TO_SRC.values())

ROOT = Path(__file__).resolve().parent.parent
QUALITY = 78

# max_width -> list of filenames (exact case)
JOBS: dict[int, list[str]] = {
    1600: [
        "hero.jpg",
        "intro-bg1.jpg",
        "intro-bg2.jpg",
        "3285.JPG",
        "3280.JPG",
        "story-bg.jpg",
        "practical-bg.jpg",
        "courses-bg.jpg",
    ],
    1200: [
        "GOPR1314.jpg",
        "dropoff.jpg",
        "coral-garden.jpg",
        "DC1.jpg",
        "DC2.jpg",
        "DC3.jpg",
        "DC4.jpg",
        "DC5.jpg",
        "double-room-overview.JPG",
        "bedroom-art.JPG",
        "bedroom-garden-view.JPG",
        "twin-room-pendant.JPG",
        "twin-room-warm.JPG",
        "vanity-wardrobe.JPG",
        "bathroom-vanity-2.JPG",
        "bathroom-shower.JPG",
        "amenities.JPG",
    ],
    400: [
        "intro-bg1.jpg",
        "intro-bg2.jpg",
        "double-room-overview.JPG",
        "bedroom-art.JPG",
        "bedroom-garden-view.JPG",
        "twin-room-pendant.JPG",
        "twin-room-warm.JPG",
        "vanity-wardrobe.JPG",
        "bathroom-vanity-2.JPG",
        "bathroom-shower.JPG",
        "amenities.JPG",
    ],
}


def out_name(src: str, max_w: int) -> str:
    if src not in WEBP_STEM:
        raise KeyError(f"No WebP name mapping for {src}")
    return webp_for_src(src, thumb=(max_w == 400))


def convert(src_name: str, max_w: int) -> tuple[int, int, int]:
    src = ROOT / src_name
    if not src.is_file():
        raise FileNotFoundError(src)
    dest = ROOT / out_name(src_name, max_w)
    img = Image.open(src)
    img = ImageOps.exif_transpose(img)
    w, h = img.size
    if w > max_w:
        nh = round(h * max_w / w)
        img = img.resize((max_w, nh), Image.Resampling.LANCZOS)
        w, h = img.size
    img.save(dest, "WEBP", quality=QUALITY, method=6)
    orig = src.stat().st_size
    new = dest.stat().st_size
    return orig, new, w, h


def main() -> None:
    seen: set[tuple[str, int]] = set()
    rows: list[tuple[str, int, int, int, str]] = []
    dims: dict[str, tuple[int, int]] = {}

    for max_w, files in JOBS.items():
        for name in files:
            key = (name, max_w)
            if key in seen:
                continue
            seen.add(key)
            if name in DESIGNER_SRCS and max_w != 400:
                print(f"SKIP designer source {name} (max_w={max_w})")
                continue
            orig, new, w, h = convert(name, max_w)
            out = out_name(name, max_w)
            rows.append((name, max_w, orig, new, out))
            if max_w != 400:
                dims[name] = (w, h)
            print(f"OK {out} ({w}x{h}) {orig//1024}KB -> {new//1024}KB")

    print("\n--- dimensions for img tags (from primary webp) ---")
    for k, v in sorted(dims.items()):
        print(f"{k}: {v[0]}x{v[1]}")


if __name__ == "__main__":
    os.chdir(ROOT)
    main()
