import { cn } from "@/lib/utils";
import useTransactionStore from "@/store";
import { useTranslation } from "react-i18next";

const Balance = () => {
  const { t ,i18n:{language}} = useTranslation();
  const total = useTransactionStore((state) => state.totalAmount);
  return (
    <div className="flex flex-col justify-start px-2">
      <h4 className="text-2xl">{t("your_balance")}</h4>
      <p dir="ltr" className={cn('text-3xl flex gap-1  font-extrabold',language === 'fa' && 'justify-end')}><span>$</span>{total ? total : 0}</p>
    </div>
  );
};

export default Balance;
