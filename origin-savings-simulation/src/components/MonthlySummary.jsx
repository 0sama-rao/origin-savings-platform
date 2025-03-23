// MonthlySummary.jsx
// This component calculates and displays the monthly savings needed to reach a goal.

import dayjs from 'dayjs';

function MonthlySummary({ amount, reachDate }) {
  const currentDate = dayjs();
  const goalDate = dayjs(reachDate);

  // Including current month
  let months = goalDate.diff(currentDate, 'month') + 1;
  
  // Minimum of 1 month
  months = months < 1 ? 1 : months; 

  const monthlyAmount = amount > 0 ? amount / months : 0;

  const formatAmount = (num) => {
    return num > 1e9
      ? num.toExponential(2)
      : num.toLocaleString(undefined, { minimumFractionDigits: 2 });
  };

  return (
    <div className="summary-box">
      <div className="summary-top">
        <h2 className="text-lg text-gray-700 font-normal">Monthly amount</h2>
        <span className="text-xl font-semibold text-blue-600">
          ${formatAmount(monthlyAmount)}
        </span>
      </div>
      <p className="summary-bottom">
        You’re planning <strong>{months}</strong> monthly deposits to reach your
        <strong> ${formatAmount(amount)}</strong> goal by <strong>{goalDate.format('MMMM YYYY')}</strong>.
      </p>
    </div>
  );
}
export default MonthlySummary;