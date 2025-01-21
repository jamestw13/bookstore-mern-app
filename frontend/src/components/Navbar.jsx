import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMiniBars3CenterLeft, HiOutlineHeart, HiOutlineUser, HiOutlineShoppingCart } from 'react-icons/hi2';
import { IoSearchOutline } from 'react-icons/io5';
import avatarImg from '../assets/avatar.png';

const Navbar = () => {
  const currentUser = false;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const navigation = [
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Orders', href: '/orders' },
    { name: 'Cart Page', href: '/cart' },
    { name: 'Check Out', href: '/checkout' },
  ];

  return (
    <header className="max-w-screen-2xl mx-auto px-4 py-6 di">
      <nav className="flex justify-between items-center">
        {/* Left side */}
        <div className="flex items-center md:gap-16 gap-4">
          <Link to="/">
            <HiMiniBars3CenterLeft className="size-6" />
          </Link>

          {/* Search input */}
          <div className="relative sm:w-72 w-40 space-x-2">
            <IoSearchOutline className="absolute inline-block  left-3 inset-y-2" />
            <input
              type="text"
              placeholder="Search here"
              className="bg-[#EAEAEA] w-full py-1 md:px-8 px-6 rounded-md focus:outline-none"
            />
          </div>
        </div>
        {/* Right side */}
        <div className="relative flex items-center md:space-x-3 space-x-2">
          <div>
            {currentUser ? (
              <>
                <button
                  onClick={() => {
                    setIsDropdownOpen(x => !x);
                  }}
                >
                  <img src={avatarImg} className={`size-7 rounded-full ${currentUser ? 'ring-2 ring-blue-500' : ''}`} />
                </button>
                {/* Show dropdown */}
                {isDropdownOpen && (
                  <div className="absolute mt-2 right-0 w-48 bg-white shadow-lg rounded-md z-40">
                    <ul className="py-2">
                      {navigation.map((item, i) => (
                        <li key={i} className="py-2">
                          <Link
                            to={item.href}
                            onClick={() => {
                              setIsDropdownOpen(false);
                            }}
                            className="block px-4 py-2 text-sm hover:bg-gray-100"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </>
            ) : (
              <Link to="/login">
                <HiOutlineUser className="size-6" />
              </Link>
            )}
          </div>
          <button className="hidden sm:block">
            <HiOutlineHeart className="size-6" />
          </button>
          <Link to="/cart" className="bg-primary p-1 sm:px-6 px-2 flex items-center rounded-sm">
            <HiOutlineShoppingCart />
            <span className="text-sm font-semibold sm:ml-1">0</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
