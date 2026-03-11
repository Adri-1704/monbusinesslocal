"use client";

import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Search, Video, Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HowItWorks() {
  const t = useTranslations("howItWorks");
  const params = useParams();
  const locale = params.locale as string;

  const steps = [
    {
      icon: Search,
      title: t("step1Title"),
      description: t("step1Desc"),
      color: "bg-blue-50 text-[var(--color-mbl)]",
      number: "01",
    },
    {
      icon: Video,
      title: t("step2Title"),
      description: t("step2Desc"),
      color: "bg-orange-50 text-orange-600",
      number: "02",
    },
    {
      icon: Heart,
      title: t("step3Title"),
      description: t("step3Desc"),
      color: "bg-green-50 text-green-600",
      number: "03",
    },
  ];

  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            {t("title")}
          </h2>
          <p className="mt-2 text-gray-600">{t("subtitle")}</p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <div key={index} className="group relative text-center">
              {/* Connector arrow (hidden on mobile, hidden on last item) */}
              {index < steps.length - 1 && (
                <div className="absolute right-0 top-10 hidden translate-x-1/2 md:block">
                  <ArrowRight className="h-5 w-5 text-gray-300" />
                </div>
              )}

              {/* Step number */}
              <div className="mx-auto mb-4 flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-mbl)] text-xs font-bold text-white">
                {step.number}
              </div>

              {/* Icon */}
              <div className={`mx-auto flex h-20 w-20 items-center justify-center rounded-2xl ${step.color} transition-transform group-hover:scale-110`}>
                <step.icon className="h-9 w-9" />
              </div>

              <h3 className="mt-5 text-lg font-bold text-gray-900">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Button
            asChild
            size="lg"
            className="bg-[var(--color-mbl)] px-8 text-base font-semibold hover:bg-[var(--color-mbl-dark)]"
          >
            <Link href={`/${locale}/commerces`}>
              {t("cta")}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
