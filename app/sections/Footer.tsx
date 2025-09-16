import Image from "next/image";
import logoImage from "@/public/images/logo.svg";
import Link from "next/link";

const footerLinks = [
  { href: "#", label: "Contact" },
  { href: "#", label: "Privacy Policy" },
  { href: "#", label: "Terms & Conditions" },
];

export default function Footer() {
  return (
    <section className="py-24 px-5">
      <div className="container">
        <div className="flex flex-col md:flex-row md:justify-between items-center gap-6">
          <div>
            <Image src={logoImage} alt="Layers logo" />
          </div>
          <div>
            <nav className="flex gap-6">
              {footerLinks.map((link) => (
                <Link
                  href={link.href}
                  key={link.label}
                  className="text-white/50 text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}
