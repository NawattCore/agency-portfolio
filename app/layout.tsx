"use client";

import { NextIntlClientProvider } from "next-intl";
import { useLocale } from "next-intl";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = useLocale();

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body className="bg-background text-foreground">
        <NextIntlClientProvider locale={locale}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
