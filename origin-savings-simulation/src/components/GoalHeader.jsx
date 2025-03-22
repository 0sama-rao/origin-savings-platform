import houseIcon from '../assets/buy-a-house.svg';

function GoalHeader() {
  return (
    <div className="flex items-center gap-4 w-[480px] h-[64px] mt-8">
      <img src={houseIcon} alt="Buy a house" className="w-10 h-10" />
      <div>
        <h1 className="text-base font-semibold text-gray-900">Buy a house</h1>
        <h2 className="text-sm text-gray-500">Saving goal</h2>
      </div>
    </div>
  );
}

export default GoalHeader;
