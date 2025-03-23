import React from 'react';
import { useEffect, useState } from 'react';
import { limitToDigits } from '../../utils/formatter';

function MoneyInput({ amount, onAmountChange }) {
  const [value, setValue] = useState(amount.toLocaleString());

  const handleChange = (e) => {
    const raw = limitToDigits(e.target.value);
    setValue(Number(raw).toLocaleString());
    onAmountChange(Number(raw));
  };

  useEffect(() => {
    setValue(amount.toLocaleString());
  }, [amount]);

  return (
    <div className="flex flex-col w-[232px]">
      <label className="input-label">Total amount</label>
      <div className="relative">
        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg">$</span>
        <input
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          value={value}
          onChange={handleChange}
          className="input-field"
        />
      </div>
    </div>
  );
}

export default MoneyInput;
