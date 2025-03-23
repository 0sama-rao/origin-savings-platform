// Title.jsx
// Renders the title SVG image with styling.

import titleSvg from '../assets/Title.svg';

function Title() {
  return (
    <div className="bg-[#F4F8FA] w-full flex justify-center">
      <img
        src={titleSvg}
        alt="Let's plan your saving goal"
        className="mt-12 mb-6 w-[560px] max-w-full px-4"
      />
    </div>
  );
}
export default Title;