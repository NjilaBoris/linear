import FeatureCard from "@/components/FeatureCard";
import Tag from "@/components/Tag";
import avatar1 from "@/public/images/avatar-ashwin-santiago.jpg";
import avatar2 from "@/public/images/avatar-lula-meyers.jpg";
import avatar3 from "@/public/images/avatar-florence-shaw.jpg";
import avatar4 from "@/public/images/avatar-owen-garcia.jpg";
import Image from "next/image";

import Avatar from "@/components/Avatar";
import Key from "@/components/Key";

const features = [
  "Asset Library",
  "Code Preview",
  "Flow Mode",
  "Smart Sync",
  "Auto Layout",
  "Fast Search",
  "Smart Guides",
];

export default function Features() {
  return (
    <section className="py-24">
      <div className="container lg:pl-5">
        <div className="flex justify-center">
          <Tag>Features</Tag>
        </div>
        <h2 className="text-6xl font-medium text-center mt-6 max-w-2xl mx-auto">
          Where power meets <span className="text-lime-400">simplicity</span>
        </h2>
        <div className="mt-12 grid-cols-1 lg:grid-cols-3 grid gap-8 px-5 md:grid-cols-4">
          <FeatureCard
            title="Real-time Collaboration"
            description="Work together seamlessly with conflict-free team editing"
            className="md:col-span-2 lg:col-span-1 group"
          >
            <div className="aspect-video flex items-center justify-center">
              <Avatar className="z-40">
                <Image src={avatar1} alt="Avatar 1" className="rounded-full" />
              </Avatar>
              <Avatar className="-ml-6 border-indigo-500 z-30">
                <Image src={avatar2} alt="Avatar 2" className="rounded-full" />
              </Avatar>
              <Avatar className="-ml-6 !border-amber-500 z-20">
                <Image src={avatar3} alt="Avatar 3" className="rounded-full" />
              </Avatar>
              <Avatar className="-ml-6 border-transparent group-hover:border-green-500 transition">
                <div className="size-full relative bg-neutral-700 rounded-full inline-flex items-center justify-center gap-1">
                  <Image
                    src={avatar4}
                    alt="Avatar 4"
                    className="absolute size-full rounded-full opacity-0 group-hover:opacity-100 transition "
                  />
                  {Array.from({ length: 3 }).map((_, i) => (
                    <span
                      className="size-1.5 bg-white rounded-full inline-flex"
                      key={i}
                    ></span>
                  ))}
                </div>
              </Avatar>
            </div>
          </FeatureCard>
          <FeatureCard
            title="Interacting Prototyping"
            description=" Engage your clients with prototypes that react to user actions"
            className="md:col-span-2 lg:col-span-1 group"
          >
            <div className="aspect-video flex items-center justify-center">
              <p className="text-4xl font-extrabold text-white/20 duration-500 text-center group-hover:text-white/10 transition">
                We&apos;ve achieved{" "}
                <span className="bg-gradient-to-r relative from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  <span>increadible</span>
                  <video
                    src="/gif-incredible.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute group-hover:opacity-100 duration-500 transition bottom-full left-1/2 -translate-x-1/2 rounded-2xl shadow-xl
                     opacity-0 pointer-events-none"
                  />
                </span>{" "}
                growth this year
              </p>
            </div>
          </FeatureCard>
          <FeatureCard
            className="md:col-span-2 md:col-start-2 lg:col-span-1 group lg:col-start-auto"
            title="Keyboard Quick Actions"
            description="Powerful commands to help you create designs more quickly"
          >
            <div className="aspect-video flex items-center justify-center gap-4">
              <Key className="w-28 outline-2 outline-transparent  outline-offset-4 group-hover:outline-lime-400 transition-all duration-500 group-hover:translate-y-1">
                shift
              </Key>
              <Key className="outline-2 outline-transparent  outline-offset-4 group-hover:outline-lime-400 transition-all duration-500 group-hover:translate-y-1 delay-150">
                alt
              </Key>
              <Key className="outline-2 outline-transparent  outline-offset-4 group-hover:outline-lime-400 transition-all duration-600 group-hover:translate-y-1 delay-300">
                C
              </Key>
            </div>
          </FeatureCard>
        </div>
        <div className="mt-8 flex flex-wrap gap-3 pl-5 justify-center">
          {features.map((feature) => (
            <div
              key={feature}
              className="bg-neutral-900 group hover:scale-105 transition-transform duration-500 border-white/10 md:px-5 md:py-2 inline-flex px-3 py-1.5 gap-3 items-center rounded-2xl"
            >
              <span className="bg-lime-400 group-hover:rotate-45 transition-transform duration-500 text-xl text-neutral-950 size-5 inline-flex items-center justify-center rounded-full">
                &#10038;
              </span>
              <span className="font-medium md:text-lg will-change-transform">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
