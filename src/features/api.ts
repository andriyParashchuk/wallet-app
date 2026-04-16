import type { Transaction } from "./types";

export const fetchTransactions = async (): Promise<Transaction[]> => {
  const res = await fetch(`${import.meta.env.BASE_URL}data.json`);

  if (!res.ok) {
    throw new Error(`Loading failed: ${res.status}`);
  }

  return res.json();
};
