"use client";
import Image from "next/image";
import logoImage from "@/public/images/logo.svg";
import { Menu, X } from "lucide-react";
import Button from "@/components/Button";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Features", href: "#features" },
  { label: "Integrations", href: "#integrations" },
  { label: "FAQs", href: "#faqs" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <section className="py-4 md:py-8 w-full fixed top-0 z-50">
        <div className="mx-auto container max-w-5xl">
          <div className="border-white/15 border rounded-[27px] md:rounded-full bg-neutral-950/70 backdrop-blur">
            <div className="grid grid-cols-2 lg:grid-cols-3   items-center px-4 md:pr-2  p-2">
              <div>
                <Image
                  src={logoImage}
                  alt="layer-logo"
                  className="h-9 w-auto md:h-auto"
                />
              </div>
              <div className="lg:flex hidden items-center justify-center">
                <nav className="flex gap-6 font-medium">
                  {navLinks.map((link) => (
                    <Link href={link.href} key={link.label}>
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
              <div className="flex justify-end gap-4">
                <div onClick={() => setIsOpen((open) => !open)}>
                  {isOpen ? (
                    <X className="md:hidden" />
                  ) : (
                    <Menu className="md:hidden" />
                  )}
                </div>

                <Button
                  variant="secondary"
                  className="hidden md:inline-flex md:items-center"
                >
                  Log In
                </Button>
                <Button className="hidden md:inline-flex md:items-center">
                  Sign Up
                </Button>
              </div>
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className=" overflow-hidden "
                >
                  <div className="flex flex-col items-center gap-4 py-4">
                    {navLinks.map((link) => (
                      <Link href={link.href} key={link.label} className="">
                        {link.label}
                      </Link>
                    ))}
                    <Button variant="secondary">Log In</Button>
                    <Button variant="primary">Sign Up</Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
      <div className="pb-[25px] md:pb-[60px] lg:pb-[55px]" />
    </>
  );
}
