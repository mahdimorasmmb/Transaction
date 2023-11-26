import { useTranslation } from "react-i18next";
import Header from "./components/Header";
// import { Button } from "./components/ui/button";
import TogelLang from "./components/TogelLang";
import clsx from "clsx";
import Balance from "./components/Balance";
import IncomeExpenses from "./components/IncomeExpenses";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";
import { Toaster } from "@/components/ui/toaster";

function App() {
  const { i18n } = useTranslation();
  return (
    <main
      className={clsx(
        "flex flex-col  w-screen min-h-screen h-full bg-slate-200 py-5  ",
        i18n.language === "fa" && "font-iranYekan"
      )}
    >
      <TogelLang />
      <div
        dir={i18n.language === "fa" ? "rtl" : "ltr"}
        className="flex flex-col  mx-auto gap-2 w-96 "
      >
        <Header />
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
      <Toaster />
    </main>
  );
}

export default App;
