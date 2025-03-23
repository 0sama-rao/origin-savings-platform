// Navbar.jsx
// Displays a top navigation bar with the Origin logo.

import originLogo from '../../public/logoOrigin.svg';

function Navbar() {
  return (
    <nav className="w-full h-[80px] flex items-center px-[56px] bg-white">
      <img src={originLogo} alt="Origin Logo" className="w-[100px] h-[32px]" />
    </nav>
  );
}
export default Navbar;