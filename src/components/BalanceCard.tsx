import { calculatePoints, formatPoints } from "../features/utils";

export const BalanceCard = () => {
  const balance = 1234.56;
  const limit = 1500;
  const available = limit - balance;

  const today = new Date().getDate();
  const points = formatPoints(calculatePoints(today));

  return (
    <div className="card">
      <p className="label">Card Balance</p>
      <h1 className="amount">${balance.toFixed(2)}</h1>

      <div className="row">
        <div>
          <p className="meta-label">Limit</p>
          <p>${limit}</p>
        </div>
        <div>
          <p className="meta-label">Available</p>
          <p>${available.toFixed(2)}</p>
        </div>
      </div>

      <div className="status">You've paid your balance</div>

      <div className="points">
        <p className="label">Daily Points</p>
        <p>{points}</p>
      </div>
    </div>
  );
};
