import { useEffect, useState } from "react";
import { fetchTransactions } from "./api";
import type { Transaction } from "./types";
import { TransactionItem } from "../components/TransactionItem";
import { BalanceCard } from "../components/BalanceCard";

export const TransactionsList = () => {
  const [data, setData] = useState<Transaction[]>([]);

  useEffect(() => {
    fetchTransactions().then(setData);
  }, []);

  return (
    <div className="container">
      <BalanceCard />

      <h2>Latest Transactions</h2>

      {data.slice(0, 10).map((t) => (
        <TransactionItem key={t.id} transaction={t} />
      ))}
    </div>
  );
};
