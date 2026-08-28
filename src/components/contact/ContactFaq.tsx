"use client";

import Image from "next/image";
import { useState } from "react";
import faqIcon from "@/assets/icon-heritage.svg";

const faqItems = [
  {
    question: "Are you a lender?",
    answer:
      "No. REL Capital is a specialized structuring and facilitation house. We connect your project to export credit agencies, other FDI funding partners, guarantors, and lending banks, and we design the structure that makes it bankable.",
  },
  {
    question: "What size and type of projects do you work on?",
    answer:
      "Large-scale infrastructure and healthcare projects — typically public or public-private — in healthcare, education, water & sanitation, shipping, and renewable energy.",
  },
  {
    question: "Can you help a project that isn’t fully developed yet?",
    answer:
      "Yes. We can review an early-stage opportunity, identify gaps in project readiness, and help define the commercial, technical, and financial work needed to move it toward bankability.",
  },
  {
    question: "Which countries do you operate in?",
    answer:
      "We operate through the Rural Enhancers Group’s network across India, Dubai, and the Netherlands, while working with export-credit and banking partners internationally.",
  },
  {
    question: "How long does it take to structure ECA-backed financing?",
    answer:
      "The timeline depends on project readiness, due diligence, counterparties, ECA eligibility, and regulatory approvals. We provide a practical roadmap after the initial project assessment.",
  },
  {
    question: "What is an Export Credit Agency?",
    answer:
      "An Export Credit Agency is a government-backed institution that supports cross-border trade and investment through guarantees, insurance, or financing that reduces risk for participating lenders.",
  },
] as const;

export function ContactFaq() {
  const [openItems, setOpenItems] = useState<Set<number>>(
    () => new Set([0]),
  );

  function toggleItem(index: number) {
    setOpenItems((current) => {
      const next = new Set(current);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  }

  return (
    <section className="bg-[#F8F7F5] px-[20px] py-[56px] md:py-[70px] lg:py-[100px]">
      <div className="mx-auto w-full max-w-[1120px]">
        <p className="flex items-center gap-2 text-[14px] text-[#e8611a] sm:text-[15.5px]">
          <Image
            src={faqIcon}
            alt=""
            width={20}
            height={20}
            className=""
          />
          FAQ
        </p>

        <h2 className="mt-[10px] text-[30px] font-medium leading-normal tracking-[-1.5px] text-[#122745] sm:text-[42px] md:leading-[1.12] lg:text-[53px]">
          Questions, answered.
        </h2>

        <div className="mt-[38px] border-b border-[#d9d6d1] md:mt-[52px]">
          {faqItems.map((item, index) => {
            const isOpen = openItems.has(index);
            const panelId = `contact-faq-panel-${index}`;

            return (
              <article
                key={item.question}
                className="border-t border-[#d9d6d1]"
              >
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleItem(index)}
                    className="group flex w-full items-center justify-between gap-[24px] py-[22px] text-left text-[17px] font-medium leading-[1.35] text-[#122745] transition-colors hover:text-[#e8611a] sm:py-[26px] sm:text-[19px]"
                  >
                    <span>{item.question}</span>
                    <span
                      aria-hidden="true"
                      className="grid h-[24px] w-[24px] shrink-0 place-items-center text-[22px] font-normal leading-none text-[#e8611a]"
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                </h3>

                <div
                  id={panelId}
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-[1000px] pb-[24px] pr-[48px] text-[14px] font-normal leading-[1.65] text-[#636363] sm:pb-[28px] sm:text-[16px]">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
