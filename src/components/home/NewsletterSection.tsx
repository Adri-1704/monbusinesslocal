"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { Mail, CheckCircle, Loader2, Sparkles, Gift, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { subscribeToNewsletter } from "@/actions/newsletter";

export function NewsletterSection() {
  const t = useTranslations("newsletter");
  const params = useParams();
  const locale = (params.locale as string) || "fr";

  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!email) return;

    setIsSubmitting(true);
    try {
      const result = await subscribeToNewsletter(email, locale);
      if (result.success) {
        setIsSuccess(true);
        setEmail("");
      } else {
        setError(result.error || t("error"));
      }
    } catch {
      setError(t("error"));
    } finally {
      setIsSubmitting(false);
    }
  };

  const benefits = [
    { icon: Sparkles, text: t("benefit1") },
    { icon: Gift, text: t("benefit2") },
    { icon: Bell, text: t("benefit3") },
  ];

  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-6 py-12 sm:px-12 sm:py-16">
          <div className="mx-auto max-w-2xl text-center">
            {isSuccess ? (
              <>
                <CheckCircle className="mx-auto h-12 w-12 text-green-400" />
                <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
                  {t("success")}
                </h2>
              </>
            ) : (
              <>
                <Mail className="mx-auto h-10 w-10 text-[var(--color-mbl)]" />
                <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
                  {t("title")}
                </h2>
                <p className="mt-2 text-gray-400">{t("subtitle")}</p>

                {/* Benefits */}
                <div className="mt-6 flex flex-wrap justify-center gap-4">
                  {benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-gray-300">
                      <benefit.icon className="h-4 w-4 text-[var(--color-mbl)]" />
                      {benefit.text}
                    </div>
                  ))}
                </div>

                <form
                  onSubmit={handleSubmit}
                  className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center"
                >
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t("placeholder")}
                    required
                    className="h-12 w-full border-gray-700 bg-white/10 text-white placeholder:text-gray-500 sm:max-w-sm"
                  />
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="h-12 bg-[var(--color-mbl)] px-8 text-white hover:bg-[var(--color-mbl-dark)]"
                  >
                    {isSubmitting ? (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    ) : null}
                    {t("button")}
                  </Button>
                </form>
                {error && (
                  <p className="mt-3 text-sm text-red-400">{error}</p>
                )}
                <p className="mt-3 text-xs text-gray-500">{t("privacy")}</p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
