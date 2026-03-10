"use client";

import { useParams, usePathname, useRouter } from "next/navigation";

const languages = [
  { code: "fr", label: "Français" },
  { code: "de", label: "Deutsch" },
  { code: "en", label: "English" },
  { code: "pt", label: "Português" },
  { code: "es", label: "Español" },
];

export function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const currentLocale = params.locale as string;

  const switchLocale = (newLocale: string) => {
    const segments = pathname.split("/");
    segments[1] = newLocale;
    router.push(segments.join("/"));
  };

  return (
    <div className="flex items-center gap-1 rounded-full border border-gray-200 bg-gray-50 px-2 py-1 text-xs font-medium">
      <span className="mr-0.5">🇨🇭</span>
      {languages.map((lang, i) => (
        <span key={lang.code} className="flex items-center">
          {i > 0 && <span className="mx-0.5 text-gray-300">|</span>}
          <button
            onClick={() => switchLocale(lang.code)}
            className={`rounded px-1.5 py-0.5 uppercase transition-colors ${
              currentLocale === lang.code
                ? "bg-[var(--color-mbl)] text-white"
                : "text-gray-600 hover:text-gray-900"
            }`}
            title={lang.label}
          >
            {lang.code}
          </button>
        </span>
      ))}
    </div>
  );
}
