"use client";

import { useTranslations } from "next-intl";
import { Store, Grid3X3, Star, Heart } from "lucide-react";
import { useIntersectionObserver, useAnimatedCounter } from "@/hooks/use-intersection-observer";

function AnimatedStat({ target, suffix, label, icon: Icon }: {
  target: number;
  suffix: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}) {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.3 });
  const count = useAnimatedCounter(target, isVisible);

  const formatted = count >= 1000 ? `${Math.floor(count / 1000)}K` : `${count}`;

  return (
    <div ref={ref} className="text-center">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-sm">
        <Icon className="h-7 w-7 text-white" />
      </div>
      <div className="mt-3 text-3xl font-bold text-white sm:text-4xl">
        {formatted}{suffix}
      </div>
      <div className="mt-1 text-sm font-medium text-white/80">{label}</div>
    </div>
  );
}

export function StatsSection() {
  const t = useTranslations("stats");

  const stats = [
    { icon: Store, target: 50, suffix: "+", label: t("restaurants") },
    { icon: Grid3X3, target: 12, suffix: "", label: t("cantons") },
    { icon: Star, target: 200, suffix: "+", label: t("reviews") },
    { icon: Heart, target: 100, suffix: "%", label: t("cuisines") },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[var(--color-mbl)] to-[var(--color-mbl-dark)] py-14 sm:py-18">
      <div className="absolute inset-0 opacity-[0.08]">
        <div className="grid h-full w-full grid-cols-8 gap-12 p-8">
          {Array.from({ length: 16 }).map((_, i) => (
            <svg key={i} width="24" height="24" viewBox="0 0 20 20" fill="none" className="text-white">
              <path d="M8.5 4h3v4.5H16v3h-4.5V16h-3v-4.5H4v-3h4.5V4z" fill="currentColor" />
            </svg>
          ))}
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-5 py-2 text-sm font-medium text-white backdrop-blur-sm">
            {t("swissQuality")}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
          {stats.map((stat, index) => (
            <AnimatedStat key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
