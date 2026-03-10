"use client";

import { useTranslations } from "next-intl";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { X, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const categories = [
  { value: "restaurant", label: "Restaurant" },
  { value: "cafe", label: "Café" },
  { value: "boulangerie", label: "Boulangerie" },
  { value: "epicerie", label: "Épicerie" },
  { value: "mode", label: "Mode" },
  { value: "beaute", label: "Beauté" },
  { value: "bien-etre", label: "Bien-être" },
  { value: "sport", label: "Sport" },
  { value: "librairie", label: "Librairie" },
  { value: "fleuriste", label: "Fleuriste" },
  { value: "artisanat", label: "Artisanat" },
  { value: "alimentation", label: "Alimentation" },
];

const featureOptions = [
  { value: "wifi", label: "WiFi" },
  { value: "terrasse", label: "Terrasse" },
  { value: "accessible-pmr", label: "Accessible PMR" },
  { value: "livraison", label: "Livraison" },
  { value: "a-emporter", label: "À emporter" },
  { value: "parking", label: "Parking" },
  { value: "produits-locaux", label: "Produits locaux" },
  { value: "eco-responsable", label: "Éco-responsable" },
  { value: "commande-en-ligne", label: "Commande en ligne" },
];

export function SearchFilters() {
  const t = useTranslations("search");
  const params = useParams();
  const locale = params.locale as string;
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentCuisine = searchParams.get("cuisine") || "";
  const currentPrice = searchParams.get("price") || "";
  const currentRating = searchParams.get("rating") || "";
  const currentFeatures = searchParams.get("features")?.split(",").filter(Boolean) || [];

  const updateFilter = useCallback(
    (key: string, value: string) => {
      const newParams = new URLSearchParams(searchParams.toString());
      if (value) {
        newParams.set(key, value);
      } else {
        newParams.delete(key);
      }
      router.push(`/${locale}/commerces?${newParams.toString()}`);
    },
    [searchParams, router, locale]
  );

  const toggleFeature = useCallback(
    (feature: string) => {
      const newFeatures = currentFeatures.includes(feature)
        ? currentFeatures.filter((f) => f !== feature)
        : [...currentFeatures, feature];
      const newParams = new URLSearchParams(searchParams.toString());
      if (newFeatures.length > 0) {
        newParams.set("features", newFeatures.join(","));
      } else {
        newParams.delete("features");
      }
      router.push(`/${locale}/commerces?${newParams.toString()}`);
    },
    [currentFeatures, searchParams, router, locale]
  );

  const clearAll = () => {
    router.push(`/${locale}/commerces`);
  };

  const hasActiveFilters = currentCuisine || currentPrice || currentRating || currentFeatures.length > 0;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">{t("filters")}</h3>
        {hasActiveFilters && (
          <Button variant="ghost" size="sm" onClick={clearAll} className="text-[var(--color-mbl)]">
            <X className="mr-1 h-3 w-3" />
            {t("clearAll")}
          </Button>
        )}
      </div>

      {/* Category Filter */}
      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Catégorie
        </label>
        <select
          value={currentCuisine}
          onChange={(e) => updateFilter("cuisine", e.target.value)}
          className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none focus:border-[var(--color-mbl)] focus:ring-2 focus:ring-[var(--color-mbl)]/20"
        >
          <option value="">Toutes les catégories</option>
          {categories.map((c) => (
            <option key={c.value} value={c.value}>
              {c.label}
            </option>
          ))}
        </select>
      </div>

      {/* Price Range */}
      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          {t("priceRange")}
        </label>
        <div className="flex gap-2">
          {[1, 2, 3, 4].map((price) => (
            <Button
              key={price}
              variant={currentPrice === String(price) ? "default" : "outline"}
              size="sm"
              onClick={() =>
                updateFilter("price", currentPrice === String(price) ? "" : String(price))
              }
              className={
                currentPrice === String(price)
                  ? "bg-[var(--color-mbl)] hover:bg-[var(--color-mbl-dark)]"
                  : ""
              }
            >
              {"$".repeat(price)}
            </Button>
          ))}
        </div>
      </div>

      {/* Rating Filter */}
      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          {t("minRating")}
        </label>
        <div className="flex gap-2">
          {[3, 3.5, 4, 4.5].map((rating) => (
            <Button
              key={rating}
              variant={currentRating === String(rating) ? "default" : "outline"}
              size="sm"
              onClick={() =>
                updateFilter("rating", currentRating === String(rating) ? "" : String(rating))
              }
              className={
                currentRating === String(rating)
                  ? "bg-[var(--color-mbl)] hover:bg-[var(--color-mbl-dark)]"
                  : ""
              }
            >
              <Star className="mr-1 h-3 w-3 fill-current" />
              {rating}+
            </Button>
          ))}
        </div>
      </div>

      {/* Features */}
      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          {t("features")}
        </label>
        <div className="flex flex-wrap gap-2">
          {featureOptions.map((feature) => {
            const isActive = currentFeatures.includes(feature.value);
            return (
              <Badge
                key={feature.value}
                variant={isActive ? "default" : "outline"}
                className={`cursor-pointer transition-colors ${
                  isActive
                    ? "bg-[var(--color-mbl)] hover:bg-[var(--color-mbl-dark)] text-white border-0"
                    : "hover:border-[var(--color-mbl)] hover:text-[var(--color-mbl)]"
                }`}
                onClick={() => toggleFeature(feature.value)}
              >
                {feature.label}
              </Badge>
            );
          })}
        </div>
      </div>
    </div>
  );
}
