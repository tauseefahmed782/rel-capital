"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";
import contactIcon from "@/assets/icon-heritage.svg";

const offices = [
  ["Dubai", "Capital & GCC — primary office"],
  ["India", "Project origination & delivery"],
  ["Netherlands", "European ECA & banking"],
] as const;

export function ContactEnquiry() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="bg-white px-[20px] py-[56px] md:py-[70px] lg:py-[100px]">
      <div className="mx-auto w-full max-w-[1120px]">
        <p className="flex items-center gap-2 text-[14px] text-[#e8611a] sm:text-[15.5px]">
          <Image
            src={contactIcon}
            alt=""
            width={20}
            height={20}
            className=""
          />
          Get in Touch
        </p>

        <h2 className="mt-[10px] text-[30px] font-medium leading-normal tracking-[-1.5px] text-[#122745] sm:text-[42px] md:leading-[1.12] lg:text-[53px]">
          Tell us where you fit.
        </h2>

        <div className="mt-[38px] grid items-start gap-[28px] md:mt-[48px] lg:grid-cols-[minmax(0,632px)_minmax(320px,432px)] lg:gap-[56px]">
          <form
            onSubmit={handleSubmit}
            className="rounded-[20px] border border-[#E6E2DC] bg-white p-[20px] sm:p-[30px] lg:p-[36px]"
          >
            <label className="block text-[13px] font-semibold text-[#5B636E]">
              I am enquiring as a...
            </label>

            <div className="mt-[22px] grid gap-x-[28px] gap-y-[20px] sm:grid-cols-2">
              <ContactField label="Name" name="name" autoComplete="name" required />
              <ContactField
                label="Organization"
                name="organization"
                autoComplete="organization"
                required
              />
              <ContactField
                label="Email"
                name="email"
                type="email"
                autoComplete="email"
                required
              />
              <ContactField
                label="Country"
                name="country"
                autoComplete="country-name"
              />
            </div>

            <label className="mt-[22px] block text-[13px] font-semibold text-[#5B636E]">
              Message *
              <textarea
                name="message"
                required
                rows={4}
                placeholder="Tell us about your project or role..."
                className="mt-[8px] min-h-[94px] w-full resize-y rounded-[9px] border border-[#D5DBE5] px-[16px] py-[13px] text-[14px] font-normal leading-[1.5] text-[#122745] outline-none transition-colors placeholder:text-[#a3adba] focus:border-[#e8611a]"
              />
            </label>

            <p className="mt-[16px] text-[13px] leading-[1.5] text-[#8A94A4]">
              Borrowers will also be asked for project sector &amp; indicative
              value.
            </p>

            <label className="mt-[18px] flex cursor-pointer items-start gap-[10px] text-[13px] leading-[1.5] text-[#636363]">
              <input
                type="checkbox"
                name="consent"
                required
                className="mt-[1px] h-[18px] w-[18px] shrink-0 accent-[#122745]"
              />
              <span>I agree to be contacted about my enquiry.</span>
            </label>

            <button
              type="submit"
              className="home-cta mt-[20px] w-full sm:w-auto"
            >
              Send Enquiry
            </button>

            {submitted && (
              <p
                role="status"
                className="mt-[16px] text-[14px] font-medium text-[#122745]"
              >
                Thank you. Your enquiry is ready to be connected to the form
                delivery service.
              </p>
            )}
          </form>

          <aside className="rounded-[20px] bg-[#122745] p-[26px] text-white sm:p-[32px]">
            <h3 className="text-[12px] font-semibold uppercase tracking-[1.2px] text-[#E8611A]">
              Reach us directly
            </h3>

            <div className="mt-[20px]">
              <p className="text-[12.5px] text-white">Email</p>
              <a
                href="mailto:info@relcapital.com"
                className="mt-[2px] inline-block text-[18px] font-medium hover:text-[#e8611a]"
              >
                info@relcapital.com
              </a>
            </div>

            <div className="mt-[16px]">
              <p className="text-[12.5px] text-white">Phone</p>
              <a
                href="tel:+971542816045"
                className="mt-[2px] inline-block text-[18px] font-medium hover:text-[#e8611a]"
              >
                +971 54 281 6045
              </a>
            </div>

            <div className="my-[20px] h-px bg-white" />

            <h3 className="text-[12px] font-semibold uppercase tracking-[1.2px] text-[#e8611a]">
              Offices
            </h3>

            <div className="mt-[18px] space-y-[16px]">
              {offices.map(([name, description]) => (
                <div key={name}>
                  <h4 className="text-[16px] font-medium">{name}</h4>
                  <p className="mt-[1px] text-[13px] leading-[1.4] text-white">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </aside>
        </div>

        <p className="mt-[46px] text-[12.5px] leading-[1.5] text-[#A7ADB6]">
          Contact details to be confirmed with client (existing group contact:
          info@ruralenhancers.com · +971 54 281 6045).
        </p>
      </div>
    </section>
   
  );
}

function ContactField({
  label,
  name,
  type = "text",
  autoComplete,
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
}) {
  return (
    <label className="block text-[13px] font-medium text-[#5f6877]">
      {label}
      {required ? " *" : ""}
      <input
        type={type}
        name={name}
        required={required}
        autoComplete={autoComplete}
        className="mt-[8px] h-[48px] w-full rounded-[9px] border border-[#D5DBE5] bg-transparent px-[16px] py-[13px] text-[12px] font-semibold leading-[1.5] text-[#5B636E] outline-none transition-colors focus:border-[#e8611a]"
      />
    </label>
  );
}
