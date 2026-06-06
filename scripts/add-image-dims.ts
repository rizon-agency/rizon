import { execFileSync } from "node:child_process";
import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { projects } from "../src/lib/projects";

const root = process.cwd();

function dims(src: string): { width: number; height: number } {
  const file = join(root, "public", src);
  const out = execFileSync("sips", [
    "-g",
    "pixelWidth",
    "-g",
    "pixelHeight",
    file,
  ]).toString();
  const width = Number(out.match(/pixelWidth:\s*(\d+)/)?.[1]);
  const height = Number(out.match(/pixelHeight:\s*(\d+)/)?.[1]);
  if (!width || !height) throw new Error(`Could not read dims for ${src}`);
  return { width, height };
}

const withDims = projects.map((project) => ({
  ...project,
  images: (project.images as unknown as Array<string | { src: string }>).map(
    (image) => {
      const src = typeof image === "string" ? image : image.src;
      const { width, height } = dims(src);
      return { src, width, height };
    },
  ),
}));

const body = withDims
  .map((p) => JSON.stringify(p, null, 2))
  .join(",\n")
  .replace(/^/gm, "  ")
  .trimStart();

const file = `import { Project } from "@/types";

export const projects: Project[] = [
  ${body},
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
`;

writeFileSync(join(root, "src/lib/projects.ts"), file);
console.log(`Wrote dimensions for ${withDims.length} projects.`);
