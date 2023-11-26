import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();
  return <h2 className="text-3xl text-center font-extrabold ">{t("expense_tracker")}</h2>;
};

export default Header;
