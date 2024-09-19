
import React from 'react';
import { RxCaretDown } from "react-icons/rx";
import { FaHome, FaInfoCircle } from "react-icons/fa"; // Home and About Us icons
import { MdPhoneForwarded } from "react-icons/md"; // Contact Us icon
import { FaSignInAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className='p-[15px] shadow-xl'>
      <div className='max-w-[1200px] mx-auto flex items-center'>
        <div className='w-[100px]'>
          <img src='swiggy_logo/logo.png' className='w-full cursor-pointer hover:scale-125' alt='logo'/>
        </div>
        <div className=''>
          <span className='font-bold border-b[3px] ml-4 border-[black]'> Ajmer, Jaypur, Jhodhpur, India </span>
          <RxCaretDown className='inline cursor-pointer text-orange-500'/>
        </div>
        <nav className='flex list-none gap-10 ml-auto'>
          
          {/* Home (with navigation) */}
          <li className='hover:text-orange-600 flex items-center gap-2 cursor-pointer hover:scale-125'>
            <Link to="/" className="flex items-center gap-2"> {/* Navigate to Home */}
              <FaHome className='inline' />  {/* Home icon */}
              Home
            </Link>
          </li>
          
          {/* About Us (with navigation) */}
          <li className='hover:text-orange-600 flex items-center gap-2 cursor-pointer hover:scale-125'>
            <Link to="/about" className="flex items-center gap-2">  {/* Navigate to About Us */}
              <FaInfoCircle className='inline'/>  {/* About Us icon */}
              About Us
            </Link>
          </li>
          
          {/* Sign In (with navigation) */}
          <li className='hover:text-orange-600 flex items-center gap-2 cursor-pointer hover:scale-125'>
            <Link to="/signin" className='flex items-center gap-2'> {/* Navigate to Sign In */}
              <FaSignInAlt className='inline'/>
              Sign In
            </Link>
          </li>
          
          {/* Contact Us */}
          <li className='hover:text-orange-600 flex items-center gap-2 cursor-pointer hover:scale-125'>
            <Link to="/contact" className='flex items-center gap-2'> {/* Navigate to contact us */}
            <MdPhoneForwarded className='inline'/>  {/* Contact Us icon */}
            Contact Us
            </Link>
          </li>
        </nav>
      </div>
    </header>
  );
}

export default Header;
