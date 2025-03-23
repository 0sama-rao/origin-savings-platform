// This test file verifies MoneyInput component behavior,
// focusing on number formatting, input, and onAmountChange callback execution.

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import MoneyInput from '../components/Inputs/MoneyInput';

describe('MoneyInput Component', () => {
  it('formats number correctly when typed', () => {
    const handleChange = jest.fn();
    render(<MoneyInput amount={0} onAmountChange={handleChange} />);
  
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: '3500.45' } });

    // Expecting formatted string with commas and integer only (no decimals)
    expect(input.value).toBe('350,045');
    expect(handleChange).toHaveBeenCalledWith(350045);
  });

  it('ignores non-numeric characters', () => {
    const handleChange = jest.fn();
    render(<MoneyInput amount={0} onAmountChange={handleChange} />);

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: '$12a34b' } });

    // Sanitizing formatted number
    expect(input.value).toBe('1,234');
    expect(handleChange).toHaveBeenCalledWith(1234);
  });
});
