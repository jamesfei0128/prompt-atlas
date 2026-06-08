import { slugify } from "@/lib/slug";
import { colorKeywordSeeds } from "@/content/color-keywords";
import { keywordHero } from "@/content/image-meta";
import { remainingKeywordOverrides } from "@/content/remaining-keyword-overrides";

export type Keyword = {
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
  definition?: string;
  visualCharacteristics?: string[];
  overview: string;
  whatItDoes: string;
  bestUseCases: string[];
  relatedKeywords: string[];
  examplePrompt: string;
  promptExamples?: string[];
  commercialApplications: string[];
  adobeStockPotential: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  faqs?: {
    question: string;
    answer: string;
  }[];
};

const baseKeywordSeeds: Keyword[] = [
  {
    title: "Cinematic Lighting",
    category: "Lighting",
    published: true,
    heroImage: keywordHero(
      "cinematic-lighting",
      "radial-gradient(circle at 24% 28%, #fff4d7 0, transparent 28%), linear-gradient(135deg, #232323 0%, #6d4b38 48%, #e7d8bc 100%)"
    ),
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
    relatedKeywords: ["Golden Hour", "Volumetric Lighting", "Moody Lighting"],
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
    published: true,
    heroImage: keywordHero(
      "golden-hour",
      "radial-gradient(circle at 18% 22%, #fff1b8 0, transparent 30%), linear-gradient(135deg, #e7a94f 0%, #f4d7a1 46%, #f8f2e8 100%)"
    ),
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
    relatedKeywords: ["Cinematic Lighting", "Backlight", "Soft Light"],
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
    published: true,
    heroImage: keywordHero(
      "soft-light",
      "radial-gradient(circle at 28% 20%, #ffffff 0, transparent 32%), linear-gradient(135deg, #f7f4ee 0%, #e8eee9 48%, #d8ccc4 100%)"
    ),
    overview:
      "Soft Light is a lighting keyword used to create gentle, flattering, low-contrast images. It describes light that has been diffused before it reaches the subject, like daylight through a sheer curtain, a large studio softbox, or cloudy outdoor light. In AI image prompts, Soft Light is especially useful when you want the image to feel calm, natural, welcoming, and easy to use commercially. It reduces harsh shadow edges and helps skin, products, interiors, and materials look smoother. For beginners, Soft Light is one of the safest lighting keywords because it improves many images without making them feel too dramatic or overly stylized.",
    whatItDoes:
      "When you add Soft Light to a prompt, the model is encouraged to create broader highlights, smoother transitions, and less aggressive contrast. Shadows may still exist, but they feel gradual rather than sharp. This helps portraits look more approachable, product photos feel cleaner, and interior scenes feel peaceful. Soft Light also works well when you need a neutral stock image because it does not force a strong mood. It can support beauty, wellness, lifestyle, ecommerce, food, home decor, and business imagery. To control the result, pair it with practical phrases like natural window light, diffused studio light, soft shadows, clean background, realistic skin tones, or gentle highlights. If the image becomes too flat, add a subtle rim light, shallow depth of field, or a clear focal object.",
    bestUseCases: [
      "Portraits, wellness imagery, and lifestyle scenes where people should look relaxed, friendly, and natural rather than dramatic or intense.",
      "Beauty, skincare, food, ceramics, stationery, and ecommerce product images where smooth surfaces and soft shadows make the subject feel premium and accessible.",
      "Interior and home decor visuals that need a calm, bright atmosphere. Soft Light helps rooms feel livable and visually clean.",
      "Stock imagery for concepts such as comfort, care, clarity, health, productivity, calm workspaces, and everyday modern living."
    ],
    relatedKeywords: ["Studio Lighting", "High Key Lighting", "Golden Hour"],
    examplePrompt:
      "A ceramic skincare bottle on a pale linen surface, soft light, diffused window glow, gentle shadows, clean minimalist styling, neutral background, commercial beauty photography",
    commercialApplications: ["Beauty campaigns", "Ecommerce imagery", "Wellness content"],
    adobeStockPotential:
      "Soft Light has excellent Adobe Stock potential because it creates broadly usable images that buyers can adapt across many industries. Designers often need images that feel polished but not overly specific, and Soft Light supports that. It works for beauty campaigns, healthcare content, wellness blogs, family lifestyle, product mockups, food packaging, online shops, and presentation visuals. For better stock value, keep the subject clear, avoid clutter, and leave some negative space for text. Soft Light can sometimes make an image feel too generic, so combine it with a clear use case such as skincare product photography, modern home office, healthy breakfast table, or calm wellness portrait.",
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
    published: true,
    heroImage: keywordHero(
      "rim-light",
      "radial-gradient(circle at 76% 38%, #fff3c7 0, transparent 18%), linear-gradient(135deg, #151817 0%, #26302c 54%, #caa36e 100%)"
    ),
    overview:
      "Rim Light is a lighting keyword that describes a bright edge of light around a subject. The light usually comes from behind or slightly behind the subject, catching the outline of hair, shoulders, products, glass, metal, or other edges. In AI image generation, Rim Light is useful when the subject blends into the background or when you want a more professional, cinematic result. It adds separation, depth, and polish. For beginners, Rim Light is a practical keyword because it solves a common problem: flat images where the subject does not stand out clearly.",
    whatItDoes:
      "When you use Rim Light in a prompt, the model is guided to create a narrow highlight along the outer edge of the subject. This can make a portrait feel more dramatic, a product feel more premium, or a sports image feel more energetic. Rim Light is often paired with darker backgrounds because the bright outline becomes easier to see. It can also work in bright scenes if the effect is subtle. The keyword is especially helpful for reflective materials, silhouettes, backlit people, technology products, bottles, jewelry, and fitness imagery. To refine it, use phrases like subtle rim light, warm rim highlight, blue edge light, dark studio background, cinematic lighting, or separated from background. Avoid asking for too many rim lights at once, since the result can become artificial.",
    bestUseCases: [
      "Portraits, athlete images, musicians, founders, and character studies where the person needs to feel defined, confident, and visually separated from the background.",
      "Product photography for bottles, headphones, watches, electronics, vehicles, and reflective materials. Rim Light can emphasize shape and premium surface detail.",
      "Dark studio scenes, cinematic posters, sports campaigns, gaming visuals, and music promotions where strong outlines and contrast improve visual impact.",
      "Stock concepts about leadership, performance, focus, technology, innovation, nightlife, fitness, and premium branding."
    ],
    relatedKeywords: ["Backlight", "Cinematic Lighting", "Low Key Lighting"],
    examplePrompt:
      "A runner standing in a dark studio, subtle rim light outlining the shoulders and profile, cinematic lighting, controlled contrast, realistic athletic campaign photography",
    commercialApplications: ["Sports campaigns", "Tech ads", "Premium product images"],
    adobeStockPotential:
      "Rim Light has strong Adobe Stock potential for dramatic portraits, fitness campaigns, tech products, premium lifestyle images, and entertainment visuals. It helps images feel more produced, which can make them attractive for ads, website headers, magazine layouts, and social campaigns. Stock buyers often need clear subjects that can be cut out, placed beside text, or used as hero visuals. Rim Light supports that by defining the outline. For best results, keep the subject recognizable, avoid overly dark details, and make sure the rim effect supports the concept instead of overpowering it. Images with clean backgrounds and strong subject separation are often more flexible for commercial buyers.",
    difficulty: "Intermediate"
  },
  {
    title: "Backlight",
    category: "Lighting",
    published: true,
    heroImage: keywordHero(
      "backlight",
      "radial-gradient(circle at 50% 28%, #fff0b5 0, transparent 30%), linear-gradient(135deg, #6d6b5f 0%, #d6b56e 48%, #f7ead3 100%)"
    ),
    overview:
      "Backlight is a lighting direction where the main light source sits behind the subject, facing toward the camera. It can create glowing edges, silhouettes, translucent materials, and a strong sense of atmosphere. In AI image prompts, Backlight is useful when you want an image to feel warm, emotional, mysterious, or visually layered. It is common in outdoor lifestyle photography, travel imagery, nature scenes, music videos, and cinematic portraits. Beginners can use Backlight to make a simple scene feel more dramatic without needing complicated camera or lighting language.",
    whatItDoes:
      "When a prompt includes Backlight, the model often places the brightest part of the image behind the main subject. This can create a halo around hair, a glowing outline around a person, light passing through fabric, or a bright window behind a product. Backlight can also make haze, dust, smoke, or fog more visible, which is why it pairs well with Volumetric Lighting and Atmospheric Haze. It is different from Rim Light because Backlight describes the overall direction of the light, while Rim Light describes the visible edge highlight that may result from it. To control Backlight, add phrases like soft backlight, warm backlight, silhouette, golden hour, translucent fabric, or subject still visible. If the subject becomes too dark, add fill light, visible face, balanced exposure, or soft front detail.",
    bestUseCases: [
      "Outdoor portraits and lifestyle scenes where warm sunlight behind the subject creates an emotional, aspirational feeling.",
      "Travel, wellness, nature, and family imagery where glow, atmosphere, and natural beauty matter more than hard detail.",
      "Product and still-life images involving glass, fabric, leaves, beverages, bottles, or translucent materials that look better when light passes through them.",
      "Commercial concepts such as hope, freedom, renewal, calm, spirituality, morning routines, outdoor adventure, and premium lifestyle."
    ],
    relatedKeywords: ["Rim Light", "Golden Hour", "Volumetric Lighting"],
    examplePrompt:
      "A person walking through tall grass at sunrise, warm backlight, soft glowing edges, visible face detail, atmospheric haze, natural lifestyle photography, peaceful commercial mood",
    commercialApplications: ["Outdoor campaigns", "Book covers", "Inspirational imagery"],
    adobeStockPotential:
      "Backlight has high Adobe Stock potential because it supports emotional and aspirational image concepts. Buyers often need visuals for wellness, travel, spirituality, outdoor products, family lifestyle, environmental themes, and inspirational campaigns. Backlit images can feel premium when the subject remains readable and the glow does not wash out the entire frame. For stock use, avoid turning every image into a full silhouette unless that is the concept. A partially visible subject is often more flexible. Backlight works especially well when paired with clear copy space, natural settings, and universal themes such as new beginnings, health, freedom, and calm living.",
    difficulty: "Beginner"
  },
  {
    title: "Volumetric Lighting",
    category: "Lighting",
    published: true,
    heroImage: keywordHero(
      "volumetric-lighting",
      "linear-gradient(120deg, rgba(255,255,255,0.88) 0 12%, transparent 12% 28%, rgba(255,255,255,0.48) 28% 38%, transparent 38%), linear-gradient(135deg, #dce7e1 0%, #9eaa9d 48%, #5b665d 100%)"
    ),
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
    relatedKeywords: ["Cinematic Lighting", "Backlight", "Rim Light"],
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
    published: true,
    heroImage: keywordHero(
      "studio-lighting",
      "radial-gradient(circle at 30% 20%, #ffffff 0, transparent 24%), radial-gradient(circle at 70% 35%, #f2f7f4 0, transparent 22%), linear-gradient(135deg, #e8ece8 0%, #fbfaf7 48%, #cfd8d1 100%)"
    ),
    overview:
      "Studio Lighting is a prompt keyword that suggests a controlled, professional lighting setup. Instead of relying on natural sunlight or random environmental light, Studio Lighting points the model toward clean highlights, intentional shadows, balanced exposure, and a polished commercial finish. It is one of the most practical lighting keywords for AI image creators because it works across product photography, portraits, ecommerce, fashion, corporate visuals, and catalog-style imagery. For beginners, Studio Lighting is helpful when you want an image to look professional, reliable, and ready for business use.",
    whatItDoes:
      "When Studio Lighting is added to a prompt, the image usually becomes more controlled. The subject may appear against a clean background, with highlights placed to show shape and texture. Shadows are often softer and more predictable than outdoor light, and the overall scene may feel like it was photographed with softboxes, reflectors, or a seamless backdrop. Studio Lighting can be bright and minimal, dramatic and low key, or elegant and luxury-focused depending on your supporting keywords. Pair it with soft light for approachable product images, rim light for depth, high key lighting for bright catalog looks, or low key lighting for premium drama. If the result feels too artificial, add realistic materials, natural shadow falloff, or editorial product photography.",
    bestUseCases: [
      "Product photography for ecommerce, packaging, beauty, electronics, jewelry, accessories, and home goods. Studio Lighting makes objects feel clear and sellable.",
      "Corporate portraits, founder portraits, professional headshots, and team images where clean lighting and trust matter.",
      "Fashion, beauty, and luxury branding visuals that need controlled highlights, refined surfaces, and a polished commercial tone.",
      "Stock images for business, retail, online shopping, premium products, advertising, presentation slides, and brand mockups."
    ],
    relatedKeywords: ["Soft Light", "High Key Lighting", "Low Key Lighting"],
    examplePrompt:
      "A premium perfume bottle on a seamless warm gray background, studio lighting, soft key light, subtle rim highlight, clean shadow, elegant luxury product photography",
    commercialApplications: ["Ecommerce", "Advertising", "Brand lookbooks"],
    adobeStockPotential:
      "Studio Lighting has very high Adobe Stock potential because it aligns directly with commercial image needs. Buyers frequently search for clean product images, business portraits, isolated objects, packaging mockups, retail visuals, and professional campaign assets. Studio-lit images are easier to place in ads, websites, catalogs, and presentations because the lighting is controlled and the subject is clear. To increase stock usefulness, avoid brand names and copyrighted packaging, keep backgrounds simple, and make sure the product or person is easy to understand at thumbnail size. Studio Lighting is also useful for creating variations: bright ecommerce, dark luxury, colorful campaign, or neutral corporate.",
    difficulty: "Beginner"
  },
  {
    title: "Low Key Lighting",
    category: "Lighting",
    published: true,
    heroImage: keywordHero(
      "low-key-lighting",
      "radial-gradient(circle at 72% 34%, #d7b77a 0, transparent 18%), linear-gradient(135deg, #0f1110 0%, #202623 54%, #4d4236 100%)"
    ),
    overview:
      "Low Key Lighting is a lighting style built around darkness, contrast, and selective illumination. In AI image prompts, it usually creates images with deep shadows, darker backgrounds, and a small amount of focused light on the subject. The result can feel dramatic, mysterious, premium, serious, or cinematic. Low Key Lighting is often used in luxury product photography, film posters, athletic portraits, music visuals, and editorial images. For beginners, it is a useful keyword when you want more mood and depth, but it needs a clear subject so the image does not become too dark to read.",
    whatItDoes:
      "When you use Low Key Lighting, the model is guided to reduce the overall brightness of the scene and emphasize the relationship between light and shadow. Important parts of the subject may be illuminated while other areas fall into darkness. This can make a watch, perfume bottle, portrait, car interior, or musician feel more expensive and dramatic. Low Key Lighting pairs well with Rim Light, Cinematic Lighting, Moody Lighting, black background, hard light, metallic surface, glass reflection, and shallow depth of field. To keep it usable, add phrases like visible subject detail, controlled shadows, subtle highlights, and clean background. Without those controls, the model may hide too much information in shadow.",
    bestUseCases: [
      "Luxury product images where darkness, reflection, and selective highlights make the object feel premium and exclusive.",
      "Portraits, athlete images, musicians, and editorial subjects that need a serious, cinematic, or intense mood.",
      "Posters, hero banners, book covers, and dramatic website visuals where a strong focal point matters more than bright detail everywhere.",
      "Stock concepts related to focus, mystery, performance, leadership, premium branding, nightlife, security, and innovation."
    ],
    relatedKeywords: ["Rim Light", "Moody Lighting", "Cinematic Lighting"],
    examplePrompt:
      "A luxury black perfume bottle on dark stone, low key lighting, narrow warm highlight, subtle rim light, controlled reflections, deep shadows, premium advertising photography",
    commercialApplications: ["Luxury ads", "Editorial portraits", "Premium product campaigns"],
    adobeStockPotential:
      "Low Key Lighting has strong Adobe Stock potential for premium and dramatic visual categories. It is useful for luxury branding, fragrance, jewelry, watches, sports, music, security, finance, technology, and high-end lifestyle imagery. Buyers may use low key images when they need a serious or exclusive feeling. The main stock risk is that the image becomes too dark or too niche. To improve usefulness, keep the subject readable, maintain clean composition, and leave space for text when possible. Low key images with well-controlled highlights can stand out in search results because they look more produced than ordinary bright stock photos.",
    difficulty: "Intermediate"
  },
  {
    title: "High Key Lighting",
    category: "Lighting",
    published: true,
    heroImage: keywordHero(
      "high-key-lighting",
      "radial-gradient(circle at 30% 24%, #ffffff 0, transparent 34%), linear-gradient(135deg, #ffffff 0%, #f6f3ec 46%, #e4eee9 100%)"
    ),
    overview:
      "High Key Lighting is a bright lighting style with low contrast, pale shadows, and an airy overall feeling. In AI image prompts, it is useful for creating clean, optimistic, fresh, and approachable images. The background is often white or light-toned, and the subject is evenly illuminated. High Key Lighting is common in beauty campaigns, wellness imagery, ecommerce product photography, healthcare visuals, baby and family photography, and modern business imagery. For beginners, it is a helpful keyword when you want a bright commercial look without harsh shadows or heavy drama.",
    whatItDoes:
      "When High Key Lighting appears in a prompt, the model tends to lift the overall exposure and reduce deep shadow areas. The image may feel clean, open, and friendly. This can make products look fresh, people look approachable, and interiors feel bright and modern. High Key Lighting is different from simply saying white background. It describes the whole lighting approach: soft shadows, bright surfaces, and controlled low contrast. Pair it with Soft Light, Studio Lighting, Minimalist, white seamless background, clean composition, pastel colors, or ecommerce photography. If the image becomes washed out, add phrases like visible detail, gentle contrast, natural skin tones, and defined subject edges.",
    bestUseCases: [
      "Beauty, skincare, healthcare, wellness, and family-oriented images where freshness, trust, and cleanliness are important.",
      "Ecommerce and catalog product photography that needs a simple, bright, buyer-friendly presentation.",
      "Business, education, and presentation visuals where the image should feel clear, positive, and easy to pair with text.",
      "Stock concepts such as clarity, care, optimism, simplicity, clean living, modern work, health, and new beginnings."
    ],
    relatedKeywords: ["Soft Light", "Studio Lighting", "Minimalist"],
    examplePrompt:
      "A clean skincare product set on a white seamless background, high key lighting, soft shadows, pale neutral styling, fresh beauty campaign photography, visible product detail",
    commercialApplications: ["Ecommerce catalogs", "Healthcare visuals", "Beauty campaigns"],
    adobeStockPotential:
      "High Key Lighting has excellent Adobe Stock potential because bright, clean images are widely useful. Buyers often need optimistic visuals for healthcare, wellness, beauty, education, business, family, and ecommerce. High key images can work well in layouts because they feel open and do not compete heavily with text or branding. To make them more valuable, avoid overexposure and keep important details visible. A strong high key stock image should feel clean but not empty. Clear subjects, subtle shadows, and practical copy space can make these images useful for websites, product pages, slide decks, ads, and social media templates.",
    difficulty: "Beginner"
  },
  {
    title: "Moody Lighting",
    category: "Lighting",
    published: true,
    heroImage: keywordHero(
      "moody-lighting",
      "radial-gradient(circle at 22% 30%, #d6c09a 0, transparent 22%), linear-gradient(135deg, #252a28 0%, #59605b 48%, #7a6658 100%)"
    ),
    overview:
      "Moody Lighting is a prompt keyword for images with atmosphere, emotional depth, and a more restrained lighting style. It often includes darker tones, directional light, muted colors, and visible shadow areas, but it does not have to be as dark as Low Key Lighting. In AI image generation, Moody Lighting is useful when you want a scene to feel thoughtful, cinematic, intimate, elegant, or mysterious. It is common in editorial portraits, luxury interiors, coffee shop scenes, rainy windows, fashion campaigns, and premium product photography. Beginners can use it to add feeling and story to otherwise plain images.",
    whatItDoes:
      "When you add Moody Lighting, the model tends to reduce brightness, soften the palette, and create a stronger emotional tone. Light may come from a window, lamp, candle, screen, doorway, or narrow studio source. Shadows become part of the composition instead of something to remove. Moody Lighting can make a room feel quiet, a portrait feel introspective, or a product feel more premium. It pairs well with Cinematic Lighting, Low Key Lighting, Warm Tones, Muted Colors, Depth of Field, and Atmospheric Haze. To keep the result practical, describe the subject clearly and ask for readable detail. If the image becomes too gloomy, add soft highlight, balanced exposure, or subtle warm light.",
    bestUseCases: [
      "Editorial portraits and lifestyle scenes where emotion, introspection, or quiet atmosphere are more important than bright commercial polish.",
      "Luxury interiors, boutique hospitality, restaurants, coffee shops, studios, and home scenes that should feel intimate and designed.",
      "Premium product images for fragrance, leather goods, watches, books, beverages, and craft objects where restrained light adds perceived value.",
      "Stock concepts such as focus, creativity, solitude, craftsmanship, premium service, rainy days, evening routines, and thoughtful work."
    ],
    relatedKeywords: ["Low Key Lighting", "Cinematic Lighting", "Rim Light"],
    examplePrompt:
      "A quiet designer workspace beside a rain-streaked window, moody lighting, muted colors, soft directional lamp glow, shallow depth of field, editorial lifestyle photography",
    commercialApplications: ["Editorial campaigns", "Hospitality branding", "Premium lifestyle visuals"],
    adobeStockPotential:
      "Moody Lighting has good Adobe Stock potential for buyers seeking premium, editorial, or emotionally rich images. It is useful for lifestyle articles, hospitality websites, book covers, music visuals, luxury branding, coffee and food culture, creative work, and boutique retail. The key is balance: the mood should be clear, but the subject must remain readable. Overly dark or vague images can be harder to sell. Strong moody stock images usually have a specific setting, a clean focal point, and a commercial theme such as creativity, calm, focus, elegance, or evening atmosphere. This keyword helps create images that feel less generic and more curated.",
    difficulty: "Intermediate"
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
    published: true,
    heroImage: keywordHero(
      "minimalist",
      "linear-gradient(135deg, #fbfaf7 0%, #fbfaf7 52%, #dfe7e2 52% 72%, #b8c5ba 72% 100%)"
    ),
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
    published: true,
    heroImage: keywordHero(
      "morandi-palette",
      "linear-gradient(135deg, #b9aaa0 0%, #d2c7bd 25%, #aeb9ad 25% 52%, #d8c4b2 52% 76%, #8f9a91 76% 100%)"
    ),
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

const keywordSeeds: Keyword[] = [
  ...baseKeywordSeeds.map((keyword) => ({
    ...keyword,
    ...remainingKeywordOverrides[keyword.title]
  })),
  ...colorKeywordSeeds
];

export const keywords = keywordSeeds.map((keyword) => ({
  ...keyword,
  slug: slugify(keyword.title),
  categorySlug: slugify(keyword.category)
}));

export type KeywordWithSlug = (typeof keywords)[number];
