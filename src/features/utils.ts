export const formatAmount = (amount: number, type: "credit" | "payment") => {
  return type === "payment" ? `+ $${amount.toFixed(2)}` : `$${amount.toFixed(2)}`;
};

export const formatDate = (date: string) => {
  const d = new Date(date);
  const now = new Date();
  const diff = (now.getTime() - d.getTime()) / (1000 * 60 * 60 * 24);

  if (diff < 7) {
    return d.toLocaleDateString("en-US", { weekday: "long" });
  }

  return d.toLocaleDateString("en-US", {
    month: "2-digit",
    day: "2-digit"
  });
};

export const calculatePoints = (day: number): number => {
  if (day === 1) return 2;
  if (day === 2) return 3;

  let prev2 = 2;
  let prev1 = 3;
  let current = 0;

  for (let i = 3; i <= day; i++) {
    current = prev1 * 0.6 + prev2;
    prev2 = prev1;
    prev1 = current;
  }

  return Math.round(current);
};

export const formatPoints = (points: number) => {
  if (points >= 1000) return `${Math.floor(points / 1000)}K`;
  return points.toString();
};
