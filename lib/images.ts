import { existsSync } from "fs";
import path from "path";

export function publicImageExists(src?: string) {
  if (!src || src.startsWith("http")) {
    return Boolean(src);
  }

  const publicPath = path.join(process.cwd(), "public", src.replace(/^\//, ""));
  return existsSync(publicPath);
}
