"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import plusIcon from "@/assets/plus-icon.svg";
import faqIcon from "@/assets/icon-faq.svg";
import minusIcon from "@/assets/minus-cion.svg";

const faqItems = [
  {
    question: "Are you a lender?",
    answer:
      "No. REL Capital structures and facilitates financing by connecting eligible projects with export credit agencies, guarantors, international banks, and other funding partners.",
  },
  {
    question: "What size and type of projects do you work on?",
    answer:
      "We focus on large, high-impact infrastructure and social-development projects across healthcare, education, water and sanitation, shipping, renewable energy, and allied infrastructure.",
  },
  {
    question: "Can you help a project that isn’t fully developed yet?",
    answer:
      "Yes. We can assess early-stage opportunities, identify gaps in project readiness, and help shape the commercial and financial framework required to progress toward bankability.",
  },
  {
    question: "How long does it take to structure ECA-backed financing?",
    answer:
      "Timing depends on project readiness, counterparties, due diligence, ECA eligibility, and approvals. We establish a practical roadmap after reviewing the project and its documentation.",
  },
  {
    question: "Which countries do you operate in?",
    answer:
      "REL Capital works internationally through the Rural Enhancers Group’s presence and relationships across India, Dubai, the Netherlands, and global financing markets.",
  },
  {
    question: "What is an Export Credit Agency?",
    answer:
      "An Export Credit Agency is a government-backed institution that supports exports by providing guarantees, insurance, or financing that reduces political and commercial risk for lenders.",
  },
] as const;

export default function HomeFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#F8F7F5]">
      <div className="mx-auto grid w-full max-w-[1120px] gap-[42px] px-[20px] py-[56px] md:py-[70px] lg:grid-cols-[1fr_1fr] lg:gap-[80px] lg:py-[100px]">
        <div>
                            <p className="flex items-center gap-2 text-[14px] text-[#e8611a] sm:text-[15.5px]"><Image src={faqIcon} alt="" className="" width={20} height={20} /> FAQ</p>

          <h2 className="mt-[10px] max-w-[480px] text-[30px] font-medium leading-normal tracking-[-1.5px] text-[#122745] sm:text-[42px] md:leading-[1.12] lg:text-[53px]">
            Frequently asked questions
          </h2>

          <p className="mt-[12px] max-w-[500px] text-[14px] font-normal leading-[1.45] text-[#636363] lg:text-[15px]">
            Clear answers to common questions about ECA-backed financing, who
            we work with, and how we structure bankable projects.
          </p>

          <Link
            href="/contact"
            className="home-cta mt-[18px]"
          >
            Start a Conversation
          </Link>
        </div>

        <div className="space-y-[8px]">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `home-faq-panel-${index}`;

            return (
              <article
                key={item.question}
                className={`overflow-hidden rounded-[8px] transition-colors duration-300 ${isOpen ? "bg-[#122745]" : "bg-white"}`}
              >
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className={`group flex w-full items-center justify-between gap-5 px-[20px] py-[18px] text-left text-[14px] font-normal leading-[1.4] transition-colors duration-300 hover:bg-[#122745] hover:text-white sm:text-[15px] ${isOpen ? "bg-[#122745] text-white" : "text-[#122745]"}`}
                  >
                    <span>{item.question}</span>
                    <Image
                      src={isOpen ? minusIcon : plusIcon}
                      alt=""
                      width={26}
                      height={26}
                      aria-hidden="true"
                      className="h-[26px] w-[26px] shrink-0"
                    />
                  </button>
                </h3>

                <div
                  id={panelId}
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                >
                  <div className="overflow-hidden">
                    <p className={`border-t px-[20px] py-[16px] text-[14px] font-normal leading-[1.5] transition-colors duration-300 ${isOpen ? "border-white/20 text-white/80" : "border-[#eceae7] text-[#636363]"}`}>
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
