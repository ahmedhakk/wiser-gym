import { US, SA } from "country-flag-icons/react/3x2";

const FlagIcon = ({ locale }: { locale: string }) => {
  if (locale === "en") {
    return <US className="w-6 h-4 sm:w-7 sm:h-5 rounded-sm" />;
  }
  return <SA className="w-6 h-4 sm:w-7 sm:h-5 rounded-sm" />;
};

export default FlagIcon;
