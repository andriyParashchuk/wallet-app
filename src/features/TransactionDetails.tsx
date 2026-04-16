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
        <i className="fa-solid fa-angle-left"></i>
      </button>

      <div className="details-header">
        <div className="details-amount">
          {formatAmount(transaction.amount, transaction.type)}
        </div>
        <p className="details-name">{transaction.name}</p>
        <p className="details-name">{formatDate(transaction.date)}</p>
      </div>

      <div className="details-card">
        <div className="details-row">
          <span>Status: {transaction.pending ? 'Pending' : 'Approved'}</span>
          <div className="sub">{transaction.description}</div>
        </div>

        <div className="details-row">
          <span>Total</span>
          <span>{formatAmount(transaction.amount, transaction.type)}</span>
        </div>
      </div>
    </div>
  );
};
