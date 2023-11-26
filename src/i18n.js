import i18next from "i18next";
import { initReactI18next } from "react-i18next";

export default i18next.use(initReactI18next).init({
  // the translations
  // (tip move them in a JSON file and import them,
  // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
  resources: {
    en: {
      translation: {
        english: "english",
        farsi: "Farsi",
        expense_tracker: "Expense Tracker",
        your_balance: "Your Balance",
        income: "incom",
        expense: "expense",
        history: "history",
        add_new_transaction: "Add New Transaction",
        transaction_title: "Transaction title",
        plasholder_input: "sell and buy text",
        amount: "amount",
        title_message: "title must be at least 2 characters.",
        there_is_no_transaction: "There is no transaction",
        incom_or_xpense: "Incom Or Expense",
        transaction_successfully:
          "The desired transaction was registered successfully",
      },
    },
    fa: {
      translation: {
        english: "انگلیسی",
        farsi: "فارسی",
        expense_tracker: "مدیریت هزینه",
        your_balance: "تعادل شما",
        income: "درامد",
        expense: "هزینه",
        history: "تاریخچه",
        add_new_transaction: "افزودن تراکنش جدید",
        transaction_title: "عنوان تراکنش",
        plasholder_input: "خرید فروش",
        amount: "مقدار",
        title_message: "عنوان باید حداقل 2 کاراکتر باشد",
        there_is_no_transaction: "تراکنشی وجود ندارد",
        incom_or_xpense: "درآمد یا هزینه",
        transaction_successfully: "تراکنش مورد نظر با موفقیت ثبت شد",
      },
    },
  },
  lng: "fa", // if you're using a language detector, do not define the lng option
  fallbackLng: "en",

  interpolation: {
    escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
  },
});
