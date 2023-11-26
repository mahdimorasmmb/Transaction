import { FC, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Separator } from "./ui/separator";
import useTransactionStore, { Transaction } from "@/store";
import { Button } from "./ui/button";
import { TrashIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";


type TCard = Transaction;

const Card: FC<TCard> = ({ amount, title, id, type }) => {
  const { i18n } = useTranslation();
  const dleletedItem = useTransactionStore((state) => state.delete);
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLButtonElement>(null);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const handleDeletedItem = (id: string) => {
    dleletedItem(id);
  };

  const color: { [key: string]: string } =
    type === "income"
      ? {
          fa: "border-l-4 border-l-green-600",
          en: "border-r-4 border-r-green-600",
        }
      : {
          fa: "border-l-4 border-l-red-600",
          en: "border-r-4 border-r-red-600",
        };

  return (
    <Button
      dir="rtl"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={ref}
      className={cn("relative !rounded-sm  ", color[i18n.language])}
      variant={"ghost"}
      asChild
    >
      <div
        className={cn(
          "flex  justify-between flex-1 px-5 bg-slate-50 shadow-xl py-3  cursor-pointer ",
          i18n.language === "fa" && "flex-row-reverse"
        )}
      >
        <p>{amount}</p>
        <p>{title}</p>
        {hovered && (
          <Button
            onClick={() => {
              id && handleDeletedItem(id);
            }}
            className="absolute -left-11 hover:text-red-400 text-red-700 "
            size={"icon"}
            variant={"ghost"}
          >
            <TrashIcon className="w-7 h-7 " />
          </Button>
        )}
      </div>
    </Button>
  );
};

const TransactionList = () => {
  const { t } = useTranslation();
  const transitions = useTransactionStore((state) => state.transactions);

  //   useEffect(() => {
  //     async function fetchData() {
  //       let { data: transion, error } = await supabase
  //         .from("transion")
  //         .select("*");
  //       let { data } = await supabase.from("transion").insert([
  //         {
  //           title: "test",
  //           amount: 200,
  //         },
  //       ]);

  //       console.log(transion, error);
  //     }
  //     fetchData();
  //   }, []);
  return (
    <div className="flex flex-col">
      <h2>{t("history")}</h2>
      <Separator className="my-2 bg-black" />
      <div className="flex flex-col gap-3">
        {transitions.length === 0 ? (
          <p>{t("there_is_no_transaction")}</p>
        ) : (
          transitions.map((item) => <Card key={item.id} {...item} />)
        )}
      </div>
    </div>
  );
};

export default TransactionList;
