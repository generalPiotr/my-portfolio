import type { IconType } from "react-icons";
import {
  SiAstro,
  SiCss,
  SiHtml5,
  SiJavascript,
  SiOllama,
  SiPhp,
  SiReact,
  SiVite,
  SiWordpress,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

const ICON_CLASS = "h-3.5 w-3.5 shrink-0";

type TechConfig = {
  Icon: IconType;
  color: string;
};

const TECH_BY_TAG: Record<string, TechConfig> = {
  HTML: { Icon: SiHtml5, color: "#E34F26" },
  CSS: { Icon: SiCss, color: "#1572B6" },
  JavaScript: { Icon: SiJavascript, color: "#F7DF1E" },
  JS: { Icon: SiJavascript, color: "#F7DF1E" },
  PHP: { Icon: SiPhp, color: "#777BB4" },
  WordPress: { Icon: SiWordpress, color: "#21759B" },
  Astro: { Icon: SiAstro, color: "#FF5D01" },
  Vite: { Icon: SiVite, color: "#646CFF" },
  React: { Icon: SiReact, color: "#61DAFB" },
  "React Native": { Icon: TbBrandReactNative, color: "#61DAFB" },
  Ollama: { Icon: SiOllama, color: "#FFFFFF" },
};

export function TechIcon({ tag }: { tag: string }) {
  const config = TECH_BY_TAG[tag];
  if (!config) return null;

  const { Icon, color } = config;

  return <Icon className={ICON_CLASS} style={{ color }} aria-hidden />;
}
