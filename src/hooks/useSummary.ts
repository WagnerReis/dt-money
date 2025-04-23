import { useMemo } from "react";
import { useTransactions } from "./useTransactions";

export function useSummary() {
  const transactions = useTransactions((context) => context.transactions);

  const summary = useMemo(() => {
    console.log("renderrrrrrr");
    return transactions.reduce(
      (acc, transaction) => {
        if (transaction.type === "income") {
          acc.income += transaction.price;
          acc.total += transaction.price;
        }

        if (transaction.type === "outcome") {
          acc.outcome += transaction.price;
          acc.total -= transaction.price;
        }

        return acc;
      },
      {
        income: 0,
        outcome: 0,
        total: 0,
      },
    );
  }, [transactions]);

  return summary;
}
