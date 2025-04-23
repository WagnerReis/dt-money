import { useContextSelector } from "use-context-selector";
import { TransactionsContext } from "../contexts/TransactionsContext";
import { TransactionContextType } from "../contexts/TransactionsContext";

export function useTransactions<T = unknown>(
  selector: (context: TransactionContextType) => T = (context) =>
    context as unknown as T,
) {
  const selectedContext = useContextSelector(TransactionsContext, selector);

  return selectedContext;
}
