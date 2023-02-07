import {useState} from 'react';
import { NavLink } from 'react-router-dom';
import {RiCloseLine} from 'react-icons/ri';
import {logo} from '../assets';



// links are arr with objects inside of it
import {links} from '../assets/constants';

import { HiOutlineMenu } from 'react-icons/hi';

const NavLinks = ({handleClick}) => (
  // wrapper div
  <div className='mt-10'>
    {/* looping over links imported from assets  */}
    {links.map((item) =>  (
      <NavLink className='flex flex-row justify-start items-center my-8 text-sm font-medium text-gray-300 hover:text-red-500'
      
        // checking if handleClick exists then calling it. Otherwise err on desktop because trying to call func that doesn't exit
        onClick={() => handleClick && handleClick()}
        key={item.name}
        to={item.to}
        
      
      >
        <item.icon className='w-6 h-6 mr-2' />
        {item.name}

      </NavLink>
    ))};
  </div>
);

const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return(
    <>
    
    <div className='md:flex hidden flex-col w-[240px] py-10 px-4 bg-[#191624]'>

    <img src={logo} alt='sidebarLogo' className='w-full h-14 object-contain' />

    <NavLinks />

    </div>

    {/* icon to open and close the menu  */}
    <div className='absolute md:hidden block top-6 right-3'>

      {mobileMenuOpen ? (

        // self closing icon
        <RiCloseLine className='w-6 h-6 text-white mr-2' onClick={() => setMobileMenuOpen(false)}/>

      ) : <HiOutlineMenu className='w-6 h-6 text-red-200 mr-2' onClick={() => setMobileMenuOpen(true)}/>}


    </div>


    <div className={`absolute top-0 h-screen w-2/3 bg-gradient-to-tl from-white/10 to-[#9ec1c3] backdrop-blur-lg
    z-10 p-6 md:hidden smooth-transition ${mobileMenuOpen ? 'left-0' : '-left-full'}`}>

    <img src={logo} alt='sidebarLogo' className='w-full h-14 object-contain' />

    <NavLinks handleClick={() => setMobileMenuOpen(false)}/>

    </div>

    </>
  );
};

export default Sidebar;
