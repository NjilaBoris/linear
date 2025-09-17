"use client";
import Button from "@/components/Button";
import Pointer from "@/components/Pointer";
import designExample1Image from "@/public/images/design-example-1.png";
import designExample2Image from "@/public/images/design-example-2.png";
import cursorYouImage from "@/public/images/cursor-you.svg";
import { motion } from "motion/react";

import Image from "next/image";
import TextReveal from "@/components/TextReveal";

export default function Hero() {
  return (
    <section
      className="py-24 overflow-x-clip"
      style={{ cursor: `url(${cursorYouImage.src}) 16 16, auto` }}
    >
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 100, x: -100 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.7 }}
          drag
          className="absolute -left-17 top-14 hidden lg:block"
        >
          <Image
            draggable="false"
            src={designExample1Image}
            alt="design Example1"
            height={400}
          />
        </motion.div>
        <motion.div
          drag
          initial={{ opacity: 0, y: -100, x: 100 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="absolute -right-40 top-2 hidden lg:block"
        >
          <Image
            draggable="false"
            src={designExample2Image}
            alt="design Example2"
            height={400}
          />
        </motion.div>
        <motion.div
          animate={{
            x: ["0%", "-200%", "400%", "600%", "0%"],
            y: ["0%", "-800%", "-400%", "-300%", "0%"],
          }}
          transition={{
            duration: 12,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          className="absolute left-56 top-96 hidden lg:block"
        >
          <Pointer name="Andrea" />
        </motion.div>
        <motion.div
          animate={{
            x: ["0%", "-200%", "400%", "600%", "0%"],
            y: ["0%", "700%", "800%", "500%", "0%"],
          }}
          transition={{
            duration: 8,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          className="absolute right-80 -top-4 hidden lg:block"
        >
          <Pointer name="Bryan" color="red" />
        </motion.div>
        <div className="flex justify-center">
          <div
            className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400
          font-semibold rounded-full text-neutral-950"
          >
            ✨ $7.5M seed round raised
          </div>
        </div>
        <TextReveal>
          <h1 className="text-6xl lg:text-[4.6rem] lg:max-w-2xl lg:mx-auto md:text-7xl font-medium text-center mt-6">
            Impactful design, created effortlessly
          </h1>
        </TextReveal>
        <TextReveal delay={0.6}>
          <p className="text-center text-xl text-white/50 mt-8 max-w-2xl mx-auto">
            Design tools shouldn&apos;t slow you down. Layers combines powerful
            features with an inuitive interface that keeps you in your creative
            flow.
          </p>
        </TextReveal>
        <form className="flex border border-white/15 rounded-full p-2 mt-8 max-w-lg mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="bg-transparent px-4 md:flex-1 w-full outline-0"
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
