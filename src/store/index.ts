import { FormSchema } from "@/components/AddTransaction";
import { z } from "zod";
import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";
import { persist } from "zustand/middleware";

export interface Transaction extends z.infer<typeof FormSchema> {
  id?: string;
}
interface BearState {
  transactions: Transaction[];
  totalAmount: number;
  add: (value: Transaction) => void;
  delete: (id: string) => void;
}

const useTransactionStore = create<BearState>()(
  persist(
    (set) => ({
      transactions: [],
      totalAmount: 0,
      add: (value) =>
        set((state) => {
          const total =
            value.type === "income"
              ? state.totalAmount + value.amount
              : state.totalAmount - value.amount;
          const uuid = uuidv4();

          return {
            ...state,
            totalAmount: total,
            transactions: [...state.transactions, { id: uuid, ...value }],
          };
        }),
      delete: (id) =>
        set((state) => {
          const typeItem = state.transactions.find(
            (element) => element.id === id
          );
          const total = typeItem
            ? typeItem?.type === "income"
              ? state.totalAmount - typeItem.amount
              : state.totalAmount + typeItem.amount
            : state.totalAmount;

          const newList = state.transactions.filter((item) => item.id !== id);
          return {
            ...state,
            totalAmount:total,
            transactions: newList,
          };
        }),
    }),
    {
      name: "location-store",
      getStorage: () => sessionStorage,
    }
  )
);

export default useTransactionStore;
