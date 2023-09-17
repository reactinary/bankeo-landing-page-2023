import { useState } from "react";
import { navLinks } from "../constants";
import { close, logo, menu } from "../assets";



const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />
      <p className="font-poppins font-normal text-dimWhite text-[14px]">
          Made with ❤️ by Reactinary ⚛️
      </p>

      {/* ACTIVE LINK */}
      <ul className="list-none sm:flex   hidden   justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li key={nav.id} onClick={() => setActive(nav.title)}
              className={`font-poppins font-normal cursor-pointer text-[16px]
                ${ active === nav.title ? "text-white" : "text-dimWhite"}
                ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}>
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      {/* HAMBURGER MENU */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img src={toggle ? close : menu} alt="menu" className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}/>

        <div className={`${!toggle ? "hidden" : "flex"}
          p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li key={nav.id} onClick={() => setActive(nav.title)}
                    className={`font-poppins font-medium cursor-pointer text-[16px]
                    ${ active === nav.title ? "text-white" : "text-dimWhite"}
                    ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}>

                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;



/* NOTES:

❌ onClick={() => setToggle(!toggle)}
✅ onClick={() => setToggle((prev) => (!prev))}

*/
