import { slugify } from "@/lib/slug";
import { keywordHero } from "@/content/image-meta";
import type { Keyword } from "@/content/keywords";

type Override = Partial<Keyword>;

function hero(title: string, category: string): NonNullable<Keyword["heroImage"]> {
  const slug = slugify(title);
  const palettes: Record<string, string> = {
    Lighting: "linear-gradient(135deg, #1f2523 0%, #8d6a45 48%, #f3dfb8 100%)",
    Atmosphere: "linear-gradient(135deg, #dfe7e5 0%, #9ca8a3 48%, #5f6967 100%)",
    Composition: "linear-gradient(135deg, #fbfaf7 0%, #e5e0d8 48%, #89968f 100%)",
    Style: "linear-gradient(135deg, #ece7df 0%, #a9b6ad 48%, #4d5652 100%)",
    Color: "linear-gradient(135deg, #d8a365 0%, #9aa982 48%, #6e879f 100%)",
    "Texture & Material": "linear-gradient(135deg, #f1eee8 0%, #b8b0a3 48%, #6f6b63 100%)",
    "Commercial Use": "linear-gradient(135deg, #edf1ee 0%, #c9d2cb 48%, #6f8375 100%)"
  };

  return keywordHero(slug, palettes[category] ?? palettes.Composition);
}

function article(input: {
  title: string;
  category: string;
  definition: string;
  visualCharacteristics: string[];
  bestUseCases: string[];
  promptExamples: string[];
  relatedKeywords: string[];
  difficulty?: Keyword["difficulty"];
  commercialApplications: string[];
  stock: string;
  faq: [string, string][];
}): Override {
  return {
    published: true,
    seoTitle: `${input.title} AI Prompt Keyword Guide`,
    metaDescription: `Learn how to use ${input.title} in AI image prompts with examples, use cases, related keywords, and stock image guidance.`,
    heroImage: hero(input.title, input.category),
    definition: input.definition,
    visualCharacteristics: input.visualCharacteristics,
    overview: input.definition,
    whatItDoes: input.visualCharacteristics.join(" "),
    bestUseCases: input.bestUseCases,
    relatedKeywords: input.relatedKeywords,
    examplePrompt: input.promptExamples[0],
    promptExamples: input.promptExamples,
    commercialApplications: input.commercialApplications,
    adobeStockPotential: input.stock,
    difficulty: input.difficulty ?? "Beginner",
    faqs: input.faq.map(([question, answer]) => ({ question, answer }))
  };
}

