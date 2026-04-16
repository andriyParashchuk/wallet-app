import { useEffect, useState, useMemo } from "react";
import { fetchTransactions } from "./api";
import type { Transaction } from "./types";
import { TransactionItem } from "../components/TransactionItem";
import { BalanceCard } from "../components/BalanceCard";

export const TransactionsList = () => {
  const [data, setData] = useState<Transaction[]>([]);

  useEffect(() => {
    fetchTransactions().then(setData);
  }, []);

  const items = useMemo(() => {
    return data.slice(0, 10).map((t) => (
      <TransactionItem key={t.id} transaction={t} />
    ));
  }, [data]);

  if (!data.length) return <div className="loading">Loading...</div>;

  return (
    <div className="container">
      <BalanceCard />

      <h2 className="section-title">Latest Transactions</h2>
      <div className="list">{items}</div>
    </div>
  );
};
