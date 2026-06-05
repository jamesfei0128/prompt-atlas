import { slugify } from "@/lib/slug";

export type Keyword = {
  title: string;
  category: string;
  heroImage?: {
    alt: string;
    background: string;
  };
  overview: string;
  whatItDoes: string;
  bestUseCases: string[];
  relatedKeywords: string[];
  examplePrompt: string;
  commercialApplications: string[];
  adobeStockPotential: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
};

const keywordSeeds: Keyword[] = [
  {
    title: "Cinematic Lighting",
    category: "Lighting",
    heroImage: {
      alt: "Abstract placeholder for cinematic lighting with dramatic warm highlights and deep shadows",
      background:
        "radial-gradient(circle at 24% 28%, #fff4d7 0, transparent 28%), linear-gradient(135deg, #232323 0%, #6d4b38 48%, #e7d8bc 100%)"
    },
    overview:
      "Cinematic Lighting is one of the most useful prompt keywords for making AI-generated images feel intentional, polished, and story-driven. Instead of asking for a flat, evenly lit image, this keyword signals that the scene should feel as if it was lit for a film, commercial, or high-end editorial shoot. The result often includes stronger direction in the light source, more purposeful shadows, richer contrast, and a clearer sense of atmosphere. For beginners, it is a reliable way to move an image away from a generic render and toward something that feels composed, dramatic, and visually memorable.",
    whatItDoes:
      "In a prompt, Cinematic Lighting helps the model think about light as part of the storytelling. It can create a bright key light on the main subject, a darker background, subtle rim highlights, glowing practical lights, or a soft falloff from light into shadow. This keyword also tends to improve depth because it separates the subject from the environment. A portrait may feel more emotional, a product may feel more premium, and an interior may feel more atmospheric. It does not automatically mean dark or moody; cinematic lighting can be warm, clean, romantic, futuristic, or suspenseful depending on the other keywords around it. Pair it with phrases like soft shadows, dramatic contrast, golden hour, rim light, volumetric haze, or studio setup to guide the exact mood.",
    bestUseCases: [
      "Portraits and character images where the face, pose, or expression needs emotional weight. Cinematic Lighting can make a simple subject feel like a still frame from a larger story.",
      "Product hero images for watches, perfume, headphones, beverages, skincare, and luxury packaging. The keyword helps add premium highlights, controlled reflections, and stronger visual focus.",
      "Editorial, advertising, and landing page visuals that need to look more designed than ordinary stock photography. It works especially well when combined with negative space for text placement.",
      "Atmospheric interiors, restaurants, hotels, offices, studios, and architectural scenes where light should shape the room instead of merely revealing it."
    ],
    relatedKeywords: ["Golden Hour", "Volumetric Lighting", "Moody"],
    examplePrompt:
      "A premium watch resting on black stone, cinematic lighting, warm key light from the left, subtle rim light, controlled reflections, shallow depth of field, dark neutral background, luxury product photography, high detail, elegant commercial composition",
    commercialApplications: ["Luxury ads", "Poster concepts", "Hero banners"],
    adobeStockPotential:
      "Cinematic Lighting has strong Adobe Stock potential because it supports many evergreen commercial needs: product hero images, business portraits, technology concepts, luxury branding, entertainment posters, lifestyle campaigns, and dramatic website headers. Buyers often look for images that already feel premium and usable in a layout. This keyword can help create visuals with strong focal points, appealing contrast, and space for copy. To improve stock usefulness, avoid copyrighted characters, logos, recognizable brands, and overly specific movie references. Keep the subject clear, the composition flexible, and the lighting polished. Images using Cinematic Lighting can perform especially well when paired with practical commercial themes such as innovation, leadership, wellness, fashion, hospitality, finance, or premium consumer goods.",
    difficulty: "Beginner"
  },
  {
    title: "Golden Hour",
    category: "Lighting",
    heroImage: {
      alt: "Abstract placeholder for golden hour with warm sunlight fading into soft neutral tones",
      background:
        "radial-gradient(circle at 18% 22%, #fff1b8 0, transparent 30%), linear-gradient(135deg, #e7a94f 0%, #f4d7a1 46%, #f8f2e8 100%)"
    },
    overview:
      "Golden Hour is a lighting keyword that refers to the warm, low-angle sunlight shortly after sunrise or shortly before sunset. In AI image prompts, it is one of the easiest ways to make a scene feel natural, emotional, and commercially appealing. The light is usually softer than midday sun, the shadows are longer, and the color temperature leans warm. This makes subjects feel more flattering and environments feel more inviting. For beginners, Golden Hour is a dependable keyword because it improves mood without requiring a complicated lighting setup. It works for people, landscapes, products, interiors, food, travel scenes, and lifestyle imagery.",
    whatItDoes:
      "When you add Golden Hour to a prompt, you are asking the image model to create a specific time-of-day feeling. The light often appears directional, warm, and slightly glowing. It can wrap around a subject, create gentle highlights on hair or objects, and add depth through long shadows. Golden Hour also helps connect the subject to the environment. A person walking through a city, a cabin in the hills, or a product on an outdoor table can all feel more believable when the light has a clear source. This keyword pairs especially well with warm tones, soft light, backlighting, cinematic lighting, and atmospheric haze. If your image becomes too orange, balance it with phrases like natural color grading, soft contrast, realistic skin tones, or neutral shadows.",
    bestUseCases: [
      "Travel and destination imagery where the goal is to make a place feel aspirational, peaceful, or worth visiting. Golden Hour can make beaches, cabins, streets, mountains, and hotels feel more inviting.",
      "Lifestyle photography with people exercising, working, relaxing, driving, cooking, or spending time outdoors. The warm light adds emotional warmth without making the scene feel overly staged.",
      "Product images for wellness, outdoor gear, beverages, home goods, and sustainable brands. Golden Hour can make simple products feel natural, premium, and connected to real-life use.",
      "Stock images that need a positive, optimistic mood. The keyword is useful for concepts like freedom, renewal, health, calm, family, entrepreneurship, and work-life balance."
    ],
    relatedKeywords: ["Cinematic Lighting", "Volumetric Lighting", "Morandi Palette"],
    examplePrompt:
      "A modern cabin on a quiet hillside at golden hour, warm sunlight from the side, long soft shadows, natural color grading, peaceful travel photography, negative space for copy, realistic editorial style",
    commercialApplications: ["Travel marketing", "Wellness brands", "Real estate visuals"],
    adobeStockPotential:
      "Golden Hour has high Adobe Stock potential because it supports many buyer-friendly themes: travel, wellness, real estate, family, outdoor lifestyle, entrepreneurship, retirement, hospitality, and nature. Buyers often need images that feel hopeful and polished while still looking realistic. Golden Hour can provide that balance. It is especially useful when combined with simple compositions and clear subjects. For stock use, avoid making the image too fantasy-like unless the concept requires it. Keep faces natural, avoid logos, and leave some open space when possible so designers can add headlines or promotional text. Golden Hour images can also work well as website headers, social media ads, editorial blog visuals, and presentation covers.",
    difficulty: "Beginner"
  },
  {
    title: "Soft Light",
    category: "Lighting",
    overview: "A gentle lighting keyword for smooth, flattering, low-contrast image generation.",
    whatItDoes: "Reduces harsh shadows and creates a calm, approachable visual tone.",
    bestUseCases: ["Portraits", "Beauty imagery", "Minimal product shots"],
    relatedKeywords: ["Pastel Colors", "Dreamy", "Studio Lighting"],
    examplePrompt: "Ceramic skincare bottles on a neutral surface, soft light, minimalist styling, pastel colors",
    commercialApplications: ["Beauty campaigns", "Ecommerce imagery", "Wellness content"],
    adobeStockPotential: "High potential for clean product and people-focused stock visuals.",
    difficulty: "Beginner"
  },
  {
    title: "Hard Light",
    category: "Lighting",
    overview: "A crisp, high-definition lighting cue that creates strong shadows and graphic drama.",
    whatItDoes: "Emphasizes shape, contrast, edges, and bold visual tension.",
    bestUseCases: ["Fashion editorials", "Architecture", "Graphic product scenes"],
    relatedKeywords: ["High Contrast Colors", "Brutalist", "Monochrome"],
    examplePrompt: "Brutalist concrete staircase, hard light, sharp geometric shadows, monochrome editorial photo",
    commercialApplications: ["Fashion visuals", "Architecture portfolios", "Bold brand campaigns"],
    adobeStockPotential: "Good potential for distinctive editorial and architectural content.",
    difficulty: "Intermediate"
  },
  {
    title: "Rim Light",
    category: "Lighting",
    overview: "A back-edge lighting effect that outlines the subject and separates it from the background.",
    whatItDoes: "Adds a bright contour around subjects, improving depth and premium polish.",
    bestUseCases: ["Portraits", "Product silhouettes", "Dark background scenes"],
    relatedKeywords: ["Backlighting", "Cinematic Lighting", "Neon Glow"],
    examplePrompt: "A runner in a dark studio, rim light outlining the silhouette, cinematic lighting, high contrast",
    commercialApplications: ["Sports campaigns", "Tech ads", "Premium product images"],
    adobeStockPotential: "Strong for dramatic concepts where subject separation matters.",
    difficulty: "Intermediate"
  },
  {
    title: "Backlighting",
    category: "Lighting",
    overview: "A lighting direction that places the main light behind the subject for glow and silhouette.",
    whatItDoes: "Creates halos, translucent edges, and atmospheric separation.",
    bestUseCases: ["Nature scenes", "Silhouettes", "Lifestyle portraits"],
    relatedKeywords: ["Rim Light", "Golden Hour", "Atmospheric Haze"],
    examplePrompt: "A person walking through tall grass, backlighting, golden hour, atmospheric haze, dreamy mood",
    commercialApplications: ["Outdoor campaigns", "Book covers", "Inspirational imagery"],
    adobeStockPotential: "High for emotional, aspirational, and nature-based stock themes.",
    difficulty: "Beginner"
  },
  {
    title: "Volumetric Lighting",
    category: "Lighting",
    heroImage: {
      alt: "Abstract placeholder for volumetric lighting with visible beams passing through haze",
      background:
        "linear-gradient(120deg, rgba(255,255,255,0.88) 0 12%, transparent 12% 28%, rgba(255,255,255,0.48) 28% 38%, transparent 38%), linear-gradient(135deg, #dce7e1 0%, #9eaa9d 48%, #5b665d 100%)"
    },
    overview:
      "Volumetric Lighting describes visible beams of light traveling through particles in the air, such as mist, dust, smoke, fog, or atmospheric haze. In AI image generation, it is a powerful keyword for adding depth and drama. Instead of light simply landing on objects, the light itself becomes visible inside the scene. This can make an image feel cinematic, mysterious, sacred, futuristic, or magical depending on the setting. Beginners can use Volumetric Lighting when a prompt feels flat or lacks atmosphere. It is especially useful when you want the viewer to feel the scale of a space, the direction of the light, or the mood of an environment.",
    whatItDoes:
      "This keyword tells the model to render light as a physical presence. You may see beams passing through tall windows, shafts of sunlight crossing a forest, stage lights cutting through smoke, or glowing haze inside a futuristic hallway. Volumetric Lighting often increases the sense of distance because it creates layers between the foreground, middle ground, and background. It also helps guide attention. A beam of light can point toward a subject, highlight a product, or create a natural focal path through the image. To control it well, pair it with words that describe the environment: dusty library, misty forest, smoky concert stage, foggy street, or sunlit cathedral. If the image becomes too heavy or unclear, add subtle haze, clean subject focus, or soft atmospheric depth.",
    bestUseCases: [
      "Large interiors such as libraries, museums, studios, churches, warehouses, hotels, and modern offices. Beams of light can make these spaces feel grand and visually layered.",
      "Fantasy, sci-fi, and concept art where atmosphere matters as much as the subject. Volumetric Lighting can suggest mystery, discovery, danger, or wonder.",
      "Commercial backgrounds that need a strong mood without relying on busy details. It can create dramatic empty space for posters, hero banners, or presentation slides.",
      "Stock images about spirituality, inspiration, performance, entertainment, innovation, and nature. The visible light can make abstract ideas feel more concrete."
    ],
    relatedKeywords: ["Cinematic Lighting", "Golden Hour", "Minimalist"],
    examplePrompt:
      "An ancient library with tall arched windows, volumetric lighting, visible dust particles in the air, warm beams crossing wooden shelves, atmospheric depth, cinematic composition, quiet mysterious mood",
    commercialApplications: ["Game concepts", "Entertainment posters", "Editorial backgrounds"],
    adobeStockPotential:
      "Volumetric Lighting has solid Adobe Stock potential, especially for atmospheric backgrounds, entertainment concepts, spiritual visuals, dramatic interiors, and cinematic design assets. Buyers may use these images for book covers, event posters, music promotions, film-related articles, game concepts, or website hero sections. The strongest stock images usually have a readable subject and controlled atmosphere. If there is too much haze, the image can become hard to use commercially. Keep the composition clean, avoid copyrighted symbols, and make sure the lighting supports a clear concept such as inspiration, mystery, performance, technology, history, or discovery. Volumetric Lighting can also increase the perceived production value of otherwise simple scenes.",
    difficulty: "Intermediate"
  },
  {
    title: "God Rays",
    category: "Lighting",
    overview: "Radiating beams of light often seen through clouds, trees, or windows.",
    whatItDoes: "Creates a spiritual, epic, or awe-filled focal effect.",
    bestUseCases: ["Landscape scenes", "Sacred interiors", "Fantasy art"],
    relatedKeywords: ["Volumetric Lighting", "Ethereal", "Mystical"],
    examplePrompt: "Sunbeams breaking through a misty forest canopy, god rays, ethereal atmosphere, wide angle",
    commercialApplications: ["Inspirational posters", "Travel content", "Fantasy covers"],
    adobeStockPotential: "Strong for spiritual, nature, and cinematic background searches.",
    difficulty: "Intermediate"
  },
  {
    title: "Neon Glow",
    category: "Lighting",
    overview: "A colorful artificial glow associated with nightlife, tech, and futuristic design.",
    whatItDoes: "Adds saturated luminous edges, reflections, and energetic contrast.",
    bestUseCases: ["Cyberpunk scenes", "Music visuals", "Tech products"],
    relatedKeywords: ["Cyberpunk", "Futuristic", "Glass Reflection"],
    examplePrompt: "Transparent headphones on glossy acrylic, neon glow, cyberpunk color palette, studio product photo",
    commercialApplications: ["Music campaigns", "Gaming brands", "Technology launches"],
    adobeStockPotential: "High for tech, nightlife, and modern promotional imagery.",
    difficulty: "Beginner"
  },
  {
    title: "Studio Lighting",
    category: "Lighting",
    overview: "A controlled commercial lighting setup for clean, professional output.",
    whatItDoes: "Creates predictable highlights, shadows, and polished product or portrait results.",
    bestUseCases: ["Product photography", "Corporate portraits", "Catalog visuals"],
    relatedKeywords: ["Soft Light", "Product Photography", "Luxury Branding"],
    examplePrompt: "A premium perfume bottle on a white sweep, studio lighting, clean shadows, luxury branding",
    commercialApplications: ["Ecommerce", "Advertising", "Brand lookbooks"],
    adobeStockPotential: "Very high for product, business, and commercial stock demand.",
    difficulty: "Beginner"
  },
  {
    title: "Dreamy",
    category: "Atmosphere",
    overview: "A soft emotional cue that creates gentle, imaginative, slightly unreal imagery.",
    whatItDoes: "Adds glow, softness, pastel tones, and a light sense of fantasy.",
    bestUseCases: ["Beauty visuals", "Lifestyle scenes", "Concept art"],
    relatedKeywords: ["Soft Light", "Ethereal", "Pastel Colors"],
    examplePrompt: "A quiet bedroom with linen curtains, dreamy atmosphere, soft light, pastel colors, serene styling",
    commercialApplications: ["Wellness brands", "Interior content", "Beauty campaigns"],
    adobeStockPotential: "Strong for lifestyle, wellness, and soft background imagery.",
    difficulty: "Beginner"
  },
  {
    title: "Ethereal",
    category: "Atmosphere",
    overview: "A delicate mood keyword for airy, luminous, otherworldly scenes.",
    whatItDoes: "Makes imagery feel light, magical, graceful, and translucent.",
    bestUseCases: ["Fantasy portraits", "Bridal imagery", "Spiritual landscapes"],
    relatedKeywords: ["God Rays", "Dreamy", "Mystical"],
    examplePrompt: "A dancer in flowing fabric, ethereal atmosphere, soft light, pale background, elegant motion",
    commercialApplications: ["Fashion editorials", "Wellness visuals", "Event branding"],
    adobeStockPotential: "Good for elegant, spiritual, and aspirational visuals.",
    difficulty: "Beginner"
  },
  {
    title: "Moody",
    category: "Atmosphere",
    overview: "A darker emotional direction with contrast, restraint, and dramatic tone.",
    whatItDoes: "Creates depth, seriousness, and a more cinematic visual language.",
    bestUseCases: ["Editorial portraits", "Luxury products", "Dramatic interiors"],
    relatedKeywords: ["Cinematic Lighting", "Muted Colors", "Hard Light"],
    examplePrompt: "A leather armchair beside a rain-streaked window, moody atmosphere, muted colors, cinematic lighting",
    commercialApplications: ["Luxury branding", "Book covers", "Premium hospitality"],
    adobeStockPotential: "High for sophisticated business, interior, and lifestyle content.",
    difficulty: "Beginner"
  },
  {
    title: "Serene",
    category: "Atmosphere",
    overview: "A calm mood keyword for peaceful, balanced, uncluttered images.",
    whatItDoes: "Reduces visual tension and encourages spacious, restful compositions.",
    bestUseCases: ["Wellness imagery", "Spa visuals", "Nature scenes"],
    relatedKeywords: ["Negative Space", "Soft Light", "Cool Tones"],
    examplePrompt: "A quiet lakeside meditation deck, serene atmosphere, cool tones, negative space, soft morning light",
    commercialApplications: ["Wellness campaigns", "Healthcare visuals", "Hospitality branding"],
    adobeStockPotential: "Strong for wellness, mindfulness, and calm business concepts.",
    difficulty: "Beginner"
  },
  {
    title: "Melancholic",
    category: "Atmosphere",
    overview: "A reflective emotional cue with quiet sadness and poetic restraint.",
    whatItDoes: "Adds introspection, muted color, and emotional depth.",
    bestUseCases: ["Narrative portraits", "Rainy city scenes", "Album artwork"],
    relatedKeywords: ["Muted Colors", "Foggy", "Moody"],
    examplePrompt: "A solitary figure at a bus stop in light rain, melancholic mood, muted colors, foggy city background",
    commercialApplications: ["Editorial stories", "Music visuals", "Book covers"],
    adobeStockPotential: "Moderate potential for narrative and emotional concept imagery.",
    difficulty: "Intermediate"
  },
  {
    title: "Mystical",
    category: "Atmosphere",
    overview: "A magical atmosphere keyword that suggests mystery, symbolism, and hidden meaning.",
    whatItDoes: "Adds haze, unusual light, and a sense of enchanted discovery.",
    bestUseCases: ["Fantasy art", "Spiritual concepts", "Mysterious landscapes"],
    relatedKeywords: ["Ethereal", "God Rays", "Atmospheric Haze"],
    examplePrompt: "A stone circle at dawn, mystical atmosphere, atmospheric haze, god rays, ancient landscape",
    commercialApplications: ["Fantasy covers", "Wellness branding", "Event posters"],
    adobeStockPotential: "Good for fantasy, spiritual, and atmospheric backgrounds.",
    difficulty: "Intermediate"
  },
  {
    title: "Atmospheric Haze",
    category: "Atmosphere",
    overview: "A depth cue that softens distant objects with mist, dust, or subtle air particles.",
    whatItDoes: "Creates layered distance, softness, and cinematic spatial depth.",
    bestUseCases: ["Landscapes", "Architecture", "Backlit scenes"],
    relatedKeywords: ["Volumetric Lighting", "Foggy", "Backlighting"],
    examplePrompt: "A mountain road at sunrise, atmospheric haze, backlighting, layered hills, cinematic landscape",
    commercialApplications: ["Travel campaigns", "Automotive visuals", "Background plates"],
    adobeStockPotential: "High for landscapes, travel, and background imagery.",
    difficulty: "Beginner"
  },
  {
    title: "Foggy",
    category: "Atmosphere",
    overview: "A weather and mood keyword that obscures detail and adds mystery.",
    whatItDoes: "Softens edges, lowers contrast, and creates quiet visual suspense.",
    bestUseCases: ["Forests", "Urban mornings", "Mystery scenes"],
    relatedKeywords: ["Atmospheric Haze", "Melancholic", "Moody"],
    examplePrompt: "A narrow old street at dawn, foggy atmosphere, warm window lights, melancholic mood",
    commercialApplications: ["Book covers", "Travel images", "Editorial backgrounds"],
    adobeStockPotential: "Good for mood, weather, and mystery-themed stock searches.",
    difficulty: "Beginner"
  },
  {
    title: "Negative Space",
    category: "Composition",
    overview: "A composition keyword that leaves intentional empty space around the subject.",
    whatItDoes: "Creates clarity, elegance, and room for text overlays.",
    bestUseCases: ["Ad layouts", "Social graphics", "Presentation covers"],
    relatedKeywords: ["Minimalist", "Serene", "Business Presentation Background"],
    examplePrompt: "A single ceramic cup on a large clean table, negative space, soft light, minimalist composition",
    commercialApplications: ["Web banners", "Slide covers", "Ad templates"],
    adobeStockPotential: "Very high because designers often need copy space.",
    difficulty: "Beginner"
  },
  {
    title: "Symmetry",
    category: "Composition",
    overview: "A balanced framing keyword where elements mirror each other across an axis.",
    whatItDoes: "Adds order, stability, and a refined visual rhythm.",
    bestUseCases: ["Architecture", "Product layouts", "Luxury visuals"],
    relatedKeywords: ["Center Composition", "Minimalist", "Studio Lighting"],
    examplePrompt: "A symmetrical hotel lobby interior, marble texture, warm tones, luxury branding, wide angle",
    commercialApplications: ["Hospitality marketing", "Architecture portfolios", "Brand visuals"],
    adobeStockPotential: "High for architecture, interiors, and premium business imagery.",
    difficulty: "Beginner"
  },
  {
    title: "Leading Lines",
    category: "Composition",
    overview: "A visual structure keyword that uses lines to guide attention toward a focal point.",
    whatItDoes: "Improves depth, movement, and viewer navigation through the image.",
    bestUseCases: ["Roads", "Architecture", "Product perspective shots"],
    relatedKeywords: ["Wide Angle", "Depth of Field", "Rule of Thirds"],
    examplePrompt: "A modern train platform with leading lines, wide angle, cinematic lighting, clean commercial photo",
    commercialApplications: ["Travel ads", "Architecture visuals", "Transport campaigns"],
    adobeStockPotential: "Strong for dynamic, professional-looking stock images.",
    difficulty: "Beginner"
  },
  {
    title: "Rule of Thirds",
    category: "Composition",
    overview: "A classic framing method that places important subjects off-center for natural balance.",
    whatItDoes: "Makes compositions feel more dynamic and editorial.",
    bestUseCases: ["Portraits", "Landscapes", "Lifestyle imagery"],
    relatedKeywords: ["Leading Lines", "Negative Space", "Golden Hour"],
    examplePrompt: "A freelancer working by a window, rule of thirds composition, soft light, modern workspace",
    commercialApplications: ["Business imagery", "Lifestyle ads", "Editorial content"],
    adobeStockPotential: "High for broadly useful lifestyle and business stock assets.",
    difficulty: "Beginner"
  },
  {
    title: "Center Composition",
    category: "Composition",
    overview: "A direct composition keyword that places the subject in the middle of the frame.",
    whatItDoes: "Creates focus, simplicity, and strong product or portrait emphasis.",
    bestUseCases: ["Product shots", "Icons", "Editorial portraits"],
    relatedKeywords: ["Symmetry", "Studio Lighting", "Minimalist"],
    examplePrompt: "A single designer chair, center composition, studio lighting, muted colors, clean background",
    commercialApplications: ["Catalog imagery", "Hero assets", "Brand campaigns"],
    adobeStockPotential: "High for isolated products, objects, and clean commercial visuals.",
    difficulty: "Beginner"
  },
  {
    title: "Wide Angle",
    category: "Composition",
    overview: "A lens and framing keyword for expansive scenes with a broad field of view.",
    whatItDoes: "Adds scale, context, and immersive perspective.",
    bestUseCases: ["Interiors", "Landscapes", "Architecture"],
    relatedKeywords: ["Leading Lines", "Atmospheric Haze", "Futuristic"],
    examplePrompt: "A futuristic airport terminal, wide angle, leading lines, cool tones, clean architectural photo",
    commercialApplications: ["Real estate", "Travel campaigns", "Architecture marketing"],
    adobeStockPotential: "Very high for spaces, interiors, and large commercial scenes.",
    difficulty: "Beginner"
  },
  {
    title: "Close Up",
    category: "Composition",
    overview: "A framing cue that brings the camera near the subject for detail and intimacy.",
    whatItDoes: "Emphasizes texture, material, expression, and product features.",
    bestUseCases: ["Product details", "Food photography", "Beauty shots"],
    relatedKeywords: ["Paper Texture", "Metallic Surface", "Depth of Field"],
    examplePrompt: "Close up of a handmade paper invitation, paper texture, soft light, luxury branding",
    commercialApplications: ["Ecommerce details", "Packaging visuals", "Beauty campaigns"],
    adobeStockPotential: "High for product, texture, craft, and detail-focused stock.",
    difficulty: "Beginner"
  },
  {
    title: "Depth of Field",
    category: "Composition",
    overview: "A focus keyword that keeps the subject sharp while blurring foreground or background.",
    whatItDoes: "Creates separation, realism, and a photographic premium feel.",
    bestUseCases: ["Portraits", "Product photography", "Lifestyle scenes"],
    relatedKeywords: ["Close Up", "Cinematic Lighting", "Product Photography"],
    examplePrompt: "A cup of coffee beside a laptop, depth of field, soft light, warm tones, modern office",
    commercialApplications: ["Business stock", "Food imagery", "Product hero shots"],
    adobeStockPotential: "Very high for realistic commercial photography styles.",
    difficulty: "Beginner"
  },
  {
    title: "Minimalist",
    category: "Style",
    heroImage: {
      alt: "Abstract placeholder for minimalist style with open space and restrained blocks of color",
      background:
        "linear-gradient(135deg, #fbfaf7 0%, #fbfaf7 52%, #dfe7e2 52% 72%, #b8c5ba 72% 100%)"
    },
    overview:
      "Minimalist is a style keyword that emphasizes simplicity, clarity, and restraint. In AI image prompts, it helps remove visual clutter and creates images that feel calm, modern, and easy to use in real design projects. A minimalist image usually has fewer objects, cleaner backgrounds, more negative space, and a clearer focal point. This makes it especially useful for commercial work because designers often need images that can support text, branding, or layout elements. For beginners, Minimalist is one of the best keywords to use when a generated image feels too busy, decorative, or hard to read.",
    whatItDoes:
      "When added to a prompt, Minimalist encourages the model to simplify the scene. It may reduce the number of props, use cleaner surfaces, soften the color palette, and make the subject easier to identify. It can also create a stronger sense of design because every element has more room to breathe. Minimalist does not mean empty or boring. A good minimalist image still needs a clear subject, thoughtful light, pleasing proportions, and enough visual interest to hold attention. The keyword works well with negative space, soft light, center composition, Scandinavian, Japandi, muted colors, and Morandi palette. If the result becomes too plain, add a material or focal detail such as ceramic texture, paper texture, subtle shadow, natural wood, or refined product styling.",
    bestUseCases: [
      "Product photography and ecommerce visuals where the item should be immediately clear. Minimalist prompts help reduce distractions around packaging, devices, furniture, cosmetics, and accessories.",
      "Business presentation backgrounds, website headers, and social media graphics that need copy space. The clean structure makes it easier for designers to place text over or beside the image.",
      "Interior and lifestyle imagery for wellness, productivity, home decor, architecture, and premium consumer brands. Minimalist scenes can feel calm, professional, and current.",
      "Stock concepts that need broad usability, such as focus, clarity, simplicity, modern work, calm living, organization, sustainability, and intentional design."
    ],
    relatedKeywords: ["Morandi Palette", "Cinematic Lighting", "Volumetric Lighting"],
    examplePrompt:
      "A minimalist desk setup with one notebook, a black pen, and a ceramic cup, soft natural light, generous negative space, muted neutral colors, clean modern composition, professional stock photo",
    commercialApplications: ["Tech branding", "Slide decks", "Ecommerce"],
    adobeStockPotential:
      "Minimalist has very strong Adobe Stock potential because it creates flexible assets that can serve many industries. Designers often search for clean images with room for text, simple backgrounds, and clear subjects. Minimalist images can work for technology, wellness, productivity, finance, education, real estate, home decor, beauty, and lifestyle brands. For stock success, make sure the image has a useful concept rather than only looking empty. A simple laptop can represent remote work, a clean table can represent planning, and a single product can represent quality or focus. Avoid overly generic blank scenes unless they are intended as backgrounds. Strong minimalist stock images usually combine restraint with a clear commercial purpose.",
    difficulty: "Beginner"
  },
  {
    title: "Brutalist",
    category: "Style",
    overview: "A bold style keyword inspired by raw concrete, mass, geometry, and visual weight.",
    whatItDoes: "Adds seriousness, structure, and architectural impact.",
    bestUseCases: ["Architecture", "Fashion", "Editorial branding"],
    relatedKeywords: ["Hard Light", "Monochrome", "High Contrast Colors"],
    examplePrompt: "A brutalist museum exterior, hard light, high contrast shadows, monochrome architectural photo",
    commercialApplications: ["Architecture marketing", "Fashion campaigns", "Cultural posters"],
    adobeStockPotential: "Moderate to high for niche architectural and design-focused searches.",
    difficulty: "Intermediate"
  },
  {
    title: "Cyberpunk",
    category: "Style",
    overview: "A futuristic urban style with neon lighting, dense technology, and night city energy.",
    whatItDoes: "Adds saturated glow, tech atmosphere, and high-energy visual contrast.",
    bestUseCases: ["Gaming art", "Tech campaigns", "Music visuals"],
    relatedKeywords: ["Neon Glow", "Futuristic", "Glass Reflection"],
    examplePrompt: "A cyberpunk street market at night, neon glow, rain reflections, futuristic signage",
    commercialApplications: ["Gaming launches", "Music covers", "Tech event posters"],
    adobeStockPotential: "High for digital culture, technology, and entertainment imagery.",
    difficulty: "Beginner"
  },
  {
    title: "Japandi",
    category: "Style",
    overview: "A hybrid interior style combining Japanese restraint and Scandinavian warmth.",
    whatItDoes: "Creates calm, natural, balanced spaces with refined simplicity.",
    bestUseCases: ["Interior design", "Furniture visuals", "Wellness brands"],
    relatedKeywords: ["Scandinavian", "Organic Modern", "Earth Tones"],
    examplePrompt: "A Japandi living room with low wooden furniture, earth tones, soft light, serene atmosphere",
    commercialApplications: ["Interior marketing", "Furniture catalogs", "Hospitality branding"],
    adobeStockPotential: "High for interior, lifestyle, and design trend searches.",
    difficulty: "Beginner"
  },
  {
    title: "Scandinavian",
    category: "Style",
    overview: "A bright, functional style keyword with clean lines, natural materials, and light interiors.",
    whatItDoes: "Adds simplicity, warmth, and everyday modern appeal.",
    bestUseCases: ["Interiors", "Furniture", "Lifestyle scenes"],
    relatedKeywords: ["Minimalist", "Japandi", "Soft Light"],
    examplePrompt: "A Scandinavian kitchen with pale wood cabinets, soft light, minimalist styling, warm neutral tones",
    commercialApplications: ["Furniture marketing", "Real estate", "Lifestyle blogs"],
    adobeStockPotential: "Very high for interiors, home decor, and lifestyle stock imagery.",
    difficulty: "Beginner"
  },
  {
    title: "Futuristic",
    category: "Style",
    overview: "A forward-looking style cue for sleek technology, advanced materials, and modern forms.",
    whatItDoes: "Creates clean innovation signals through lighting, shape, and surface.",
    bestUseCases: ["Tech products", "Architecture", "Concept vehicles"],
    relatedKeywords: ["Cyberpunk", "Metallic Surface", "Cool Tones"],
    examplePrompt: "A futuristic electric vehicle interior, cool tones, metallic surface, clean studio lighting",
    commercialApplications: ["Technology launches", "Mobility concepts", "SaaS visuals"],
    adobeStockPotential: "High for innovation, AI, technology, and future-of-work concepts.",
    difficulty: "Beginner"
  },
  {
    title: "Retro Futurism",
    category: "Style",
    overview: "A nostalgic future aesthetic inspired by mid-century optimism, space age design, and vintage tech.",
    whatItDoes: "Adds playful nostalgia while still feeling imaginative and designed.",
    bestUseCases: ["Poster art", "Packaging", "Editorial concepts"],
    relatedKeywords: ["Futuristic", "Pastel Colors", "Warm Tones"],
    examplePrompt: "A retro futurism travel poster for a moon hotel, pastel colors, clean geometry, vintage print style",
    commercialApplications: ["Merchandise", "Editorial art", "Campaign concepts"],
    adobeStockPotential: "Moderate to high for distinctive trend-led visual assets.",
    difficulty: "Intermediate"
  },
  {
    title: "Organic Modern",
    category: "Style",
    overview: "A contemporary style using natural forms, calm colors, and tactile materials.",
    whatItDoes: "Balances modern minimalism with warmth, softness, and nature-inspired texture.",
    bestUseCases: ["Interiors", "Wellness products", "Brand imagery"],
    relatedKeywords: ["Earth Tones", "Japandi", "Marble Texture"],
    examplePrompt: "Organic modern bathroom interior with stone sink, earth tones, soft light, natural materials",
    commercialApplications: ["Interior design", "Spa branding", "Home decor marketing"],
    adobeStockPotential: "High for current interior, wellness, and premium lifestyle searches.",
    difficulty: "Beginner"
  },
  {
    title: "Morandi Palette",
    category: "Color",
    heroImage: {
      alt: "Abstract placeholder for Morandi palette with dusty muted color fields",
      background:
        "linear-gradient(135deg, #b9aaa0 0%, #d2c7bd 25%, #aeb9ad 25% 52%, #d8c4b2 52% 76%, #8f9a91 76% 100%)"
    },
    overview:
      "Morandi Palette is a color keyword inspired by the quiet, dusty tones associated with painter Giorgio Morandi. In AI image prompts, it usually points the model toward muted, low-saturation colors such as dusty rose, warm gray, clay, sage, beige, soft blue, faded mauve, and stone. The effect is refined, calm, and slightly editorial. This palette is useful when you want an image to feel sophisticated without becoming cold or overly minimal. For beginners, Morandi Palette is a practical way to control color harmony. It can make a scene feel more tasteful, cohesive, and brand-ready, especially when default AI colors look too bright or artificial.",
    whatItDoes:
      "Adding Morandi Palette to a prompt reduces color intensity and encourages subtle relationships between hues. Instead of strong primary colors or neon contrast, the image may use softened colors that feel natural, dusty, and carefully chosen. This can improve the professional quality of still lifes, interiors, packaging mockups, beauty products, stationery, ceramics, and lifestyle scenes. Morandi Palette is not the same as pastel colors. Pastels can feel sweet and light, while Morandi tones are usually more muted, mature, and painterly. It pairs well with minimalist, soft light, paper texture, ceramic objects, organic modern, Japandi, and negative space. If the result feels too dull, add gentle contrast, warm highlights, or a clear focal object.",
    bestUseCases: [
      "Beauty, skincare, fragrance, and wellness product imagery where the brand should feel calm, premium, and refined. The palette can make packaging feel more editorial.",
      "Interior design and home decor visuals that need a soft, sophisticated color story. Morandi tones work well with ceramics, linen, plaster, wood, stone, and natural light.",
      "Stationery, packaging, and branding mockups where the image should feel designer-friendly without strong visual noise. Muted colors leave room for typography and identity systems.",
      "Stock images for calm lifestyle concepts, slow living, creative work, handmade objects, modern homes, art direction, and boutique retail."
    ],
    relatedKeywords: ["Minimalist", "Golden Hour", "Cinematic Lighting"],
    examplePrompt:
      "A set of ceramic vases on natural linen, Morandi palette, dusty rose and sage tones, soft window light, minimalist still life, gentle shadows, refined editorial composition",
    commercialApplications: ["Beauty branding", "Home decor", "Editorial backgrounds"],
    adobeStockPotential:
      "Morandi Palette has good Adobe Stock potential for buyers who need refined, design-aware visuals. It is especially strong for beauty branding, wellness, home decor, stationery, packaging, boutique retail, and editorial lifestyle content. The palette can make simple objects feel intentional and premium, which helps images stand out from generic colorful stock. To make Morandi-style images more useful, keep the subject clear and avoid making the entire frame too low contrast. Designers often need images that are soft but still readable. This keyword also works well for backgrounds and mockups because the colors are gentle enough to support text overlays. For stock submissions, avoid brand names, copyrighted artwork, and overly specific product labels.",
    difficulty: "Intermediate"
  },
  {
    title: "Pastel Colors",
    category: "Color",
    overview: "A soft color keyword using pale, gentle hues for friendly and airy visuals.",
    whatItDoes: "Reduces intensity and adds sweetness, calm, or playful lightness.",
    bestUseCases: ["Beauty", "Children's products", "Wellness"],
    relatedKeywords: ["Dreamy", "Soft Light", "Morandi Palette"],
    examplePrompt: "A pastel colors stationery flat lay, soft light, clean background, negative space",
    commercialApplications: ["Social templates", "Beauty campaigns", "Spring promotions"],
    adobeStockPotential: "High for approachable seasonal, lifestyle, and product images.",
    difficulty: "Beginner"
  },
  {
    title: "Warm Tones",
    category: "Color",
    overview: "A palette direction based on reds, oranges, yellows, and warm neutrals.",
    whatItDoes: "Creates comfort, energy, optimism, and hospitality.",
    bestUseCases: ["Food imagery", "Travel", "Home interiors"],
    relatedKeywords: ["Golden Hour", "Earth Tones", "Serene"],
    examplePrompt: "A breakfast table in morning sun, warm tones, soft light, cozy lifestyle photo",
    commercialApplications: ["Food brands", "Hospitality", "Family lifestyle campaigns"],
    adobeStockPotential: "Very high for food, interiors, travel, and lifestyle categories.",
    difficulty: "Beginner"
  },
  {
    title: "Cool Tones",
    category: "Color",
    overview: "A palette direction based on blues, greens, cyans, and cool neutrals.",
    whatItDoes: "Adds calm, clarity, technology, or clinical polish.",
    bestUseCases: ["Tech visuals", "Healthcare", "Modern architecture"],
    relatedKeywords: ["Futuristic", "Serene", "Monochrome"],
    examplePrompt: "A clean healthcare reception area, cool tones, wide angle, serene atmosphere, modern design",
    commercialApplications: ["Healthcare marketing", "SaaS visuals", "Corporate presentations"],
    adobeStockPotential: "High for business, medical, technology, and clean design imagery.",
    difficulty: "Beginner"
  },
  {
    title: "Monochrome",
    category: "Color",
    overview: "A color strategy built from one hue or a black-and-white range.",
    whatItDoes: "Creates unity, graphic impact, and simplified visual hierarchy.",
    bestUseCases: ["Architecture", "Fashion", "Premium branding"],
    relatedKeywords: ["Brutalist", "Hard Light", "Minimalist"],
    examplePrompt: "A monochrome fashion portrait, hard light, minimalist styling, strong shadow shapes",
    commercialApplications: ["Luxury campaigns", "Editorial layouts", "Poster design"],
    adobeStockPotential: "Good for elegant and graphic commercial imagery.",
    difficulty: "Beginner"
  },
  {
    title: "Earth Tones",
    category: "Color",
    overview: "A natural palette of browns, clay, olive, sand, stone, and muted greens.",
    whatItDoes: "Creates grounded, organic, sustainable, and warm visual cues.",
    bestUseCases: ["Wellness", "Interiors", "Sustainable brands"],
    relatedKeywords: ["Organic Modern", "Japandi", "Warm Tones"],
    examplePrompt: "A sustainable skincare package set, earth tones, paper texture, soft light, organic modern styling",
    commercialApplications: ["Eco brands", "Home decor", "Wellness campaigns"],
    adobeStockPotential: "Very high for sustainability, interiors, and lifestyle visuals.",
    difficulty: "Beginner"
  },
  {
    title: "Muted Colors",
    category: "Color",
    overview: "A restrained palette with reduced saturation and understated contrast.",
    whatItDoes: "Adds sophistication, calm, and editorial maturity.",
    bestUseCases: ["Luxury visuals", "Interiors", "Professional branding"],
    relatedKeywords: ["Moody", "Morandi Palette", "Minimalist"],
    examplePrompt: "A modern workspace with muted colors, minimalist furniture, soft light, professional stock photo",
    commercialApplications: ["Corporate content", "Interior brands", "Premium social media"],
    adobeStockPotential: "High for versatile business and design-friendly imagery.",
    difficulty: "Beginner"
  },
  {
    title: "High Contrast Colors",
    category: "Color",
    overview: "A vivid palette keyword that emphasizes strong separation between colors or values.",
    whatItDoes: "Creates impact, readability, and bold visual energy.",
    bestUseCases: ["Posters", "Fashion", "Sports campaigns"],
    relatedKeywords: ["Hard Light", "Cyberpunk", "Brutalist"],
    examplePrompt: "A bold sports shoe campaign image, high contrast colors, hard light, dynamic composition",
    commercialApplications: ["Advertising", "Event graphics", "Product launches"],
    adobeStockPotential: "High for attention-grabbing campaign and editorial assets.",
    difficulty: "Intermediate"
  },
  {
    title: "Glass Reflection",
    category: "Texture & Material",
    overview: "A material cue for transparent, glossy, reflective surfaces.",
    whatItDoes: "Adds premium highlights, depth, and modern product polish.",
    bestUseCases: ["Tech products", "Cosmetics", "Luxury packaging"],
    relatedKeywords: ["Neon Glow", "Studio Lighting", "Futuristic"],
    examplePrompt: "A transparent cosmetic bottle on glass reflection, studio lighting, soft shadows, luxury branding",
    commercialApplications: ["Beauty ads", "Product mockups", "Tech launch visuals"],
    adobeStockPotential: "High for polished product and premium commercial scenes.",
    difficulty: "Intermediate"
  },
  {
    title: "Metallic Surface",
    category: "Texture & Material",
    overview: "A reflective material keyword for steel, chrome, aluminum, gold, or brushed metal finishes.",
    whatItDoes: "Adds durability, premium value, and sleek industrial texture.",
    bestUseCases: ["Tech hardware", "Luxury goods", "Automotive visuals"],
    relatedKeywords: ["Futuristic", "Studio Lighting", "Hard Light"],
    examplePrompt: "A brushed aluminum speaker, metallic surface, studio lighting, cool tones, premium product photo",
    commercialApplications: ["Consumer electronics", "Automotive", "Luxury product campaigns"],
    adobeStockPotential: "High for product, technology, and industrial stock demand.",
    difficulty: "Intermediate"
  },
  {
    title: "Paper Texture",
    category: "Texture & Material",
    overview: "A tactile surface cue for handmade, recycled, folded, or printed paper.",
    whatItDoes: "Adds craft, warmth, detail, and editorial authenticity.",
    bestUseCases: ["Stationery", "Packaging", "Flat lays"],
    relatedKeywords: ["Close Up", "Earth Tones", "Luxury Branding"],
    examplePrompt: "Close up of recycled paper packaging, paper texture, earth tones, soft light, minimalist layout",
    commercialApplications: ["Packaging design", "Stationery branding", "Editorial mockups"],
    adobeStockPotential: "Good for design mockups, packaging, and background textures.",
    difficulty: "Beginner"
  },
  {
    title: "Marble Texture",
    category: "Texture & Material",
    overview: "A luxury material cue featuring natural stone veining and polished surfaces.",
    whatItDoes: "Adds refinement, weight, and a high-end interior or product context.",
    bestUseCases: ["Luxury branding", "Interiors", "Beauty products"],
    relatedKeywords: ["Luxury Branding", "Organic Modern", "Glass Reflection"],
    examplePrompt: "A luxury skincare jar on marble texture, soft studio lighting, glass reflection, muted colors",
    commercialApplications: ["Beauty ads", "Interior design", "Premium packaging"],
    adobeStockPotential: "High for luxury, beauty, and upscale background imagery.",
    difficulty: "Beginner"
  },
  {
    title: "Business Presentation Background",
    category: "Commercial Use",
    overview: "A practical keyword for clean, abstract, copy-friendly visuals used in slides and reports.",
    whatItDoes: "Prioritizes readability, whitespace, and flexible professional design.",
    bestUseCases: ["Slide covers", "Corporate decks", "Report visuals"],
    relatedKeywords: ["Negative Space", "Minimalist", "Cool Tones"],
    examplePrompt: "A clean business presentation background, negative space, cool tones, subtle glass shapes, modern corporate style",
    commercialApplications: ["Pitch decks", "Webinars", "Annual reports"],
    adobeStockPotential: "Very high because presentation backgrounds are evergreen stock assets.",
    difficulty: "Beginner"
  },
  {
    title: "Product Photography",
    category: "Commercial Use",
    overview: "A commercial keyword for clear, sellable images focused on a product.",
    whatItDoes: "Encourages clean lighting, strong subject priority, and realistic product staging.",
    bestUseCases: ["Ecommerce", "Ads", "Catalogs"],
    relatedKeywords: ["Studio Lighting", "Depth of Field", "Glass Reflection"],
    examplePrompt: "Product photography of a wireless charger on a clean desk, studio lighting, depth of field, modern styling",
    commercialApplications: ["Online stores", "Product launches", "Retail campaigns"],
    adobeStockPotential: "Very high across ecommerce, retail, and advertising use cases.",
    difficulty: "Beginner"
  },
  {
    title: "Stock Image Design",
    category: "Commercial Use",
    overview: "A keyword direction for broadly useful images with clear concepts and licensing-friendly composition.",
    whatItDoes: "Creates flexible, generic-but-polished visuals that can serve many buyers.",
    bestUseCases: ["Business concepts", "Website headers", "Marketing templates"],
    relatedKeywords: ["Business Presentation Background", "Negative Space", "Rule of Thirds"],
    examplePrompt: "A diverse team reviewing charts in a bright office, stock image design, rule of thirds, natural soft light",
    commercialApplications: ["Blogs", "Landing pages", "Corporate marketing"],
    adobeStockPotential: "Very high when concepts are clear, current, and easy to reuse.",
    difficulty: "Beginner"
  },
  {
    title: "Luxury Branding",
    category: "Commercial Use",
    overview: "A premium commercial keyword for elegant, expensive, carefully styled brand imagery.",
    whatItDoes: "Adds refinement through materials, lighting, spacing, and restrained color.",
    bestUseCases: ["Beauty", "Jewelry", "Hospitality"],
    relatedKeywords: ["Marble Texture", "Studio Lighting", "Muted Colors"],
    examplePrompt: "A luxury branding scene for a perfume bottle, marble texture, muted colors, studio lighting, elegant shadows",
    commercialApplications: ["Premium ads", "Packaging mockups", "Brand identity visuals"],
    adobeStockPotential: "High for beauty, fashion, jewelry, and upscale marketing assets.",
    difficulty: "Intermediate"
  }
];

export const keywords = keywordSeeds.map((keyword) => ({
  ...keyword,
  slug: slugify(keyword.title),
  categorySlug: slugify(keyword.category)
}));

export type KeywordWithSlug = (typeof keywords)[number];
