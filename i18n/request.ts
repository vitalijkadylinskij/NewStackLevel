import { routing } from "./routing";

type Locale = (typeof routing.locales)[number];

export default async function requestConfig({
  requestLocale
}: {
  requestLocale: Promise<string | undefined>;
}) {
  const requested = await requestLocale;

  const locale: Locale = routing.locales.includes(
    requested as Locale
  )
    ? (requested as Locale)
    : routing.defaultLocale;

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
}