// app/[locale]/layout.tsx
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { locales, type Locale } from "@/lib/i18n/config";
import { ThemeProvider } from "@/context/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/shared/ScrollProgress";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <ScrollProgress />
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1 pt-16 lg:pt-[72px]">{children}</main>
          <Footer />
        </div>
      </ThemeProvider>
    </NextIntlClientProvider>
  );
}