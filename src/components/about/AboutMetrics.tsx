"use client";

import { useEffect, useRef, useState } from "react";

const metrics = [
  { prefix: "€", value: 43, suffix: "M", detail: "India's first ECA-backed hospital — PMC Warje, Pune" },
  { prefix: "₹", value: 10000, suffix: " Cr", detail: "Investment MoU with the Government of Maharashtra, WEF Davos" },
  { prefix: "$", value: 2, suffix: " Billion", detail: "Maritime & port framework with Abu Dhabi Ports" },
  { prefix: "", value: 5, suffix: " Sectors", detail: "Healthcare · Education · Water · Shipping · Renewables" },
] as const;

function useCountUp(target: number, shouldStart: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;

    const duration = 1800;
    const startedAt = performance.now();
    let animationFrame = 0;

    const animate = (now: number) => {
      const progress = Math.min((now - startedAt) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(target * easedProgress));
      if (progress < 1) animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [shouldStart, target]);

  return count;
}

function Metric({ prefix, value, suffix, detail }: (typeof metrics)[number]) {
  const metricRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const count = useCountUp(value, isVisible);

  useEffect(() => {
    const element = metricRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.3 });

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={metricRef}>
      <p className="text-3xl font-semibold tracking-tight text-[#f56619]">
        {prefix}{count.toLocaleString("en-IN")}{suffix}
      </p>
      <p className="mt-3 max-w-[230px] text-sm leading-5 text-neutral-600">{detail}</p>
    </div>
  );
}

export function AboutMetrics() {
  return (
    <section className="bg-[#f7f6f4] px-6 py-10 lg:px-12">
      <p className="mx-auto mb-7 max-w-[1240px] text-center text-xs text-slate-400">Figures reflect structured deals and Group commitments across the India–GCC–Europe corridor.</p>
      <div className="mx-auto grid max-w-[1240px] gap-7 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
        {metrics.map((metric, index) => (
          <div key={metric.detail} className={`px-0 lg:px-6 ${index > 0 ? "lg:border-l lg:border-slate-300" : ""}`}>
            <Metric {...metric} />
          </div>
        ))}
      </div>
    </section>
  );
}
