import React from "react";
import { Link } from "react-router-dom";
import type { Transaction } from "../features/types";
import { formatAmount, formatDate } from "../features/utils";

interface Props {
  transaction: Transaction;
}

export const TransactionItem = React.memo(({ transaction }: Props) => {
  return (
    <Link to={`/transaction/${transaction.id}`} className="item">
      <div className="logo">
        <i className="fa-brands fa-apple"></i>
      </div>

      <div className="info">
        <div className="row-top">
          <p className="name">{transaction.name}</p>
          <p className="amount">
            {formatAmount(transaction.amount, transaction.type)}
          </p>
        </div>

        <p className="desc">
          <span>
            {transaction.pending && <span>Pending — </span>}
            {transaction.description}
          </span>
          <span className="percentage">3%</span>
        </p>

        <p className="meta">
          {transaction.authorizedUser &&
            `${transaction.authorizedUser} — `}
          {formatDate(transaction.date)}
        </p>
      </div>

      <div className="arrow">
        <i className="fa-solid fa-angle-right"></i>
      </div>
    </Link>
  );
});
