import { calculatePoints, formatPoints } from "../features/utils";

export const BalanceCard = () => {
  const limit = 1500;
  const balance = 17.3;
  const available = limit - balance;

  const today = new Date().getDate();
  const points = formatPoints(calculatePoints(today));

  return (
    <div className="box-grid">
      <div className="left-side">
        <div className="box">
          <div className="card">
            <p className="label">Card Balance</p>
            <strong className="balance-amount">${balance.toFixed(2)}</strong>
            <p className="sub">${available.toFixed(2)} Available</p>
          </div>
        </div>
        <div className="box">
          <div className="card points-card">
            <p className="label">Daily Points</p>
            <p className="sub">{points}</p>
          </div>
        </div>
      </div>
      <div className="right-side">
        <div className="box">
          <div className="card payment-card">
            <p className="label">No Payment Due</p>
            <p className="sub">You’ve paid your September balance.</p>
            <div className="circle">
              <i className="fas fa-check"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};
