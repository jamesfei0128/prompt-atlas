import imageManifest from "@/content/image-manifest.json";

export function keywordHero(keywordSlug: string, background: string) {
  const image = imageManifest.images.find((item) => item.keywordSlug === keywordSlug);

  return {
    src: `${imageManifest.outputDirectory}${image?.filename ?? `${keywordSlug}.png`}`,
    alt: image?.altText ?? `${keywordSlug} PromptAtlas keyword hero image`,
    title: image?.imageTitle ?? `${keywordSlug} PromptAtlas keyword hero`,
    background
  };
}
