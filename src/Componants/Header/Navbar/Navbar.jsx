import { NavLink } from "react-router-dom";


const Navbar = () => {
    const links = (
        <>
          <li>
          <NavLink to='/' 
            className={({ isActive }) =>
            isActive ? "text-[#FF444A]  border-b-[#FF444A]" : ""
          }
          >Home</NavLink>
          </li>
          <li>
          <NavLink to='/donation' className={({ isActive }) =>
            isActive ? "text-[#FF444A]  border-b-[#FF444A]" : ""
          }>Donation</NavLink>
          </li>
          <li>
          <NavLink to='/statistics' className={({ isActive }) =>
            isActive ? "text-[#FF444A]  border-b-[#FF444A]" : ""
          }>Statistics</NavLink>
          </li>
    
          
        </>
      );
    return (
        <div className="max-w-screen-xl mx-auto mt-10 ">
            <div className="navbar flex justify-between item-center  bg-base-100">
        <div className=" flex justify-between items-center">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm text-xl font-medium dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          <div><img src="Logo.png" alt=""  className=" "/></div>
        </div>
        <div className="justify-between items-center hidden md:flex">
          <ul className="menu text-2xl font-medium  menu-horizontal px-1">
           {links}
          </ul>
        </div>
       
      </div>
        </div>
    );
};

export default Navbar;