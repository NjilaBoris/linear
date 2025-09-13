import Button from "@/components/Button";
import Pointer from "@/components/Pointer";
import designExample1Image from "@/public/images/design-example-1.png";
import designExample2Image from "@/public/images/design-example-2.png";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="py-10 lg:py-5 overflow-x-clip">
      <div className="container relative">
        <div className="absolute -left-30 top-14 hidden lg:block">
          <Image src={designExample1Image} alt="design Example1" height={400} />
        </div>
        <div className="absolute -right-40 top-2 hidden lg:block">
          <Image src={designExample2Image} alt="design Example2" height={400} />
        </div>
        <div className="absolute left-56 top-96 hidden lg:block">
          <Pointer name="Andrea" />
        </div>
        <div className="absolute right-80 -top-4 hidden lg:block">
          <Pointer name="Bryan" color="red" />
        </div>
        <div className="flex justify-center">
          <div
            className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400
          font-semibold rounded-full text-neutral-950"
          >
            ✨ $7.5M seed round raised
          </div>
        </div>
        <h1 className="text-6xl lg:text-[4.8rem] md:text-7xl font-medium text-center mt-6">
          Impactful design, created effortlessly
        </h1>
        <p className="text-center text-xl text-white/50 mt-8 max-w-2xl mx-auto">
          Design tools shouldn&apos;t slow you down. Layers combines powerful
          features with an inuitive interface that keeps you in your creative
          flow.
        </p>
        <form className="flex border border-white/15 rounded-full p-2 mt-8 max-w-lg mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="bg-transparent px-4 md:flex-1 w-full"
          />
          <Button
            type="submit"
            variant="primary"
            // size="sm"
            className="whitespace-nowrap !h-10"
          >
            Sign Up
          </Button>
        </form>
      </div>
    </section>
  );
}
