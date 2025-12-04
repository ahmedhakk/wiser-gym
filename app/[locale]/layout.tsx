import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Roboto } from "next/font/google";
import "@/styles/globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Wiser Gym | The Ultimate Smart Home Gym For Full-Body Results At Home",
  description:
    "Get a complete smart gym on your wall. WiserGym offers personal training real-time tracking & 250+ exercises; all in your home. Free delivary & 2-year warranty",
};

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>; // Typed as a Promise for Next.js 15+
}>) {
  // 1. Await the params (Required in Next.js 15)
  const { locale } = await params;

  // 2. Fetch translations on the server
  const messages = await getMessages();

  // 3. Determine direction (Arabic = RTL, English = LTR)
  const direction = locale === "ar" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={direction} className="scroll-smooth">
      <body className={`${roboto.variable} font-sans antialiased`}>
        {/* 4. Wrap children with the provider */}
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