export const remainingKeywordOverrides: Record<string, Override> = {
  "Hard Light": article({
    title: "Hard Light",
    category: "Lighting",
    definition:
      "Hard Light is a direct, intense lighting style that creates crisp shadows, strong edges, and high visual contrast. In AI prompts, it is useful when you want a scene to feel bold, graphic, editorial, or architectural rather than soft and gentle.",
    visualCharacteristics: [
      "Sharp shadow edges and clearly defined highlights.",
      "Strong contrast that emphasizes form, texture, geometry, and surface detail.",
      "A dramatic commercial look that works well with fashion, architecture, sports, and product imagery."
    ],
    bestUseCases: [
      "Fashion editorials, sports campaigns, and portraits where strong shadow shapes add attitude.",
      "Architecture, interiors, and product images where edges, lines, and form need emphasis.",
      "Poster-style visuals, monochrome compositions, and bold advertising concepts."
    ],
    promptExamples: [
      "A brutalist concrete staircase, hard light, sharp geometric shadows, monochrome architectural photography, high contrast editorial style.",
      "A fashion portrait against a white wall, hard light, crisp shadow, minimal styling, confident editorial mood.",
      "A luxury sunglasses product photo, hard light, clean shadow shape, reflective surface, premium advertising composition."
    ],
    relatedKeywords: ["Low Key Lighting", "High Contrast Colors", "Cinematic Lighting"],
    difficulty: "Intermediate",
    commercialApplications: ["Fashion ads", "Architecture portfolios", "Bold product campaigns"],
    stock:
      "Hard Light can perform well on Adobe Stock when the image has a clear concept and strong composition. It is especially useful for architecture, fashion, sports, and premium product visuals. Keep the subject readable because hard contrast can hide details if the prompt is too extreme.",
    faq: [
      ["Is hard light bad for portraits?", "Not necessarily. It can be less flattering than soft light, but it creates bold editorial portraits with strong character."],
      ["How do I control hard light?", "Use phrases like crisp shadows, controlled contrast, visible detail, and clean background."]
    ]
  }),
  "God Rays": article({
    title: "God Rays",
    category: "Lighting",
    definition:
      "God Rays are visible beams of sunlight or strong light streaming through clouds, trees, windows, fog, or dust. In AI prompts, they create a sense of awe, spirituality, scale, and atmosphere.",
    visualCharacteristics: [
      "Radiating beams of light with visible direction and depth.",
      "Works best when haze, mist, dust, clouds, or forest canopy make the light visible.",
      "Often creates inspirational, mystical, cinematic, or nature-focused imagery."
    ],
    bestUseCases: [
      "Forests, mountains, cathedrals, temples, fantasy scenes, and dramatic landscapes.",
      "Inspirational posters, book covers, spiritual visuals, and travel imagery.",
      "Backgrounds where light direction needs to guide the viewer toward a focal point."
    ],
    promptExamples: [
      "A misty forest path at sunrise, god rays through tall trees, atmospheric haze, cinematic nature photography, peaceful mood.",
      "An ancient cathedral interior, god rays through stained glass, dust particles, quiet spiritual atmosphere.",
      "A mountain valley after rain, dramatic clouds, god rays, wide angle travel photography, epic scale."
    ],
    relatedKeywords: ["Volumetric Lighting", "Mystical", "Atmospheric Haze"],
    difficulty: "Intermediate",
    commercialApplications: ["Travel posters", "Spiritual imagery", "Fantasy covers"],
    stock:
      "God Rays have strong stock potential for inspirational, spiritual, nature, travel, and fantasy themes. Avoid making the rays too artificial; buyers usually prefer believable atmosphere and a clear subject or usable copy space.",
    faq: [
      ["Are god rays the same as volumetric lighting?", "They are related. God Rays are a specific visible beam effect, while volumetric lighting is the broader technique of seeing light through particles."],
      ["What should I pair with god rays?", "Atmospheric haze, mist, forest canopy, clouds, cathedral windows, or sunrise lighting."]
    ]
  }),
  "Neon Glow": article({
    title: "Neon Glow",
    category: "Lighting",
    definition:
      "Neon Glow is a lighting keyword for bright colored illumination, usually inspired by neon signs, nightlife, cyberpunk cities, gaming visuals, and futuristic product scenes.",
    visualCharacteristics: [
      "Saturated colored light in pink, cyan, purple, blue, green, or orange.",
      "Visible glow around signs, edges, reflective surfaces, glass, rain, or glossy materials.",
      "A modern, energetic mood connected to nightlife, technology, music, and entertainment."
    ],
    bestUseCases: [
      "Cyberpunk cities, gaming art, music posters, nightlife campaigns, and tech visuals.",
      "Product shots for electronics, headphones, sneakers, beverages, and digital brands.",
      "Social media ads, event graphics, and futuristic brand assets."
    ],
    promptExamples: [
      "A pair of transparent headphones on glossy acrylic, neon glow, cyan and magenta lighting, futuristic product photography.",
      "A rainy cyberpunk street market, neon glow signs, wet reflections, cinematic night atmosphere.",
      "A gaming laptop hero image, neon glow, dark studio background, vibrant blue and purple highlights."
    ],
    relatedKeywords: ["Cyberpunk", "Complementary Colors", "Rim Light"],
    difficulty: "Beginner",
    commercialApplications: ["Gaming campaigns", "Music visuals", "Technology launches"],
    stock:
      "Neon Glow is useful for Adobe Stock when aimed at technology, entertainment, nightlife, gaming, and youth-oriented campaigns. Keep compositions clean; too many neon elements can make the image hard to use commercially.",
    faq: [
      ["How do I make neon glow look realistic?", "Use reflective surfaces, dark backgrounds, rain, glass, or visible light spill."],
      ["Can neon glow work for products?", "Yes. It is effective for electronics, gaming accessories, sneakers, beverages, and music-related products."]
    ]
  }),
  Dreamy: article({
    title: "Dreamy",
    category: "Atmosphere",
    definition:
      "Dreamy is an atmosphere keyword that creates soft, gentle, slightly surreal images with a light emotional tone. It often suggests glow, softness, delicate colors, and a calm imaginative mood.",
    visualCharacteristics: [
      "Soft focus, gentle light, airy contrast, and subtle glow.",
      "Often uses pastel colors, soft light, haze, flowing fabrics, or delicate backgrounds.",
      "A romantic, peaceful, whimsical, or beauty-oriented mood."
    ],
    bestUseCases: [
      "Beauty, wellness, lifestyle, bridal, fashion, and soft interior imagery.",
      "Concept art, book covers, social visuals, and poetic editorial images.",
      "Stock images about imagination, rest, tenderness, memory, and calm living."
    ],
    promptExamples: [
      "A quiet bedroom with linen curtains, dreamy atmosphere, soft light, pastel colors, serene lifestyle photography.",
      "A beauty portrait with dreamy glow, soft focus, pale background, gentle expression, editorial styling.",
      "A flower field at sunrise, dreamy haze, warm backlight, delicate pastel palette."
    ],
    relatedKeywords: ["Soft Light", "Pastel Colors", "Ethereal"],
    commercialApplications: ["Beauty campaigns", "Wellness visuals", "Lifestyle content"],
    stock:
      "Dreamy images can work well for wellness, beauty, lifestyle, romance, and inspirational content. Make sure the subject remains clear enough for commercial buyers and avoid making the image overly blurred.",
    faq: [
      ["Is dreamy the same as ethereal?", "They overlap, but dreamy is softer and more emotional, while ethereal feels more otherworldly and luminous."],
      ["How do I avoid a blurry dreamy image?", "Add phrases like clear subject, subtle glow, realistic detail, and soft background."]
    ]
  }),
  Ethereal: article({
    title: "Ethereal",
    category: "Atmosphere",
    definition:
      "Ethereal describes imagery that feels delicate, luminous, airy, and almost otherworldly. In AI prompts, it can make a subject feel graceful, spiritual, magical, or weightless.",
    visualCharacteristics: [
      "Light, translucent, glowing, or floating visual qualities.",
      "Soft whites, pale colors, mist, fabric, backlight, and luminous atmosphere.",
      "A refined fantasy, bridal, spiritual, or poetic mood."
    ],
    bestUseCases: [
      "Fantasy portraits, dancers, bridal visuals, spiritual landscapes, and elegant fashion.",
      "Book covers, wellness campaigns, event branding, and artistic editorial images.",
      "Images about grace, lightness, transformation, hope, and imagination."
    ],
    promptExamples: [
      "A dancer in flowing fabric, ethereal atmosphere, soft backlight, pale background, graceful motion, editorial photography.",
      "A mountain lake at dawn, ethereal mist, god rays, soft pastel sky, peaceful fantasy landscape.",
      "A bridal portrait with ethereal veil, luminous skin, soft light, elegant minimal background."
    ],
    relatedKeywords: ["God Rays", "Dreamy", "Mystical"],
    difficulty: "Intermediate",
    commercialApplications: ["Fashion editorials", "Wellness branding", "Book covers"],
    stock:
      "Ethereal visuals are useful for fashion, wellness, spirituality, fantasy, and event imagery. For stock use, keep the concept readable and avoid excessive blur or vague fantasy elements.",
    faq: [
      ["What colors work with ethereal prompts?", "White, ivory, pale blue, soft lavender, pastel pink, and muted gold often work well."],
      ["What lighting supports ethereal images?", "Soft light, backlight, god rays, and subtle volumetric haze are strong pairings."]
    ]
  }),
  Moody: article({
    title: "Moody",
    category: "Atmosphere",
    definition:
      "Moody is an atmosphere keyword for images with emotional depth, darker tones, restrained colors, and a more cinematic or introspective feeling.",
    visualCharacteristics: [
      "Muted colors, shadow detail, controlled contrast, and quiet emotional tone.",
      "Often uses window light, rain, dark interiors, soft haze, or low key lighting.",
      "Suggests introspection, luxury, mystery, calm, or editorial seriousness."
    ],
    bestUseCases: [
      "Editorial portraits, interiors, luxury products, coffee shops, rainy streets, and book covers.",
      "Premium hospitality, fashion, music visuals, and dramatic lifestyle imagery.",
      "Stock concepts about focus, solitude, creativity, evening routines, and thoughtful work."
    ],
    promptExamples: [
      "A leather armchair beside a rain-streaked window, moody atmosphere, muted colors, cinematic lighting.",
      "A moody portrait in a quiet studio, soft side light, dark background, introspective expression.",
      "A premium coffee shop interior, moody lighting, warm shadows, editorial hospitality photography."
    ],
    relatedKeywords: ["Moody Lighting", "Low Key Lighting", "Muted Colors"],
    commercialApplications: ["Luxury branding", "Book covers", "Premium hospitality"],
    stock:
      "Moody images can perform well for editorial, premium, and atmospheric commercial uses. Keep subjects visible and compositions clean so the mood does not reduce practical usability.",
    faq: [
      ["Is moody always dark?", "No. Moody can be dim or muted, but the key is emotional atmosphere rather than pure darkness."],
      ["How can I keep moody images commercial?", "Use clear subjects, readable details, and controlled shadows."]
    ]
  }),
  Serene: article({
    title: "Serene",
    category: "Atmosphere",
    definition:
      "Serene describes a peaceful, calm, balanced visual mood. In AI prompts, it helps create images that feel restful, spacious, quiet, and emotionally stable.",
    visualCharacteristics: [
      "Soft light, uncluttered composition, gentle colors, and low visual tension.",
      "Often includes nature, water, minimal interiors, wellness spaces, or open sky.",
      "Creates a calm commercial tone suitable for wellness, healthcare, hospitality, and lifestyle."
    ],
    bestUseCases: [
      "Meditation, spa, wellness, healthcare, travel retreats, and nature imagery.",
      "Minimal interiors, calm workspaces, hospitality visuals, and lifestyle stock.",
      "Concepts about peace, balance, mental health, rest, clarity, and recovery."
    ],
    promptExamples: [
      "A quiet lakeside meditation deck, serene atmosphere, cool tones, soft morning light, negative space.",
      "A serene spa interior with natural stone, soft towels, warm neutral palette, calm commercial photography.",
      "A person reading by a window, serene mood, soft light, uncluttered room, peaceful lifestyle image."
    ],
    relatedKeywords: ["Soft Light", "Neutral Colors", "Minimalist"],
    commercialApplications: ["Wellness campaigns", "Healthcare visuals", "Hospitality branding"],
    stock:
      "Serene imagery has high stock value for wellness, healthcare, hospitality, therapy, and lifestyle content. Buyers often need calm visuals with copy space and a clear emotional message.",
    faq: [
      ["What colors make an image serene?", "Cool tones, neutral colors, earth tones, and soft pastels often create serenity."],
      ["What should I avoid in serene prompts?", "Avoid clutter, harsh contrast, intense expressions, and overly busy backgrounds."]
    ]
  }),
  Melancholic: article({
    title: "Melancholic",
    category: "Atmosphere",
    definition:
      "Melancholic is an atmosphere keyword for quiet sadness, reflection, nostalgia, and emotional stillness. It creates more poetic images than simply dark or gloomy prompts.",
    visualCharacteristics: [
      "Muted colors, rain, fog, soft shadows, empty space, and subdued expressions.",
      "A reflective tone that may feel nostalgic, lonely, cinematic, or literary.",
      "Works well with urban scenes, portraits, windows, autumn, and evening light."
    ],
    bestUseCases: [
      "Book covers, music artwork, editorial portraits, rainy city scenes, and narrative visuals.",
      "Images about memory, solitude, transition, waiting, loss, or introspection.",
      "Atmospheric stock for articles about mental health, reflection, creativity, or personal stories."
    ],
    promptExamples: [
      "A solitary figure at a bus stop in light rain, melancholic mood, muted colors, foggy city background.",
      "A quiet bedroom after sunset, melancholic atmosphere, soft window light, empty chair, cinematic composition.",
      "A person looking through a train window, melancholic mood, rain streaks, shallow depth of field."
    ],
    relatedKeywords: ["Foggy", "Muted Colors", "Moody"],
    difficulty: "Intermediate",
    commercialApplications: ["Book covers", "Music visuals", "Editorial stories"],
    stock:
      "Melancholic images are more niche but useful for editorial, publishing, music, and mental health concepts. Keep imagery respectful and avoid overly literal or exploitative sadness.",
    faq: [
      ["Is melancholic the same as moody?", "Melancholic is more specifically reflective or sad, while moody can cover many emotional tones."],
      ["How do I make melancholic images subtle?", "Use muted colors, quiet gestures, rain, windows, and negative space instead of exaggerated expressions."]
    ]
  }),
  Mystical: article({
    title: "Mystical",
    category: "Atmosphere",
    definition:
      "Mystical is an atmosphere keyword for images that feel magical, symbolic, mysterious, spiritual, or connected to hidden meaning.",
    visualCharacteristics: [
      "Haze, unusual light, glowing accents, ancient settings, symbols, forests, or night skies.",
      "A sense of mystery, ritual, discovery, or enchanted atmosphere.",
      "Often pairs with god rays, volumetric lighting, ethereal color, and fantasy environments."
    ],
    bestUseCases: [
      "Fantasy art, spiritual landscapes, ancient ruins, forests, book covers, and event posters.",
      "Wellness or meditation brands that want a subtle magical feeling.",
      "Concepts about mystery, transformation, ritual, discovery, and imagination."
    ],
    promptExamples: [
      "A stone circle at dawn, mystical atmosphere, atmospheric haze, god rays, ancient landscape.",
      "A forest altar with candles, mystical mood, soft blue light, subtle fog, fantasy editorial style.",
      "A mountain temple under stars, mystical lighting, ethereal haze, cinematic wide angle."
    ],
    relatedKeywords: ["Ethereal", "God Rays", "Atmospheric Haze"],
    difficulty: "Intermediate",
    commercialApplications: ["Fantasy covers", "Wellness branding", "Event posters"],
    stock:
      "Mystical imagery has stock potential for fantasy, spirituality, wellness, publishing, and entertainment. Avoid copyrighted symbols or overly specific religious imagery unless intentionally generic and respectful.",
    faq: [
      ["How do I keep mystical images from looking cheesy?", "Use subtle light, natural textures, restrained symbols, and a clear environment."],
      ["What lighting works for mystical prompts?", "God rays, volumetric lighting, moonlight, candlelight, and atmospheric haze work well."]
    ]
  }),
  "Atmospheric Haze": article({
    title: "Atmospheric Haze",
    category: "Atmosphere",
    definition:
      "Atmospheric Haze is a depth keyword that adds subtle mist, dust, fog, or air particles between the viewer and distant objects.",
    visualCharacteristics: [
      "Softened distant details, layered depth, reduced background contrast, and visible air.",
      "Works with landscapes, interiors, city streets, backlight, and cinematic lighting.",
      "Creates scale, distance, realism, and mood without fully obscuring the scene."
    ],
    bestUseCases: [
      "Landscapes, travel roads, mountain scenes, city mornings, interiors, and cinematic backgrounds.",
      "Images that need spatial depth or softer background separation.",
      "Stock concepts about journey, calm, mystery, nature, scale, and atmosphere."
    ],
    promptExamples: [
      "A mountain road at sunrise, atmospheric haze, backlight, layered hills, cinematic landscape photography.",
      "A modern hotel lobby with atmospheric haze, soft window light, wide angle architectural photo.",
      "A city skyline at dawn, atmospheric haze, muted colors, realistic travel stock image."
    ],
    relatedKeywords: ["Volumetric Lighting", "Backlight", "Foggy"],
    commercialApplications: ["Travel campaigns", "Automotive visuals", "Background plates"],
    stock:
      "Atmospheric Haze is valuable for stock backgrounds, travel, automotive, architecture, and nature imagery. Keep the haze subtle enough that the subject remains readable.",
    faq: [
      ["Is atmospheric haze the same as fog?", "Fog is stronger and more weather-like; atmospheric haze is often subtler and used for depth."],
      ["What keywords pair well with atmospheric haze?", "Backlight, golden hour, volumetric lighting, wide angle, and cinematic landscape."]
    ]
  }),
  Foggy: article({
    title: "Foggy",
    category: "Atmosphere",
    definition:
      "Foggy is a weather and atmosphere keyword that fills a scene with visible fog, softening contrast and hiding distant details.",
    visualCharacteristics: [
      "Low contrast, soft edges, limited visibility, and quiet tonal transitions.",
      "Often creates mystery, calm, loneliness, morning atmosphere, or cinematic suspense.",
      "Works well in forests, streets, mountains, lakes, and old architecture."
    ],
    bestUseCases: [
      "Mystery scenes, book covers, travel images, forests, urban mornings, and cinematic roads.",
      "Stock visuals about uncertainty, calm, weather, solitude, and quiet landscapes.",
      "Backgrounds where soft atmosphere and copy space are useful."
    ],
    promptExamples: [
      "A narrow old street at dawn, foggy atmosphere, warm window lights, melancholic mood.",
      "A foggy pine forest path, soft gray tones, subtle god rays, quiet nature photography.",
      "A lake cabin in foggy morning weather, muted colors, serene travel stock image."
    ],
    relatedKeywords: ["Atmospheric Haze", "Melancholic", "Mystical"],
    commercialApplications: ["Book covers", "Travel images", "Editorial backgrounds"],
    stock:
      "Foggy images are useful for mystery, travel, editorial, weather, and nature themes. For commercial use, keep the composition simple and ensure there is enough subject clarity.",
    faq: [
      ["How do I make foggy images readable?", "Add a clear foreground subject, soft contrast, and visible focal point."],
      ["What mood does fog create?", "Fog can create mystery, calm, solitude, nostalgia, or suspense."]
    ]
  }),
  "Negative Space": article({
    title: "Negative Space",
    category: "Composition",
    definition:
      "Negative Space is the empty or quiet area around a subject. In AI prompts, it creates cleaner compositions and gives designers room for text, logos, or layout elements.",
    visualCharacteristics: [
      "Large areas of simple background around a clear focal subject.",
      "A calm, premium, editorial look with strong readability.",
      "Useful for ads, banners, presentations, covers, and social templates."
    ],
    bestUseCases: [
      "Website heroes, ad layouts, social graphics, slide covers, and product images.",
      "Minimalist still lifes, portraits, business visuals, and commercial backgrounds.",
      "Stock images where copy space is a key selling point."
    ],
    promptExamples: [
      "A single ceramic cup on a large clean table, negative space, soft light, minimalist composition.",
      "A business laptop on the lower right of a neutral desk, negative space for text, clean stock photo.",
      "A skincare bottle with generous negative space, soft shadows, premium ecommerce styling."
    ],
    relatedKeywords: ["Minimalist", "Business Presentation Background", "Rule of Thirds"],
    commercialApplications: ["Ad layouts", "Slide covers", "Website banners"],
    stock:
      "Negative Space has very high stock potential because buyers often need copy space. Keep backgrounds clean and avoid distracting details in empty areas.",
    faq: [
      ["Is negative space just blank space?", "It is intentional quiet space that supports the subject and composition."],
      ["Why is negative space useful for stock?", "It allows designers to add text, buttons, logos, or headlines."]
    ]
  }),
  Symmetry: article({
    title: "Symmetry",
    category: "Composition",
    definition:
      "Symmetry is a composition keyword where visual elements mirror or balance across a central axis. It creates order, stability, and a polished design feeling.",
    visualCharacteristics: [
      "Balanced left and right sides, centered subjects, and orderly visual rhythm.",
      "Feels formal, stable, premium, architectural, or ceremonial.",
      "Works well with interiors, architecture, products, luxury visuals, and center composition."
    ],
    bestUseCases: [
      "Architecture, hotel lobbies, museums, luxury interiors, and product arrangements.",
      "Brand images that need stability, refinement, trust, or formal elegance.",
      "Stock images about balance, order, structure, design, and premium service."
    ],
    promptExamples: [
      "A symmetrical hotel lobby interior, marble texture, warm tones, luxury branding, wide angle.",
      "A centered perfume bottle with symmetrical shadows, studio lighting, clean premium background.",
      "A symmetrical modern staircase, hard light, architectural photography, refined composition."
    ],
    relatedKeywords: ["Center Composition", "Wide Angle", "Minimalist"],
    commercialApplications: ["Hospitality marketing", "Architecture portfolios", "Luxury branding"],
    stock:
      "Symmetry works well for architecture, interiors, products, and business visuals. Buyers often like symmetrical images because they feel composed and professional.",
    faq: [
      ["Is symmetry good for all images?", "No. It is strongest when order and stability are part of the message."],
      ["How do I improve symmetrical AI images?", "Use centered subject, balanced composition, straight lines, and architectural photography."]
    ]
  }),
  "Leading Lines": article({
    title: "Leading Lines",
    category: "Composition",
    definition:
      "Leading Lines are visual lines that guide the viewer's eye toward a subject or deeper into the scene. In AI prompts, they improve depth, direction, and composition.",
    visualCharacteristics: [
      "Roads, rails, hallways, shadows, tables, paths, or architecture that point toward a focal area.",
      "Creates movement, depth, and visual flow.",
      "Works especially well with wide angle, architecture, travel, and transportation."
    ],
    bestUseCases: [
      "Roads, train platforms, office corridors, city streets, architecture, and product perspective shots.",
      "Travel, business, transport, real estate, and cinematic scene prompts.",
      "Stock concepts about journey, progress, direction, focus, and opportunity."
    ],
    promptExamples: [
      "A modern train platform with leading lines, wide angle, cinematic lighting, clean commercial photo.",
      "A road through desert hills, leading lines toward the horizon, golden hour travel photography.",
      "A sleek office hallway, leading lines, cool color palette, professional architecture stock image."
    ],
    relatedKeywords: ["Wide Angle", "Rule of Thirds", "Depth of Field"],
    commercialApplications: ["Travel ads", "Architecture visuals", "Transport campaigns"],
    stock:
      "Leading Lines can make stock images feel professional and dynamic. It is especially strong for business, travel, architecture, and journey-related concepts.",
    faq: [
      ["What objects create leading lines?", "Roads, paths, rails, buildings, shadows, tables, fences, and hallways."],
      ["Do leading lines need to point to a person?", "No. They can lead to a product, horizon, building, doorway, or abstract focal point."]
    ]
  }),
  "Rule of Thirds": article({
    title: "Rule of Thirds",
    category: "Composition",
    definition:
      "Rule of Thirds is a composition method that places the subject along imaginary thirds of the frame rather than exactly in the center.",
    visualCharacteristics: [
      "Off-center subject placement with balanced empty space.",
      "A natural editorial look often used in photography and film.",
      "Works well for portraits, landscapes, products, lifestyle, and business images."
    ],
    bestUseCases: [
      "Portraits, lifestyle scenes, travel images, product photos, and editorial layouts.",
      "Images where designers need room for text on one side.",
      "Stock concepts about work, lifestyle, travel, wellness, and storytelling."
    ],
    promptExamples: [
      "A freelancer working by a window, rule of thirds composition, soft light, modern workspace.",
      "A hiker overlooking mountains, rule of thirds, golden hour, negative space in sky.",
      "A coffee product photo placed on the left third, warm tones, clean commercial layout."
    ],
    relatedKeywords: ["Negative Space", "Leading Lines", "Center Composition"],
    commercialApplications: ["Lifestyle ads", "Editorial content", "Business imagery"],
    stock:
      "Rule of Thirds is excellent for commercial stock because it creates natural-looking images with room for copy. It is broadly useful across many categories.",
    faq: [
      ["Is rule of thirds better than center composition?", "It depends. Rule of thirds feels natural and editorial; center composition feels direct and formal."],
      ["How do I prompt for copy space?", "Combine rule of thirds with negative space or room for text."]
    ]
  }),
  "Center Composition": article({
    title: "Center Composition",
    category: "Composition",
    definition:
      "Center Composition places the main subject in the middle of the frame. It creates clarity, focus, and a direct visual message.",
    visualCharacteristics: [
      "Subject centered horizontally or vertically with balanced surrounding space.",
      "Feels clear, iconic, formal, simple, or product-focused.",
      "Works well with symmetry, studio lighting, minimal backgrounds, and ecommerce images."
    ],
    bestUseCases: [
      "Product shots, portraits, icons, catalog images, posters, and brand hero assets.",
      "Commercial images where the subject should be instantly understood.",
      "Stock concepts about clarity, quality, identity, focus, and premium presentation."
    ],
    promptExamples: [
      "A single designer chair, center composition, studio lighting, muted colors, clean background.",
      "A centered skincare bottle on marble texture, soft studio lighting, luxury branding.",
      "A professional portrait with center composition, neutral background, soft light, confident expression."
    ],
    relatedKeywords: ["Symmetry", "Studio Lighting", "Minimalist"],
    commercialApplications: ["Catalog imagery", "Hero assets", "Product campaigns"],
    stock:
      "Center Composition is strong for products, portraits, and isolated objects. It is useful when buyers need a clear focal subject and simple layout.",
    faq: [
      ["When should I use center composition?", "Use it when clarity and subject focus matter more than natural editorial movement."],
      ["Can centered images still feel dynamic?", "Yes. Add light direction, texture, shadow, or a strong background shape."]
    ]
  }),
  "Wide Angle": article({
    title: "Wide Angle",
    category: "Composition",
    definition:
      "Wide Angle is a lens and composition keyword that creates a broad field of view. It helps AI images show space, scale, and environmental context.",
    visualCharacteristics: [
      "Expansive view with more foreground, background, and side context.",
      "Can exaggerate depth and make rooms, roads, and architecture feel larger.",
      "Works well with interiors, landscapes, architecture, travel, and futuristic spaces."
    ],
    bestUseCases: [
      "Real estate, architecture, hotel interiors, travel landscapes, city scenes, and large environments.",
      "Images where scale, immersion, or spatial storytelling matters.",
      "Stock concepts about opportunity, journey, innovation, freedom, and exploration."
    ],
    promptExamples: [
      "A futuristic airport terminal, wide angle, leading lines, cool tones, clean architectural photo.",
      "A wide angle view of a Scandinavian living room, soft light, natural materials, real estate photography.",
      "A mountain road at sunrise, wide angle, atmospheric haze, travel stock image."
    ],
    relatedKeywords: ["Leading Lines", "Atmospheric Haze", "Symmetry"],
    commercialApplications: ["Real estate", "Travel campaigns", "Architecture marketing"],
    stock:
      "Wide Angle has high stock potential for interiors, architecture, travel, and real estate. Avoid extreme distortion unless the style calls for it.",
    faq: [
      ["Does wide angle distort images?", "It can. Add realistic perspective or architectural photography if you want controlled distortion."],
      ["What subjects work best with wide angle?", "Rooms, roads, landscapes, buildings, vehicles, and large public spaces."]
    ]
  }),
  "Close Up": article({
    title: "Close Up",
    category: "Composition",
    definition:
      "Close Up is a framing keyword that brings the camera near the subject. It emphasizes detail, texture, expression, material, or product features.",
    visualCharacteristics: [
      "Tight framing with strong subject detail and reduced background context.",
      "Often uses shallow depth of field, macro texture, or tactile surface emphasis.",
      "Works well with products, food, beauty, craft, materials, and portraits."
    ],
    bestUseCases: [
      "Product details, skincare, food photography, jewelry, paper texture, packaging, and craft objects.",
      "Portrait details, hands, materials, ingredients, and premium surface finishes.",
      "Stock concepts about quality, care, detail, craftsmanship, flavor, and luxury."
    ],
    promptExamples: [
      "Close up of a handmade paper invitation, paper texture, soft light, luxury branding.",
      "A close up of fresh coffee beans, warm tones, shallow depth of field, food stock photography.",
      "A close up of a glass perfume bottle, studio lighting, reflective surface, premium detail."
    ],
    relatedKeywords: ["Depth of Field", "Paper Texture", "Product Photography"],
    commercialApplications: ["Ecommerce details", "Packaging visuals", "Beauty campaigns"],
    stock:
      "Close Up images are strong for stock when they show useful details clearly. They work especially well for food, beauty, craft, materials, and product marketing.",
    faq: [
      ["Is close up the same as macro?", "Macro is an extreme close view of very small details; close up is broader and more flexible."],
      ["How do I make close ups commercial?", "Use clear texture, controlled light, clean composition, and visible product detail."]
    ]
  }),
  "Depth of Field": article({
    title: "Depth of Field",
    category: "Composition",
    definition:
      "Depth of Field describes how much of an image appears sharp versus blurred. In AI prompts, it often means a sharp subject with a softer foreground or background.",
    visualCharacteristics: [
      "Clear focal subject with blurred background or foreground separation.",
      "A photographic look that adds realism, depth, and subject priority.",
      "Common in portraits, products, food, lifestyle, and editorial imagery."
    ],
    bestUseCases: [
      "Portraits, product photography, food, workspaces, lifestyle scenes, and nature details.",
      "Images where the subject needs to stand out from a busy environment.",
      "Stock concepts about focus, quality, attention, professionalism, and detail."
    ],
    promptExamples: [
      "A cup of coffee beside a laptop, depth of field, soft light, warm tones, modern office.",
      "A skincare bottle in focus with blurred bathroom background, shallow depth of field, clean commercial photo.",
      "A portrait with sharp eyes, soft background blur, natural window light, editorial photography."
    ],
    relatedKeywords: ["Close Up", "Product Photography", "Cinematic Lighting"],
    commercialApplications: ["Business stock", "Food imagery", "Product hero shots"],
    stock:
      "Depth of Field is very useful for commercial stock because it creates professional focus and clear subject hierarchy. Keep the subject sharp and avoid blur that hides key details.",
    faq: [
      ["What is shallow depth of field?", "It means only a narrow area is sharp while the background or foreground is blurred."],
      ["Why use depth of field in prompts?", "It helps the subject stand out and makes images feel more photographic."]
    ]
  }),
  Brutalist: article({
    title: "Brutalist",
    category: "Style",
    definition:
      "Brutalist is a style keyword inspired by raw concrete, strong geometry, massive forms, and honest materials. In AI prompts, it creates bold, architectural, and visually heavy imagery.",
    visualCharacteristics: [
      "Concrete, blocky geometry, exposed structure, hard light, and strong shadows.",
      "A serious, raw, monumental, or design-forward mood.",
      "Works well with monochrome, hard light, architecture, fashion, and editorial branding."
    ],
    bestUseCases: [
      "Architecture, cultural posters, fashion editorials, museums, galleries, and urban design.",
      "Brand visuals that need strength, structure, seriousness, or countercultural edge.",
      "Stock concepts about power, permanence, construction, design, and urban identity."
    ],
    promptExamples: [
      "A brutalist museum exterior, hard light, high contrast shadows, monochrome architectural photo.",
      "A fashion model in a brutalist concrete courtyard, editorial styling, sharp geometry.",
      "A brutalist office lobby with raw concrete walls, wide angle, muted colors, architectural photography."
    ],
    relatedKeywords: ["Hard Light", "Monochromatic Colors", "High Contrast Colors"],
    difficulty: "Intermediate",
    commercialApplications: ["Architecture marketing", "Fashion campaigns", "Cultural posters"],
    stock:
      "Brutalist imagery is niche but valuable for architecture, fashion, design, and cultural content. Keep compositions clean and avoid making concrete scenes feel too empty unless background use is intended.",
    faq: [
      ["Is brutalist only architecture?", "It started with architecture but can influence graphics, fashion, interiors, and product styling."],
      ["What lighting suits brutalist prompts?", "Hard light, low key lighting, and monochrome palettes often work well."]
    ]
  }),
  Cyberpunk: article({
    title: "Cyberpunk",
    category: "Style",
    definition:
      "Cyberpunk is a futuristic urban style combining advanced technology, neon lighting, dense cities, rain, signage, and a darker sci-fi mood.",
    visualCharacteristics: [
      "Neon glow, wet streets, holographic signs, dense city layers, and night atmosphere.",
      "Usually uses vibrant blues, magentas, purples, greens, and deep shadows.",
      "Suggests technology, nightlife, rebellion, gaming, and future urban culture."
    ],
    bestUseCases: [
      "Gaming visuals, music covers, technology campaigns, posters, and sci-fi concept art.",
      "Futuristic cities, digital fashion, gadgets, vehicles, and nightlife scenes.",
      "Stock concepts about AI, virtual reality, future cities, data, and entertainment."
    ],
    promptExamples: [
      "A cyberpunk street market at night, neon glow, rain reflections, futuristic signage.",
      "A cyberpunk portrait with holographic glasses, magenta and cyan rim light, dark city background.",
      "A futuristic tech product in a cyberpunk studio, neon glow, reflective glass surface."
    ],
    relatedKeywords: ["Neon Glow", "Futuristic", "Vibrant Colors"],
    commercialApplications: ["Gaming launches", "Music covers", "Tech event posters"],
    stock:
      "Cyberpunk has strong demand for tech, gaming, music, and entertainment visuals. Avoid copyrighted characters, recognizable franchises, and cluttered text that limits commercial use.",
    faq: [
      ["What colors define cyberpunk?", "Cyan, magenta, purple, neon green, deep blue, and black are common."],
      ["How do I make cyberpunk images usable for stock?", "Use generic futuristic subjects, clean composition, and avoid branded signs or copyrighted references."]
    ]
  }),
  Japandi: article({
    title: "Japandi",
    category: "Style",
    definition:
      "Japandi is a design style blending Japanese restraint with Scandinavian warmth. In AI prompts, it creates calm, natural, minimal interiors with refined materials.",
    visualCharacteristics: [
      "Low furniture, pale wood, linen, ceramics, natural fibers, and uncluttered rooms.",
      "Earth tones, neutral colors, soft light, and balanced negative space.",
      "A peaceful, warm, crafted, and functional interior design mood."
    ],
    bestUseCases: [
      "Interior design, furniture catalogs, wellness spaces, hospitality, and home decor visuals.",
      "Lifestyle stock about calm living, intentional design, simplicity, and natural materials.",
      "Brand imagery for premium home goods, ceramics, textiles, and sustainable products."
    ],
    promptExamples: [
      "A Japandi living room with low wooden furniture, earth tones, soft light, serene atmosphere.",
      "A Japandi bedroom with linen bedding, paper lamp, neutral colors, minimal composition.",
      "A Japandi tea corner with ceramic cups, pale wood table, soft window light."
    ],
    relatedKeywords: ["Scandinavian", "Organic Modern", "Earth Tone Colors"],
    commercialApplications: ["Interior marketing", "Furniture catalogs", "Hospitality branding"],
    stock:
      "Japandi imagery has high stock value for interiors, furniture, decor, wellness, and lifestyle. Keep spaces believable and avoid over-staging every corner.",
    faq: [
      ["What is the difference between Japandi and Scandinavian?", "Japandi is more restrained and Japanese-influenced, while Scandinavian is often brighter and more casual."],
      ["What colors work for Japandi?", "Earth tones, neutral colors, warm gray, sage, cream, and natural wood tones."]
    ]
  }),
  Scandinavian: article({
    title: "Scandinavian",
    category: "Style",
    definition:
      "Scandinavian is a bright, functional design style using clean lines, pale wood, natural light, simple furniture, and practical warmth.",
    visualCharacteristics: [
      "Bright interiors, light wood, white walls, soft textiles, and uncluttered layouts.",
      "A friendly, simple, comfortable, and modern home atmosphere.",
      "Often uses soft light, neutral colors, plants, and functional everyday objects."
    ],
    bestUseCases: [
      "Interior design, real estate, furniture, home decor, lifestyle, and family imagery.",
      "Images about calm workspaces, cozy homes, simple living, and modern comfort.",
      "Commercial visuals for decor brands, blogs, catalogs, and hospitality."
    ],
    promptExamples: [
      "A Scandinavian kitchen with pale wood cabinets, soft light, minimalist styling, warm neutral tones.",
      "A Scandinavian living room with white walls, light oak furniture, plants, and soft natural daylight.",
      "A Scandinavian home office, clean desk, neutral colors, cozy textile, professional lifestyle stock."
    ],
    relatedKeywords: ["Minimalist", "Japandi", "Soft Light"],
    commercialApplications: ["Furniture marketing", "Real estate", "Lifestyle blogs"],
    stock:
      "Scandinavian visuals are very useful for stock because interiors and home lifestyle content have broad demand. Strong images feel bright, livable, and uncluttered.",
    faq: [
      ["What makes an image Scandinavian?", "Light wood, clean lines, natural light, simple furniture, and cozy functional details."],
      ["Is Scandinavian style always white?", "No. White is common, but warm neutrals, pale wood, gray, blue, and muted accents also work."]
    ]
  }),
  Futuristic: article({
    title: "Futuristic",
    category: "Style",
    definition:
      "Futuristic is a style keyword for images that suggest advanced technology, sleek design, innovation, and forward-looking environments.",
    visualCharacteristics: [
      "Clean surfaces, glass, metal, smooth curves, cool lighting, and advanced interfaces.",
      "A sense of innovation, speed, precision, intelligence, or next-generation design.",
      "Works well with tech products, architecture, vehicles, AI concepts, and abstract business visuals."
    ],
    bestUseCases: [
      "Technology launches, AI visuals, SaaS backgrounds, concept vehicles, and modern architecture.",
      "Business imagery about innovation, automation, data, science, and future work.",
      "Product concepts involving electronics, mobility, wearables, and advanced materials."
    ],
    promptExamples: [
      "A futuristic electric vehicle interior, cool tones, metallic surface, clean studio lighting.",
      "A futuristic AI data center, glass reflection, blue lighting, wide angle architectural photography.",
      "A futuristic wearable device product shot, metallic surface, soft rim light, clean tech background."
    ],
    relatedKeywords: ["Cool Color Palette", "Metallic Surface", "Cyberpunk"],
    commercialApplications: ["Technology launches", "Mobility concepts", "SaaS visuals"],
    stock:
      "Futuristic imagery is strong for technology, AI, business innovation, and science topics. Avoid overly fictional elements when buyers need realistic commercial visuals.",
    faq: [
      ["How do I make futuristic prompts look premium?", "Use clean design, controlled lighting, glass, metal, and simple composition."],
      ["Is futuristic the same as cyberpunk?", "No. Cyberpunk is darker and neon urban; futuristic can be clean, bright, corporate, or minimal."]
    ]
  }),
  "Retro Futurism": article({
    title: "Retro Futurism",
    category: "Style",
    definition:
      "Retro Futurism is a style that imagines the future through the visual language of the past, especially mid-century space age design, vintage technology, and optimistic poster art.",
    visualCharacteristics: [
      "Vintage shapes, space age curves, limited palettes, grain, poster design, and nostalgic sci-fi forms.",
      "Feels playful, imaginative, nostalgic, and future-facing at the same time.",
      "Often uses warm colors, pastels, bold typography-like shapes, and clean geometry."
    ],
    bestUseCases: [
      "Poster art, editorial illustrations, packaging concepts, merchandise, and entertainment visuals.",
      "Travel posters for imaginary destinations, space themes, and vintage-inspired campaigns.",
      "Stock concepts about nostalgia, imagination, innovation history, and playful futurism."
    ],
    promptExamples: [
      "A retro futurism travel poster for a moon hotel, pastel colors, clean geometry, vintage print style.",
      "A retro futuristic kitchen with rounded appliances, warm color palette, 1960s space age design.",
      "A retro futurism robot assistant illustration, muted colors, grain texture, editorial poster style."
    ],
    relatedKeywords: ["Futuristic", "Pastel Colors", "Warm Color Palette"],
    difficulty: "Intermediate",
    commercialApplications: ["Merchandise", "Editorial art", "Campaign concepts"],
    stock:
      "Retro Futurism can be valuable for editorial, merchandise, posters, and themed campaigns. Avoid imitating specific copyrighted franchises or recognizable historic brands.",
    faq: [
      ["What eras inspire retro futurism?", "Mid-century modern, space age, early computer culture, and vintage science fiction are common references."],
      ["How do I keep retro futurism commercial?", "Use generic shapes, clean composition, and avoid copyrighted characters or logos."]
    ]
  }),
  "Organic Modern": article({
    title: "Organic Modern",
    category: "Style",
    definition:
      "Organic Modern is a contemporary style that blends clean modern design with natural forms, earthy materials, warm neutrals, and tactile textures.",
    visualCharacteristics: [
      "Stone, wood, linen, clay, plaster, curved forms, natural light, and earth tones.",
      "A balance of minimal composition and warm, human, nature-inspired materials.",
      "Popular in interiors, wellness branding, home decor, and premium lifestyle imagery."
    ],
    bestUseCases: [
      "Interior design, spas, bathrooms, kitchens, furniture, ceramics, and wellness products.",
      "Brand images for natural beauty, sustainable products, hospitality, and home goods.",
      "Stock concepts about calm living, nature, premium simplicity, and tactile design."
    ],
    promptExamples: [
      "Organic modern bathroom interior with stone sink, earth tones, soft light, natural materials.",
      "An organic modern living room with curved sofa, plaster walls, wood table, warm neutral palette.",
      "A wellness product scene, organic modern styling, linen, stone, ceramic, soft shadows."
    ],
    relatedKeywords: ["Earth Tone Colors", "Japandi", "Marble Texture"],
    commercialApplications: ["Interior design", "Spa branding", "Home decor marketing"],
    stock:
      "Organic Modern has high stock potential because it matches current interior, wellness, and premium lifestyle trends. Use realistic materials and avoid overly staged perfection.",
    faq: [
      ["How is organic modern different from minimalist?", "Organic modern keeps simplicity but adds warmer natural textures and curved forms."],
      ["What materials fit organic modern prompts?", "Stone, wood, linen, plaster, clay, ceramic, marble, and natural fibers."]
    ]
  }),
  "Warm Tones": article({
    title: "Warm Tones",
    category: "Color",
    definition:
      "Warm Tones are colors with red, orange, yellow, peach, tan, clay, or golden undertones. They create comfort, optimism, energy, and human warmth.",
    visualCharacteristics: [
      "Golden, amber, peach, terracotta, cream, warm brown, or orange color cast.",
      "Inviting and emotional tone that works with sunlight, food, interiors, and lifestyle.",
      "Pairs naturally with Golden Hour, Earth Tone Colors, and warm color palettes."
    ],
    bestUseCases: [
      "Food, hospitality, family, travel, wellness, home decor, and cozy lifestyle images.",
      "Brand visuals that should feel caring, friendly, optimistic, or natural.",
      "Stock concepts about comfort, connection, warmth, creativity, and home."
    ],
    promptExamples: [
      "A breakfast table in morning sun, warm tones, soft light, cozy lifestyle photo.",
      "A warm tones interior with terracotta accents, cream textiles, and natural window light.",
      "A handmade candle product photo, warm tones, soft shadows, premium brand styling."
    ],
    relatedKeywords: ["Warm Color Palette", "Golden Hour", "Earth Tone Colors"],
    commercialApplications: ["Food brands", "Hospitality", "Family lifestyle campaigns"],
    stock:
      "Warm Tones are highly useful for commercial stock because they feel welcoming and emotionally accessible. Keep whites balanced to avoid excessive orange casts.",
    faq: [
      ["Are warm tones good for portraits?", "Yes. They can make portraits feel friendly, natural, and inviting."],
      ["How do I avoid too much warmth?", "Use natural color grading, balanced whites, and subtle warm tones."]
    ]
  }),
  "Cool Tones": article({
    title: "Cool Tones",
    category: "Color",
    definition:
      "Cool Tones are colors with blue, green, cyan, teal, gray, or silver undertones. They create calm, clarity, professionalism, and modernity.",
    visualCharacteristics: [
      "Blue, teal, mint, silver, cool gray, and greenish color relationships.",
      "Often feels clean, calm, clinical, futuristic, or trustworthy.",
      "Works with technology, healthcare, architecture, corporate visuals, and water imagery."
    ],
    bestUseCases: [
      "Healthcare, technology, SaaS, finance, architecture, wellness, and clean business imagery.",
      "Images about trust, focus, clarity, safety, innovation, and calm systems.",
      "Modern product scenes with glass, metal, cool lighting, and clean backgrounds."
    ],
    promptExamples: [
      "A clean healthcare reception area, cool tones, wide angle, serene atmosphere, modern design.",
      "A cool tones technology background, glass reflection, blue gray palette, negative space.",
      "A modern office workspace, cool tones, soft light, professional stock photography."
    ],
    relatedKeywords: ["Cool Color Palette", "High Key Lighting", "Neutral Colors"],
    commercialApplications: ["Healthcare marketing", "SaaS visuals", "Corporate presentations"],
    stock:
      "Cool Tones have strong stock value for healthcare, technology, business, and architecture. Add human warmth when the image should feel approachable.",
    faq: [
      ["What moods do cool tones create?", "They often create calm, clarity, professionalism, cleanliness, or futuristic mood."],
      ["Can cool tones feel too cold?", "Yes. Add natural light, soft shadows, or a warm accent if needed."]
    ]
  }),
  Monochrome: article({
    title: "Monochrome",
    category: "Color",
    definition:
      "Monochrome is a color approach using one color family or black-and-white values. It creates strong unity, simplicity, and graphic focus.",
    visualCharacteristics: [
      "Limited color range with strong reliance on value, texture, form, and shadow.",
      "Can feel elegant, serious, minimal, editorial, or iconic.",
      "Works with fashion, architecture, products, portraits, and abstract backgrounds."
    ],
    bestUseCases: [
      "Fashion portraits, architecture, luxury products, posters, editorials, and brand campaigns.",
      "Images where shape and contrast matter more than varied color.",
      "Stock concepts about elegance, simplicity, identity, structure, and timelessness."
    ],
    promptExamples: [
      "A monochrome fashion portrait, hard light, minimalist styling, strong shadow shapes.",
      "A monochrome architecture photo of a concrete museum, leading lines, high contrast.",
      "A black and white product image, studio lighting, clean shadow, premium composition."
    ],
    relatedKeywords: ["Monochromatic Colors", "Hard Light", "Brutalist"],
    difficulty: "Intermediate",
    commercialApplications: ["Luxury campaigns", "Editorial layouts", "Poster design"],
    stock:
      "Monochrome images are useful for editorial, luxury, architecture, and design-led stock. Make sure there is enough contrast for thumbnail readability.",
    faq: [
      ["Is monochrome always black and white?", "No. It can use one hue, such as blue monochrome or beige monochrome."],
      ["How do I make monochrome images interesting?", "Use texture, light direction, shadows, and strong composition."]
    ]
  }),
  "Earth Tones": article({
    title: "Earth Tones",
    category: "Color",
    definition:
      "Earth Tones are natural colors inspired by soil, stone, clay, plants, wood, and sand. They create a grounded, organic, and sustainable feeling.",
    visualCharacteristics: [
      "Brown, tan, olive, sage, terracotta, ochre, stone, cream, and warm gray tones.",
      "Natural, calm, warm, tactile, and environmentally aware mood.",
      "Works with organic modern, handmade goods, wellness products, and interiors."
    ],
    bestUseCases: [
      "Sustainable brands, natural beauty, wellness, interiors, packaging, ceramics, and food.",
      "Stock concepts about ecology, grounding, craft, home, organic living, and care.",
      "Commercial visuals that should feel warm, natural, and trustworthy."
    ],
    promptExamples: [
      "A sustainable skincare package set, earth tones, paper texture, soft light, organic modern styling.",
      "An earth tones living room with linen sofa, olive pillows, clay vase, natural light.",
      "A handmade ceramic bowl product shot, earth tones, warm shadows, clean commercial composition."
    ],
    relatedKeywords: ["Earth Tone Colors", "Organic Modern", "Warm Tones"],
    commercialApplications: ["Eco brands", "Home decor", "Wellness campaigns"],
    stock:
      "Earth Tones are strong for stock because wellness, sustainability, interiors, and organic lifestyle themes are broadly useful. Add contrast so images do not become muddy.",
    faq: [
      ["Are earth tones only brown?", "No. They include olive, sage, clay, sand, stone, cream, ochre, and muted greens."],
      ["What brands use earth tones well?", "Wellness, eco, home decor, food, handmade, and natural beauty brands often benefit from them."]
    ]
  }),
  "High Contrast Colors": article({
    title: "High Contrast Colors",
    category: "Color",
    definition:
      "High Contrast Colors use strong differences in hue, value, or saturation to create visual impact. They help subjects stand out quickly.",
    visualCharacteristics: [
      "Bold color separation, strong light-dark contrast, or vivid opposing hues.",
      "Energetic, graphic, advertising-friendly, and attention-grabbing mood.",
      "Works with sports, posters, fashion, tech, entertainment, and product launches."
    ],
    bestUseCases: [
      "Ads, posters, social thumbnails, product launches, sports campaigns, and music visuals.",
      "Images that need instant readability or strong visual hierarchy.",
      "Commercial concepts about energy, competition, confidence, action, and innovation."
    ],
    promptExamples: [
      "A bold sports shoe campaign image, high contrast colors, hard light, dynamic composition.",
      "A technology product poster with high contrast colors, blue and orange palette, clean studio lighting.",
      "A fashion editorial with high contrast colors, graphic background, strong pose, commercial style."
    ],
    relatedKeywords: ["Complementary Colors", "Vibrant Colors", "Hard Light"],
    difficulty: "Intermediate",
    commercialApplications: ["Advertising", "Event graphics", "Product launches"],
    stock:
      "High Contrast Colors can perform well for promotional stock and thumbnails. Keep the palette controlled and the subject clear so the image does not feel chaotic.",
    faq: [
      ["Are high contrast colors always vibrant?", "No. Contrast can come from light and dark values as well as saturation."],
      ["How do I control high contrast palettes?", "Use one dominant color and one accent, or specify a limited palette."]
    ]
  }),
  "Glass Reflection": article({
    title: "Glass Reflection",
    category: "Texture & Material",
    definition:
      "Glass Reflection is a material keyword that emphasizes transparent, glossy, reflective, or refractive surfaces. It adds polish and depth to product and design images.",
    visualCharacteristics: [
      "Bright highlights, reflections, transparency, refraction, and glossy surface details.",
      "Premium, modern, clean, or futuristic commercial mood.",
      "Works with cosmetics, tech products, bottles, windows, glass tables, and luxury packaging."
    ],
    bestUseCases: [
      "Beauty, fragrance, beverages, technology, luxury packaging, and product photography.",
      "Modern interiors, architecture, futuristic visuals, and reflective still lifes.",
      "Stock concepts about clarity, premium quality, transparency, innovation, and elegance."
    ],
    promptExamples: [
      "A transparent cosmetic bottle on glass reflection, studio lighting, soft shadows, luxury branding.",
      "A futuristic smartphone on reflective glass, cool tones, clean studio lighting, premium tech photo.",
      "A perfume bottle with glass reflection, marble texture, subtle highlights, elegant commercial composition."
    ],
    relatedKeywords: ["Studio Lighting", "Futuristic", "Luxury Branding"],
    difficulty: "Intermediate",
    commercialApplications: ["Beauty ads", "Product mockups", "Tech launch visuals"],
    stock:
      "Glass Reflection is strong for product stock, especially beauty, fragrance, drinks, and technology. Avoid distorted labels or messy reflections that reduce commercial usefulness.",
    faq: [
      ["How do I make glass look realistic?", "Use studio lighting, controlled reflections, transparent material, and clean background."],
      ["What products work with glass reflection?", "Perfume, skincare, beverages, phones, watches, eyewear, and premium packaging."]
    ]
  }),
  "Metallic Surface": article({
    title: "Metallic Surface",
    category: "Texture & Material",
    definition:
      "Metallic Surface is a material keyword for reflective metal finishes such as chrome, steel, aluminum, brass, gold, silver, or brushed metal.",
    visualCharacteristics: [
      "Specular highlights, reflections, cool or warm metallic sheen, and strong edge definition.",
      "Can feel futuristic, industrial, luxury, durable, precise, or premium.",
      "Works well with studio lighting, rim light, hard light, and product photography."
    ],
    bestUseCases: [
      "Technology products, watches, jewelry, vehicles, appliances, tools, and industrial design.",
      "Luxury goods, futuristic concepts, automotive visuals, and premium product campaigns.",
      "Stock concepts about strength, innovation, precision, durability, and quality."
    ],
    promptExamples: [
      "A brushed aluminum speaker, metallic surface, studio lighting, cool tones, premium product photo.",
      "A luxury watch close up, metallic surface, rim light, controlled reflections, dark background.",
      "A futuristic vehicle detail, chrome metallic surface, hard light, clean commercial composition."
    ],
    relatedKeywords: ["Futuristic", "Studio Lighting", "Rim Light"],
    difficulty: "Intermediate",
    commercialApplications: ["Consumer electronics", "Automotive", "Luxury products"],
    stock:
      "Metallic Surface images are useful for tech, industrial, automotive, and luxury stock. Keep reflections controlled and avoid unwanted text or distorted brand-like marks.",
    faq: [
      ["How do I specify metal type?", "Use brushed aluminum, polished chrome, stainless steel, brass, gold, silver, or matte metal."],
      ["What lighting works for metal?", "Studio lighting, rim light, hard light, and controlled reflections work well."]
    ]
  }),
  "Paper Texture": article({
    title: "Paper Texture",
    category: "Texture & Material",
    definition:
      "Paper Texture is a material keyword that adds visible fibers, grain, folds, recycled surfaces, handmade edges, or printed paper detail.",
    visualCharacteristics: [
      "Tactile fibers, matte surfaces, subtle shadows, deckled edges, folds, or recycled flecks.",
      "Crafted, editorial, natural, handmade, or stationery-focused mood.",
      "Works with packaging, invitations, books, cards, labels, and flat lays."
    ],
    bestUseCases: [
      "Stationery, packaging, branding mockups, invitations, books, labels, and editorial backgrounds.",
      "Eco packaging, handmade goods, craft brands, and design portfolio visuals.",
      "Stock concepts about craft, sustainability, writing, planning, creativity, and print design."
    ],
    promptExamples: [
      "Close up of recycled paper packaging, paper texture, earth tones, soft light, minimalist layout.",
      "A handmade wedding invitation on linen, paper texture, soft shadows, elegant stationery photography.",
      "A blank notebook page with paper texture, neutral colors, negative space, clean desk scene."
    ],
    relatedKeywords: ["Close Up", "Earth Tones", "Neutral Colors"],
    commercialApplications: ["Packaging design", "Stationery branding", "Editorial mockups"],
    stock:
      "Paper Texture has solid stock potential for backgrounds, mockups, stationery, packaging, and eco branding. Blank or lightly styled paper images are especially useful for designers.",
    faq: [
      ["What prompts improve paper texture?", "Use handmade paper, recycled fibers, matte surface, deckled edge, close up, and soft light."],
      ["Is paper texture good for backgrounds?", "Yes. It creates subtle tactile backgrounds for branding, stationery, and editorial layouts."]
    ]
  }),
  "Marble Texture": article({
    title: "Marble Texture",
    category: "Texture & Material",
    definition:
      "Marble Texture is a material keyword for polished stone surfaces with natural veining. It suggests luxury, elegance, interiors, beauty, and premium product styling.",
    visualCharacteristics: [
      "Stone veining, polished highlights, cool or warm mineral colors, and smooth surface detail.",
      "Premium, refined, architectural, spa-like, or luxury commercial mood.",
      "Works with beauty products, jewelry, interiors, hospitality, and packaging scenes."
    ],
    bestUseCases: [
      "Luxury skincare, fragrance, jewelry, hospitality, bathrooms, kitchens, and premium still lifes.",
      "Backgrounds for product photography, packaging mockups, and elegant brand visuals.",
      "Stock concepts about luxury, refinement, beauty, wellness, quality, and timeless design."
    ],
    promptExamples: [
      "A luxury skincare jar on marble texture, soft studio lighting, glass reflection, muted colors.",
      "A perfume bottle on white marble texture, subtle shadows, luxury branding, clean composition.",
      "A modern bathroom interior with marble texture, soft light, organic modern styling."
    ],
    relatedKeywords: ["Luxury Branding", "Glass Reflection", "Organic Modern"],
    commercialApplications: ["Beauty ads", "Interior design", "Premium packaging"],
    stock:
      "Marble Texture is strong for beauty, interiors, luxury, and product stock. Keep veining realistic and avoid overpowering the subject with overly busy stone patterns.",
    faq: [
      ["What colors can marble texture have?", "White, gray, black, green, beige, pink, and warm cream marble are common."],
      ["How do I use marble without looking generic?", "Add a clear product, elegant lighting, and controlled composition."]
    ]
  }),
  "Business Presentation Background": article({
    title: "Business Presentation Background",
    category: "Commercial Use",
    definition:
      "Business Presentation Background is a commercial prompt keyword for clean, professional images designed to support slide decks, reports, webinars, and corporate layouts.",
    visualCharacteristics: [
      "Clean composition, negative space, subtle gradients or materials, and professional color palettes.",
      "Low visual clutter so text and charts can remain readable.",
      "Often uses cool tones, neutral colors, glass shapes, soft light, or abstract office elements."
    ],
    bestUseCases: [
      "Pitch decks, annual reports, webinars, cover slides, corporate websites, and LinkedIn graphics.",
      "Backgrounds for finance, SaaS, consulting, healthcare, education, and technology brands.",
      "Stock assets where copy space and professional polish are more important than narrative detail."
    ],
    promptExamples: [
      "A clean business presentation background, negative space, cool tones, subtle glass shapes, modern corporate style.",
      "A neutral business presentation cover image with abstract paper texture, soft light, copy space.",
      "A modern office blur background, business presentation background, cool palette, professional stock design."
    ],
    relatedKeywords: ["Negative Space", "Neutral Colors", "Cool Color Palette"],
    commercialApplications: ["Pitch decks", "Webinars", "Annual reports"],
    stock:
      "Business Presentation Background has very high Adobe Stock potential because presentation assets are evergreen. The strongest images have copy space, calm color, and no distracting details.",
    faq: [
      ["What makes a good presentation background?", "Simple composition, readable contrast, copy space, and a professional tone."],
      ["Should presentation backgrounds include people?", "They can, but abstract or object-based backgrounds are often more flexible."]
    ]
  }),
  "Product Photography": article({
    title: "Product Photography",
    category: "Commercial Use",
    definition:
      "Product Photography is a prompt keyword for clear, sellable images focused on a product. It emphasizes lighting, staging, surface, material, and commercial clarity.",
    visualCharacteristics: [
      "Clear focal product, controlled lighting, clean shadows, and intentional background.",
      "Can be ecommerce-simple, editorial, luxury, lifestyle, or campaign-oriented.",
      "Works with studio lighting, soft light, depth of field, glass reflection, and material keywords."
    ],
    bestUseCases: [
      "Ecommerce, product launches, packaging, beauty, electronics, food, furniture, and accessories.",
      "Hero images, catalog visuals, ads, social media campaigns, and landing pages.",
      "Stock concepts about retail, quality, design, shopping, innovation, and branding."
    ],
    promptExamples: [
      "Product photography of a wireless charger on a clean desk, studio lighting, depth of field, modern styling.",
      "A skincare bottle product photography scene, soft light, neutral colors, marble texture, premium brand image.",
      "A beverage can product photography shot, vibrant colors, condensation, clean commercial background."
    ],
    relatedKeywords: ["Studio Lighting", "Close Up", "Glass Reflection"],
    commercialApplications: ["Online stores", "Product launches", "Retail campaigns"],
    stock:
      "Product Photography has very high stock potential when products are generic and free of logos. Buyers need clear, polished visuals for ads, ecommerce, mockups, and marketing templates.",
    faq: [
      ["How do I make AI product photos look realistic?", "Use controlled lighting, clear material descriptions, realistic shadows, and simple staging."],
      ["Can I include brand names?", "Avoid brand names and logos for stock-safe generic product imagery."]
    ]
  }),
  "Stock Image Design": article({
    title: "Stock Image Design",
    category: "Commercial Use",
    definition:
      "Stock Image Design is a prompt keyword for creating broad, reusable commercial visuals with clear concepts, clean composition, and licensing-friendly subjects.",
    visualCharacteristics: [
      "Clear subject, simple story, natural styling, copy space, and broad commercial relevance.",
      "Avoids overly specific brands, copyrighted objects, or confusing details.",
      "Works across business, lifestyle, marketing, blog, and website imagery."
    ],
    bestUseCases: [
      "Business concepts, lifestyle images, website headers, blog visuals, social templates, and ads.",
      "Generic but polished scenes about teamwork, productivity, wellness, technology, and learning.",
      "Images made for flexibility rather than one narrow campaign."
    ],
    promptExamples: [
      "A diverse team reviewing charts in a bright office, stock image design, rule of thirds, natural soft light.",
      "A modern laptop workspace, stock image design, negative space, neutral colors, professional business concept.",
      "A wellness lifestyle scene, stock image design, soft light, clear concept, commercial-friendly composition."
    ],
    relatedKeywords: ["Business Presentation Background", "Rule of Thirds", "Negative Space"],
    commercialApplications: ["Blogs", "Landing pages", "Corporate marketing"],
    stock:
      "Stock Image Design is directly aligned with Adobe Stock needs. Focus on clear concepts, clean execution, realistic details, and broad usability. Avoid logos, copyrighted designs, and confusing AI artifacts.",
    faq: [
      ["What makes an image stock-friendly?", "A clear concept, clean composition, commercial usefulness, and no protected branding."],
      ["Should stock images be generic?", "They should be broadly usable, but still specific enough to communicate a useful concept."]
    ]
  }),
  "Luxury Branding": article({
    title: "Luxury Branding",
    category: "Commercial Use",
    definition:
      "Luxury Branding is a commercial style keyword for elegant, premium, restrained images that suggest quality, exclusivity, and high perceived value.",
    visualCharacteristics: [
      "Refined materials, controlled lighting, negative space, muted colors, marble, glass, metal, or rich textures.",
      "A polished, minimal, expensive, and intentional visual mood.",
      "Works well for beauty, fragrance, jewelry, fashion, hospitality, and premium packaging."
    ],
    bestUseCases: [
      "Perfume, skincare, jewelry, watches, hotels, fashion, packaging, and premium product launches.",
      "Brand identity visuals, website hero images, editorial ads, and social campaigns.",
      "Stock concepts about elegance, quality, exclusivity, refinement, and premium service."
    ],
    promptExamples: [
      "A luxury branding scene for a perfume bottle, marble texture, muted colors, studio lighting, elegant shadows.",
      "A premium jewelry product photo, luxury branding, black velvet, rim light, controlled reflections.",
      "A boutique hotel detail image, luxury branding, warm tones, soft light, refined interior composition."
    ],
    relatedKeywords: ["Marble Texture", "Studio Lighting", "Muted Colors"],
    difficulty: "Intermediate",
    commercialApplications: ["Premium ads", "Packaging mockups", "Brand identity visuals"],
    stock:
      "Luxury Branding has strong stock value for beauty, fashion, hospitality, jewelry, and premium consumer goods. Keep imagery generic and brand-safe, with no logos or recognizable packaging.",
    faq: [
      ["What colors work for luxury branding?", "Muted colors, monochrome, black, ivory, gold accents, warm neutrals, and deep jewel tones can work well."],
      ["How do I avoid fake-looking luxury?", "Use restrained composition, realistic materials, controlled lighting, and fewer decorative elements."]
    ]
  })
};
