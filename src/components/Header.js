import React from 'react';
//import logo
import logo from "../assets/logo.png"

const Header = () => {
  return <header className=''>
  <div className='container mx-auto'>
  <div className='flex  justify-between items-center'>
    {/* logo */}
    <a href='#'>
     <img src={logo} alt=''/>
      </a>
      {/* buttons */}
      <button className='btn btn-sm'>work with me</button>
      

    </div> 
  </div>

  </header>;
};

export default Header;
