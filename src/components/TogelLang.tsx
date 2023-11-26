import { Button } from "./ui/button";
import { useTranslation } from "react-i18next";

const TogelLang = () => {
  const { i18n, t } = useTranslation();
  return (
    <div className="flex gap-2 px-10 py-2  ">
      <Button
        disabled={i18n.language === "en"}
        variant={"outline"}
        onClick={() => i18n.changeLanguage("en")}
      >
        {t("english")}
      </Button>
      <Button
        disabled={i18n.language === "fa"}
        variant={"outline"}
        onClick={() => i18n.changeLanguage("fa")}
      >
        {t("farsi")}
      </Button>
    </div>
  );
};

export default TogelLang;
