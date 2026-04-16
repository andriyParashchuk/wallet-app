import type { Transaction } from "./types";

export const fetchTransactions = async (): Promise<Transaction[]> => {
  const res = await fetch("/data.json");
  return res.json();
};
