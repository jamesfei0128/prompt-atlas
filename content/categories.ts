import { slugify } from "@/lib/slug";

export const categories = [
  {
    title: "Lighting",
    description: "Prompt keywords for shaping light direction, quality, glow, and photographic drama.",
    guide: {
      meaning:
        "Lighting prompt keywords describe where light comes from, how soft or hard it feels, and how strongly it shapes the subject. They help translate photographic and cinematic lighting language into practical AI image instructions.",
      whyItMatters:
        "Light controls mood, depth, realism, and visual hierarchy. A clear lighting cue can make a generic image feel intentional, premium, emotional, or editorial without changing the subject.",
      whenToUse:
        "Use lighting keywords when an image feels flat, when the subject needs stronger focus, or when you want a specific mood such as warm, dramatic, clean, mysterious, or commercial.",
      promptPattern:
        "[subject], [lighting keyword], light from [direction], [shadow quality], [mood], [commercial or photographic style]"
    },
    howToUse: [
      "Pair one primary lighting keyword with a direction, such as side light, backlight, or overhead studio light.",
      "Add shadow language to control intensity: soft shadows, crisp shadows, gentle falloff, or high contrast.",
      "Use lighting with atmosphere keywords when you want visible beams, glow, haze, or cinematic depth.",
      "Avoid stacking too many competing light directions in one prompt; one clear setup usually produces cleaner results."
    ],
    relatedCategories: ["atmosphere", "composition", "commercial-use"]
  },
  {
    title: "Atmosphere",
    description: "Mood-setting language for emotion, haze, weather, ambience, and cinematic tone.",
    guide: {
      meaning:
        "Atmosphere keywords describe the emotional and environmental feeling around a scene. They include haze, fog, mood, softness, glow, weather, and the intangible tone that makes an image feel immersive.",
      whyItMatters:
        "AI images often need more than a subject to feel memorable. Atmosphere gives the model context for emotion, depth, and story, helping images feel less literal and more usable for editorial or campaign work.",
      whenToUse:
        "Use atmosphere keywords when you want a scene to feel calm, mysterious, dreamy, cinematic, serene, nostalgic, or emotionally specific.",
      promptPattern:
        "[subject or scene], [atmosphere keyword], [environment detail], [lighting cue], [color mood], [composition goal]"
    },
    howToUse: [
      "Combine atmosphere with a concrete setting so the mood has something visible to affect.",
      "Use restraint with haze, fog, and glow if the subject still needs to be sharp and commercially usable.",
      "Support mood keywords with color and lighting cues for more consistent results.",
      "Add copy space or clean foreground language when creating backgrounds, banners, or stock imagery."
    ],
    relatedCategories: ["lighting", "color", "style"]
  },
  {
    title: "Composition",
    description: "Framing and visual structure keywords that guide layout, focus, and balance.",
    guide: {
      meaning:
        "Composition keywords guide how visual elements are arranged inside the frame. They influence subject placement, balance, negative space, camera distance, depth, and the viewer's path through the image.",
      whyItMatters:
        "Strong composition makes generated images easier to use in real layouts. It improves readability, directs attention, and creates space for headlines, products, or editorial cropping.",
      whenToUse:
        "Use composition keywords when the image needs a clear focal point, better balance, more usable whitespace, or a specific framing style such as close-up, wide angle, symmetry, or rule of thirds.",
      promptPattern:
        "[subject], [composition keyword], [camera distance], [focal point], [background control], [space for copy if needed]"
    },
    howToUse: [
      "Choose composition keywords before adding decorative style cues so the image structure stays clear.",
      "Use negative space, center composition, or rule of thirds when designing for ads, slides, and website heroes.",
      "Pair camera-distance words with composition terms to avoid ambiguous framing.",
      "Keep the subject count small when you need precise layout control."
    ],
    relatedCategories: ["commercial-use", "lighting", "style"]
  },
  {
    title: "Style",
    description: "Aesthetic directions for design languages, eras, interiors, and visual identity.",
    guide: {
      meaning:
        "Style keywords define the broader visual language of an image, including design movements, eras, interior aesthetics, cultural references, and overall art direction.",
      whyItMatters:
        "A style cue helps AI models make thousands of small visual decisions consistently, from materials and shapes to color choices, setting, wardrobe, and overall polish.",
      whenToUse:
        "Use style keywords when you need a recognizable aesthetic direction, a cohesive campaign look, or a way to make a simple subject feel more distinctive.",
      promptPattern:
        "[subject], [style keyword], [materials or setting], [color palette], [lighting], [commercial use case]"
    },
    howToUse: [
      "Anchor style keywords with specific subjects and materials so the result does not become vague decoration.",
      "Pair style with color and texture cues to make the aesthetic more consistent.",
      "Use one dominant style direction at a time unless you intentionally want a hybrid look.",
      "For stock and commercial work, avoid referencing protected brands, franchises, or living artists."
    ],
    relatedCategories: ["color", "texture-material", "commercial-use"]
  },
  {
    title: "Color",
    description: "Palette keywords for controlling temperature, contrast, softness, and brand feeling.",
    guide: {
      meaning:
        "Color prompt keywords describe palette, temperature, contrast, saturation, and emotional tone. They help control whether an image feels warm, cool, muted, vibrant, neutral, premium, playful, or calm.",
      whyItMatters:
        "Color is one of the fastest ways to shape audience perception. Good palette prompts make images easier to match with brands, campaigns, seasonal themes, and layout systems.",
      whenToUse:
        "Use color keywords when default outputs feel too saturated, when a brand mood matters, or when images need to fit a specific design system.",
      promptPattern:
        "[subject], [color keyword], [supporting palette details], [lighting], [background], [intended brand mood]"
    },
    howToUse: [
      "Use one main palette keyword, then add two or three supporting color words if precision matters.",
      "Balance color with lighting language so the palette does not become flat or unrealistic.",
      "Choose neutral or muted palettes for flexible stock, slide, and website assets.",
      "Use contrast keywords carefully when the subject needs to remain readable."
    ],
    relatedCategories: ["style", "commercial-use", "atmosphere"]
  },
  {
    title: "Texture & Material",
    description: "Surface and material cues for tactile realism, reflection, luxury, and craft.",
    guide: {
      meaning:
        "Texture and material keywords describe how surfaces look and feel, including paper, glass, metal, marble, fabric, grain, reflection, polish, and tactile detail.",
      whyItMatters:
        "Material language improves realism and perceived value. It can make product scenes, interiors, packaging, and backgrounds feel more physical, premium, or handcrafted.",
      whenToUse:
        "Use texture and material keywords when surfaces matter, when a product needs stronger sensory appeal, or when a background should feel tactile instead of plain.",
      promptPattern:
        "[subject], [material keyword], [surface detail], [lighting/reflection cue], [composition], [commercial context]"
    },
    howToUse: [
      "Pair materials with lighting that reveals surface detail, such as side light, soft studio light, or controlled reflections.",
      "Use close-up or depth-of-field composition cues for tactile product and packaging images.",
      "Avoid overloading the scene with too many luxury materials at once.",
      "Name the finish when useful: matte, polished, brushed, translucent, rough, smooth, or handmade."
    ],
    relatedCategories: ["lighting", "style", "commercial-use"]
  },
  {
    title: "Commercial Use",
    description: "Keywords tuned for stock imagery, ads, branding, product visuals, and business assets.",
    guide: {
      meaning:
        "Commercial use keywords are practical prompt directions for images meant to serve marketing, stock, ecommerce, presentations, branding, ads, and business communication.",
      whyItMatters:
        "Commercial prompts need clarity, licensing awareness, flexible composition, and strong usability. These keywords help generate images that feel purposeful rather than merely decorative.",
      whenToUse:
        "Use commercial keywords when the output needs to support a buyer goal, such as selling a product, illustrating a business idea, filling a website hero, or creating stock-ready visuals.",
      promptPattern:
        "[commercial subject], [commercial-use keyword], [clear buyer concept], [composition for layout], [lighting], [clean background]"
    },
    howToUse: [
      "Start with the end use: ad, website header, product listing, slide cover, editorial image, or stock concept.",
      "Add composition guidance for copy space, cropping, and subject priority.",
      "Keep brands, logos, copyrighted characters, and overly specific references out of stock-focused prompts.",
      "Use lighting, color, and material categories to make commercial images feel polished and reusable."
    ],
    relatedCategories: ["composition", "lighting", "color"]
  }
].map((category) => ({
  ...category,
  slug: slugify(category.title)
}));

export type Category = (typeof categories)[number];
