// This test file verifies the DatePicker component's rendering and interactive behavior,
// including navigation for changing the month.

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import DatePicker from '../components/Inputs/DatePicker';
import dayjs from 'dayjs';

describe('DatePicker Component', () => {
  it('renders the initial month and year', () => {
    const today = dayjs();
    render(<DatePicker reachDate={today.toDate()} onDateChange={() => {}} />);
    
    // Checking if current month and year are rendered
    expect(screen.getByText(today.format('MMMM'))).toBeInTheDocument();
    expect(screen.getByText(today.format('YYYY'))).toBeInTheDocument();
  });

  it('increments month on right arrow button click', () => {
    const handleDateChange = jest.fn();
    const today = dayjs();
    const nextMonth = today.add(1, 'month');

    render(<DatePicker reachDate={today.toDate()} onDateChange={handleDateChange} />);

    const rightButton = screen.getByText('>');
    fireEvent.click(rightButton);

    expect(screen.getByText(nextMonth.format('MMMM'))).toBeInTheDocument();
    expect(screen.getByText(nextMonth.format('YYYY'))).toBeInTheDocument();

    // calling callback after month changes
    expect(handleDateChange).toHaveBeenCalled();
  });

  it('does not decrement before current month', () => {
    const handleDateChange = jest.fn();
    const today = dayjs();

    render(<DatePicker reachDate={today.toDate()} onDateChange={handleDateChange} />);

    const leftButton = screen.getByText('<');
    fireEvent.click(leftButton);

    // staying on the same month if trying to go back before today
    expect(screen.getByText(today.format('MMMM'))).toBeInTheDocument();
    expect(handleDateChange).not.toHaveBeenCalled();
  });

  it('responds to keyboard arrow keys', () => {
    const handleDateChange = jest.fn();
    const today = dayjs();
    const nextMonth = today.add(1, 'month');

    render(<DatePicker reachDate={today.toDate()} onDateChange={handleDateChange} />);

    const container = screen.getByTestId('date-picker-container');
    
    //focus to ensure keydown is registered
    container.focus();
    fireEvent.keyDown(container, { key: 'ArrowRight' });

    expect(screen.getByText(nextMonth.format('MMMM'))).toBeInTheDocument();
    expect(handleDateChange).toHaveBeenCalled();
  });
});
