#!/usr/bin/env python3
"""Rename WebP assets to descriptive names and update index.html."""
from __future__ import annotations

from pathlib import Path

from webp_names import OLD_TO_NEW_WEBP

ROOT = Path(__file__).resolve().parent.parent
INDEX = ROOT / "index.html"


def main() -> None:
    html = INDEX.read_text(encoding="utf-8")
    for old, new in sorted(OLD_TO_NEW_WEBP.items(), key=lambda x: -len(x[0])):
        old_path = ROOT / old
        new_path = ROOT / new
        if old == new:
            continue
        if not old_path.is_file():
            print(f"SKIP missing {old}")
            continue
        if new_path.exists():
            raise SystemExit(f"Target exists: {new}")
        old_path.rename(new_path)
        print(f"mv {old} -> {new}")
        html = html.replace(old, new)
    INDEX.write_text(html, encoding="utf-8")
    print("Updated index.html")


if __name__ == "__main__":
    main()
