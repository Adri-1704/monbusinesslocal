"use client";

import { useTranslations } from "next-intl";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { Search, MapPin } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const heroImages = [
  { src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop", alt: "Commerce local" },
  { src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop", alt: "Boutique" },
  { src: "https://images.unsplash.com/photo-1556740758-90de374c12ad?w=600&h=400&fit=crop", alt: "Artisan" },
  { src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&h=400&fit=crop", alt: "Cafe local" },
];

const popularTags = [
  { key: "boulangerie", label: "Boulangerie" },
  { key: "cafe", label: "Café" },
  { key: "coiffeur", label: "Coiffeur" },
  { key: "restaurant", label: "Restaurant" },
  { key: "fleuriste", label: "Fleuriste" },
];

export function HeroSection() {
  const t = useTranslations("hero");
  const params = useParams();
  const locale = params.locale as string;
  const router = useRouter();

  const [query, setQuery] = useState("");

  const handleSearch = () => {
    const searchParams = new URLSearchParams();
    if (query) searchParams.set("q", query);
    router.push(`/${locale}/commerces?${searchParams.toString()}`);
  };

  const handleTagClick = (tag: string) => {
    router.push(`/${locale}/commerces?q=${encodeURIComponent(tag)}`);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-[#1a1a2e] to-gray-900">
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Text + Search */}
          <div className="animate-fade-in-up">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-sm">
              <MapPin className="h-4 w-4 text-[var(--color-mbl)]" />
              <span>{t("swissBadge")}</span>
            </div>

            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl">
              {t("title")}
            </h1>
            <p className="mt-4 max-w-xl text-base text-gray-300 sm:text-lg">
              {t("subtitle")}
            </p>

            {/* Search Box */}
            <div className="mt-8 animate-fade-in-up animate-delay-200">
              <div className="rounded-xl bg-white p-3 shadow-2xl sm:rounded-2xl sm:p-4">
                <div className="flex gap-3">
                  <Input
                    type="text"
                    placeholder={t("searchPlaceholder")}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                    className="h-[50px] flex-1 border-gray-200 bg-gray-50 text-base focus-visible:ring-[var(--color-mbl)]/20"
                  />
                  <Button
                    onClick={handleSearch}
                    className="h-[50px] shrink-0 bg-[var(--color-mbl)] px-6 text-white hover:bg-[var(--color-mbl-dark)] sm:px-8"
                  >
                    <Search className="mr-2 h-4 w-4" />
                    {t("searchButton")}
                  </Button>
                </div>
              </div>

              {/* Popular search tags */}
              <div className="mt-4 flex flex-wrap items-center gap-2">
                <span className="text-xs text-gray-400">{t("popularSearches")} :</span>
                {popularTags.map((tag) => (
                  <button
                    key={tag.key}
                    onClick={() => handleTagClick(tag.label)}
                    className="rounded-full border border-white/20 px-3 py-1 text-xs text-gray-300 transition-colors hover:border-white/40 hover:bg-white/10 hover:text-white"
                  >
                    {tag.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Stats counter */}
            <div className="mt-6 flex items-center gap-4 text-sm text-gray-400 animate-fade-in-up animate-delay-300">
              <div className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-[var(--color-mbl)]" />
                <span>{t("statsCounter")}</span>
              </div>
            </div>
          </div>

          {/* Right: Image mosaic */}
          <div className="hidden lg:block animate-fade-in-up animate-delay-200">
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-3">
                <div className="relative h-48 overflow-hidden rounded-2xl">
                  <Image src={heroImages[0].src} alt={heroImages[0].alt} fill className="object-cover" sizes="25vw" />
                </div>
                <div className="relative h-56 overflow-hidden rounded-2xl">
                  <Image src={heroImages[1].src} alt={heroImages[1].alt} fill className="object-cover" sizes="25vw" />
                </div>
              </div>
              <div className="space-y-3 pt-8">
                <div className="relative h-56 overflow-hidden rounded-2xl">
                  <Image src={heroImages[2].src} alt={heroImages[2].alt} fill className="object-cover" sizes="25vw" />
                </div>
                <div className="relative h-48 overflow-hidden rounded-2xl">
                  <Image src={heroImages[3].src} alt={heroImages[3].alt} fill className="object-cover" sizes="25vw" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
