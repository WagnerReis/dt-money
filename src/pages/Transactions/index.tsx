import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { useTransactions } from "../../hooks/useTransactions";
import { dateFormatter, priceFormatter } from "../../utils/formatter";
import { SearchForm } from "./components/SearchForm";
import {
  PriceHighlight,
  TransactionContainer,
  TransactionTable,
} from "./styles";

export function Transaction() {
  const transactions = useTransactions((context) => context.transactions);

  return (
    <div>
      <Header />
      <Summary />

      <TransactionContainer>
        <SearchForm />
        <TransactionTable>
          <tbody>
            {transactions &&
              transactions.map((transaction) => {
                return (
                  <tr key={transaction.id}>
                    <td width="50%">{transaction.description}</td>
                    <td>
                      <PriceHighlight variant={transaction.type}>
                        {transaction.type === "outcome" && "- "}
                        {priceFormatter.format(transaction.price)}
                      </PriceHighlight>
                    </td>
                    <td>{transaction.category}</td>
                    <td>
                      {dateFormatter.format(new Date(transaction.createdAt))}
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </TransactionTable>
      </TransactionContainer>
    </div>
  );
}
