import { useTranslation } from "react-i18next";
import { Separator } from "./ui/separator";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import useTransactionStore from "@/store";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { cn } from "@/lib/utils";

export const FormSchema = z.object({
  title: z.string().min(2, {
    message: "title_message",
  }),
  amount: z.number().default(0),
  type: z.enum(["income", "expense"]).default("income"),
});

export function InputForm() {
  const addTransaction = useTransactionStore((state) => state.add);
  const { t } = useTranslation();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      amount: 0,
      title: "",
      type: "income",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    addTransaction(data);
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
    form.reset();
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className=" flex flex-col gap-4"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("transaction_title")}</FormLabel>
              <FormControl>
                <Input placeholder={t("plasholder_input")} {...field} />
              </FormControl>
              {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-between ">
          <FormField
            control={form.control}
            name="amount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("amount")}</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    {...field}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                  />
                </FormControl>
                {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("incom_or_xpense")}</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Item" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {Object.keys(
                      FormSchema._getCached().shape.type._def.innerType.Enum
                    ).map((item) => (
                      <SelectItem key={item} value={item}>
                        {t(item)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button
          className={cn(
            "block",
            form.watch("type") === "income"
              ? "bg-green-700 hover:bg-green-600"
              : "bg-red-700 hover:bg-red-600"
          )}
          variant="default"
          type="submit"
        >
          Submit
        </Button>
      </form>
    </Form>
  );
}

const AddTransaction = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col">
      <h3 className="text-xl font-bold">{t("add_new_transaction")}</h3>
      <Separator className="my-2 bg-black" />
      <InputForm />
    </div>
  );
};

export default AddTransaction;
