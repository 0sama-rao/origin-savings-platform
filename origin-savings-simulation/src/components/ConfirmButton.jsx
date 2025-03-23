// ConfirmButton.jsx
// This component renders a confirm button with loading and disabled states.

function ConfirmButton({ onClick, loading, disabled }) {
  return (
    <div className="flex justify-center">
      <button
        onClick={onClick}
        disabled={loading || disabled}
        className="bg-[#1B31A8] text-white w-[320px] h-[56px] rounded-full mt-6 transition-opacity disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {loading ? 'Loading...' : 'Confirm'}
      </button>
    </div>
  );
}
export default ConfirmButton;