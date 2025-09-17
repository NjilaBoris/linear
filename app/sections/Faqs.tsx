"use client";
import Tag from "@/components/Tag";
import clsx from "clsx";
import { Plus } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const faqs = [
  {
    question: "How is Layers different from other design tools?",
    answer:
      "Unlike traditional design tools, Layers prioritizes speed and simplicity without sacrificing power. Our intelligent interface adapts to your workflow, reducing clicks and keeping you in your creative flow.",
  },
  {
    question: "Is there a learning curve?",
    answer:
      "Layers is designed to feel intuitive from day one. Most designers are productive within hours, not weeks. We also provide interactive tutorials and comprehensive documentation to help you get started.",
  },
  {
    question: "How do you handle version control?",
    answer:
      "Every change in Layers is automatically saved and versioned. You can review history, restore previous versions, and create named versions for important milestones.",
  },
  {
    question: "Can I work offline?",
    answer:
      "Yes! Layers includes a robust offline mode. Changes sync automatically when you're back online, so you can keep working anywhere.",
  },
  {
    question: "How does Layers handle collaboration?",
    answer:
      "Layers is built for collaboration. You can invite team members to your projects, share feedback, and work together in real-time.",
  },
];

export default function Faqs() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <section className="py-24 px-5">
      <div className="container">
        <div className="flex justify-center">
          <Tag>Faqs</Tag>
        </div>
        <h2 className="text-6xl font-medium mt-6 text-center max-w-xl mx-auto">
          Questions? We&apos;ve got{" "}
          <span className="text-lime-400">answers</span>
        </h2>
        <div className="mt-12 flex flex-col gap-6 max-w-xl mx-auto">
          {faqs.map((faq, faqindex) => (
            <div
              key={faq.question}
              className="bg-neutral-900 rounded-2xl border border-white/10 p-6"
              onClick={() => setSelectedIndex(faqindex)}
            >
              <div className="flex items-center justify-between">
                <h3 className="font-medium">{faq.question}</h3>
                <Plus
                  className={clsx(
                    "text-lime-400 shrink-0 transition-transform duration-300",
                    selectedIndex === faqindex && "rotate-45"
                  )}
                />
              </div>
              <AnimatePresence initial={false}>
                {selectedIndex === faqindex && (
                  <motion.div
                    initial={{ height: 0, marginTop: 0, opacity: 0 }}
                    animate={{ height: "auto", marginTop: 24, opacity: 1 }}
                    exit={{ height: 0, marginTop: 0, opacity: 0 }}
                    className={clsx(" overflow-clip")}
                  >
                    <p className="text-white/50">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
