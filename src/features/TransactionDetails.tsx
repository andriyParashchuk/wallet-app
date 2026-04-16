import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchTransactions } from "./api";
import type { Transaction } from "./types";
import { formatAmount, formatDate } from "./utils";

export const TransactionDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [transaction, setTransaction] = useState<Transaction | null>(null);

  useEffect(() => {
    fetchTransactions().then((data) => {
      const found = data.find((t) => t.id === id);
      if (found) setTransaction(found);
    });
  }, [id]);

  if (!transaction) return null;

  return (
    <div className="container">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <h1>{formatAmount(transaction.amount, transaction.type)}</h1>
      <p>{transaction.name}</p>

      <div className="card">
        <div className="row">
          <span>Status</span>
          <span>{transaction.pending ? "Pending" : "Completed"}</span>
        </div>

        <div className="row">
          <span>Description</span>
          <span>{transaction.description}</span>
        </div>

        <div className="row">
          <span>Date</span>
          <span>{formatDate(transaction.date)}</span>
        </div>

        {transaction.authorizedUser && (
          <div className="row">
            <span>Authorized User</span>
            <span>{transaction.authorizedUser}</span>
          </div>
        )}
      </div>
    </div>
  );
};
