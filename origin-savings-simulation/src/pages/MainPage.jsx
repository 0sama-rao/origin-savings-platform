// src/pages/Main.jsx
import { useState } from 'react';
import Navbar from '../components/Navbar';
import CardContainer from '../components/CardContainer';
import GoalHeader from '../components/GoalHeader';
import MoneyInput from '../components/Inputs/MoneyInput';
import DatePicker from '../components/Inputs/DatePicker';
import MonthlySummary from '../components/MonthlySummary';
import ConfirmButton from '../components/ConfirmButton';
import Title from '../components/Title';

function Main() {
  const [amount, setAmount] = useState(0);
  const [reachDate, setReachDate] = useState(new Date());
  const [confirmedData, setConfirmedData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleConfirm = () => {
    setLoading(true);
    setTimeout(() => {
      setConfirmedData({ amount, reachDate });
      setLoading(false);
    }, 800); 
  };

  return (
    <>
      <Navbar />
      <Title />
      <CardContainer>
        <GoalHeader />
        <div className="flex flex-col sm:flex-row justify-between gap-3 mt-2 mb-4">
          <MoneyInput amount={amount} onAmountChange={setAmount} />
          <DatePicker reachDate={reachDate} onDateChange={setReachDate} />
        </div>
        <MonthlySummary
          amount={confirmedData?.amount ?? 0}
          reachDate={confirmedData?.reachDate ?? new Date()}
        />
        <ConfirmButton onClick={handleConfirm} loading={loading} disabled= {amount<=0} />
      </CardContainer>
    </>
  );
}


export default Main;
