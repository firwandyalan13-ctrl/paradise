#!/usr/bin/env python3
"""Copy designer WebP assets into repo under descriptive names."""
from __future__ import annotations

import shutil
import sys
from pathlib import Path

from designer_webp_sources import DESIGNER_ARCHIVE_TO_SRC
from webp_names import webp_for_src

ROOT = Path(__file__).resolve().parent.parent
ARCHIVE_DIR = Path(sys.argv[1]) if len(sys.argv) > 1 else ROOT / "designer-webp" / "webp"


def main() -> None:
    if not ARCHIVE_DIR.is_dir():
        raise SystemExit(f"Missing designer webp dir: {ARCHIVE_DIR}")
    for arc_name, src in DESIGNER_ARCHIVE_TO_SRC.items():
        src_path = ARCHIVE_DIR / arc_name
        if not src_path.is_file():
            raise SystemExit(f"Designer file missing: {src_path}")
        dest = ROOT / webp_for_src(src)
        shutil.copy2(src_path, dest)
        print(f"designer: {arc_name} -> {dest.name}")


if __name__ == "__main__":
    main()
