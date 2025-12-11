// ui/FooterLinks.tsx
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function FooterLinks() {
  const t = useTranslations();

  const companyLinks = [
    { label: t("Footer.companyLinks.links.0"), href: "#" },
    { label: t("Footer.companyLinks.links.1"), href: "#" },
    { label: t("Footer.companyLinks.links.2"), href: "#" },
    { label: t("Footer.companyLinks.links.3"), href: "#" },
    { label: t("Footer.companyLinks.links.4"), href: "#" },
    { label: t("Footer.companyLinks.links.5"), href: "#" },
    { label: t("Footer.companyLinks.links.6"), href: "#" },
  ];

  const supportLinks = [
    { label: t("Footer.supportLinks.links.0"), href: "#" },
    { label: t("Footer.supportLinks.links.1"), href: "#" },
    { label: t("Footer.supportLinks.links.2"), href: "#" },
    { label: t("Footer.supportLinks.links.3"), href: "#" },
    { label: t("Footer.supportLinks.links.4"), href: "#" },
  ];

  const legalLinks = [
    { label: t("Footer.legalLinks.links.0"), href: "#" },
    { label: t("Footer.legalLinks.links.1"), href: "#" },
    { label: t("Footer.legalLinks.links.2"), href: "#" },
  ];

  return (
    <div className="grid gap-8 text-sm text-gray-700 grid-cols-2 sm:grid-cols-3">
      {/* Company */}
      <div>
        <h3 className="mb-3 text-xs font-semibold uppercase tracking-wide text-gray-900">
          {t("Footer.companyLinks.title")}
        </h3>
        <ul className="space-y-2">
          {companyLinks.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="hover:text-gray-900 hover:underline"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Support */}
      <div>
        <h3 className="mb-3 text-xs font-semibold uppercase tracking-wide text-gray-900">
          {t("Footer.supportLinks.title")}
        </h3>
        <ul className="space-y-2">
          {supportLinks.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="hover:text-gray-900 hover:underline"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Legal */}
      <div>
        <h3 className="mb-3 text-xs font-semibold uppercase tracking-wide text-gray-900">
          {t("Footer.legalLinks.title")}
        </h3>
        <ul className="space-y-2">
          {legalLinks.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="hover:text-gray-900 hover:underline"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
