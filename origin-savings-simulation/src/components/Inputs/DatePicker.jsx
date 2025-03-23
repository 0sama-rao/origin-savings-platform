import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';

function DatePicker({ reachDate, onDateChange }) {
  const [date, setDate] = useState(dayjs(reachDate));

  const changeMonth = (amount) => {
    const newDate = date.add(amount, 'month');
    if (newDate.isBefore(dayjs(), 'month')) return;
    setDate(newDate);
    onDateChange(newDate.toDate());
  };

  const handleKey = (e) => {
    if (e.key === 'ArrowLeft') changeMonth(-1);
    if (e.key === 'ArrowRight') changeMonth(1);
  };

  useEffect(() => {
    setDate(dayjs(reachDate));
  }, [reachDate]);

  return (
    <div className="flex flex-col w-[232px]">
      <label className="text-sm text-gray-500 mb-1">Reach goal by</label>
      <div
        data-testid="date-picker-container" // ✅ added for testing keyboard
        tabIndex={0}
        onKeyDown={handleKey}
        className="flex items-center justify-between border rounded-md px-3 py-2 focus:outline-none"
      >
        <button onClick={() => changeMonth(-1)} className="text-gray-500">&lt;</button>
        <div className="text-center">
          <div className="text-sm font-medium text-gray-800">{date.format('MMMM')}</div>
          <div className="text-xs text-gray-500">{date.format('YYYY')}</div>
        </div>
        <button onClick={() => changeMonth(1)} className="text-gray-500">&gt;</button>
      </div>
    </div>
  );
}

export default DatePicker;
