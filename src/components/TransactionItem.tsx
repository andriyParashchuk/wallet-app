import { Link } from "react-router-dom";
import type { Transaction } from "../features/types";
import { formatAmount, formatDate } from "../features/utils";

interface Props {
  transaction: Transaction;
}

export const TransactionItem = ({ transaction }: Props) => {
  return (
    <Link to={`/transaction/${transaction.id}`} className="item">
      <div className="icon" />

      <div className="info">
        <p className="name">{transaction.name}</p>

        <p className="desc">
          {transaction.pending && <span>Pending — </span>}
          {transaction.description}
        </p>

        <p className="meta">
          {transaction.authorizedUser &&
            `${transaction.authorizedUser} — `}
          {formatDate(transaction.date)}
        </p>
      </div>

      <div className="amount">
        {formatAmount(transaction.amount, transaction.type)}
      </div>
    </Link>
  );
};
