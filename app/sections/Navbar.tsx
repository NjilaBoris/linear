import Image from "next/image";
import logoImage from "@/public/images/logo.svg";
import { Menu } from "lucide-react";
import Button from "@/components/Button";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Features", href: "#features" },
  { label: "Integrations", href: "#integrations" },
  { label: "FAQs", href: "#faqs" },
];

export default function Navbar() {
  return (
    <section className="py-4 md:py-8">
      <div className="mx-auto container max-w-5xl">
        <div className="grid grid-cols-2 lg:grid-cols-3 border-white/15 border items-center px-4 md:pr-2 rounded-full p-2">
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
            <Menu className="md:hidden" />
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
      </div>
    </section>
  );
}
