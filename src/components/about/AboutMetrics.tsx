"use client";

import { useEffect, useRef, useState } from "react";

const metrics = [
  { value: 43, prefix: "€", suffix: "M", detail: "India’s first ECA-backed hospital — PMC Warje, Pune" },
  { value: 10000, prefix: "₹", suffix: " Cr", detail: "Investment MoU with the Government of Maharashtra, WEF Davos" },
  { value: 2, prefix: "$", suffix: " Billion", detail: "Maritime & port framework with Abu Dhabi Ports" },
  { value: 5, prefix: "", suffix: " Sectors", detail: "Healthcare · Education · Water · Shipping · Renewables" },
] as const;

function AnimatedMetric({ metric, index }: { metric: (typeof metrics)[number]; index: number }) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    let animationFrame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          setCount(metric.value);
          return;
        }

        const duration = 1600;
        const startTime = performance.now();
        const animate = (now: number) => {
          const progress = Math.min((now - startTime) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setCount(Math.round(metric.value * eased));
          if (progress < 1) animationFrame = requestAnimationFrame(animate);
        };
        animationFrame = requestAnimationFrame(animate);
      },
      { threshold: 0.25 },
    );

    observer.observe(element);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(animationFrame);
    };
  }, [metric.value]);

  return (
    <div ref={elementRef} className={`py-5 first:pt-0 last:pb-0 ${index > 0 ? "border-t border-[#d5dbe5] md:border-l md:border-t-0 md:pl-5 lg:pl-7" : ""} md:min-h-[113px] md:py-0`}>
      <p className="text-[24px] font-semibold leading-normal text-[#e8611a] sm:text-[30px] lg:text-[42px]" aria-label={`${metric.prefix}${metric.value.toLocaleString("en-IN")}${metric.suffix}`}>
        {metric.prefix}{count.toLocaleString("en-IN")}{metric.suffix}
      </p>
      <p className="mt-[10px] max-w-[245px] text-[13px] leading-[1.4] text-[#636363] sm:text-[13.5px]">{metric.detail}</p>
    </div>
  );
}

export function AboutMetrics() {
  return (
    <section className="bg-[#f8f7f5] px-[20px] py-[56px] md:py-[70px] lg:py-[100px]">
      <p className="mx-auto mb-[18px] w-full max-w-[260px] break-words text-center text-[12px] leading-[1.4] text-[#8a94a4] sm:max-w-[760px] sm:text-[12.5px]">Figures reflect structured deals and Group commitments across the India–GCC–Europe corridor.</p>
      <div className="mx-auto grid max-w-[1120px] grid-cols-1 gap-0 md:grid-cols-4">
        {metrics.map((metric, index) => <AnimatedMetric key={metric.detail} metric={metric} index={index} />)}
      </div>
    </section>
  );
}
