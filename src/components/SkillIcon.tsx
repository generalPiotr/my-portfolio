import type { SVGProps } from "react";
import type { IconType } from "react-icons";
import {
  SiClaude,
  SiDocker,
  SiGraphql,
  SiKubernetes,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenai,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { CursorBrandIcon } from "@/components/icons/CursorBrandIcon";

const ICON_CLASS = "h-6 w-6 shrink-0";

export type SkillId =
  | "react-next"
  | "typescript"
  | "nodejs"
  | "graphql"
  | "docker-k8s"
  | "tailwind"
  | "claude"
  | "cursor"
  | "chatgpt";

type SkillIconComponent = IconType | React.FC<SVGProps<SVGSVGElement>>;

const SKILL_ICONS: Record<
  SkillId,
  { icons: SkillIconComponent[]; colors?: string[] }
> = {
  "react-next": {
    icons: [SiReact, SiNextdotjs],
    colors: ["#61DAFB", "#ffffff"],
  },
  typescript: { icons: [SiTypescript], colors: ["#3178C6"] },
  nodejs: { icons: [SiNodedotjs], colors: ["#339933"] },
  graphql: { icons: [SiGraphql], colors: ["#E10098"] },
  "docker-k8s": {
    icons: [SiDocker, SiKubernetes],
    colors: ["#2496ED", "#326CE5"],
  },
  tailwind: { icons: [SiTailwindcss], colors: ["#06B6D4"] },
  claude: { icons: [SiClaude], colors: ["#D97757"] },
  cursor: { icons: [CursorBrandIcon], colors: ["#E5E2E1"] },
  chatgpt: { icons: [SiOpenai], colors: ["#10A37F"] },
};

export function SkillIcon({ id }: { id: SkillId }) {
  const { icons, colors } = SKILL_ICONS[id];

  return (
    <div className="flex items-center justify-center gap-2">
      {icons.map((Icon, index) => (
        <Icon
          key={index}
          className={ICON_CLASS}
          style={{ color: colors?.[index] ?? "#e5e2e1" }}
          aria-hidden
        />
      ))}
    </div>
  );
}
