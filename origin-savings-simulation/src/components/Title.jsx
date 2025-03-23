// Title.jsx
// Renders the title SVG image with styling.

// import titleSvg from '../assets/Title.svg';

function Title() {
  return (
    <div className="w-full flex justify-center bg-[#F4F8FA]">
      <h1 className="text-center mt-[80px] mb-6 text-base font-medium text-[#1B31A8] max-w-[560px] px-4">
        Let’s plan your <span className="font-semibold text-[#1B31A8]">saving goal.</span>
      </h1>
    </div>
  );
}


export default Title;