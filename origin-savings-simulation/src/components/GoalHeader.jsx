// GoalHeader.jsx
// Displays an SVG image as a header for the goal section.

import goalBlock from '../assets/buy-a-house2.svg';

function GoalHeader() {
  return (
    <div className="flex items-center gap-4 mt-4 mb-6">
      <img
        src={goalBlock}
        alt="Goal icon"
        className="w-12 h-12" 
      />
      <div>
        <h2 className="text-xl font-semibold text-gray-800">Buy a house</h2>
        <p className="text-sm text-gray-500">Saving goal</p>
      </div>
    </div>
  );
}

export default GoalHeader;