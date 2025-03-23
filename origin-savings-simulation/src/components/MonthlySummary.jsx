import dayjs from 'dayjs';

function MonthlySummary({ amount, reachDate }) {
  const currentDate = dayjs();
  const goalDate = dayjs(reachDate);
  let months = goalDate.diff(currentDate, 'month') + 1;

  // Ensure at least 1 month
  months = months < 1 ? 1 : months;

  const monthlyAmount = amount > 0 ? amount / months : 0;

  // Function to format large numbers with exponential notation if needed
  const formatAmount = (num) => {
    return num > 1e9
      ? num.toExponential(2) // e.g., "1.23e+10"
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
