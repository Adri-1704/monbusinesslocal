"use client";

import { useTranslations } from "next-intl";
import { ArrowRight, ChevronDown, CheckCircle2, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export function B2BHero() {
  const t = useTranslations("b2b.hero");

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1920&h=1080&fit=crop')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-gray-900/70" />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
        <div className="max-w-3xl">
          {/* Urgency badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[var(--color-mbl)]/20 border border-[var(--color-mbl)]/30 px-4 py-1.5 text-sm font-medium text-[var(--color-mbl)] animate-fade-in-up">
            <Zap className="h-4 w-4" />
            Offre de lancement — Places limitées
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl animate-fade-in-up">
            {t("title")}
          </h1>
          <p className="mt-6 text-lg text-gray-300 leading-relaxed animate-fade-in-up animate-delay-100">
            {t("subtitle")}
          </p>

          {/* Benefits list */}
          <ul className="mt-8 space-y-4 animate-fade-in-up animate-delay-200">
            {(["benefit1", "benefit2", "benefit3"] as const).map((key) => (
              <li key={key} className="flex items-start gap-3 text-white">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-400" />
                <span className="text-base sm:text-lg font-medium">{t(key)}</span>
              </li>
            ))}
          </ul>

          {/* Social proof */}
          <div className="mt-8 flex items-center gap-3 animate-fade-in-up animate-delay-200">
            <div className="flex -space-x-2">
              {["M", "S", "A", "C"].map((letter, i) => (
                <div key={i} className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-900 bg-[var(--color-mbl)] text-xs font-bold text-white">
                  {letter}
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Users className="h-4 w-4" />
              {t("socialProof")}
            </div>
          </div>

          {/* CTAs */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row animate-fade-in-up animate-delay-300">
            <Button
              size="lg"
              className="bg-[var(--color-mbl)] px-8 py-6 text-base font-semibold hover:bg-[var(--color-mbl-dark)] shadow-lg shadow-[var(--color-mbl)]/25 transition-all hover:shadow-xl hover:shadow-[var(--color-mbl)]/30 hover:-translate-y-0.5"
              onClick={() => scrollTo("b2b-contact")}
            >
              {t("cta")}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-white/30 px-8 py-6 text-base font-semibold text-white hover:bg-white/10"
              onClick={() => scrollTo("b2b-pricing")}
            >
              {t("ctaSecondary")}
              <ChevronDown className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
