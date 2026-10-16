"""Designer archive basename (webp/*.webp) -> original raster filename at repo root."""

from __future__ import annotations

# Only files used on index.html that the designer supplied.
DESIGNER_ARCHIVE_TO_SRC: dict[str, str] = {
    "GOPR1314.webp": "GOPR1314.jpg",
    "coral-garden.webp": "coral-garden.jpg",
    "courses-bg.webp": "courses-bg.jpg",
    "intro-bg2.webp": "intro-bg2.jpg",
    "practical-bg.webp": "practical-bg.jpg",
    "story-bg.webp": "story-bg.jpg",
    "DC1.webp": "DC1.jpg",
    "DC2.webp": "DC2.jpg",
    "DC3.webp": "DC3.jpg",
    "DC4.webp": "DC4.jpg",
    "DC5.webp": "DC5.jpg",
}

# Present in designer archive but not used by root index.html (not installed).
DESIGNER_ARCHIVE_UNUSED: tuple[str, ...] = (
    "3279.webp",
    "3281.webp",
    "3284.webp",
    "3287.webp",
    "3299.webp",
)


def designer_output_names() -> list[str]:
    from webp_names import webp_for_src

    return [webp_for_src(src) for src in DESIGNER_ARCHIVE_TO_SRC.values()]
