"""Original raster filename -> descriptive WebP basename (no extension)."""

from __future__ import annotations

# Keys: exact original filename at repo root. Values: lowercase hyphenated WebP stem.
WEBP_STEM: dict[str, str] = {
    "hero.jpg": "usat-liberty-wreck-tulamben-hero",
    "GOPR1314.jpg": "usat-liberty-wreck-coral-tulamben",
    "dropoff.jpg": "tulamben-drop-off-coral-wall",
    "coral-garden.jpg": "coral-garden-reef-fish-tulamben",
    "DC1.jpg": "dive-centre-equipment-wetsuits-bcds",
    "DC2.jpg": "dive-centre-bcds-fins-safety-equipment",
    "DC3.jpg": "dive-centre-freediving-fins-mask-storage",
    "DC4.jpg": "paradise-dive-dining-briefing-space",
    "DC5.jpg": "paradise-dive-classroom-briefing-room",
    "intro-bg1.jpg": "infinity-pool-ocean-view",
    "intro-bg2.jpg": "aerial-beachfront-property",
    # Intro carousel slides 2 & 4: no alt; names from #intro slide order only.
    "3285.JPG": "intro-section-slide-2",
    "3280.JPG": "intro-section-slide-4",
    "story-bg.jpg": "usat-liberty-story-section-background",
    "practical-bg.jpg": "before-you-dive-section-background",
    "courses-bg.jpg": "first-breath-underwater-section-background",
    "double-room-overview.JPG": "double-room-overview",
    "bedroom-art.JPG": "double-room-balinese-artwork",
    "bedroom-garden-view.JPG": "double-room-garden-view",
    "twin-room-pendant.JPG": "twin-room-rattan-lighting",
    "twin-room-warm.JPG": "twin-room-garden-views",
    "vanity-wardrobe.JPG": "room-amenities-wardrobe",
    "bathroom-vanity-2.JPG": "bathroom-vanity",
    "bathroom-shower.JPG": "bathroom-wet-room-shower",
    "amenities.JPG": "sensatia-botanical-toiletries",
}

# Old committed WebP filename -> new filename (for renames & HTML replace).
OLD_TO_NEW_WEBP: dict[str, str] = {
    "hero.webp": "usat-liberty-wreck-tulamben-hero.webp",
    "GOPR1314.webp": "usat-liberty-wreck-coral-tulamben.webp",
    "dropoff.webp": "tulamben-drop-off-coral-wall.webp",
    "coral-garden.webp": "coral-garden-reef-fish-tulamben.webp",
    "DC1.webp": "dive-centre-equipment-wetsuits-bcds.webp",
    "DC2.webp": "dive-centre-bcds-fins-safety-equipment.webp",
    "DC3.webp": "dive-centre-freediving-fins-mask-storage.webp",
    "DC4.webp": "paradise-dive-dining-briefing-space.webp",
    "DC5.webp": "paradise-dive-classroom-briefing-room.webp",
    "intro-bg1.webp": "infinity-pool-ocean-view.webp",
    "intro-bg2.webp": "aerial-beachfront-property.webp",
    "3285.webp": "intro-section-slide-2.webp",
    "3280.webp": "intro-section-slide-4.webp",
    "story-bg.webp": "usat-liberty-story-section-background.webp",
    "practical-bg.webp": "before-you-dive-section-background.webp",
    "courses-bg.webp": "first-breath-underwater-section-background.webp",
    "double-room-overview.webp": "double-room-overview.webp",
    "bedroom-art.webp": "double-room-balinese-artwork.webp",
    "bedroom-garden-view.webp": "double-room-garden-view.webp",
    "twin-room-pendant.webp": "twin-room-rattan-lighting.webp",
    "twin-room-warm.webp": "twin-room-garden-views.webp",
    "vanity-wardrobe.webp": "room-amenities-wardrobe.webp",
    "bathroom-vanity-2.webp": "bathroom-vanity.webp",
    "bathroom-shower.webp": "bathroom-wet-room-shower.webp",
    "amenities.webp": "sensatia-botanical-toiletries.webp",
    "intro-bg1-thumb.webp": "infinity-pool-ocean-view-thumb.webp",
    "intro-bg2-thumb.webp": "aerial-beachfront-property-thumb.webp",
    "double-room-overview-thumb.webp": "double-room-overview-thumb.webp",
    "bedroom-art-thumb.webp": "double-room-balinese-artwork-thumb.webp",
    "bedroom-garden-view-thumb.webp": "double-room-garden-view-thumb.webp",
    "twin-room-pendant-thumb.webp": "twin-room-rattan-lighting-thumb.webp",
    "twin-room-warm-thumb.webp": "twin-room-garden-views-thumb.webp",
    "vanity-wardrobe-thumb.webp": "room-amenities-wardrobe-thumb.webp",
    "bathroom-vanity-2-thumb.webp": "bathroom-vanity-thumb.webp",
    "bathroom-shower-thumb.webp": "bathroom-wet-room-shower-thumb.webp",
    "amenities-thumb.webp": "sensatia-botanical-toiletries-thumb.webp",
}


def webp_for_src(src: str, *, thumb: bool = False) -> str:
    stem = WEBP_STEM[src]
    if thumb:
        return f"{stem}-thumb.webp"
    return f"{stem}.webp"
