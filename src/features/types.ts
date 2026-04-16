export type TransactionType = "credit" | "payment";

export interface Transaction {
  id: string;
  name: string;
  amount: number;
  type: TransactionType;
  description: string;
  date: string;
  pending?: boolean;
  authorizedUser?: string;
}
