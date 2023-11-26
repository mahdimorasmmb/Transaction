import useTransactionStore from "@/store";
import { useTranslation } from "react-i18next";

const IncomeExpenses = () => {
  const transactionList = useTransactionStore((state) => state.transactions);
  const income = transactionList.reduce((total, item) => {
    return item.type === "income" ? item.amount + total : total;
  }, 0);
  const expense = transactionList.reduce((total, item) => {
    return item.type === "expense" ? item.amount + total : total;
  }, 0);
  const { t } = useTranslation();
  return (
    <div className="bg-white flex rounded-xl ">
      <div className="flex justify-between flex-1 px-10 py-3">
        <div className="flex flex-col items-center px-4">
          <p className="text-xl uppercase">{t("income")}</p>
          <p className="text-green-800 font-bold">${income ? income : 0}</p>
        </div>
        <div></div>
        <div className="flex flex-col items-center px-4">
          <p className="text-xl uppercase">{t("expense")}</p>
          <p className="text-red-900 font-bold">${expense ? expense : 0}</p>
        </div>
      </div>
    </div>
  );
};

export default IncomeExpenses;
