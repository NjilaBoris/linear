import Tag from "@/components/Tag";
import figmaIcon from "@/public/images/figma-logo.svg";
import notionIcon from "@/public/images/notion-logo.svg";
import slackIcon from "@/public/images/slack-logo.svg";
import relumeIcon from "@/public/images/relume-logo.svg";
import framerIcon from "@/public/images/framer-logo.svg";
import githubIcon from "@/public/images/github-logo.svg";

import IntegrationsColumn from "@/components/IntegrationsColumn";

const integrations = [
  {
    name: "Figma",
    icon: figmaIcon,
    description: "Figma is a collaborative interface design tool.",
  },
  {
    name: "Notion",
    icon: notionIcon,
    description: "Notion is an all-in-one workspace for notes and docs.",
  },
  {
    name: "Slack",
    icon: slackIcon,
    description: "Slack is a powerful team communication platform.",
  },
  {
    name: "Relume",
    icon: relumeIcon,
    description: "Relume is a no-code website builder and design system.",
  },
  {
    name: "Framer",
    icon: framerIcon,
    description: "Framer is a professional website prototyping tool.",
  },
  {
    name: "GitHub",
    icon: githubIcon,
    description: "GitHub is the leading platform for code collaboration.",
  },
];
export type IntegrationsType = typeof integrations;

export default function Integrations() {
  return (
    <section className="py-24 px-5 overflow-clip">
      <div className="container">
        <div className="grid lg:grid-cols-2 items-center lg:gap-16">
          <div>
            <Tag>Intergrations</Tag>
            <h2 className="text-6xl font-medium mt-6 lg:max-w-lg">
              Plays well with <span className="text-lime-400">others</span>
            </h2>
            <p className="text-white/50 mt-4 text-lg">
              Layers seamlessly connects with your favorite tool making it
              easier to plug into any workflow and collaborate accross
              platforms.
            </p>
          </div>
          <div>
            <div
              className="h-[400px] lg:h-[800px] mt-8 lg:mt-0 overflow-clip grid md:grid-cols-2 md:gap-4 [-webkit-mask-image:linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_10%,rgba(0,0,0,1)_90%,rgba(0,0,0,0)_100%)]
            [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_10%,rgba(0,0,0,1)_90%,rgba(0,0,0,0)_100%)]
            [-webkit-mask-repeat:no-repeat] [mask-repeat:no-repeat]
            [-webkit-mask-size:100%_100%] [mask-size:100%_100%]"
            >
              <IntegrationsColumn integrations={integrations} />
              <IntegrationsColumn
                integrations={integrations.slice().reverse()}
                className="md:flex hidden lg:mt-2"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
