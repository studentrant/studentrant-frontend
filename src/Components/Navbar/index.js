import React, { Fragment } from 'react';
import logo from '../../assets/images/1n.png';

const Navbar = () => {
  return (
    <Fragment >
      <nav className="bg-gray-900 flex items-center justify-between px-4 py-3">
        <h1>
          <img src={logo} alt='logo' height='40' />
        </h1>
        <div>
          <div>
            <button
              type='button'
              className='block text-gray-500 hover:text-white focus:text-white focus:outline-none'
            >
              <svg className='h-6 w-6 fill-current' viewBox='0 0 24 24'>
                <path
                  v-if='isOpen'
                  fill-rule='evenodd'
                  d='M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z'
                />
                <path
                  v-if='!isOpen'
                  fill-rule='evenodd'
                  d='M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z'
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
