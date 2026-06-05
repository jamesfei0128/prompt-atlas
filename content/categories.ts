import { slugify } from "@/lib/slug";

export const categories = [
  {
    title: "Lighting",
    description: "Prompt keywords for shaping light direction, quality, glow, and photographic drama."
  },
  {
    title: "Atmosphere",
    description: "Mood-setting language for emotion, haze, weather, ambience, and cinematic tone."
  },
  {
    title: "Composition",
    description: "Framing and visual structure keywords that guide layout, focus, and balance."
  },
  {
    title: "Style",
    description: "Aesthetic directions for design languages, eras, interiors, and visual identity."
  },
  {
    title: "Color",
    description: "Palette keywords for controlling temperature, contrast, softness, and brand feeling."
  },
  {
    title: "Texture & Material",
    description: "Surface and material cues for tactile realism, reflection, luxury, and craft."
  },
  {
    title: "Commercial Use",
    description: "Keywords tuned for stock imagery, ads, branding, product visuals, and business assets."
  }
].map((category) => ({
  ...category,
  slug: slugify(category.title)
}));

export type Category = (typeof categories)[number];
