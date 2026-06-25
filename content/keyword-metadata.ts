export type KeywordMetadata = {
  title: string;
  category: string;
  published?: boolean;
  seoTitle?: string;
  metaDescription?: string;
  heroImage?: {
    src?: string;
    alt: string;
    title?: string;
    background: string;
  };
  overview: string;
  bestUseCases: string[];
  relatedKeywords: string[];
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  slug: string;
  categorySlug: string;
  hasDefinition: boolean;
  promptExampleCount: number;
  faqCount: number;
};

export const keywordMetadata = [
  {
    "title": "Cinematic Lighting",
    "category": "Lighting",
    "published": true,
    "heroImage": {
      "src": "/images/keywords/cinematic-lighting.png",
      "alt": "Cinematic Lighting AI prompt keyword hero image for the PromptAtlas Lighting category",
      "title": "Cinematic Lighting - PromptAtlas Keyword Hero",
      "background": "radial-gradient(circle at 24% 28%, #fff4d7 0, transparent 28%), linear-gradient(135deg, #232323 0%, #6d4b38 48%, #e7d8bc 100%)"
    },
    "overview": "Cinematic Lighting is one of the most useful prompt keywords for making AI-generated images feel intentional, polished, and story-driven. Instead of asking for a flat, evenly lit image, this keyword signals that the scene should feel as if it was lit for a film, commercial, or high-end editorial shoot. The result often includes stronger direction in the light source, more purposeful shadows, richer contrast, and a clearer sense of atmosphere. For beginners, it is a reliable way to move an image away from a generic render and toward something that feels composed, dramatic, and visually memorable.",
    "bestUseCases": [
      "Portraits and character images where the face, pose, or expression needs emotional weight. Cinematic Lighting can make a simple subject feel like a still frame from a larger story.",
      "Product hero images for watches, perfume, headphones, beverages, skincare, and luxury packaging. The keyword helps add premium highlights, controlled reflections, and stronger visual focus.",
      "Editorial, advertising, and landing page visuals that need to look more designed than ordinary stock photography. It works especially well when combined with negative space for text placement.",
      "Atmospheric interiors, restaurants, hotels, offices, studios, and architectural scenes where light should shape the room instead of merely revealing it."
    ],
    "relatedKeywords": [
      "Golden Hour",
      "Volumetric Lighting",
      "Moody Lighting"
    ],
    "difficulty": "Beginner",
    "slug": "cinematic-lighting",
    "categorySlug": "lighting",
    "hasDefinition": false,
    "promptExampleCount": 0,
    "faqCount": 0
  },
  {
    "title": "Golden Hour",
    "category": "Lighting",
    "published": true,
    "heroImage": {
      "src": "/images/keywords/golden-hour.png",
      "alt": "Golden Hour AI prompt keyword hero image for the PromptAtlas Lighting category",
      "title": "Golden Hour - PromptAtlas Keyword Hero",
      "background": "radial-gradient(circle at 18% 22%, #fff1b8 0, transparent 30%), linear-gradient(135deg, #e7a94f 0%, #f4d7a1 46%, #f8f2e8 100%)"
    },
    "overview": "Golden Hour is a lighting keyword that refers to the warm, low-angle sunlight shortly after sunrise or shortly before sunset. In AI image prompts, it is one of the easiest ways to make a scene feel natural, emotional, and commercially appealing. The light is usually softer than midday sun, the shadows are longer, and the color temperature leans warm. This makes subjects feel more flattering and environments feel more inviting. For beginners, Golden Hour is a dependable keyword because it improves mood without requiring a complicated lighting setup. It works for people, landscapes, products, interiors, food, travel scenes, and lifestyle imagery.",
    "bestUseCases": [
      "Travel and destination imagery where the goal is to make a place feel aspirational, peaceful, or worth visiting. Golden Hour can make beaches, cabins, streets, mountains, and hotels feel more inviting.",
      "Lifestyle photography with people exercising, working, relaxing, driving, cooking, or spending time outdoors. The warm light adds emotional warmth without making the scene feel overly staged.",
      "Product images for wellness, outdoor gear, beverages, home goods, and sustainable brands. Golden Hour can make simple products feel natural, premium, and connected to real-life use.",
      "Stock images that need a positive, optimistic mood. The keyword is useful for concepts like freedom, renewal, health, calm, family, entrepreneurship, and work-life balance."
    ],
    "relatedKeywords": [
      "Cinematic Lighting",
      "Backlight",
      "Soft Light"
    ],
    "difficulty": "Beginner",
    "slug": "golden-hour",
    "categorySlug": "lighting",
    "hasDefinition": false,
    "promptExampleCount": 0,
    "faqCount": 0
  },
  {
    "title": "Soft Light",
    "category": "Lighting",
    "published": true,
    "heroImage": {
      "src": "/images/keywords/soft-light.png",
      "alt": "Soft Light AI prompt keyword hero image for the PromptAtlas Lighting category",
      "title": "Soft Light - PromptAtlas Keyword Hero",
      "background": "radial-gradient(circle at 28% 20%, #ffffff 0, transparent 32%), linear-gradient(135deg, #f7f4ee 0%, #e8eee9 48%, #d8ccc4 100%)"
    },
    "overview": "Soft Light is a lighting keyword used to create gentle, flattering, low-contrast images. It describes light that has been diffused before it reaches the subject, like daylight through a sheer curtain, a large studio softbox, or cloudy outdoor light. In AI image prompts, Soft Light is especially useful when you want the image to feel calm, natural, welcoming, and easy to use commercially. It reduces harsh shadow edges and helps skin, products, interiors, and materials look smoother. For beginners, Soft Light is one of the safest lighting keywords because it improves many images without making them feel too dramatic or overly stylized.",
    "bestUseCases": [
      "Portraits, wellness imagery, and lifestyle scenes where people should look relaxed, friendly, and natural rather than dramatic or intense.",
      "Beauty, skincare, food, ceramics, stationery, and ecommerce product images where smooth surfaces and soft shadows make the subject feel premium and accessible.",
      "Interior and home decor visuals that need a calm, bright atmosphere. Soft Light helps rooms feel livable and visually clean.",
      "Stock imagery for concepts such as comfort, care, clarity, health, productivity, calm workspaces, and everyday modern living."
    ],
    "relatedKeywords": [
      "Studio Lighting",
      "High Key Lighting",
      "Golden Hour"
    ],
    "difficulty": "Beginner",
    "slug": "soft-light",
    "categorySlug": "lighting",
    "hasDefinition": false,
    "promptExampleCount": 0,
    "faqCount": 0
  },
  {
    "title": "Hard Light",
    "category": "Lighting",
    "published": true,
    "seoTitle": "Hard Light AI Prompt Keyword Guide",
    "metaDescription": "Learn how to use Hard Light in AI image prompts with examples, use cases, related keywords, and stock image guidance.",
    "heroImage": {
      "src": "/images/keywords/hard-light.png",
      "alt": "Hard Light AI prompt keyword hero image for the PromptAtlas Lighting category",
      "title": "Hard Light - PromptAtlas Keyword Hero",
      "background": "linear-gradient(135deg, #1f2523 0%, #8d6a45 48%, #f3dfb8 100%)"
    },
    "overview": "Hard Light is a direct, intense lighting style that creates crisp shadows, strong edges, and high visual contrast. In AI prompts, it is useful when you want a scene to feel bold, graphic, editorial, or architectural rather than soft and gentle.",
    "bestUseCases": [
      "Fashion editorials, sports campaigns, and portraits where strong shadow shapes add attitude.",
      "Architecture, interiors, and product images where edges, lines, and form need emphasis.",
      "Poster-style visuals, monochrome compositions, and bold advertising concepts."
    ],
    "relatedKeywords": [
      "Low Key Lighting",
      "High Contrast Colors",
      "Cinematic Lighting"
    ],
    "difficulty": "Intermediate",
    "slug": "hard-light",
    "categorySlug": "lighting",
    "hasDefinition": true,
    "promptExampleCount": 3,
    "faqCount": 2
  },
  {
    "title": "Rim Light",
    "category": "Lighting",
    "published": true,
    "heroImage": {
      "src": "/images/keywords/rim-light.png",
      "alt": "Rim Light AI prompt keyword hero image for the PromptAtlas Lighting category",
      "title": "Rim Light - PromptAtlas Keyword Hero",
      "background": "radial-gradient(circle at 76% 38%, #fff3c7 0, transparent 18%), linear-gradient(135deg, #151817 0%, #26302c 54%, #caa36e 100%)"
    },
    "overview": "Rim Light is a lighting keyword that describes a bright edge of light around a subject. The light usually comes from behind or slightly behind the subject, catching the outline of hair, shoulders, products, glass, metal, or other edges. In AI image generation, Rim Light is useful when the subject blends into the background or when you want a more professional, cinematic result. It adds separation, depth, and polish. For beginners, Rim Light is a practical keyword because it solves a common problem: flat images where the subject does not stand out clearly.",
    "bestUseCases": [
      "Portraits, athlete images, musicians, founders, and character studies where the person needs to feel defined, confident, and visually separated from the background.",
      "Product photography for bottles, headphones, watches, electronics, vehicles, and reflective materials. Rim Light can emphasize shape and premium surface detail.",
      "Dark studio scenes, cinematic posters, sports campaigns, gaming visuals, and music promotions where strong outlines and contrast improve visual impact.",
      "Stock concepts about leadership, performance, focus, technology, innovation, nightlife, fitness, and premium branding."
    ],
    "relatedKeywords": [
      "Backlight",
      "Cinematic Lighting",
      "Low Key Lighting"
    ],
    "difficulty": "Intermediate",
    "slug": "rim-light",
    "categorySlug": "lighting",
    "hasDefinition": false,
    "promptExampleCount": 0,
    "faqCount": 0
  },
  {
    "title": "Backlight",
    "category": "Lighting",
    "published": true,
    "heroImage": {
      "src": "/images/keywords/backlight.png",
      "alt": "Backlight AI prompt keyword hero image for the PromptAtlas Lighting category",
      "title": "Backlight - PromptAtlas Keyword Hero",
      "background": "radial-gradient(circle at 50% 28%, #fff0b5 0, transparent 30%), linear-gradient(135deg, #6d6b5f 0%, #d6b56e 48%, #f7ead3 100%)"
    },
    "overview": "Backlight is a lighting direction where the main light source sits behind the subject, facing toward the camera. It can create glowing edges, silhouettes, translucent materials, and a strong sense of atmosphere. In AI image prompts, Backlight is useful when you want an image to feel warm, emotional, mysterious, or visually layered. It is common in outdoor lifestyle photography, travel imagery, nature scenes, music videos, and cinematic portraits. Beginners can use Backlight to make a simple scene feel more dramatic without needing complicated camera or lighting language.",
    "bestUseCases": [
      "Outdoor portraits and lifestyle scenes where warm sunlight behind the subject creates an emotional, aspirational feeling.",
      "Travel, wellness, nature, and family imagery where glow, atmosphere, and natural beauty matter more than hard detail.",
      "Product and still-life images involving glass, fabric, leaves, beverages, bottles, or translucent materials that look better when light passes through them.",
      "Commercial concepts such as hope, freedom, renewal, calm, spirituality, morning routines, outdoor adventure, and premium lifestyle."
    ],
    "relatedKeywords": [
      "Rim Light",
      "Golden Hour",
      "Volumetric Lighting"
    ],
    "difficulty": "Beginner",
    "slug": "backlight",
    "categorySlug": "lighting",
    "hasDefinition": false,
    "promptExampleCount": 0,
    "faqCount": 0
  },
  {
    "title": "Volumetric Lighting",
    "category": "Lighting",
    "published": true,
    "heroImage": {
      "src": "/images/keywords/volumetric-lighting.png",
      "alt": "Volumetric Lighting AI prompt keyword hero image for the PromptAtlas Lighting category",
      "title": "Volumetric Lighting - PromptAtlas Keyword Hero",
      "background": "linear-gradient(120deg, rgba(255,255,255,0.88) 0 12%, transparent 12% 28%, rgba(255,255,255,0.48) 28% 38%, transparent 38%), linear-gradient(135deg, #dce7e1 0%, #9eaa9d 48%, #5b665d 100%)"
    },
    "overview": "Volumetric Lighting describes visible beams of light traveling through particles in the air, such as mist, dust, smoke, fog, or atmospheric haze. In AI image generation, it is a powerful keyword for adding depth and drama. Instead of light simply landing on objects, the light itself becomes visible inside the scene. This can make an image feel cinematic, mysterious, sacred, futuristic, or magical depending on the setting. Beginners can use Volumetric Lighting when a prompt feels flat or lacks atmosphere. It is especially useful when you want the viewer to feel the scale of a space, the direction of the light, or the mood of an environment.",
    "bestUseCases": [
      "Large interiors such as libraries, museums, studios, churches, warehouses, hotels, and modern offices. Beams of light can make these spaces feel grand and visually layered.",
      "Fantasy, sci-fi, and concept art where atmosphere matters as much as the subject. Volumetric Lighting can suggest mystery, discovery, danger, or wonder.",
      "Commercial backgrounds that need a strong mood without relying on busy details. It can create dramatic empty space for posters, hero banners, or presentation slides.",
      "Stock images about spirituality, inspiration, performance, entertainment, innovation, and nature. The visible light can make abstract ideas feel more concrete."
    ],
    "relatedKeywords": [
      "Cinematic Lighting",
      "Backlight",
      "Rim Light"
    ],
    "difficulty": "Intermediate",
    "slug": "volumetric-lighting",
    "categorySlug": "lighting",
    "hasDefinition": false,
    "promptExampleCount": 0,
    "faqCount": 0
  },
  {
    "title": "God Rays",
    "category": "Lighting",
    "published": true,
    "seoTitle": "God Rays AI Prompt Keyword Guide",
    "metaDescription": "Learn how to use God Rays in AI image prompts with examples, use cases, related keywords, and stock image guidance.",
    "heroImage": {
      "src": "/images/keywords/god-rays.png",
      "alt": "God Rays AI prompt keyword hero image for the PromptAtlas Lighting category",
      "title": "God Rays - PromptAtlas Keyword Hero",
      "background": "linear-gradient(135deg, #1f2523 0%, #8d6a45 48%, #f3dfb8 100%)"
    },
    "overview": "God Rays are visible beams of sunlight or strong light streaming through clouds, trees, windows, fog, or dust. In AI prompts, they create a sense of awe, spirituality, scale, and atmosphere.",
    "bestUseCases": [
      "Forests, mountains, cathedrals, temples, fantasy scenes, and dramatic landscapes.",
      "Inspirational posters, book covers, spiritual visuals, and travel imagery.",
      "Backgrounds where light direction needs to guide the viewer toward a focal point."
    ],
    "relatedKeywords": [
      "Volumetric Lighting",
      "Mystical",
      "Atmospheric Haze"
    ],
    "difficulty": "Intermediate",
    "slug": "god-rays",
    "categorySlug": "lighting",
    "hasDefinition": true,
    "promptExampleCount": 3,
    "faqCount": 2
  },
  {
    "title": "Neon Glow",
    "category": "Lighting",
    "published": true,
    "seoTitle": "Neon Glow AI Prompt Keyword Guide",
    "metaDescription": "Learn how to use Neon Glow in AI image prompts with examples, use cases, related keywords, and stock image guidance.",
    "heroImage": {
      "src": "/images/keywords/neon-glow.png",
      "alt": "Neon Glow AI prompt keyword hero image for the PromptAtlas Lighting category",
      "title": "Neon Glow - PromptAtlas Keyword Hero",
      "background": "linear-gradient(135deg, #1f2523 0%, #8d6a45 48%, #f3dfb8 100%)"
    },
    "overview": "Neon Glow is a lighting keyword for bright colored illumination, usually inspired by neon signs, nightlife, cyberpunk cities, gaming visuals, and futuristic product scenes.",
    "bestUseCases": [
      "Cyberpunk cities, gaming art, music posters, nightlife campaigns, and tech visuals.",
      "Product shots for electronics, headphones, sneakers, beverages, and digital brands.",
      "Social media ads, event graphics, and futuristic brand assets."
    ],
    "relatedKeywords": [
      "Cyberpunk",
      "Complementary Colors",
      "Rim Light"
    ],
    "difficulty": "Beginner",
    "slug": "neon-glow",
    "categorySlug": "lighting",
    "hasDefinition": true,
    "promptExampleCount": 3,
    "faqCount": 2
  },
  {
    "title": "Studio Lighting",
    "category": "Lighting",
    "published": true,
    "heroImage": {
      "src": "/images/keywords/studio-lighting.png",
      "alt": "Studio Lighting AI prompt keyword hero image for the PromptAtlas Lighting category",
      "title": "Studio Lighting - PromptAtlas Keyword Hero",
      "background": "radial-gradient(circle at 30% 20%, #ffffff 0, transparent 24%), radial-gradient(circle at 70% 35%, #f2f7f4 0, transparent 22%), linear-gradient(135deg, #e8ece8 0%, #fbfaf7 48%, #cfd8d1 100%)"
    },
    "overview": "Studio Lighting is a prompt keyword that suggests a controlled, professional lighting setup. Instead of relying on natural sunlight or random environmental light, Studio Lighting points the model toward clean highlights, intentional shadows, balanced exposure, and a polished commercial finish. It is one of the most practical lighting keywords for AI image creators because it works across product photography, portraits, ecommerce, fashion, corporate visuals, and catalog-style imagery. For beginners, Studio Lighting is helpful when you want an image to look professional, reliable, and ready for business use.",
    "bestUseCases": [
      "Product photography for ecommerce, packaging, beauty, electronics, jewelry, accessories, and home goods. Studio Lighting makes objects feel clear and sellable.",
      "Corporate portraits, founder portraits, professional headshots, and team images where clean lighting and trust matter.",
      "Fashion, beauty, and luxury branding visuals that need controlled highlights, refined surfaces, and a polished commercial tone.",
      "Stock images for business, retail, online shopping, premium products, advertising, presentation slides, and brand mockups."
    ],
    "relatedKeywords": [
      "Soft Light",
      "High Key Lighting",
      "Low Key Lighting"
    ],
    "difficulty": "Beginner",
    "slug": "studio-lighting",
    "categorySlug": "lighting",
    "hasDefinition": false,
    "promptExampleCount": 0,
    "faqCount": 0
  },
  {
    "title": "Low Key Lighting",
    "category": "Lighting",
    "published": true,
    "heroImage": {
      "src": "/images/keywords/low-key-lighting.png",
      "alt": "Low Key Lighting AI prompt keyword hero image for the PromptAtlas Lighting category",
      "title": "Low Key Lighting - PromptAtlas Keyword Hero",
      "background": "radial-gradient(circle at 72% 34%, #d7b77a 0, transparent 18%), linear-gradient(135deg, #0f1110 0%, #202623 54%, #4d4236 100%)"
    },
    "overview": "Low Key Lighting is a lighting style built around darkness, contrast, and selective illumination. In AI image prompts, it usually creates images with deep shadows, darker backgrounds, and a small amount of focused light on the subject. The result can feel dramatic, mysterious, premium, serious, or cinematic. Low Key Lighting is often used in luxury product photography, film posters, athletic portraits, music visuals, and editorial images. For beginners, it is a useful keyword when you want more mood and depth, but it needs a clear subject so the image does not become too dark to read.",
    "bestUseCases": [
      "Luxury product images where darkness, reflection, and selective highlights make the object feel premium and exclusive.",
      "Portraits, athlete images, musicians, and editorial subjects that need a serious, cinematic, or intense mood.",
      "Posters, hero banners, book covers, and dramatic website visuals where a strong focal point matters more than bright detail everywhere.",
      "Stock concepts related to focus, mystery, performance, leadership, premium branding, nightlife, security, and innovation."
    ],
    "relatedKeywords": [
      "Rim Light",
      "Moody Lighting",
      "Cinematic Lighting"
    ],
    "difficulty": "Intermediate",
    "slug": "low-key-lighting",
    "categorySlug": "lighting",
    "hasDefinition": false,
    "promptExampleCount": 0,
    "faqCount": 0
  },
  {
    "title": "High Key Lighting",
    "category": "Lighting",
    "published": true,
    "heroImage": {
      "src": "/images/keywords/high-key-lighting.png",
      "alt": "High Key Lighting AI prompt keyword hero image for the PromptAtlas Lighting category",
      "title": "High Key Lighting - PromptAtlas Keyword Hero",
      "background": "radial-gradient(circle at 30% 24%, #ffffff 0, transparent 34%), linear-gradient(135deg, #ffffff 0%, #f6f3ec 46%, #e4eee9 100%)"
    },
    "overview": "High Key Lighting is a bright lighting style with low contrast, pale shadows, and an airy overall feeling. In AI image prompts, it is useful for creating clean, optimistic, fresh, and approachable images. The background is often white or light-toned, and the subject is evenly illuminated. High Key Lighting is common in beauty campaigns, wellness imagery, ecommerce product photography, healthcare visuals, baby and family photography, and modern business imagery. For beginners, it is a helpful keyword when you want a bright commercial look without harsh shadows or heavy drama.",
    "bestUseCases": [
      "Beauty, skincare, healthcare, wellness, and family-oriented images where freshness, trust, and cleanliness are important.",
      "Ecommerce and catalog product photography that needs a simple, bright, buyer-friendly presentation.",
      "Business, education, and presentation visuals where the image should feel clear, positive, and easy to pair with text.",
      "Stock concepts such as clarity, care, optimism, simplicity, clean living, modern work, health, and new beginnings."
    ],
    "relatedKeywords": [
      "Soft Light",
      "Studio Lighting",
      "Minimalist"
    ],
    "difficulty": "Beginner",
    "slug": "high-key-lighting",
    "categorySlug": "lighting",
    "hasDefinition": false,
    "promptExampleCount": 0,
    "faqCount": 0
  },
  {
    "title": "Moody Lighting",
    "category": "Lighting",
    "published": true,
    "heroImage": {
      "src": "/images/keywords/moody-lighting.png",
      "alt": "Moody Lighting AI prompt keyword hero image for the PromptAtlas Lighting category",
      "title": "Moody Lighting - PromptAtlas Keyword Hero",
      "background": "radial-gradient(circle at 22% 30%, #d6c09a 0, transparent 22%), linear-gradient(135deg, #252a28 0%, #59605b 48%, #7a6658 100%)"
    },
    "overview": "Moody Lighting is a prompt keyword for images with atmosphere, emotional depth, and a more restrained lighting style. It often includes darker tones, directional light, muted colors, and visible shadow areas, but it does not have to be as dark as Low Key Lighting. In AI image generation, Moody Lighting is useful when you want a scene to feel thoughtful, cinematic, intimate, elegant, or mysterious. It is common in editorial portraits, luxury interiors, coffee shop scenes, rainy windows, fashion campaigns, and premium product photography. Beginners can use it to add feeling and story to otherwise plain images.",
    "bestUseCases": [
      "Editorial portraits and lifestyle scenes where emotion, introspection, or quiet atmosphere are more important than bright commercial polish.",
      "Luxury interiors, boutique hospitality, restaurants, coffee shops, studios, and home scenes that should feel intimate and designed.",
      "Premium product images for fragrance, leather goods, watches, books, beverages, and craft objects where restrained light adds perceived value.",
      "Stock concepts such as focus, creativity, solitude, craftsmanship, premium service, rainy days, evening routines, and thoughtful work."
    ],
    "relatedKeywords": [
      "Low Key Lighting",
      "Cinematic Lighting",
      "Rim Light"
    ],
    "difficulty": "Intermediate",
    "slug": "moody-lighting",
    "categorySlug": "lighting",
    "hasDefinition": false,
    "promptExampleCount": 0,
    "faqCount": 0
  },
  {
    "title": "Dreamy",
    "category": "Atmosphere",
    "published": true,
    "seoTitle": "Dreamy AI Prompt Keyword Guide",
    "metaDescription": "Learn how to use Dreamy in AI image prompts with examples, use cases, related keywords, and stock image guidance.",
    "heroImage": {
      "src": "/images/keywords/dreamy.png",
      "alt": "Dreamy AI prompt keyword hero image for the PromptAtlas Atmosphere category",
      "title": "Dreamy - PromptAtlas Keyword Hero",
      "background": "linear-gradient(135deg, #dfe7e5 0%, #9ca8a3 48%, #5f6967 100%)"
    },
    "overview": "Dreamy is an atmosphere keyword that creates soft, gentle, slightly surreal images with a light emotional tone. It often suggests glow, softness, delicate colors, and a calm imaginative mood.",
    "bestUseCases": [
      "Beauty, wellness, lifestyle, bridal, fashion, and soft interior imagery.",
      "Concept art, book covers, social visuals, and poetic editorial images.",
      "Stock images about imagination, rest, tenderness, memory, and calm living."
    ],
    "relatedKeywords": [
      "Soft Light",
      "Pastel Colors",
      "Ethereal"
    ],
    "difficulty": "Beginner",
    "slug": "dreamy",
    "categorySlug": "atmosphere",
    "hasDefinition": true,
    "promptExampleCount": 3,
    "faqCount": 2
  },
  {
    "title": "Ethereal",
    "category": "Atmosphere",
    "published": true,
    "seoTitle": "Ethereal AI Prompt Keyword Guide",
    "metaDescription": "Learn how to use Ethereal in AI image prompts with examples, use cases, related keywords, and stock image guidance.",
    "heroImage": {
      "src": "/images/keywords/ethereal.png",
      "alt": "Ethereal AI prompt keyword hero image for the PromptAtlas Atmosphere category",
      "title": "Ethereal - PromptAtlas Keyword Hero",
      "background": "linear-gradient(135deg, #dfe7e5 0%, #9ca8a3 48%, #5f6967 100%)"
    },
    "overview": "Ethereal describes imagery that feels delicate, luminous, airy, and almost otherworldly. In AI prompts, it can make a subject feel graceful, spiritual, magical, or weightless.",
    "bestUseCases": [
      "Fantasy portraits, dancers, bridal visuals, spiritual landscapes, and elegant fashion.",
      "Book covers, wellness campaigns, event branding, and artistic editorial images.",
      "Images about grace, lightness, transformation, hope, and imagination."
    ],
    "relatedKeywords": [
      "God Rays",
      "Dreamy",
      "Mystical"
    ],
    "difficulty": "Intermediate",
    "slug": "ethereal",
    "categorySlug": "atmosphere",
    "hasDefinition": true,
    "promptExampleCount": 3,
    "faqCount": 2
  },
  {
    "title": "Moody",
    "category": "Atmosphere",
    "published": true,
    "seoTitle": "Moody AI Prompt Keyword Guide",
    "metaDescription": "Learn how to use Moody in AI image prompts with examples, use cases, related keywords, and stock image guidance.",
    "heroImage": {
      "src": "/images/keywords/moody.png",
      "alt": "Moody AI prompt keyword hero image for the PromptAtlas Atmosphere category",
      "title": "Moody - PromptAtlas Keyword Hero",
      "background": "linear-gradient(135deg, #dfe7e5 0%, #9ca8a3 48%, #5f6967 100%)"
    },
    "overview": "Moody is an atmosphere keyword for images with emotional depth, darker tones, restrained colors, and a more cinematic or introspective feeling.",
    "bestUseCases": [
      "Editorial portraits, interiors, luxury products, coffee shops, rainy streets, and book covers.",
      "Premium hospitality, fashion, music visuals, and dramatic lifestyle imagery.",
      "Stock concepts about focus, solitude, creativity, evening routines, and thoughtful work."
    ],
    "relatedKeywords": [
      "Moody Lighting",
      "Low Key Lighting",
      "Muted Colors"
    ],
    "difficulty": "Beginner",
    "slug": "moody",
    "categorySlug": "atmosphere",
    "hasDefinition": true,
    "promptExampleCount": 3,
    "faqCount": 2
  },
  {
    "title": "Serene",
    "category": "Atmosphere",
    "published": true,
    "seoTitle": "Serene AI Prompt Keyword Guide",
    "metaDescription": "Learn how to use Serene in AI image prompts with examples, use cases, related keywords, and stock image guidance.",
    "heroImage": {
      "src": "/images/keywords/serene.png",
      "alt": "Serene AI prompt keyword hero image for the PromptAtlas Atmosphere category",
      "title": "Serene - PromptAtlas Keyword Hero",
      "background": "linear-gradient(135deg, #dfe7e5 0%, #9ca8a3 48%, #5f6967 100%)"
    },
    "overview": "Serene describes a peaceful, calm, balanced visual mood. In AI prompts, it helps create images that feel restful, spacious, quiet, and emotionally stable.",
    "bestUseCases": [
      "Meditation, spa, wellness, healthcare, travel retreats, and nature imagery.",
      "Minimal interiors, calm workspaces, hospitality visuals, and lifestyle stock.",
      "Concepts about peace, balance, mental health, rest, clarity, and recovery."
    ],
    "relatedKeywords": [
      "Soft Light",
      "Neutral Colors",
      "Minimalist"
    ],
    "difficulty": "Beginner",
    "slug": "serene",
    "categorySlug": "atmosphere",
    "hasDefinition": true,
    "promptExampleCount": 3,
    "faqCount": 2
  },
  {
    "title": "Melancholic",
    "category": "Atmosphere",
    "published": true,
    "seoTitle": "Melancholic AI Prompt Keyword Guide",
    "metaDescription": "Learn how to use Melancholic in AI image prompts with examples, use cases, related keywords, and stock image guidance.",
    "heroImage": {
      "src": "/images/keywords/melancholic.png",
      "alt": "Melancholic AI prompt keyword hero image for the PromptAtlas Atmosphere category",
      "title": "Melancholic - PromptAtlas Keyword Hero",
      "background": "linear-gradient(135deg, #dfe7e5 0%, #9ca8a3 48%, #5f6967 100%)"
    },
    "overview": "Melancholic is an atmosphere keyword for quiet sadness, reflection, nostalgia, and emotional stillness. It creates more poetic images than simply dark or gloomy prompts.",
    "bestUseCases": [
      "Book covers, music artwork, editorial portraits, rainy city scenes, and narrative visuals.",
      "Images about memory, solitude, transition, waiting, loss, or introspection.",
      "Atmospheric stock for articles about mental health, reflection, creativity, or personal stories."
    ],
    "relatedKeywords": [
      "Foggy",
      "Muted Colors",
      "Moody"
    ],
    "difficulty": "Intermediate",
    "slug": "melancholic",
    "categorySlug": "atmosphere",
    "hasDefinition": true,
    "promptExampleCount": 3,
    "faqCount": 2
  },
  {
    "title": "Mystical",
    "category": "Atmosphere",
    "published": true,
    "seoTitle": "Mystical AI Prompt Keyword Guide",
    "metaDescription": "Learn how to use Mystical in AI image prompts with examples, use cases, related keywords, and stock image guidance.",
    "heroImage": {
      "src": "/images/keywords/mystical.png",
      "alt": "Mystical AI prompt keyword hero image for the PromptAtlas Atmosphere category",
      "title": "Mystical - PromptAtlas Keyword Hero",
      "background": "linear-gradient(135deg, #dfe7e5 0%, #9ca8a3 48%, #5f6967 100%)"
    },
    "overview": "Mystical is an atmosphere keyword for images that feel magical, symbolic, mysterious, spiritual, or connected to hidden meaning.",
    "bestUseCases": [
      "Fantasy art, spiritual landscapes, ancient ruins, forests, book covers, and event posters.",
      "Wellness or meditation brands that want a subtle magical feeling.",
      "Concepts about mystery, transformation, ritual, discovery, and imagination."
    ],
    "relatedKeywords": [
      "Ethereal",
      "God Rays",
      "Atmospheric Haze"
    ],
    "difficulty": "Intermediate",
    "slug": "mystical",
    "categorySlug": "atmosphere",
    "hasDefinition": true,
    "promptExampleCount": 3,
    "faqCount": 2
  },
  {
    "title": "Atmospheric Haze",
    "category": "Atmosphere",
    "published": true,
    "seoTitle": "Atmospheric Haze AI Prompt Keyword Guide",
    "metaDescription": "Learn how to use Atmospheric Haze in AI image prompts with examples, use cases, related keywords, and stock image guidance.",
    "heroImage": {
      "src": "/images/keywords/atmospheric-haze.png",
      "alt": "Atmospheric Haze AI prompt keyword hero image for the PromptAtlas Atmosphere category",
      "title": "Atmospheric Haze - PromptAtlas Keyword Hero",
      "background": "linear-gradient(135deg, #dfe7e5 0%, #9ca8a3 48%, #5f6967 100%)"
    },
    "overview": "Atmospheric Haze is a depth keyword that adds subtle mist, dust, fog, or air particles between the viewer and distant objects.",
    "bestUseCases": [
      "Landscapes, travel roads, mountain scenes, city mornings, interiors, and cinematic backgrounds.",
      "Images that need spatial depth or softer background separation.",
      "Stock concepts about journey, calm, mystery, nature, scale, and atmosphere."
    ],
    "relatedKeywords": [
      "Volumetric Lighting",
      "Backlight",
      "Foggy"
    ],
    "difficulty": "Beginner",
    "slug": "atmospheric-haze",
    "categorySlug": "atmosphere",
    "hasDefinition": true,
    "promptExampleCount": 3,
    "faqCount": 2
  },
  {
    "title": "Foggy",
    "category": "Atmosphere",
    "published": true,
    "seoTitle": "Foggy AI Prompt Keyword Guide",
    "metaDescription": "Learn how to use Foggy in AI image prompts with examples, use cases, related keywords, and stock image guidance.",
    "heroImage": {
      "src": "/images/keywords/foggy.png",
      "alt": "Foggy AI prompt keyword hero image for the PromptAtlas Atmosphere category",
      "title": "Foggy - PromptAtlas Keyword Hero",
      "background": "linear-gradient(135deg, #dfe7e5 0%, #9ca8a3 48%, #5f6967 100%)"
    },
    "overview": "Foggy is a weather and atmosphere keyword that fills a scene with visible fog, softening contrast and hiding distant details.",
    "bestUseCases": [
      "Mystery scenes, book covers, travel images, forests, urban mornings, and cinematic roads.",
      "Stock visuals about uncertainty, calm, weather, solitude, and quiet landscapes.",
      "Backgrounds where soft atmosphere and copy space are useful."
    ],
    "relatedKeywords": [
      "Atmospheric Haze",
      "Melancholic",
      "Mystical"
    ],
    "difficulty": "Beginner",
    "slug": "foggy",
    "categorySlug": "atmosphere",
    "hasDefinition": true,
    "promptExampleCount": 3,
    "faqCount": 2
  },
  {
    "title": "Negative Space",
    "category": "Composition",
    "published": true,
    "seoTitle": "Negative Space AI Prompt Keyword Guide",
    "metaDescription": "Learn how to use Negative Space in AI image prompts with examples, use cases, related keywords, and stock image guidance.",
    "heroImage": {
      "src": "/images/keywords/negative-space.png",
      "alt": "Negative Space AI prompt keyword hero image for the PromptAtlas Composition category",
      "title": "Negative Space - PromptAtlas Keyword Hero",
      "background": "linear-gradient(135deg, #fbfaf7 0%, #e5e0d8 48%, #89968f 100%)"
    },
    "overview": "Negative Space is the empty or quiet area around a subject. In AI prompts, it creates cleaner compositions and gives designers room for text, logos, or layout elements.",
    "bestUseCases": [
      "Website heroes, ad layouts, social graphics, slide covers, and product images.",
      "Minimalist still lifes, portraits, business visuals, and commercial backgrounds.",
      "Stock images where copy space is a key selling point."
    ],
    "relatedKeywords": [
      "Minimalist",
      "Business Presentation Background",
      "Rule of Thirds"
    ],
    "difficulty": "Beginner",
    "slug": "negative-space",
    "categorySlug": "composition",
    "hasDefinition": true,
    "promptExampleCount": 3,
    "faqCount": 2
  },
  {
    "title": "Symmetry",
    "category": "Composition",
    "published": true,
    "seoTitle": "Symmetry AI Prompt Keyword Guide",
    "metaDescription": "Learn how to use Symmetry in AI image prompts with examples, use cases, related keywords, and stock image guidance.",
    "heroImage": {
      "src": "/images/keywords/symmetry.png",
      "alt": "Symmetry AI prompt keyword hero image for the PromptAtlas Composition category",
      "title": "Symmetry - PromptAtlas Keyword Hero",
      "background": "linear-gradient(135deg, #fbfaf7 0%, #e5e0d8 48%, #89968f 100%)"
    },
    "overview": "Symmetry is a composition keyword where visual elements mirror or balance across a central axis. It creates order, stability, and a polished design feeling.",
    "bestUseCases": [
      "Architecture, hotel lobbies, museums, luxury interiors, and product arrangements.",
      "Brand images that need stability, refinement, trust, or formal elegance.",
      "Stock images about balance, order, structure, design, and premium service."
    ],
    "relatedKeywords": [
      "Center Composition",
      "Wide Angle",
      "Minimalist"
    ],
    "difficulty": "Beginner",
    "slug": "symmetry",
    "categorySlug": "composition",
    "hasDefinition": true,
    "promptExampleCount": 3,
    "faqCount": 2
  },
  {
    "title": "Leading Lines",
    "category": "Composition",
    "published": true,
    "seoTitle": "Leading Lines AI Prompt Keyword Guide",
    "metaDescription": "Learn how to use Leading Lines in AI image prompts with examples, use cases, related keywords, and stock image guidance.",
    "heroImage": {
      "src": "/images/keywords/leading-lines.png",
      "alt": "Leading Lines AI prompt keyword hero image for the PromptAtlas Composition category",
      "title": "Leading Lines - PromptAtlas Keyword Hero",
      "background": "linear-gradient(135deg, #fbfaf7 0%, #e5e0d8 48%, #89968f 100%)"
    },
    "overview": "Leading Lines are visual lines that guide the viewer's eye toward a subject or deeper into the scene. In AI prompts, they improve depth, direction, and composition.",
    "bestUseCases": [
      "Roads, train platforms, office corridors, city streets, architecture, and product perspective shots.",
      "Travel, business, transport, real estate, and cinematic scene prompts.",
      "Stock concepts about journey, progress, direction, focus, and opportunity."
    ],
    "relatedKeywords": [
      "Wide Angle",
      "Rule of Thirds",
      "Depth of Field"
    ],
    "difficulty": "Beginner",
    "slug": "leading-lines",
    "categorySlug": "composition",
    "hasDefinition": true,
    "promptExampleCount": 3,
    "faqCount": 2
  },
  {
    "title": "Rule of Thirds",
    "category": "Composition",
    "published": true,
    "seoTitle": "Rule of Thirds AI Prompt Keyword Guide",
    "metaDescription": "Learn how to use Rule of Thirds in AI image prompts with examples, use cases, related keywords, and stock image guidance.",
    "heroImage": {
      "src": "/images/keywords/rule-of-thirds.png",
      "alt": "Rule of Thirds AI prompt keyword hero image for the PromptAtlas Composition category",
      "title": "Rule of Thirds - PromptAtlas Keyword Hero",
      "background": "linear-gradient(135deg, #fbfaf7 0%, #e5e0d8 48%, #89968f 100%)"
    },
    "overview": "Rule of Thirds is a composition method that places the subject along imaginary thirds of the frame rather than exactly in the center.",
    "bestUseCases": [
      "Portraits, lifestyle scenes, travel images, product photos, and editorial layouts.",
      "Images where designers need room for text on one side.",
      "Stock concepts about work, lifestyle, travel, wellness, and storytelling."
    ],
    "relatedKeywords": [
      "Negative Space",
      "Leading Lines",
      "Center Composition"
    ],
    "difficulty": "Beginner",
    "slug": "rule-of-thirds",
    "categorySlug": "composition",
    "hasDefinition": true,
    "promptExampleCount": 3,
    "faqCount": 2
  },
  {
    "title": "Center Composition",
    "category": "Composition",
    "published": true,
    "seoTitle": "Center Composition AI Prompt Keyword Guide",
    "metaDescription": "Learn how to use Center Composition in AI image prompts with examples, use cases, related keywords, and stock image guidance.",
    "heroImage": {
      "src": "/images/keywords/center-composition.png",
      "alt": "Center Composition AI prompt keyword hero image for the PromptAtlas Composition category",
      "title": "Center Composition - PromptAtlas Keyword Hero",
      "background": "linear-gradient(135deg, #fbfaf7 0%, #e5e0d8 48%, #89968f 100%)"
    },
    "overview": "Center Composition places the main subject in the middle of the frame. It creates clarity, focus, and a direct visual message.",
    "bestUseCases": [
      "Product shots, portraits, icons, catalog images, posters, and brand hero assets.",
      "Commercial images where the subject should be instantly understood.",
      "Stock concepts about clarity, quality, identity, focus, and premium presentation."
    ],
    "relatedKeywords": [
      "Symmetry",
      "Studio Lighting",
      "Minimalist"
    ],
    "difficulty": "Beginner",
    "slug": "center-composition",
    "categorySlug": "composition",
    "hasDefinition": true,
    "promptExampleCount": 3,
    "faqCount": 2
  },
  {
    "title": "Wide Angle",
    "category": "Composition",
    "published": true,
    "seoTitle": "Wide Angle AI Prompt Keyword Guide",
    "metaDescription": "Learn how to use Wide Angle in AI image prompts with examples, use cases, related keywords, and stock image guidance.",
    "heroImage": {
      "src": "/images/keywords/wide-angle.png",
      "alt": "Wide Angle AI prompt keyword hero image for the PromptAtlas Composition category",
      "title": "Wide Angle - PromptAtlas Keyword Hero",
      "background": "linear-gradient(135deg, #fbfaf7 0%, #e5e0d8 48%, #89968f 100%)"
    },
    "overview": "Wide Angle is a lens and composition keyword that creates a broad field of view. It helps AI images show space, scale, and environmental context.",
    "bestUseCases": [
      "Real estate, architecture, hotel interiors, travel landscapes, city scenes, and large environments.",
      "Images where scale, immersion, or spatial storytelling matters.",
      "Stock concepts about opportunity, journey, innovation, freedom, and exploration."
    ],
    "relatedKeywords": [
      "Leading Lines",
      "Atmospheric Haze",
      "Symmetry"
    ],
    "difficulty": "Beginner",
    "slug": "wide-angle",
    "categorySlug": "composition",
    "hasDefinition": true,
    "promptExampleCount": 3,
    "faqCount": 2
  },
  {
    "title": "Close Up",
    "category": "Composition",
    "published": true,
    "seoTitle": "Close Up AI Prompt Keyword Guide",
    "metaDescription": "Learn how to use Close Up in AI image prompts with examples, use cases, related keywords, and stock image guidance.",
    "heroImage": {
      "src": "/images/keywords/close-up.png",
      "alt": "Close Up AI prompt keyword hero image for the PromptAtlas Composition category",
      "title": "Close Up - PromptAtlas Keyword Hero",
      "background": "linear-gradient(135deg, #fbfaf7 0%, #e5e0d8 48%, #89968f 100%)"
    },
    "overview": "Close Up is a framing keyword that brings the camera near the subject. It emphasizes detail, texture, expression, material, or product features.",
    "bestUseCases": [
      "Product details, skincare, food photography, jewelry, paper texture, packaging, and craft objects.",
      "Portrait details, hands, materials, ingredients, and premium surface finishes.",
      "Stock concepts about quality, care, detail, craftsmanship, flavor, and luxury."
    ],
    "relatedKeywords": [
      "Depth of Field",
      "Paper Texture",
      "Product Photography"
    ],
    "difficulty": "Beginner",
    "slug": "close-up",
    "categorySlug": "composition",
    "hasDefinition": true,
    "promptExampleCount": 3,
    "faqCount": 2
  },
  {
    "title": "Depth of Field",
    "category": "Composition",
    "published": true,
    "seoTitle": "Depth of Field AI Prompt Keyword Guide",
    "metaDescription": "Learn how to use Depth of Field in AI image prompts with examples, use cases, related keywords, and stock image guidance.",
    "heroImage": {
      "src": "/images/keywords/depth-of-field.png",
      "alt": "Depth of Field AI prompt keyword hero image for the PromptAtlas Composition category",
      "title": "Depth of Field - PromptAtlas Keyword Hero",
      "background": "linear-gradient(135deg, #fbfaf7 0%, #e5e0d8 48%, #89968f 100%)"
    },
    "overview": "Depth of Field describes how much of an image appears sharp versus blurred. In AI prompts, it often means a sharp subject with a softer foreground or background.",
    "bestUseCases": [
      "Portraits, product photography, food, workspaces, lifestyle scenes, and nature details.",
      "Images where the subject needs to stand out from a busy environment.",
      "Stock concepts about focus, quality, attention, professionalism, and detail."
    ],
    "relatedKeywords": [
      "Close Up",
      "Product Photography",
      "Cinematic Lighting"
    ],
    "difficulty": "Beginner",
    "slug": "depth-of-field",
    "categorySlug": "composition",
    "hasDefinition": true,
    "promptExampleCount": 3,
    "faqCount": 2
  },
  {
    "title": "Minimalist",
    "category": "Style",
    "published": true,
    "heroImage": {
      "src": "/images/keywords/minimalist.png",
      "alt": "Minimalist AI prompt keyword hero image for the PromptAtlas Style category",
      "title": "Minimalist - PromptAtlas Keyword Hero",
      "background": "linear-gradient(135deg, #fbfaf7 0%, #fbfaf7 52%, #dfe7e2 52% 72%, #b8c5ba 72% 100%)"
    },
    "overview": "Minimalist is a style keyword that emphasizes simplicity, clarity, and restraint. In AI image prompts, it helps remove visual clutter and creates images that feel calm, modern, and easy to use in real design projects. A minimalist image usually has fewer objects, cleaner backgrounds, more negative space, and a clearer focal point. This makes it especially useful for commercial work because designers often need images that can support text, branding, or layout elements. For beginners, Minimalist is one of the best keywords to use when a generated image feels too busy, decorative, or hard to read.",
    "bestUseCases": [
      "Product photography and ecommerce visuals where the item should be immediately clear. Minimalist prompts help reduce distractions around packaging, devices, furniture, cosmetics, and accessories.",
      "Business presentation backgrounds, website headers, and social media graphics that need copy space. The clean structure makes it easier for designers to place text over or beside the image.",
      "Interior and lifestyle imagery for wellness, productivity, home decor, architecture, and premium consumer brands. Minimalist scenes can feel calm, professional, and current.",
      "Stock concepts that need broad usability, such as focus, clarity, simplicity, modern work, calm living, organization, sustainability, and intentional design."
    ],
    "relatedKeywords": [
      "Morandi Palette",
      "Cinematic Lighting",
      "Volumetric Lighting"
    ],
    "difficulty": "Beginner",
    "slug": "minimalist",
    "categorySlug": "style",
    "hasDefinition": false,
    "promptExampleCount": 0,
    "faqCount": 0
  },
  {
    "title": "Brutalist",
    "category": "Style",
    "published": true,
    "seoTitle": "Brutalist AI Prompt Keyword Guide",
    "metaDescription": "Learn how to use Brutalist in AI image prompts with examples, use cases, related keywords, and stock image guidance.",
    "heroImage": {
      "src": "/images/keywords/brutalist.png",
      "alt": "Brutalist AI prompt keyword hero image for the PromptAtlas Style category",
      "title": "Brutalist - PromptAtlas Keyword Hero",
      "background": "linear-gradient(135deg, #ece7df 0%, #a9b6ad 48%, #4d5652 100%)"
    },
    "overview": "Brutalist is a style keyword inspired by raw concrete, strong geometry, massive forms, and honest materials. In AI prompts, it creates bold, architectural, and visually heavy imagery.",
    "bestUseCases": [
      "Architecture, cultural posters, fashion editorials, museums, galleries, and urban design.",
      "Brand visuals that need strength, structure, seriousness, or countercultural edge.",
      "Stock concepts about power, permanence, construction, design, and urban identity."
    ],
    "relatedKeywords": [
      "Hard Light",
      "Monochromatic Colors",
      "High Contrast Colors"
    ],
    "difficulty": "Intermediate",
    "slug": "brutalist",
    "categorySlug": "style",
    "hasDefinition": true,
    "promptExampleCount": 3,
    "faqCount": 2
  },
  {
    "title": "Cyberpunk",
    "category": "Style",
    "published": true,
    "seoTitle": "Cyberpunk AI Prompt Keyword Guide",
    "metaDescription": "Learn how to use Cyberpunk in AI image prompts with examples, use cases, related keywords, and stock image guidance.",
    "heroImage": {
      "src": "/images/keywords/cyberpunk.png",
      "alt": "Cyberpunk AI prompt keyword hero image for the PromptAtlas Style category",
      "title": "Cyberpunk - PromptAtlas Keyword Hero",
      "background": "linear-gradient(135deg, #ece7df 0%, #a9b6ad 48%, #4d5652 100%)"
    },
    "overview": "Cyberpunk is a futuristic urban style combining advanced technology, neon lighting, dense cities, rain, signage, and a darker sci-fi mood.",
    "bestUseCases": [
      "Gaming visuals, music covers, technology campaigns, posters, and sci-fi concept art.",
      "Futuristic cities, digital fashion, gadgets, vehicles, and nightlife scenes.",
      "Stock concepts about AI, virtual reality, future cities, data, and entertainment."
    ],
    "relatedKeywords": [
      "Neon Glow",
      "Futuristic",
      "Vibrant Colors"
    ],
    "difficulty": "Beginner",
    "slug": "cyberpunk",
    "categorySlug": "style",
    "hasDefinition": true,
    "promptExampleCount": 3,
    "faqCount": 2
  },
  {
    "title": "Japandi",
    "category": "Style",
    "published": true,
    "seoTitle": "Japandi AI Prompt Keyword Guide",
    "metaDescription": "Learn how to use Japandi in AI image prompts with examples, use cases, related keywords, and stock image guidance.",
    "heroImage": {
      "src": "/images/keywords/japandi.png",
      "alt": "Japandi AI prompt keyword hero image for the PromptAtlas Style category",
      "title": "Japandi - PromptAtlas Keyword Hero",
      "background": "linear-gradient(135deg, #ece7df 0%, #a9b6ad 48%, #4d5652 100%)"
    },
    "overview": "Japandi is a design style blending Japanese restraint with Scandinavian warmth. In AI prompts, it creates calm, natural, minimal interiors with refined materials.",
    "bestUseCases": [
      "Interior design, furniture catalogs, wellness spaces, hospitality, and home decor visuals.",
      "Lifestyle stock about calm living, intentional design, simplicity, and natural materials.",
      "Brand imagery for premium home goods, ceramics, textiles, and sustainable products."
    ],
    "relatedKeywords": [
      "Scandinavian",
      "Organic Modern",
      "Earth Tone Colors"
    ],
    "difficulty": "Beginner",
    "slug": "japandi",
    "categorySlug": "style",
    "hasDefinition": true,
    "promptExampleCount": 3,
    "faqCount": 2
  },
  {
    "title": "Scandinavian",
    "category": "Style",
    "published": true,
    "seoTitle": "Scandinavian AI Prompt Keyword Guide",
    "metaDescription": "Learn how to use Scandinavian in AI image prompts with examples, use cases, related keywords, and stock image guidance.",
    "heroImage": {
      "src": "/images/keywords/scandinavian.png",
      "alt": "Scandinavian AI prompt keyword hero image for the PromptAtlas Style category",
      "title": "Scandinavian - PromptAtlas Keyword Hero",
      "background": "linear-gradient(135deg, #ece7df 0%, #a9b6ad 48%, #4d5652 100%)"
    },
    "overview": "Scandinavian is a bright, functional design style using clean lines, pale wood, natural light, simple furniture, and practical warmth.",
    "bestUseCases": [
      "Interior design, real estate, furniture, home decor, lifestyle, and family imagery.",
      "Images about calm workspaces, cozy homes, simple living, and modern comfort.",
      "Commercial visuals for decor brands, blogs, catalogs, and hospitality."
    ],
    "relatedKeywords": [
      "Minimalist",
      "Japandi",
      "Soft Light"
    ],
    "difficulty": "Beginner",
    "slug": "scandinavian",
    "categorySlug": "style",
    "hasDefinition": true,
    "promptExampleCount": 3,
    "faqCount": 2
  },
  {
    "title": "Futuristic",
    "category": "Style",
    "published": true,
    "seoTitle": "Futuristic AI Prompt Keyword Guide",
    "metaDescription": "Learn how to use Futuristic in AI image prompts with examples, use cases, related keywords, and stock image guidance.",
    "heroImage": {
      "src": "/images/keywords/futuristic.png",
      "alt": "Futuristic AI prompt keyword hero image for the PromptAtlas Style category",
      "title": "Futuristic - PromptAtlas Keyword Hero",
      "background": "linear-gradient(135deg, #ece7df 0%, #a9b6ad 48%, #4d5652 100%)"
    },
    "overview": "Futuristic is a style keyword for images that suggest advanced technology, sleek design, innovation, and forward-looking environments.",
    "bestUseCases": [
      "Technology launches, AI visuals, SaaS backgrounds, concept vehicles, and modern architecture.",
      "Business imagery about innovation, automation, data, science, and future work.",
      "Product concepts involving electronics, mobility, wearables, and advanced materials."
    ],
    "relatedKeywords": [
      "Cool Color Palette",
      "Metallic Surface",
      "Cyberpunk"
    ],
    "difficulty": "Beginner",
    "slug": "futuristic",
    "categorySlug": "style",
    "hasDefinition": true,
    "promptExampleCount": 3,
    "faqCount": 2
  },
  {
    "title": "Retro Futurism",
    "category": "Style",
    "published": true,
    "seoTitle": "Retro Futurism AI Prompt Keyword Guide",
    "metaDescription": "Learn how to use Retro Futurism in AI image prompts with examples, use cases, related keywords, and stock image guidance.",
    "heroImage": {
      "src": "/images/keywords/retro-futurism.png",
      "alt": "Retro Futurism AI prompt keyword hero image for the PromptAtlas Style category",
      "title": "Retro Futurism - PromptAtlas Keyword Hero",
      "background": "linear-gradient(135deg, #ece7df 0%, #a9b6ad 48%, #4d5652 100%)"
    },
    "overview": "Retro Futurism is a style that imagines the future through the visual language of the past, especially mid-century space age design, vintage technology, and optimistic poster art.",
    "bestUseCases": [
      "Poster art, editorial illustrations, packaging concepts, merchandise, and entertainment visuals.",
      "Travel posters for imaginary destinations, space themes, and vintage-inspired campaigns.",
      "Stock concepts about nostalgia, imagination, innovation history, and playful futurism."
    ],
    "relatedKeywords": [
      "Futuristic",
      "Pastel Colors",
      "Warm Color Palette"
    ],
    "difficulty": "Intermediate",
    "slug": "retro-futurism",
    "categorySlug": "style",
    "hasDefinition": true,
    "promptExampleCount": 3,
    "faqCount": 2
  },
  {
    "title": "Organic Modern",
    "category": "Style",
    "published": true,
    "seoTitle": "Organic Modern AI Prompt Keyword Guide",
    "metaDescription": "Learn how to use Organic Modern in AI image prompts with examples, use cases, related keywords, and stock image guidance.",
    "heroImage": {
      "src": "/images/keywords/organic-modern.png",
      "alt": "Organic Modern AI prompt keyword hero image for the PromptAtlas Style category",
      "title": "Organic Modern - PromptAtlas Keyword Hero",
      "background": "linear-gradient(135deg, #ece7df 0%, #a9b6ad 48%, #4d5652 100%)"
    },
    "overview": "Organic Modern is a contemporary style that blends clean modern design with natural forms, earthy materials, warm neutrals, and tactile textures.",
    "bestUseCases": [
      "Interior design, spas, bathrooms, kitchens, furniture, ceramics, and wellness products.",
      "Brand images for natural beauty, sustainable products, hospitality, and home goods.",
      "Stock concepts about calm living, nature, premium simplicity, and tactile design."
    ],
    "relatedKeywords": [
      "Earth Tone Colors",
      "Japandi",
      "Marble Texture"
    ],
    "difficulty": "Beginner",
    "slug": "organic-modern",
    "categorySlug": "style",
    "hasDefinition": true,
    "promptExampleCount": 3,
    "faqCount": 2
  },
  {
    "title": "Morandi Palette",
    "category": "Color",
    "published": true,
    "heroImage": {
      "src": "/images/keywords/morandi-palette.png",
      "alt": "Morandi Palette AI prompt keyword hero image for the PromptAtlas Color category",
      "title": "Morandi Palette - PromptAtlas Keyword Hero",
      "background": "linear-gradient(135deg, #b9aaa0 0%, #d2c7bd 25%, #aeb9ad 25% 52%, #d8c4b2 52% 76%, #8f9a91 76% 100%)"
    },
    "overview": "Morandi Palette is a color keyword inspired by the quiet, dusty tones associated with painter Giorgio Morandi. In AI image prompts, it usually points the model toward muted, low-saturation colors such as dusty rose, warm gray, clay, sage, beige, soft blue, faded mauve, and stone. The effect is refined, calm, and slightly editorial. This palette is useful when you want an image to feel sophisticated without becoming cold or overly minimal. For beginners, Morandi Palette is a practical way to control color harmony. It can make a scene feel more tasteful, cohesive, and brand-ready, especially when default AI colors look too bright or artificial.",
    "bestUseCases": [
      "Beauty, skincare, fragrance, and wellness product imagery where the brand should feel calm, premium, and refined. The palette can make packaging feel more editorial.",
      "Interior design and home decor visuals that need a soft, sophisticated color story. Morandi tones work well with ceramics, linen, plaster, wood, stone, and natural light.",
      "Stationery, packaging, and branding mockups where the image should feel designer-friendly without strong visual noise. Muted colors leave room for typography and identity systems.",
      "Stock images for calm lifestyle concepts, slow living, creative work, handmade objects, modern homes, art direction, and boutique retail."
    ],
    "relatedKeywords": [
      "Minimalist",
      "Golden Hour",
      "Cinematic Lighting"
    ],
    "difficulty": "Intermediate",
    "slug": "morandi-palette",
    "categorySlug": "color",
    "hasDefinition": false,
    "promptExampleCount": 0,
    "faqCount": 0
  },
  {
    "title": "Pastel Colors",
    "category": "Color",
    "overview": "A soft color keyword using pale, gentle hues for friendly and airy visuals.",
    "bestUseCases": [
      "Beauty",
      "Children's products",
      "Wellness"
    ],
    "relatedKeywords": [
      "Dreamy",
      "Soft Light",
      "Morandi Palette"
    ],
    "difficulty": "Beginner",
    "slug": "pastel-colors",
    "categorySlug": "color",
    "hasDefinition": false,
    "promptExampleCount": 0,
    "faqCount": 0
  },
  {
    "title": "Warm Tones",
    "category": "Color",
    "published": true,
    "seoTitle": "Warm Tones AI Prompt Keyword Guide",
    "metaDescription": "Learn how to use Warm Tones in AI image prompts with examples, use cases, related keywords, and stock image guidance.",
    "heroImage": {
      "src": "/images/keywords/warm-tones.png",
      "alt": "Warm Tones AI prompt keyword hero image for the PromptAtlas Color category",
      "title": "Warm Tones - PromptAtlas Keyword Hero",
      "background": "linear-gradient(135deg, #d8a365 0%, #9aa982 48%, #6e879f 100%)"
    },
    "overview": "Warm Tones are colors with red, orange, yellow, peach, tan, clay, or golden undertones. They create comfort, optimism, energy, and human warmth.",
    "bestUseCases": [
      "Food, hospitality, family, travel, wellness, home decor, and cozy lifestyle images.",
      "Brand visuals that should feel caring, friendly, optimistic, or natural.",
      "Stock concepts about comfort, connection, warmth, creativity, and home."
    ],
    "relatedKeywords": [
      "Warm Color Palette",
      "Golden Hour",
      "Earth Tone Colors"
    ],
    "difficulty": "Beginner",
    "slug": "warm-tones",
    "categorySlug": "color",
    "hasDefinition": true,
    "promptExampleCount": 3,
    "faqCount": 2
  },
  {
    "title": "Cool Tones",
    "category": "Color",
    "published": true,
    "seoTitle": "Cool Tones AI Prompt Keyword Guide",
    "metaDescription": "Learn how to use Cool Tones in AI image prompts with examples, use cases, related keywords, and stock image guidance.",
    "heroImage": {
      "src": "/images/keywords/cool-tones.png",
      "alt": "Cool Tones AI prompt keyword hero image for the PromptAtlas Color category",
      "title": "Cool Tones - PromptAtlas Keyword Hero",
      "background": "linear-gradient(135deg, #d8a365 0%, #9aa982 48%, #6e879f 100%)"
    },
    "overview": "Cool Tones are colors with blue, green, cyan, teal, gray, or silver undertones. They create calm, clarity, professionalism, and modernity.",
    "bestUseCases": [
      "Healthcare, technology, SaaS, finance, architecture, wellness, and clean business imagery.",
      "Images about trust, focus, clarity, safety, innovation, and calm systems.",
      "Modern product scenes with glass, metal, cool lighting, and clean backgrounds."
    ],
    "relatedKeywords": [
      "Cool Color Palette",
      "High Key Lighting",
      "Neutral Colors"
    ],
    "difficulty": "Beginner",
    "slug": "cool-tones",
    "categorySlug": "color",
    "hasDefinition": true,
    "promptExampleCount": 3,
    "faqCount": 2
  },
  {
    "title": "Monochrome",
    "category": "Color",
    "published": true,
    "seoTitle": "Monochrome AI Prompt Keyword Guide",
    "metaDescription": "Learn how to use Monochrome in AI image prompts with examples, use cases, related keywords, and stock image guidance.",
    "heroImage": {
      "src": "/images/keywords/monochrome.png",
      "alt": "Monochrome AI prompt keyword hero image for the PromptAtlas Color category",
      "title": "Monochrome - PromptAtlas Keyword Hero",
      "background": "linear-gradient(135deg, #d8a365 0%, #9aa982 48%, #6e879f 100%)"
    },
    "overview": "Monochrome is a color approach using one color family or black-and-white values. It creates strong unity, simplicity, and graphic focus.",
    "bestUseCases": [
      "Fashion portraits, architecture, luxury products, posters, editorials, and brand campaigns.",
      "Images where shape and contrast matter more than varied color.",
      "Stock concepts about elegance, simplicity, identity, structure, and timelessness."
    ],
    "relatedKeywords": [
      "Monochromatic Colors",
      "Hard Light",
      "Brutalist"
    ],
    "difficulty": "Intermediate",
    "slug": "monochrome",
    "categorySlug": "color",
    "hasDefinition": true,
    "promptExampleCount": 3,
    "faqCount": 2
  },
  {
    "title": "Earth Tones",
    "category": "Color",
    "published": true,
    "seoTitle": "Earth Tones AI Prompt Keyword Guide",
    "metaDescription": "Learn how to use Earth Tones in AI image prompts with examples, use cases, related keywords, and stock image guidance.",
    "heroImage": {
      "src": "/images/keywords/earth-tones.png",
      "alt": "Earth Tones AI prompt keyword hero image for the PromptAtlas Color category",
      "title": "Earth Tones - PromptAtlas Keyword Hero",
      "background": "linear-gradient(135deg, #d8a365 0%, #9aa982 48%, #6e879f 100%)"
    },
    "overview": "Earth Tones are natural colors inspired by soil, stone, clay, plants, wood, and sand. They create a grounded, organic, and sustainable feeling.",
    "bestUseCases": [
      "Sustainable brands, natural beauty, wellness, interiors, packaging, ceramics, and food.",
      "Stock concepts about ecology, grounding, craft, home, organic living, and care.",
      "Commercial visuals that should feel warm, natural, and trustworthy."
    ],
    "relatedKeywords": [
      "Earth Tone Colors",
      "Organic Modern",
      "Warm Tones"
    ],
    "difficulty": "Beginner",
    "slug": "earth-tones",
    "categorySlug": "color",
    "hasDefinition": true,
    "promptExampleCount": 3,
    "faqCount": 2
  },
  {
    "title": "Muted Colors",
    "category": "Color",
    "overview": "A restrained palette with reduced saturation and understated contrast.",
    "bestUseCases": [
      "Luxury visuals",
      "Interiors",
      "Professional branding"
    ],
    "relatedKeywords": [
      "Moody",
      "Morandi Palette",
      "Minimalist"
    ],
    "difficulty": "Beginner",
    "slug": "muted-colors",
    "categorySlug": "color",
    "hasDefinition": false,
    "promptExampleCount": 0,
    "faqCount": 0
  },
  {
    "title": "High Contrast Colors",
    "category": "Color",
    "published": true,
    "seoTitle": "High Contrast Colors AI Prompt Keyword Guide",
    "metaDescription": "Learn how to use High Contrast Colors in AI image prompts with examples, use cases, related keywords, and stock image guidance.",
    "heroImage": {
      "src": "/images/keywords/high-contrast-colors.png",
      "alt": "High Contrast Colors AI prompt keyword hero image for the PromptAtlas Color category",
      "title": "High Contrast Colors - PromptAtlas Keyword Hero",
      "background": "linear-gradient(135deg, #d8a365 0%, #9aa982 48%, #6e879f 100%)"
    },
    "overview": "High Contrast Colors use strong differences in hue, value, or saturation to create visual impact. They help subjects stand out quickly.",
    "bestUseCases": [
      "Ads, posters, social thumbnails, product launches, sports campaigns, and music visuals.",
      "Images that need instant readability or strong visual hierarchy.",
      "Commercial concepts about energy, competition, confidence, action, and innovation."
    ],
    "relatedKeywords": [
      "Complementary Colors",
      "Vibrant Colors",
      "Hard Light"
    ],
    "difficulty": "Intermediate",
    "slug": "high-contrast-colors",
    "categorySlug": "color",
    "hasDefinition": true,
    "promptExampleCount": 3,
    "faqCount": 2
  },
  {
    "title": "Glass Reflection",
    "category": "Texture & Material",
    "published": true,
    "seoTitle": "Glass Reflection AI Prompt Keyword Guide",
    "metaDescription": "Learn how to use Glass Reflection in AI image prompts with examples, use cases, related keywords, and stock image guidance.",
    "heroImage": {
      "src": "/images/keywords/glass-reflection.png",
      "alt": "Glass Reflection AI prompt keyword hero image for the PromptAtlas Texture & Material category",
      "title": "Glass Reflection - PromptAtlas Keyword Hero",
      "background": "linear-gradient(135deg, #f1eee8 0%, #b8b0a3 48%, #6f6b63 100%)"
    },
    "overview": "Glass Reflection is a material keyword that emphasizes transparent, glossy, reflective, or refractive surfaces. It adds polish and depth to product and design images.",
    "bestUseCases": [
      "Beauty, fragrance, beverages, technology, luxury packaging, and product photography.",
      "Modern interiors, architecture, futuristic visuals, and reflective still lifes.",
      "Stock concepts about clarity, premium quality, transparency, innovation, and elegance."
    ],
    "relatedKeywords": [
      "Studio Lighting",
      "Futuristic",
      "Luxury Branding"
    ],
    "difficulty": "Intermediate",
    "slug": "glass-reflection",
    "categorySlug": "texture-and-material",
    "hasDefinition": true,
    "promptExampleCount": 3,
    "faqCount": 2
  },
  {
    "title": "Metallic Surface",
    "category": "Texture & Material",
    "published": true,
    "seoTitle": "Metallic Surface AI Prompt Keyword Guide",
    "metaDescription": "Learn how to use Metallic Surface in AI image prompts with examples, use cases, related keywords, and stock image guidance.",
    "heroImage": {
      "src": "/images/keywords/metallic-surface.png",
      "alt": "Metallic Surface AI prompt keyword hero image for the PromptAtlas Texture & Material category",
      "title": "Metallic Surface - PromptAtlas Keyword Hero",
      "background": "linear-gradient(135deg, #f1eee8 0%, #b8b0a3 48%, #6f6b63 100%)"
    },
    "overview": "Metallic Surface is a material keyword for reflective metal finishes such as chrome, steel, aluminum, brass, gold, silver, or brushed metal.",
    "bestUseCases": [
      "Technology products, watches, jewelry, vehicles, appliances, tools, and industrial design.",
      "Luxury goods, futuristic concepts, automotive visuals, and premium product campaigns.",
      "Stock concepts about strength, innovation, precision, durability, and quality."
    ],
    "relatedKeywords": [
      "Futuristic",
      "Studio Lighting",
      "Rim Light"
    ],
    "difficulty": "Intermediate",
    "slug": "metallic-surface",
    "categorySlug": "texture-and-material",
    "hasDefinition": true,
    "promptExampleCount": 3,
    "faqCount": 2
  },
  {
    "title": "Paper Texture",
    "category": "Texture & Material",
    "published": true,
    "seoTitle": "Paper Texture AI Prompt Keyword Guide",
    "metaDescription": "Learn how to use Paper Texture in AI image prompts with examples, use cases, related keywords, and stock image guidance.",
    "heroImage": {
      "src": "/images/keywords/paper-texture.png",
      "alt": "Paper Texture AI prompt keyword hero image for the PromptAtlas Texture & Material category",
      "title": "Paper Texture - PromptAtlas Keyword Hero",
      "background": "linear-gradient(135deg, #f1eee8 0%, #b8b0a3 48%, #6f6b63 100%)"
    },
    "overview": "Paper Texture is a material keyword that adds visible fibers, grain, folds, recycled surfaces, handmade edges, or printed paper detail.",
    "bestUseCases": [
      "Stationery, packaging, branding mockups, invitations, books, labels, and editorial backgrounds.",
      "Eco packaging, handmade goods, craft brands, and design portfolio visuals.",
      "Stock concepts about craft, sustainability, writing, planning, creativity, and print design."
    ],
    "relatedKeywords": [
      "Close Up",
      "Earth Tones",
      "Neutral Colors"
    ],
    "difficulty": "Beginner",
    "slug": "paper-texture",
    "categorySlug": "texture-and-material",
    "hasDefinition": true,
    "promptExampleCount": 3,
    "faqCount": 2
  },
  {
    "title": "Marble Texture",
    "category": "Texture & Material",
    "published": true,
    "seoTitle": "Marble Texture AI Prompt Keyword Guide",
    "metaDescription": "Learn how to use Marble Texture in AI image prompts with examples, use cases, related keywords, and stock image guidance.",
    "heroImage": {
      "src": "/images/keywords/marble-texture.png",
      "alt": "Marble Texture AI prompt keyword hero image for the PromptAtlas Texture & Material category",
      "title": "Marble Texture - PromptAtlas Keyword Hero",
      "background": "linear-gradient(135deg, #f1eee8 0%, #b8b0a3 48%, #6f6b63 100%)"
    },
    "overview": "Marble Texture is a material keyword for polished stone surfaces with natural veining. It suggests luxury, elegance, interiors, beauty, and premium product styling.",
    "bestUseCases": [
      "Luxury skincare, fragrance, jewelry, hospitality, bathrooms, kitchens, and premium still lifes.",
      "Backgrounds for product photography, packaging mockups, and elegant brand visuals.",
      "Stock concepts about luxury, refinement, beauty, wellness, quality, and timeless design."
    ],
    "relatedKeywords": [
      "Luxury Branding",
      "Glass Reflection",
      "Organic Modern"
    ],
    "difficulty": "Beginner",
    "slug": "marble-texture",
    "categorySlug": "texture-and-material",
    "hasDefinition": true,
    "promptExampleCount": 3,
    "faqCount": 2
  },
  {
    "title": "Business Presentation Background",
    "category": "Commercial Use",
    "published": true,
    "seoTitle": "Business Presentation Background AI Prompt Keyword Guide",
    "metaDescription": "Learn how to use Business Presentation Background in AI image prompts with examples, use cases, related keywords, and stock image guidance.",
    "heroImage": {
      "src": "/images/keywords/business-presentation-background.png",
      "alt": "Business Presentation Background AI prompt keyword hero image for the PromptAtlas Commercial Use category",
      "title": "Business Presentation Background - PromptAtlas Keyword Hero",
      "background": "linear-gradient(135deg, #edf1ee 0%, #c9d2cb 48%, #6f8375 100%)"
    },
    "overview": "Business Presentation Background is a commercial prompt keyword for clean, professional images designed to support slide decks, reports, webinars, and corporate layouts.",
    "bestUseCases": [
      "Pitch decks, annual reports, webinars, cover slides, corporate websites, and LinkedIn graphics.",
      "Backgrounds for finance, SaaS, consulting, healthcare, education, and technology brands.",
      "Stock assets where copy space and professional polish are more important than narrative detail."
    ],
    "relatedKeywords": [
      "Negative Space",
      "Neutral Colors",
      "Cool Color Palette"
    ],
    "difficulty": "Beginner",
    "slug": "business-presentation-background",
    "categorySlug": "commercial-use",
    "hasDefinition": true,
    "promptExampleCount": 3,
    "faqCount": 2
  },
  {
    "title": "Product Photography",
    "category": "Commercial Use",
    "published": true,
    "seoTitle": "Product Photography AI Prompt Keyword Guide",
    "metaDescription": "Learn how to use Product Photography in AI image prompts with examples, use cases, related keywords, and stock image guidance.",
    "heroImage": {
      "src": "/images/keywords/product-photography.png",
      "alt": "Product Photography AI prompt keyword hero image for the PromptAtlas Commercial Use category",
      "title": "Product Photography - PromptAtlas Keyword Hero",
      "background": "linear-gradient(135deg, #edf1ee 0%, #c9d2cb 48%, #6f8375 100%)"
    },
    "overview": "Product Photography is a prompt keyword for clear, sellable images focused on a product. It emphasizes lighting, staging, surface, material, and commercial clarity.",
    "bestUseCases": [
      "Ecommerce, product launches, packaging, beauty, electronics, food, furniture, and accessories.",
      "Hero images, catalog visuals, ads, social media campaigns, and landing pages.",
      "Stock concepts about retail, quality, design, shopping, innovation, and branding."
    ],
    "relatedKeywords": [
      "Studio Lighting",
      "Close Up",
      "Glass Reflection"
    ],
    "difficulty": "Beginner",
    "slug": "product-photography",
    "categorySlug": "commercial-use",
    "hasDefinition": true,
    "promptExampleCount": 3,
    "faqCount": 2
  },
  {
    "title": "Stock Image Design",
    "category": "Commercial Use",
    "published": true,
    "seoTitle": "Stock Image Design AI Prompt Keyword Guide",
    "metaDescription": "Learn how to use Stock Image Design in AI image prompts with examples, use cases, related keywords, and stock image guidance.",
    "heroImage": {
      "src": "/images/keywords/stock-image-design.png",
      "alt": "Stock Image Design AI prompt keyword hero image for the PromptAtlas Commercial Use category",
      "title": "Stock Image Design - PromptAtlas Keyword Hero",
      "background": "linear-gradient(135deg, #edf1ee 0%, #c9d2cb 48%, #6f8375 100%)"
    },
    "overview": "Stock Image Design is a prompt keyword for creating broad, reusable commercial visuals with clear concepts, clean composition, and licensing-friendly subjects.",
    "bestUseCases": [
      "Business concepts, lifestyle images, website headers, blog visuals, social templates, and ads.",
      "Generic but polished scenes about teamwork, productivity, wellness, technology, and learning.",
      "Images made for flexibility rather than one narrow campaign."
    ],
    "relatedKeywords": [
      "Business Presentation Background",
      "Rule of Thirds",
      "Negative Space"
    ],
    "difficulty": "Beginner",
    "slug": "stock-image-design",
    "categorySlug": "commercial-use",
    "hasDefinition": true,
    "promptExampleCount": 3,
    "faqCount": 2
  },
  {
    "title": "Luxury Branding",
    "category": "Commercial Use",
    "published": true,
    "seoTitle": "Luxury Branding AI Prompt Keyword Guide",
    "metaDescription": "Learn how to use Luxury Branding in AI image prompts with examples, use cases, related keywords, and stock image guidance.",
    "heroImage": {
      "src": "/images/keywords/luxury-branding.png",
      "alt": "Luxury Branding AI prompt keyword hero image for the PromptAtlas Commercial Use category",
      "title": "Luxury Branding - PromptAtlas Keyword Hero",
      "background": "linear-gradient(135deg, #edf1ee 0%, #c9d2cb 48%, #6f8375 100%)"
    },
    "overview": "Luxury Branding is a commercial style keyword for elegant, premium, restrained images that suggest quality, exclusivity, and high perceived value.",
    "bestUseCases": [
      "Perfume, skincare, jewelry, watches, hotels, fashion, packaging, and premium product launches.",
      "Brand identity visuals, website hero images, editorial ads, and social campaigns.",
      "Stock concepts about elegance, quality, exclusivity, refinement, and premium service."
    ],
    "relatedKeywords": [
      "Marble Texture",
      "Studio Lighting",
      "Muted Colors"
    ],
    "difficulty": "Intermediate",
    "slug": "luxury-branding",
    "categorySlug": "commercial-use",
    "hasDefinition": true,
    "promptExampleCount": 3,
    "faqCount": 2
  },
  {
    "title": "Pastel Colors",
    "category": "Color",
    "published": true,
    "seoTitle": "Pastel Colors AI Prompt Keyword Guide",
    "metaDescription": "Learn how to use Pastel Colors in AI image prompts for soft, friendly, commercial-ready visuals.",
    "heroImage": {
      "src": "/images/keywords/pastel-colors.png",
      "alt": "Pastel Colors AI prompt keyword hero image for the PromptAtlas Color category",
      "title": "Pastel Colors - PromptAtlas Keyword Hero",
      "background": "linear-gradient(135deg, #f8d9e7 0%, #d8e9f7 34%, #efe0ff 67%, #fff4cf 100%)"
    },
    "overview": "Pastel Colors are a beginner-friendly way to make AI images feel soft, clean, and emotionally light. They are especially helpful when default AI results look too saturated or visually loud. Pastels can make a product feel more approachable, an interior feel calm, or a social graphic feel cheerful without becoming aggressive. For stock image creators, this keyword works well because pastel images often support text overlays, seasonal campaigns, beauty brands, lifestyle blogs, and gentle product presentation.",
    "bestUseCases": [
      "Beauty, skincare, wellness, and lifestyle product images that need a gentle brand feeling.",
      "Stationery, packaging, social media templates, spring campaigns, and flat lays.",
      "Backgrounds for websites, presentations, ads, and ecommerce where text readability matters."
    ],
    "relatedKeywords": [
      "Muted Colors",
      "Neutral Colors",
      "Warm Color Palette"
    ],
    "difficulty": "Beginner",
    "slug": "pastel-colors",
    "categorySlug": "color",
    "hasDefinition": true,
    "promptExampleCount": 3,
    "faqCount": 2
  },
  {
    "title": "Muted Colors",
    "category": "Color",
    "published": true,
    "seoTitle": "Muted Colors AI Prompt Keyword Guide",
    "metaDescription": "Use Muted Colors in AI prompts to create refined, low-saturation visuals for branding, interiors, stock, and editorial images.",
    "heroImage": {
      "src": "/images/keywords/muted-colors.png",
      "alt": "Muted Colors AI prompt keyword hero image for the PromptAtlas Color category",
      "title": "Muted Colors - PromptAtlas Keyword Hero",
      "background": "linear-gradient(135deg, #9ca89a 0%, #c0aa9c 32%, #8d8a80 64%, #d8cbbd 100%)"
    },
    "overview": "Muted Colors are useful when you want AI-generated images to feel sophisticated instead of loud. They are common in interiors, lifestyle photography, fashion editorials, packaging, wellness brands, and business imagery. For stock creators, muted palettes can make images more flexible because they do not overpower text or brand elements. They also help avoid the overly saturated look that many AI images produce by default.",
    "bestUseCases": [
      "Interior design, furniture, home decor, and organic modern scenes.",
      "Professional business imagery, wellness branding, and lifestyle stock photos.",
      "Packaging, beauty, stationery, and editorial product images that need restraint."
    ],
    "relatedKeywords": [
      "Morandi Palette",
      "Neutral Colors",
      "Earth Tone Colors"
    ],
    "difficulty": "Beginner",
    "slug": "muted-colors",
    "categorySlug": "color",
    "hasDefinition": true,
    "promptExampleCount": 3,
    "faqCount": 2
  },
  {
    "title": "Warm Color Palette",
    "category": "Color",
    "published": true,
    "seoTitle": "Warm Color Palette AI Prompt Keyword Guide",
    "metaDescription": "Learn how warm color palettes shape mood in AI images for lifestyle, food, travel, interiors, and stock visuals.",
    "heroImage": {
      "src": "/images/keywords/warm-color-palette.png",
      "alt": "Warm Color Palette AI prompt keyword hero image for the PromptAtlas Color category",
      "title": "Warm Color Palette - PromptAtlas Keyword Hero",
      "background": "linear-gradient(135deg, #d88945 0%, #edb56f 34%, #c7644a 67%, #f5dec0 100%)"
    },
    "overview": "Warm Color Palette is a practical keyword for guiding emotional tone. It can make a breakfast scene feel cozy, a travel image feel sunny, or a brand visual feel more approachable. Warm palettes are strong for commercial images because they connect quickly with themes like comfort, care, family, food, hospitality, wellness, and optimism. For beginners, this keyword is easier to control than listing many individual colors.",
    "bestUseCases": [
      "Food, coffee, restaurants, hospitality, travel, and home lifestyle imagery.",
      "Wellness, family, seasonal campaigns, handmade products, and cozy interiors.",
      "Stock visuals about optimism, comfort, creativity, care, and connection."
    ],
    "relatedKeywords": [
      "Golden Hour",
      "Earth Tone Colors",
      "Pastel Colors"
    ],
    "difficulty": "Beginner",
    "slug": "warm-color-palette",
    "categorySlug": "color",
    "hasDefinition": true,
    "promptExampleCount": 3,
    "faqCount": 2
  },
  {
    "title": "Cool Color Palette",
    "category": "Color",
    "published": true,
    "seoTitle": "Cool Color Palette AI Prompt Keyword Guide",
    "metaDescription": "Use cool color palettes in AI prompts for calm, clean, technical, healthcare, and modern commercial visuals.",
    "heroImage": {
      "src": "/images/keywords/cool-color-palette.png",
      "alt": "Cool Color Palette AI prompt keyword hero image for the PromptAtlas Color category",
      "title": "Cool Color Palette - PromptAtlas Keyword Hero",
      "background": "linear-gradient(135deg, #7ea6bd 0%, #a9cfc7 34%, #6f8498 67%, #e8f1f0 100%)"
    },
    "overview": "Cool Color Palette is useful when you want an image to feel clear, composed, and modern. It is common in healthcare, technology, finance, architecture, SaaS, clean beauty, and wellness visuals. The palette can reduce emotional heat and make a design feel more trustworthy or focused. For AI creators, this keyword is helpful when a scene needs professionalism or calm rather than warmth and intimacy.",
    "bestUseCases": [
      "Healthcare, technology, SaaS, corporate, and science-related stock imagery.",
      "Modern architecture, clean interiors, glass materials, and futuristic product scenes.",
      "Visual concepts such as trust, clarity, focus, safety, innovation, and calm."
    ],
    "relatedKeywords": [
      "Neutral Colors",
      "Monochromatic Colors",
      "High Key Lighting"
    ],
    "difficulty": "Beginner",
    "slug": "cool-color-palette",
    "categorySlug": "color",
    "hasDefinition": true,
    "promptExampleCount": 3,
    "faqCount": 2
  },
  {
    "title": "Earth Tone Colors",
    "category": "Color",
    "published": true,
    "seoTitle": "Earth Tone Colors AI Prompt Keyword Guide",
    "metaDescription": "Use Earth Tone Colors in AI prompts for grounded, natural, sustainable, organic, and lifestyle-ready visuals.",
    "heroImage": {
      "src": "/images/keywords/earth-tone-colors.png",
      "alt": "Earth Tone Colors AI prompt keyword hero image for the PromptAtlas Color category",
      "title": "Earth Tone Colors - PromptAtlas Keyword Hero",
      "background": "linear-gradient(135deg, #8b6f4e 0%, #b99b6b 30%, #7a8a63 60%, #d7c4a4 100%)"
    },
    "overview": "Earth Tone Colors are useful for creating grounded, organic, and commercially current AI images. They are common in wellness branding, sustainable packaging, interiors, handmade products, food, outdoor lifestyle, and natural beauty campaigns. For stock creators, earth tones can communicate authenticity and trust without needing obvious eco symbols. They also work well in minimalist layouts because the palette is calm but still warm.",
    "bestUseCases": [
      "Sustainable brands, wellness products, natural cosmetics, food packaging, and handmade goods.",
      "Interior design, furniture, ceramics, linen, wood, stone, plants, and slow-living scenes.",
      "Stock concepts about nature, care, grounding, sustainability, craft, home, and wellness."
    ],
    "relatedKeywords": [
      "Warm Color Palette",
      "Muted Colors",
      "Neutral Colors"
    ],
    "difficulty": "Beginner",
    "slug": "earth-tone-colors",
    "categorySlug": "color",
    "hasDefinition": true,
    "promptExampleCount": 3,
    "faqCount": 2
  },
  {
    "title": "Monochromatic Colors",
    "category": "Color",
    "published": true,
    "seoTitle": "Monochromatic Colors AI Prompt Keyword Guide",
    "metaDescription": "Learn how to use monochromatic color palettes in AI prompts for cohesive, stylish, and design-ready visuals.",
    "heroImage": {
      "src": "/images/keywords/monochromatic-colors.png",
      "alt": "Monochromatic Colors AI prompt keyword hero image for the PromptAtlas Color category",
      "title": "Monochromatic Colors - PromptAtlas Keyword Hero",
      "background": "linear-gradient(135deg, #d9dedc 0%, #aeb8b4 34%, #74827c 67%, #34413d 100%)"
    },
    "overview": "Monochromatic Colors are useful when an AI image needs strong cohesion and a design-led feel. Because the palette is limited, the viewer pays more attention to form, light, texture, and layout. This can make images feel editorial, premium, minimal, or graphic. For stock creators, monochromatic images can be useful for backgrounds, posters, fashion, architecture, product shots, and brand campaigns where color consistency matters.",
    "bestUseCases": [
      "Editorial fashion, architecture, product photography, and premium brand visuals.",
      "Abstract backgrounds, presentation covers, posters, and social media designs.",
      "Stock concepts where unity, focus, elegance, simplicity, or graphic impact matters."
    ],
    "relatedKeywords": [
      "Neutral Colors",
      "Cool Color Palette",
      "Complementary Colors"
    ],
    "difficulty": "Intermediate",
    "slug": "monochromatic-colors",
    "categorySlug": "color",
    "hasDefinition": true,
    "promptExampleCount": 3,
    "faqCount": 2
  },
  {
    "title": "Complementary Colors",
    "category": "Color",
    "published": true,
    "seoTitle": "Complementary Colors AI Prompt Keyword Guide",
    "metaDescription": "Use Complementary Colors in AI prompts to create strong contrast, visual energy, and commercial impact.",
    "heroImage": {
      "src": "/images/keywords/complementary-colors.png",
      "alt": "Complementary Colors AI prompt keyword hero image for the PromptAtlas Color category",
      "title": "Complementary Colors - PromptAtlas Keyword Hero",
      "background": "linear-gradient(135deg, #236c9f 0%, #73a9c5 45%, #e2843f 45%, #f2c27c 100%)"
    },
    "overview": "Complementary Colors are useful when an AI image needs to stand out quickly. The contrast can make a subject pop, create visual tension, and improve thumbnail impact. This keyword is common in movie posters, sports ads, product campaigns, music visuals, gaming art, and modern editorial imagery. For beginners, the key is balance: complementary palettes work best when one color leads and the opposite color supports it.",
    "bestUseCases": [
      "Advertising, sports, entertainment, gaming, and product launch visuals.",
      "Posters, thumbnails, social ads, and campaign images that need fast visual impact.",
      "Stock concepts about energy, contrast, competition, innovation, action, and nightlife."
    ],
    "relatedKeywords": [
      "Vibrant Colors",
      "Monochromatic Colors",
      "Cool Color Palette"
    ],
    "difficulty": "Intermediate",
    "slug": "complementary-colors",
    "categorySlug": "color",
    "hasDefinition": true,
    "promptExampleCount": 3,
    "faqCount": 2
  },
  {
    "title": "Analogous Colors",
    "category": "Color",
    "published": true,
    "seoTitle": "Analogous Colors AI Prompt Keyword Guide",
    "metaDescription": "Learn how Analogous Colors create harmonious AI images for interiors, branding, lifestyle, and stock visuals.",
    "heroImage": {
      "src": "/images/keywords/analogous-colors.png",
      "alt": "Analogous Colors AI prompt keyword hero image for the PromptAtlas Color category",
      "title": "Analogous Colors - PromptAtlas Keyword Hero",
      "background": "linear-gradient(135deg, #6b9b73 0%, #68aaa0 34%, #6c97bd 67%, #cfe2dc 100%)"
    },
    "overview": "Analogous Colors are useful when you want an AI image to feel harmonious and easy to look at. Because the colors are related, the image often feels more cohesive and less visually jarring. This makes the keyword helpful for interior design, nature scenes, wellness branding, beauty campaigns, fashion styling, and editorial backgrounds. For beginners, Analogous Colors are easier to control than complex palettes because the colors naturally belong together.",
    "bestUseCases": [
      "Interior design, fashion styling, landscape, wellness, beauty, and calm lifestyle visuals.",
      "Brand images that need a cohesive color system without high contrast.",
      "Stock concepts such as harmony, balance, calm, nature, creativity, and design."
    ],
    "relatedKeywords": [
      "Muted Colors",
      "Earth Tone Colors",
      "Pastel Colors"
    ],
    "difficulty": "Beginner",
    "slug": "analogous-colors",
    "categorySlug": "color",
    "hasDefinition": true,
    "promptExampleCount": 3,
    "faqCount": 2
  },
  {
    "title": "Vibrant Colors",
    "category": "Color",
    "published": true,
    "seoTitle": "Vibrant Colors AI Prompt Keyword Guide",
    "metaDescription": "Use Vibrant Colors in AI prompts for energetic, eye-catching commercial images, ads, posters, and social visuals.",
    "heroImage": {
      "src": "/images/keywords/vibrant-colors.png",
      "alt": "Vibrant Colors AI prompt keyword hero image for the PromptAtlas Color category",
      "title": "Vibrant Colors - PromptAtlas Keyword Hero",
      "background": "linear-gradient(135deg, #ef476f 0%, #ffd166 30%, #06d6a0 60%, #118ab2 100%)"
    },
    "overview": "Vibrant Colors are useful when you want an AI image to grab attention quickly. They can make products look exciting, posters feel energetic, and social content stand out in feeds. This keyword is powerful for commercial creators, but it needs control. Too many saturated colors can feel chaotic or cheap. The best vibrant images usually have a clear subject, strong composition, and a limited set of bold colors.",
    "bestUseCases": [
      "Social media ads, event posters, music visuals, gaming art, fashion, and youth-oriented campaigns.",
      "Product launches, beverages, sports, tech accessories, toys, and promotional graphics.",
      "Stock concepts such as energy, creativity, celebration, innovation, summer, fun, and action."
    ],
    "relatedKeywords": [
      "Complementary Colors",
      "Pastel Colors",
      "Warm Color Palette"
    ],
    "difficulty": "Intermediate",
    "slug": "vibrant-colors",
    "categorySlug": "color",
    "hasDefinition": true,
    "promptExampleCount": 3,
    "faqCount": 2
  },
  {
    "title": "Neutral Colors",
    "category": "Color",
    "published": true,
    "seoTitle": "Neutral Colors AI Prompt Keyword Guide",
    "metaDescription": "Use Neutral Colors in AI prompts to create timeless, flexible, brand-friendly images for stock and commercial design.",
    "heroImage": {
      "src": "/images/keywords/neutral-colors.png",
      "alt": "Neutral Colors AI prompt keyword hero image for the PromptAtlas Color category",
      "title": "Neutral Colors - PromptAtlas Keyword Hero",
      "background": "linear-gradient(135deg, #eee8dd 0%, #c8bba9 34%, #8f8b84 67%, #2f312f 100%)"
    },
    "overview": "Neutral Colors are among the most commercially useful palette keywords. They help AI images feel clean, versatile, and layout-friendly. Neutral images can support text overlays, product packaging, editorial design, websites, and presentations without competing with brand colors. For stock creators, this is a practical keyword because buyers often need visuals that can blend into many design systems.",
    "bestUseCases": [
      "Product photography, packaging mockups, business visuals, interiors, and presentation backgrounds.",
      "Beauty, wellness, home decor, finance, SaaS, and premium lifestyle imagery.",
      "Stock concepts such as simplicity, clarity, professionalism, calm, quality, and timeless design."
    ],
    "relatedKeywords": [
      "Muted Colors",
      "Monochromatic Colors",
      "Cool Color Palette"
    ],
    "difficulty": "Beginner",
    "slug": "neutral-colors",
    "categorySlug": "color",
    "hasDefinition": true,
    "promptExampleCount": 3,
    "faqCount": 2
  },
  {
    "title": "Side Lighting",
    "category": "Lighting",
    "published": true,
    "seoTitle": "Side Lighting: Enhance Depth and Drama in Photography",
    "metaDescription": "Discover side lighting, its impact on mood, depth, and texture in images. Learn best uses, examples, and commercial applications for stunning visuals.",
    "heroImage": {
      "src": "/images/keywords/side-lighting.png",
      "alt": "Portrait of a woman illuminated with side lighting creating dramatic shadows and depth",
      "title": "Side Lighting Portrait Example",
      "background": "linear-gradient(135deg, #1f2523 0%, #8d6a45 48%, #f3dfb8 100%)"
    },
    "overview": "Side lighting is a powerful lighting technique used in photography and visual arts where light strikes the subject from one side. This approach emphasizes contours, textures, and shapes by casting shadows that add depth and drama. Unlike frontal lighting, which minimizes shadows, side lighting accentuates details and forms, making the subject appear more three-dimensional. It is widely used to evoke mood, reveal surface intricacies, and create dynamic compositions. Whether in portrait, still life, or product photography, side lighting allows artists to play with contrast and emphasize specific features while maintaining a naturalistic look.",
    "bestUseCases": [
      "Portrait photography to highlight facial structure and expression",
      "Still life photography to emphasize texture and detail",
      "Product photography to create appealing dimensionality and form"
    ],
    "relatedKeywords": [
      "Rembrandt Lighting",
      "Backlighting",
      "Soft Lighting"
    ],
    "difficulty": "Beginner",
    "slug": "side-lighting",
    "categorySlug": "lighting",
    "hasDefinition": true,
    "promptExampleCount": 3,
    "faqCount": 3
  },
  {
    "title": "Butterfly Lighting",
    "category": "Lighting",
    "published": true,
    "seoTitle": "Butterfly Lighting: Essential Portrait Photography Technique",
    "metaDescription": "Discover Butterfly Lighting, a flattering portrait lighting style producing symmetrical shadows for studio and natural light photography. Perfect for beginners.",
    "heroImage": {
      "src": "/images/keywords/butterfly-lighting.png",
      "alt": "Studio portrait of a woman with butterfly lighting casting a butterfly-shaped shadow under her nose",
      "title": "Classic Butterfly Lighting Portrait Setup",
      "background": "linear-gradient(135deg, #1f2523 0%, #8d6a45 48%, #f3dfb8 100%)"
    },
    "overview": "Butterfly Lighting, also known as Paramount Lighting, is a classic portrait lighting setup ideal for flattering facial features. By placing the main light source centered and elevated in front of the subject, it casts a subtle butterfly-shaped shadow beneath the nose, enhancing the cheekbones and jawline. This technique provides a glamorous and clean look, often seen in vintage Hollywood portraits and contemporary beauty photography. It works well with various light modifiers such as softboxes or beauty dishes, which help create smooth, even illumination across the face. While typically used in studio settings, Butterfly Lighting can also be adapted for outdoor shoots with reflectors or natural overhead sunlight.",
    "bestUseCases": [
      "Beauty and fashion portrait photography emphasizing facial symmetry",
      "Studio headshots requiring flattering and even light",
      "Glamour photography aiming for vintage or classic Hollywood looks"
    ],
    "relatedKeywords": [
      "ParamountLighting",
      "BeautyDishLighting",
      "SoftboxPortrait"
    ],
    "difficulty": "Beginner",
    "slug": "butterfly-lighting",
    "categorySlug": "lighting",
    "hasDefinition": true,
    "promptExampleCount": 3,
    "faqCount": 3
  },
  {
    "title": "Practical Lighting",
    "category": "Lighting",
    "published": true,
    "seoTitle": "Practical Lighting: Essential Guide for Realistic Illumination",
    "metaDescription": "Explore Practical Lighting basics, uses, and prompts for realistic lighting in AI images. Perfect for design, photography, and commercial projects.",
    "heroImage": {
      "src": "/images/keywords/practical-lighting.png",
      "alt": "Warm interior scene illuminated by practical table lamps casting soft, realistic shadows",
      "title": "Cozy Living Room with Practical Lighting",
      "background": "linear-gradient(135deg, #1f2523 0%, #8d6a45 48%, #f3dfb8 100%)"
    },
    "overview": "Practical lighting is a fundamental concept in photography, cinematography, and digital art where the light source is part of the scene itself. Unlike external or off-camera lighting, practical lights are tangible fixtures within the visual frame, such as table lamps, street lamps, or neon signs. These lights serve to naturally illuminate subjects and spaces, contributing to the ambiance and realism of the scene. In AI-generated imagery, utilizing practical lighting enhances authenticity and adds depth by mimicking natural illumination behaviors. This technique is essential for creating immersive environments with believable light and shadow interplay, making it a favorite among artists and visual storytellers.",
    "bestUseCases": [
      "Interior design visualizations showcasing ambient lighting",
      "Portrait photography emphasizing natural light sources like lamps",
      "Film and animation scenes requiring authentic mood lighting"
    ],
    "relatedKeywords": [
      "Ambient Lighting",
      "Cinematic Lighting",
      "Interior Lighting"
    ],
    "difficulty": "Beginner",
    "slug": "practical-lighting",
    "categorySlug": "lighting",
    "hasDefinition": true,
    "promptExampleCount": 3,
    "faqCount": 3
  },
  {
    "title": "Silhouette Lighting",
    "category": "Lighting",
    "published": true,
    "seoTitle": "Silhouette Lighting: Mastering Dramatic Light and Shadow Effects",
    "metaDescription": "Discover Silhouette Lighting, a photography technique creating striking contrasts and dramatic moods by backlighting subjects for bold outlines and shadow play.",
    "heroImage": {
      "src": "/images/keywords/silhouette-lighting.png",
      "alt": "Silhouette of a person standing against a vibrant orange sunset sky with strong backlighting",
      "title": "Silhouette Lighting at Sunset",
      "background": "linear-gradient(135deg, #1f2523 0%, #8d6a45 48%, #f3dfb8 100%)"
    },
    "overview": "Silhouette Lighting is a powerful method used by photographers and visual artists to create images that emphasize shape, form, and mood. By positioning a strong light source behind the subject, the subject itself becomes a dark silhouette, stripped of detail but rich in expressive outlines. This technique can evoke mystery, drama, or elegance depending on the composition and context. It is widely applicable across genres, from portraits and nature photography to commercial and editorial imagery. The minimalist visual impact of silhouette lighting makes it a favorite for delivering compelling visuals that focus on contours and compositions rather than intricate details.",
    "bestUseCases": [
      "Creating striking profile portraits with strong mood",
      "Emphasizing natural forms like trees or animals in outdoor photography",
      "Designing dramatic backgrounds for product photography and advertising"
    ],
    "relatedKeywords": [
      "Backlight Photography",
      "Shadow Play",
      "Dramatic Lighting"
    ],
    "difficulty": "Beginner",
    "slug": "silhouette-lighting",
    "categorySlug": "lighting",
    "hasDefinition": true,
    "promptExampleCount": 3,
    "faqCount": 3
  },
  {
    "title": "Noir Lighting",
    "category": "Lighting",
    "published": true,
    "seoTitle": "Noir Lighting: Mastering Dramatic Shadows in Photography",
    "metaDescription": "Discover Noir Lighting, a dramatic lighting style using high contrast and shadows to create mood. Perfect for photographers and AI artists.",
    "heroImage": {
      "src": "/images/keywords/noir-lighting.png",
      "alt": "Portrait of person illuminated by dramatic noir lighting with strong shadows and high contrast",
      "title": "Dramatic Noir Lighting Portrait",
      "background": "linear-gradient(135deg, #1f2523 0%, #8d6a45 48%, #f3dfb8 100%)"
    },
    "overview": "Noir Lighting is a powerful style used to convey mystery, suspense, or classic elegance by playing with deep shadows and stark light contrasts. Originating from the mid-20th century film noir genre, this lighting style uses minimal light sources to cast dramatic shadows, emphasizing shapes and contours. It evokes an intense mood while often simplifying the visual elements, focusing the viewer's attention on specific parts of the composition. Noir Lighting is versatile, used in photography, film, and digital art to add emotional depth and a cinematic feel. Artists and photographers employ it to create visually compelling images that engage the audience with their enigmatic atmosphere.",
    "bestUseCases": [
      "Dramatic portrait photography highlighting facial features",
      "Film noir or mystery-themed digital art compositions",
      "Advertising campaigns aiming for a sophisticated or moody tone"
    ],
    "relatedKeywords": [
      "Chiaroscuro Lighting",
      "Cinematic Lighting",
      "Moody Portrait Lighting"
    ],
    "difficulty": "Intermediate",
    "slug": "noir-lighting",
    "categorySlug": "lighting",
    "hasDefinition": true,
    "promptExampleCount": 3,
    "faqCount": 3
  },
  {
    "title": "Cozy Atmosphere",
    "category": "Atmosphere",
    "published": true,
    "seoTitle": "Cozy Atmosphere: Creating Warm and Inviting Spaces",
    "metaDescription": "Discover how to craft a cozy atmosphere in AI imagery with warm lighting, soft textures, and intimate settings. Perfect for enhancing mood and comfort.",
    "heroImage": {
      "src": "/images/keywords/cozy-atmosphere.png",
      "alt": "Warm and inviting living room with soft lighting and plush cushions creating a cozy atmosphere",
      "title": "Cozy Atmosphere in a Warm Living Room",
      "background": "linear-gradient(135deg, #dfe7e5 0%, #9ca8a3 48%, #5f6967 100%)"
    },
    "overview": "Cozy atmosphere is an aesthetic concept used in various visual arts to evoke feelings of comfort, warmth, and intimacy. It typically incorporates elements such as warm color palettes, soft textures, and ambient lighting to create inviting and relaxing environments. Whether depicted in interior design, photography, or AI-generated art, a cozy atmosphere helps convey emotions of safety and homeliness. Artists and creators often utilize this ambiance to engage viewers on an emotional level, making them feel welcomed and at ease. This ambiance translates well across seasonal themes, especially during autumn and winter, where warm environments contrast the cold outside world.",
    "bestUseCases": [
      "Interior design visualizations for home decor brands",
      "Seasonal marketing campaigns emphasizing warmth and comfort",
      "Editorial hero images for lifestyle and wellness articles"
    ],
    "relatedKeywords": [
      "Warm Lighting",
      "Intimate Spaces",
      "Comforting Textures"
    ],
    "difficulty": "Beginner",
    "slug": "cozy-atmosphere",
    "categorySlug": "atmosphere",
    "hasDefinition": true,
    "promptExampleCount": 3,
    "faqCount": 3
  },
  {
    "title": "Surreal Atmosphere",
    "category": "Atmosphere",
    "published": true,
    "seoTitle": "Surreal Atmosphere: Creating Dreamlike AI Art Environments",
    "metaDescription": "Explore surreal atmosphere prompts to create dreamlike AI-generated images with unique lighting and surreal elements for creative projects.",
    "heroImage": {
      "src": "/images/keywords/surreal-atmosphere.png",
      "alt": "Dreamlike surreal atmosphere with floating geometric shapes in a misty violet forest",
      "title": "Surreal Atmosphere in a Misty Forest",
      "background": "linear-gradient(135deg, #dfe7e5 0%, #9ca8a3 48%, #5f6967 100%)"
    },
    "overview": "Surreal atmosphere in AI-generated imagery refers to the creation of scenes that evoke a dreamlike or otherworldly mood. By blending realistic details with fantastical or impossible elements, these images stimulate imagination and curiosity. The atmosphere often employs unexpected lighting, unconventional perspectives, and imaginative compositions to challenge the viewer’s perception of reality. This style is widely used in art, storytelling, and advertising to convey unique concepts or evoke specific emotions. Surreal atmospheres encourage viewers to explore beyond ordinary experiences, creating memorable and visually engaging content.",
    "bestUseCases": [
      "Concept art for fantasy or sci-fi projects",
      "Marketing visuals that require attention-grabbing surreal elements",
      "Editorial illustrations for articles exploring abstract or psychological themes"
    ],
    "relatedKeywords": [
      "Dreamlike Lighting",
      "Fantastical Environment",
      "Abstract Mood"
    ],
    "difficulty": "Intermediate",
    "slug": "surreal-atmosphere",
    "categorySlug": "atmosphere",
    "hasDefinition": true,
    "promptExampleCount": 3,
    "faqCount": 2
  },
  {
    "title": "Nostalgic Mood",
    "category": "Atmosphere",
    "published": true,
    "seoTitle": "Nostalgic Mood: Capturing Emotions in AI Art",
    "metaDescription": "Explore the Nostalgic Mood keyword to evoke warm memories and timeless emotions in AI-generated images. Perfect for atmospheric digital art.",
    "heroImage": {
      "src": "/images/keywords/nostalgic-mood.png",
      "alt": "Warm sunlit autumn park bench evoking nostalgic memories with soft shadows and golden hues",
      "title": "Nostalgic Mood Autumn Park Scene",
      "background": "linear-gradient(135deg, #dfe7e5 0%, #9ca8a3 48%, #5f6967 100%)"
    },
    "overview": "The Nostalgic Mood in AI image generation centers around creating visuals that elicit feelings of fond remembrance and emotional warmth. This atmosphere leverages warm and muted tones, soft focus or gentle lighting, and subtle vintage or retro elements to create a connection to the past. It is widely used to convey stories or moments that recall simpler times, cherished memories, or timeless beauty. Incorporating Nostalgic Mood enhances the emotional depth of an image, making it resonate deeply with viewers by sparking familiar feelings of comfort and reminiscence.",
    "bestUseCases": [
      "Creating editorial hero images that convey emotional storytelling",
      "Designing marketing visuals for vintage or retro-inspired brands",
      "Producing movie or book cover art that emphasizes sentimental themes"
    ],
    "relatedKeywords": [
      "Warm Atmosphere",
      "Sentimental Vibes",
      "Retro Aesthetic"
    ],
    "difficulty": "Beginner",
    "slug": "nostalgic-mood",
    "categorySlug": "atmosphere",
    "hasDefinition": true,
    "promptExampleCount": 3,
    "faqCount": 3
  },
  {
    "title": "Rainy Atmosphere",
    "category": "Atmosphere",
    "published": true,
    "seoTitle": "Rainy Atmosphere: Creating Moody AI Imagery",
    "metaDescription": "Explore how to create rainy atmosphere scenes with AI prompts. Learn its characteristics, uses, and commercial potential in atmospheric image generation.",
    "heroImage": {
      "src": "/images/keywords/rainy-atmosphere.png",
      "alt": "City street illuminated by neon lights under a rainy atmosphere with wet reflective pavement and overcast sky",
      "title": "Rainy Atmosphere Urban Night Scene",
      "background": "linear-gradient(135deg, #dfe7e5 0%, #9ca8a3 48%, #5f6967 100%)"
    },
    "overview": "Rainy Atmosphere in AI-generated imagery involves recreating the nuanced conditions of rainfall and its effects on the environment. This atmosphere is characterized by clouds dense with moisture, soft and diffused lighting due to overcast conditions, and surfaces that appear slick or reflective from water. By simulating these conditions, artists can evoke moods ranging from somber and contemplative to calm and refreshing. The presence of rain adds dynamic elements like visible drops or mist, enhancing realism and emotional depth. Such atmospheres are widely used to depict urban scenes, nature, and cinematic moments where weather impacts the narrative tone.",
    "bestUseCases": [
      "Creating cinematic cityscapes with wet streets and glowing reflections",
      "Depicting contemplative or emotional human portraits under rain",
      "Enhancing nature scenes with rain-dappled leaves and misty backgrounds"
    ],
    "relatedKeywords": [
      "Overcast Sky",
      "Wet Surfaces",
      "Foggy Environment"
    ],
    "difficulty": "Beginner",
    "slug": "rainy-atmosphere",
    "categorySlug": "atmosphere",
    "hasDefinition": true,
    "promptExampleCount": 3,
    "faqCount": 2
  },
  {
    "title": "Peaceful Atmosphere",
    "category": "Atmosphere",
    "published": true,
    "seoTitle": "Peaceful Atmosphere - Creating Calm and Serenity in Images",
    "metaDescription": "Explore how to create a peaceful atmosphere in AI-generated images with refined lighting and realistic materials for calm, serene scenes.",
    "heroImage": {
      "src": "/images/keywords/peaceful-atmosphere.png",
      "alt": "Calm minimalist living room with soft natural light creating a peaceful atmosphere",
      "title": "Peaceful Atmosphere in Minimalist Interior",
      "background": "linear-gradient(135deg, #dfe7e5 0%, #9ca8a3 48%, #5f6967 100%)"
    },
    "overview": "The peaceful atmosphere keyword is essential for generating AI images that convey calmness and tranquility. By focusing on soft lighting, harmonious colors, and minimalistic composition, images create a soothing visual experience that resonates emotionally with viewers. This atmosphere works well across various scenarios—from serene nature scenes to quiet indoor settings—highlighting moments of stillness and repose. Achieving a peaceful atmosphere means balancing subtle details that reduce visual noise, promoting relaxation and introspection. It's ideal for enhancing content that requires a sense of calm and well-being without overwhelming complexity.",
    "bestUseCases": [
      "Designing wellness or meditation app visuals",
      "Creating editorial hero images for lifestyle articles",
      "Enhancing background scenes in calming social media content"
    ],
    "relatedKeywords": [
      "Calm Mood",
      "Tranquil Environment",
      "Serene Landscape"
    ],
    "difficulty": "Beginner",
    "slug": "peaceful-atmosphere",
    "categorySlug": "atmosphere",
    "hasDefinition": true,
    "promptExampleCount": 3,
    "faqCount": 3
  },
  {
    "title": "Flat Lay Composition",
    "category": "Composition",
    "published": true,
    "seoTitle": "Flat Lay Composition: Essential Guide to Perfect Top-Down Shots",
    "metaDescription": "Discover flat lay composition techniques to create stunning top-down images. Learn benefits, use cases, and prompt examples for flawless AI-generated photos.",
    "heroImage": {
      "src": "/images/keywords/flat-lay-composition.png",
      "alt": "Modern flat lay composition of everyday objects arranged neatly on a white surface with soft lighting",
      "title": "Flat Lay Composition of Everyday Objects",
      "background": "linear-gradient(135deg, #fbfaf7 0%, #e5e0d8 48%, #89968f 100%)"
    },
    "overview": "Flat lay composition is a popular style in photography and design where subjects are arranged on a flat surface and captured from above. This approach highlights details, textures, and relationships between objects, often resulting in visually appealing and organized images. It is widely used in product photography, social media content, and editorial spreads to present multiple items cohesively. The flat lay style helps viewers grasp all elements at once, making it ideal for storytelling or showcasing diverse products in a single frame. Lighting is typically even and soft to reduce shadows, enhancing clarity and realism.",
    "bestUseCases": [
      "Showcasing product collections in e-commerce and advertising",
      "Creating visually appealing social media posts and blog headers",
      "Designing editorial layouts and mood boards for lifestyle content"
    ],
    "relatedKeywords": [
      "Overhead Photography",
      "Top-Down View",
      "Product Photography"
    ],
    "difficulty": "Beginner",
    "slug": "flat-lay-composition",
    "categorySlug": "composition",
    "hasDefinition": true,
    "promptExampleCount": 3,
    "faqCount": 3
  },
  {
    "title": "Diagonal Composition",
    "category": "Composition",
    "published": true,
    "seoTitle": "Diagonal Composition in Photography: A Beginner's Guide",
    "metaDescription": "Learn about diagonal composition, a dynamic photography technique that adds energy and depth to images. Discover tips, examples, and use cases.",
    "heroImage": {
      "src": "/images/keywords/diagonal-composition.png",
      "alt": "A winding mountain road creating a strong diagonal line through a dense forest under golden light",
      "title": "Mountain Road with Diagonal Composition at Sunset",
      "background": "linear-gradient(135deg, #fbfaf7 0%, #e5e0d8 48%, #89968f 100%)"
    },
    "overview": "Diagonal composition is a popular and effective technique used in photography, painting, and design to enhance visual interest. By positioning important elements along diagonal lines instead of horizontal or vertical axes, the image gains a dynamic flow that naturally draws the viewer’s eyes through the scene. This approach breaks away from static layouts, injecting energy and a sense of motion. Using diagonals can also create depth by suggesting perspective or distance within flat images. Photographers often look for strong lines in the environment—like roads, rivers, or architectural details—to compose their shots diagonally. The result is an engaging, well-balanced image that feels both harmonious and lively, suitable for a variety of creative contexts.",
    "bestUseCases": [
      "Landscape photography to convey movement and depth",
      "Architectural shots emphasizing building lines and forms",
      "Portraits where posing or background elements create diagonal flow"
    ],
    "relatedKeywords": [
      "Leading Lines",
      "Rule of Thirds",
      "Perspective Depth"
    ],
    "difficulty": "Beginner",
    "slug": "diagonal-composition",
    "categorySlug": "composition",
    "hasDefinition": true,
    "promptExampleCount": 3,
    "faqCount": 3
  },
  {
    "title": "Birds Eye View",
    "category": "Composition",
    "published": true,
    "seoTitle": "Birds Eye View: Composition Technique for Stunning Visuals",
    "metaDescription": "Discover the Birds Eye View composition technique, its benefits, use cases, and how to create compelling images with this unique perspective.",
    "heroImage": {
      "src": "/images/keywords/birds-eye-view.png",
      "alt": "Vibrant birds eye view of a busy farmers market with colorful stalls",
      "title": "Birds Eye View of Farmers Market",
      "background": "linear-gradient(135deg, #fbfaf7 0%, #e5e0d8 48%, #89968f 100%)"
    },
    "overview": "The Birds Eye View composition technique offers a unique vantage point by capturing scenes from directly above the subject. This overhead perspective allows viewers to observe spatial arrangements, patterns, and relationships in a way that typical eye-level shots cannot. It is commonly used in photography, filmmaking, cartography, and design to present environments, objects, or activities with clarity and abstraction. By removing depth cues and flattening the image plane, the Birds Eye View highlights shapes, lines, and symmetry, often resulting in visually striking and informative imagery. This technique enhances storytelling by offering a comprehensive overview, making it particularly useful for scenes involving multiple subjects or complex layouts.",
    "bestUseCases": [
      "Urban landscape photography to showcase city layouts",
      "Food photography focusing on plate arrangements",
      "Event documentation showing crowd formations"
    ],
    "relatedKeywords": [
      "Top Down View",
      "Overhead Shot",
      "Aerial Perspective"
    ],
    "difficulty": "Beginner",
    "slug": "birds-eye-view",
    "categorySlug": "composition",
    "hasDefinition": true,
    "promptExampleCount": 3,
    "faqCount": 3
  },
  {
    "title": "Worms Eye View",
    "category": "Composition",
    "published": true,
    "seoTitle": "Worms Eye View: Mastering Dramatic Low-Angle Composition",
    "metaDescription": "Explore the Worms Eye View composition technique to create powerful low-angle imagery. Learn its uses, best prompts, and commercial potential in visual storytelling.",
    "heroImage": {
      "src": "/images/keywords/worms-eye-view.png",
      "alt": "Worms eye view of a towering futuristic city with skyscrapers extending into the sky under dynamic lighting",
      "title": "Worms Eye View of Futuristic City Skyline",
      "background": "linear-gradient(135deg, #fbfaf7 0%, #e5e0d8 48%, #89968f 100%)"
    },
    "overview": "The Worms Eye View composition is a powerful tool in photography, cinematography, and visual arts that enables creators to capture scenes from a dramatically low angle. By positioning the viewpoint close to the ground and aiming upward, this technique magnifies the stature and dominance of subjects, adding a sense of awe, power, or grandeur. It is often employed to emphasize architecture towering above, majestic trees, towering characters, or other vertical elements. This viewpoint challenges the common eye-level framing, making compositions more dynamic and immersive. In AI image generation, it serves as an essential prompt keyword to achieve impactful low-angle scenes with realistic depth and scale.",
    "bestUseCases": [
      "Architectural photography emphasizing skyscrapers or monuments",
      "Character design showcasing imposing figures or creatures",
      "Nature scenes focusing on tall trees or structures"
    ],
    "relatedKeywords": [
      "Low Angle",
      "Perspective Distortion",
      "Vertical Emphasis"
    ],
    "difficulty": "Beginner",
    "slug": "worms-eye-view",
    "categorySlug": "composition",
    "hasDefinition": true,
    "promptExampleCount": 3,
    "faqCount": 3
  },
  {
    "title": "Layered Composition",
    "category": "Composition",
    "published": true,
    "seoTitle": "Layered Composition: Enhancing Depth and Visual Interest",
    "metaDescription": "Discover Layered Composition, a technique to create depth in images through overlapping elements, enriching storytelling and visual appeal in design.",
    "heroImage": {
      "src": "/images/keywords/layered-composition.png",
      "alt": "A tranquil forest scene showing multiple overlapping layers of trees fading into the mist with soft natural light",
      "title": "Layered Composition in a Misty Forest Scene",
      "background": "linear-gradient(135deg, #fbfaf7 0%, #e5e0d8 48%, #89968f 100%)"
    },
    "overview": "Layered Composition is a foundational technique in photography, graphic design, and digital art used to add dimensionality to images. By strategically layering visual elements, artists create scenes that feel immersive and dynamic rather than flat. This technique leverages natural cues like perspective and lighting contrasts along with careful arrangement to differentiate layers. It helps convey complex narratives effectively, as each layer contributes unique information or mood. Modern digital tools further allow nuanced control over layering with adjustable opacity and blending modes, enhancing refinement. Layered compositions captivate viewers by guiding their attention sequentially through scenes with depth, fostering richer engagement and storytelling potential.",
    "bestUseCases": [
      "Environmental portraits using foreground foliage to frame the subject",
      "Product photography highlighting texture with layered shadows and reflections",
      "Editorial illustrations combining multiple graphic elements for storytelling"
    ],
    "relatedKeywords": [
      "Depth Effect",
      "Foreground Framing",
      "Multi-Plane Composition"
    ],
    "difficulty": "Beginner",
    "slug": "layered-composition",
    "categorySlug": "composition",
    "hasDefinition": true,
    "promptExampleCount": 3,
    "faqCount": 3
  },
  {
    "title": "Bauhaus",
    "category": "Style",
    "published": true,
    "seoTitle": "Bauhaus Style: Modernist Design for Artistic Innovation",
    "metaDescription": "Explore the Bauhaus style, a modernist design movement emphasizing simplicity, function, and clean lines. Learn its characteristics, uses, and prompt ideas.",
    "heroImage": {
      "src": "/images/keywords/bauhaus.png",
      "alt": "Modern interior room featuring Bauhaus style furniture and geometric decor",
      "title": "Bauhaus Style Interior Design",
      "background": "linear-gradient(135deg, #ece7df 0%, #a9b6ad 48%, #4d5652 100%)"
    },
    "overview": "The Bauhaus style emerged from the influential German art school founded by Walter Gropius in 1919, revolutionizing design by combining crafts and fine arts, focusing on functionality and minimalism. It abandoned elaborate decoration in favor of straightforward geometry and industrial materials. Bauhaus permeates architecture, furniture design, graphic arts, and typography, underpinning modern design philosophies worldwide. Its principles emphasize form following function, harmony between aesthetics and usability, and reduction to essentials, inspiring contemporary designers and architects beyond its historical period.",
    "bestUseCases": [
      "Graphic design projects needing minimalist clarity",
      "Modern architecture and interior design concepts",
      "Product design emphasizing function and form"
    ],
    "relatedKeywords": [
      "Modernism",
      "Minimalism",
      "Constructivism"
    ],
    "difficulty": "Beginner",
    "slug": "bauhaus",
    "categorySlug": "style",
    "hasDefinition": true,
    "promptExampleCount": 3,
    "faqCount": 3
  },
  {
    "title": "Art Deco",
    "category": "Style",
    "published": true,
    "seoTitle": "Art Deco Style: Definition, Uses & AI Image Prompts",
    "metaDescription": "Explore the Art Deco style with clear definitions, key visual traits, best use cases, and AI prompt examples for creative projects and commercial design.",
    "heroImage": {
      "src": "/images/keywords/art-deco.png",
      "alt": "Luxurious Art Deco style interior with geometric patterns and golden accents",
      "title": "Art Deco Inspired Interior Design",
      "background": "linear-gradient(135deg, #ece7df 0%, #a9b6ad 48%, #4d5652 100%)"
    },
    "overview": "Art Deco is a defining style of the early 20th century, merging modern techniques with opulent aesthetics. It influences architecture, fashion, graphic design, and interior decoration, emphasizing clean lines, decadence, and a futuristic feel. While rooted in the industrial age, Art Deco reflects optimism and luxury, often incorporating motifs inspired by technology, nature, and ancient cultures. Its distinctive approach offers both elegance and dynamic visual rhythm, making it iconic in design history and continually inspiring contemporary creatives.",
    "bestUseCases": [
      "Creating stylish editorial hero images for luxury brands",
      "Designing vintage-inspired posters or packaging",
      "Developing upscale interior visualization concepts"
    ],
    "relatedKeywords": [
      "Vintage Style",
      "Geometric Design",
      "Luxury Aesthetic"
    ],
    "difficulty": "Beginner",
    "slug": "art-deco",
    "categorySlug": "style",
    "hasDefinition": true,
    "promptExampleCount": 3,
    "faqCount": 3
  },
  {
    "title": "Mid Century Modern",
    "category": "Style",
    "published": true,
    "seoTitle": "Mid Century Modern Style: Timeless Design for AI Image Prompts",
    "metaDescription": "Explore the Mid Century Modern style—a clean, timeless design aesthetic with sleek lines and functional forms perfect for AI image generation.",
    "heroImage": {
      "src": "/images/keywords/mid-century-modern.png",
      "alt": "Mid Century Modern styled living room with teak furniture and large windows",
      "title": "Mid Century Modern Living Room Interior",
      "background": "linear-gradient(135deg, #ece7df 0%, #a9b6ad 48%, #4d5652 100%)"
    },
    "overview": "Mid Century Modern is a highly influential design style recognized for its minimalistic approach and timeless elegance. It emerged post-World War II and combines organic influences with technological advances, focusing on simplicity and functionality. The style uses natural materials such as wood, combined with sleek metals and glass to create warm yet modern environments. Its emphasis on clean lines, gentle curves, and open spaces continues to inspire designers across furniture, architecture, and graphic arts. For AI image generation, incorporating Mid Century Modern elements ensures visuals that are both stylish and universally appealing, reflecting a refined, yet approachable aesthetic.",
    "bestUseCases": [
      "Interior design mood boards featuring classic furniture and layouts",
      "Modern architecture visualizations with clean lines and organic forms",
      "Lifestyle imagery that evokes retro yet fresh living spaces"
    ],
    "relatedKeywords": [
      "Retro Style",
      "Scandinavian Design",
      "Modernist Architecture"
    ],
    "difficulty": "Beginner",
    "slug": "mid-century-modern",
    "categorySlug": "style",
    "hasDefinition": true,
    "promptExampleCount": 3,
    "faqCount": 3
  },
  {
    "title": "Editorial Style",
    "category": "Style",
    "published": true,
    "seoTitle": "Editorial Style in AI Image Prompts: Definition & Examples",
    "metaDescription": "Explore the Editorial Style in AI image prompts. Learn its characteristics, uses, and how to craft perfect editorial visuals with polished, clean composition.",
    "heroImage": {
      "src": "/images/keywords/editorial-style.png",
      "alt": "Clean and polished editorial style image of a professional setting with realistic lighting and composition",
      "title": "Editorial Style AI Generated Image",
      "background": "linear-gradient(135deg, #ece7df 0%, #a9b6ad 48%, #4d5652 100%)"
    },
    "overview": "Editorial Style is a popular approach in AI-generated imagery that aims to produce visuals resembling those found in top-tier editorial publications. This style focuses on crafting images that are visually engaging yet tasteful and professional, ensuring they complement written content effectively. With a focus on clarity and refinement, editorial-style images avoid clutter and distractions, making them ideal for use as article heroes, thumbnail cards, and other content-driven placements. By emphasizing natural lighting and realistic textures, the style enhances visual storytelling, helping convey the intended message with impact and sophistication.",
    "bestUseCases": [
      "Article hero images for online magazines or blogs",
      "Thumbnail images for editorial videos and podcasts",
      "Visual storytelling elements in digital magazines and newsletters"
    ],
    "relatedKeywords": [
      "Magazine Style",
      "Lifestyle Photography",
      "Minimalist Editorial"
    ],
    "difficulty": "Beginner",
    "slug": "editorial-style",
    "categorySlug": "style",
    "hasDefinition": true,
    "promptExampleCount": 3,
    "faqCount": 3
  },
  {
    "title": "Maximalist",
    "category": "Style",
    "published": true,
    "seoTitle": "Maximalist Style: A Bold & Vibrant Design Approach",
    "metaDescription": "Discover the maximalist style—an artful blend of bold colors, patterns, and textures that celebrate abundance and creativity in design.",
    "heroImage": {
      "src": "/images/keywords/maximalist.png",
      "alt": "Vibrant maximalist interior design featuring bold patterns, rich colors, and layered textures",
      "title": "Maximalist Style Interior with Eclectic Patterns and Colors",
      "background": "linear-gradient(135deg, #ece7df 0%, #a9b6ad 48%, #4d5652 100%)"
    },
    "overview": "Maximalist style breaks away from minimalist conventions by embracing visual abundance and creative freedom. It is defined by its bold use of color, diverse textures, and intricate layering of patterns and elements, creating a rich and immersive aesthetic. This style celebrates individuality and often combines retro, vintage, and contemporary influences to shape dynamic and expressive environments. Whether in interiors, fashion, or digital art, maximalism invites designers to curate spaces and visuals that feel alive, personalized, and full of narrative depth.",
    "bestUseCases": [
      "Creating vibrant interior design concepts for boutique hotels",
      "Designing expressive fashion editorials with bold patterns",
      "Developing dynamic digital art and illustrations rich in detail"
    ],
    "relatedKeywords": [
      "Eclectic",
      "Ornate",
      "Bohemian"
    ],
    "difficulty": "Beginner",
    "slug": "maximalist",
    "categorySlug": "style",
    "hasDefinition": true,
    "promptExampleCount": 3,
    "faqCount": 3
  },
  {
    "title": "Jewel Tone Colors",
    "category": "Color",
    "published": true,
    "seoTitle": "Jewel Tone Colors: Rich Hues for Stunning Visuals",
    "metaDescription": "Discover jewel tone colors—vibrant, deep shades inspired by gemstones. Ideal for design, fashion, and digital art with rich, luxurious appeal.",
    "heroImage": {
      "src": "/images/keywords/jewel-tone-colors.png",
      "alt": "A vibrant composition showcasing jewel tone colors inspired by gemstones with refined lighting and realistic materials",
      "title": "Jewel Tone Colors Palette in Rich, Luxurious Design",
      "background": "linear-gradient(135deg, #d8a365 0%, #9aa982 48%, #6e879f 100%)"
    },
    "overview": "Jewel tone colors are a palette of rich, saturated hues inspired by natural gemstones like emerald green, sapphire blue, ruby red, and amethyst purple. These colors are known for their vibrant intensity and luxurious feel, making them popular across various creative fields including fashion, interior design, and digital art. Jewel tones stand out for their ability to add depth and sophistication to compositions, offering a bold yet elegant aesthetic. Their luminous quality helps convey a sense of opulence and timeless beauty, making them favored choices for premium design projects and high-end branding.",
    "bestUseCases": [
      "Fashion design to create luxurious apparel collections",
      "Interior design for rich, inviting room palettes",
      "Digital art and illustration to add vivid depth and sophistication"
    ],
    "relatedKeywords": [
      "Rich Color Palette",
      "Gemstone Colors",
      "Vibrant Color Schemes"
    ],
    "difficulty": "Beginner",
    "slug": "jewel-tone-colors",
    "categorySlug": "color",
    "hasDefinition": true,
    "promptExampleCount": 3,
    "faqCount": 3
  },
  {
    "title": "Duotone Colors",
    "category": "Color",
    "published": true,
    "seoTitle": "Duotone Colors: Definition, Uses, and Visual Impact",
    "metaDescription": "Explore duotone colors, a vibrant two-color design technique perfect for modern visuals. Learn uses, benefits, and AI prompt examples for creative projects.",
    "heroImage": {
      "src": "/images/keywords/duotone-colors.png",
      "alt": "Abstract portrait featuring vibrant duotone colors blending blue and orange",
      "title": "Vibrant blue and orange duotone portrait",
      "background": "linear-gradient(135deg, #d8a365 0%, #9aa982 48%, #6e879f 100%)"
    },
    "overview": "Duotone colors combine two distinct hues—often contrasting—to produce visually impactful images that balance simplicity and dynamism. This technique became popular in photography and graphic design where it adds a modern, artistic touch by emphasizing shadows and highlights through just two colors. Duotone visuals work well in various media including digital art, branding, and advertising. By limiting the color scheme, duotone designs offer clarity and a bold aesthetic that can communicate emotion effectively. With advances in AI image generation and editing, creating duotone visuals has become straightforward, allowing designers to experiment with color combinations and achieve stylized imagery that stands out.",
    "bestUseCases": [
      "Branding and logo design for memorable identities",
      "Hero images or website banners to create visual impact",
      "Advertising campaigns to evoke strong emotional responses"
    ],
    "relatedKeywords": [
      "Two-Color Palette",
      "Color Contrast",
      "Monochrome Styles"
    ],
    "difficulty": "Beginner",
    "slug": "duotone-colors",
    "categorySlug": "color",
    "hasDefinition": true,
    "promptExampleCount": 3,
    "faqCount": 3
  },
  {
    "title": "Gradient Colors",
    "category": "Color",
    "published": true,
    "seoTitle": "Gradient Colors: Definition, Use Cases & Visual Impact",
    "metaDescription": "Explore gradient colors, their definition, visual traits, and practical uses. Ideal for designers seeking smooth color transitions and dynamic effects.",
    "heroImage": {
      "src": "/images/keywords/gradient-colors.png",
      "alt": "Abstract smooth gradient color transitions blending warm and cool hues with realistic lighting",
      "title": "Smooth Gradient Color Transitions with Depth",
      "background": "linear-gradient(135deg, #d8a365 0%, #9aa982 48%, #6e879f 100%)"
    },
    "overview": "Gradient colors are a popular design element characterized by a seamless shift between two or more colors. They range from subtle transitions, such as a light blush to soft pink, to vibrant combinations like bright blue fading into emerald green. Used widely in digital design, web interfaces, branding, and art, gradients add visual interest and guide the viewer's eye across a composition. Modern tools allow designers to customize gradients with various styles — linear, radial, angular, or diamond-shaped — enhancing the flexibility and creative potential of this technique.",
    "bestUseCases": [
      "Backgrounds for websites and apps to add depth",
      "Button and UI element design for visual engagement",
      "Branding assets like logos and promotional artwork"
    ],
    "relatedKeywords": [
      "Color Transitions",
      "Linear Gradients",
      "Radial Gradients"
    ],
    "difficulty": "Beginner",
    "slug": "gradient-colors",
    "categorySlug": "color",
    "hasDefinition": true,
    "promptExampleCount": 3,
    "faqCount": 3
  },
  {
    "title": "Black and Gold Palette",
    "category": "Color",
    "published": true,
    "seoTitle": "Black and Gold Palette: Elegant Color Harmony for Design",
    "metaDescription": "Discover the Black and Gold Palette—a classic color combination ideal for luxurious designs. Learn its characteristics, uses, and how to apply it effectively.",
    "heroImage": {
      "src": "/images/keywords/black-and-gold-palette.png",
      "alt": "Elegant black and gold color palette showcasing luxurious textures and lighting",
      "title": "Black and Gold Palette Design Example",
      "background": "linear-gradient(135deg, #d8a365 0%, #9aa982 48%, #6e879f 100%)"
    },
    "overview": "The Black and Gold Palette is a timeless color combination used widely across design, fashion, and branding to convey luxury, exclusivity, and elegance. The deep black background serves as a solid, grounding base that enhances the rich, lustrous tone of metallic gold accents. This pairing is versatile enough to appear in editorial layouts, product packaging, and digital art, offering a premium and refined visual appeal. The interplay between matte black and reflective gold elements creates subtle depth and sophisticated contrast, drawing viewers' attention effectively. Its association with opulence and tradition makes it a popular choice for high-end projects seeking a polished and stylish aesthetic.",
    "bestUseCases": [
      "Luxury brand logos and packaging",
      "Event invitations and formal stationery",
      "Editorial layouts for premium magazines"
    ],
    "relatedKeywords": [
      "Gold Accents",
      "Luxury Color Palette",
      "Black Matte Texture"
    ],
    "difficulty": "Beginner",
    "slug": "black-and-gold-palette",
    "categorySlug": "color",
    "hasDefinition": true,
    "promptExampleCount": 3,
    "faqCount": 3
  },
  {
    "title": "Desaturated Colors",
    "category": "Color",
    "published": true,
    "seoTitle": "Desaturated Colors: Enhance AI Images with Muted Tones",
    "metaDescription": "Discover how using desaturated colors enriches AI-generated images by creating muted, subtle visuals. Learn prompt formulas, best uses, and pro tips.",
    "heroImage": {
      "src": "/images/keywords/desaturated-colors.png",
      "alt": "Elegant portrait of a woman with desaturated colors and soft, subtle lighting",
      "title": "Desaturated Colors in AI-Generated Portrait",
      "background": "linear-gradient(135deg, #d8a365 0%, #9aa982 48%, #6e879f 100%)"
    },
    "overview": "In AI image generation, 'desaturated colors' guide models to produce images with toned-down color intensity, resulting in a muted and understated appearance. This technique is valuable for conveying moods such as tranquility, nostalgia, or elegance by avoiding overly bright or saturated colors. Using desaturated colors can help shift the focus to composition, texture, and lighting rather than vivid color contrasts, making images more versatile for editorial content, fashion, or natural scenes. It balances realism and artistic subtlety, especially when paired with refined lighting and soft shadows to emphasize material qualities and depth.",
    "bestUseCases": [
      "Creating sophisticated editorial images with subtle palettes",
      "Producing vintage or nostalgic-themed compositions",
      "Designing minimalist backgrounds for web or print"
    ],
    "relatedKeywords": [
      "Muted Tones",
      "Vintage Color Palette",
      "Subtle Lighting"
    ],
    "difficulty": "Beginner",
    "slug": "desaturated-colors",
    "categorySlug": "color",
    "hasDefinition": true,
    "promptExampleCount": 3,
    "faqCount": 3
  },
  {
    "title": "Wood Grain",
    "category": "Texture & Material",
    "published": true,
    "seoTitle": "Wood Grain Texture: AI Image Prompt Keyword Guide",
    "metaDescription": "Explore how the wood grain texture keyword enhances AI image prompts with realistic natural patterns. Learn visual traits, prompt formulas, use cases, and industry applications.",
    "heroImage": {
      "src": "/images/keywords/wood-grain.png",
      "alt": "Close-up of natural wood grain texture showing detailed organic patterns and knots",
      "title": "Wood Grain Texture Macro Photography",
      "background": "linear-gradient(135deg, #f1eee8 0%, #b8b0a3 48%, #6f6b63 100%)"
    },
    "overview": "Incorporating 'wood grain' into AI image prompts enriches visuals with authentic wooden textures that convey warmth and natural beauty. This keyword directs AI to replicate the complex, organic patterns seen in wood, including growth rings and surface details. It is ideal for creating backgrounds, materials, or objects that visually suggest wood, lending depth and tactile quality to images. When employed thoughtfully, it helps artists, designers, and content creators generate engaging visuals for furniture design, nature themes, or rustic aesthetics with subtle lighting and realistic material simulation.",
    "bestUseCases": [
      "Background textures for interior design visualizations featuring wooden elements",
      "Close-up images of wooden surfaces or crafted wooden objects such as furniture or utensils",
      "Natural and rustic-themed editorial or advertising visuals emphasizing material authenticity"
    ],
    "relatedKeywords": [
      "wood texture",
      "natural grain",
      "wood pattern"
    ],
    "difficulty": "Beginner",
    "slug": "wood-grain",
    "categorySlug": "texture-and-material",
    "hasDefinition": true,
    "promptExampleCount": 3,
    "faqCount": 2
  },
  {
    "title": "Fabric Texture",
    "category": "Texture & Material",
    "published": true,
    "seoTitle": "Fabric Texture AI Image Prompt – Realistic Textile Surfaces",
    "metaDescription": "Explore how to use 'Fabric Texture' in AI image prompts for photorealistic textile details. Perfect for ecommerce, fashion, and design visuals.",
    "heroImage": {
      "src": "/images/keywords/fabric-texture.png",
      "alt": "Close-up of detailed fabric texture showing weave and fibers under soft lighting",
      "title": "Detailed Fabric Texture Close-Up",
      "background": "linear-gradient(135deg, #f1eee8 0%, #b8b0a3 48%, #6f6b63 100%)"
    },
    "overview": "Fabric Texture is a vital keyword for AI image generation when you want to depict textiles realistically. It guides the AI to focus on nuances such as fiber weave, surface irregularities, and light reflection that define materials like cotton, silk, denim, or wool. This keyword enriches visuals in fashion photography, interior design details, and product shots by ensuring cloth surfaces look tangible and authentic. Proper use leads to images that convey texture depth, fiber quality, and material type, crucial for commercial appeal and viewer engagement.",
    "bestUseCases": [
      "Ecommerce product shots highlighting clothing material quality",
      "Fashion editorial images showcasing garment detail and texture",
      "Interior design visuals emphasizing textile elements like curtains and upholstery"
    ],
    "relatedKeywords": [
      "Textile Pattern",
      "Cloth Weave",
      "Material Surface"
    ],
    "difficulty": "Beginner",
    "slug": "fabric-texture",
    "categorySlug": "texture-and-material",
    "hasDefinition": true,
    "promptExampleCount": 3,
    "faqCount": 2
  }
] satisfies KeywordMetadata[];
