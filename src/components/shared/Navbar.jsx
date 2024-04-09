import DashboardRoute from "../navbar/DashboardRoute";
import NavLink from "../navbar/NavLink";
import ProfileDropdown from "../navbar/ProfileDropdown";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink
          href="/"
        >
          HOME
        </NavLink>
      </li>
      <li>
        <NavLink
          href="/about"
        >
          ABOUT US
        </NavLink>
      </li>
      <li>
        <NavLink
          href="/ourWorks"
        >
          OUR WORK
        </NavLink>
      </li>
      <DashboardRoute/>
    </>
  );

  return (
    <div
      className={`md:pl-5 navbar z-50  
        "bg-white opacity-95"
        w-full flex justify-center bg-gradient-to-b from-[#c2c1c9] to-[#f2f2f2]`}
    >
      <div className="md:hidden w-full md:w-1/4">
        <div className="dropdown">
          <label
            tabIndex={0}
            className="btn btn-outline border-none hover:bg-transparent lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-5 w-5 z-50 text-[#8A8B8C]`}
              fill="none"
              viewBox="0 0 20 20"
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
            className="menu menu-sm absolute dropdown-content mt-3 z-[50] p-2 shadow bg-[#0B0633] bg-opacity-60 rounded-md w-52 text-[#fff]"
          >
            {navLinks}
          </ul>
        </div>
        <div className="flex items-center gap-2"></div>
      </div>
      <div className="">
        <div className=" hidden lg:flex justify-center items-center">
          <ul className="menu menu-horizontal text-black">{navLinks}</ul>
        </div>
        <ProfileDropdown/>
      </div>
    </div>
  );
};

export default Navbar;
