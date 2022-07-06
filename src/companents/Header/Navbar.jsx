import React from 'react';

const Navbar = () => {
  return (
    <>
      <nav className='nav'>
        <ul className='nav-list list-unstyled'>
          <li className='nav-item text-white list-unstyled'>Pull requests</li>
          <li className='nav-item text-white list-unstyled'>Issues</li>
          <li className='nav-item text-white list-unstyled'>Marketplace</li>
          <li className='nav-item text-white list-unstyled'>Explore</li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;