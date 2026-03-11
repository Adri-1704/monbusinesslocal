"use client";

import { useTranslations } from "next-intl";
import { Star, Quote } from "lucide-react";

const localTestimonials = [
  {
    name: "Marie L.",
    role: "Habitante du Flon",
    text: "J'ai découvert la Boulangerie du Flon grâce à Monbusinesslocal. Depuis, j'y vais tous les samedis matin. Leur pain au levain est incroyable !",
    rating: 5,
  },
  {
    name: "Thomas R.",
    role: "Expatrié à Lausanne",
    text: "En tant qu'expatrié, c'est dur de trouver les bonnes adresses. Cette plateforme m'a fait découvrir des pépites que même mes collègues suisses ne connaissaient pas.",
    rating: 5,
  },
  {
    name: "Claire D.",
    role: "Commerçante — Fleuriste",
    text: "Depuis mon inscription, je vois régulièrement des clients qui me disent « je vous ai trouvée sur Monbusinesslocal ». La vidéo sur Instagram a beaucoup aidé.",
    rating: 5,
  },
  {
    name: "Nicolas P.",
    role: "Habitant de Grancy",
    text: "J'adore l'idée de soutenir le commerce local. Grâce au site, j'ai arrêté de commander en ligne pour les cadeaux — je trouve tout dans mon quartier.",
    rating: 4,
  },
];

export function Testimonials() {
  const t = useTranslations("testimonials");

  return (
    <section className="bg-gray-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            {t("title")}
          </h2>
          <p className="mt-2 text-gray-600">{t("subtitle")}</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {localTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="rounded-xl border bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <Quote className="h-8 w-8 text-[var(--color-mbl)]/20" />
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <div className="mt-4 flex items-center gap-1">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star
                    key={i}
                    className={`h-3.5 w-3.5 ${
                      i < testimonial.rating
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-200"
                    }`}
                  />
                ))}
              </div>
              <div className="mt-3">
                <p className="text-sm font-semibold text-gray-900">
                  {testimonial.name}
                </p>
                <p className="text-xs text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
