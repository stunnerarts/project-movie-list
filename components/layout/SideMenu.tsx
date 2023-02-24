import React, { useState } from "react";
import {
  FaBars,
  FaUser,
  FaCog,
  FaSignOutAlt,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import { IoMdMoon, IoMdSunny, IoMdClose, IoMdMenu } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { IconContext } from "react-icons";
import { FaFire, FaThemeco, FaRegMoon, FaRegSun } from "react-icons/fa";

type Props = {
  icon?: () => {};
  text?: string;
};

const SideMenu = (props: Props) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const user = "John Doe";

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleProfileDropdown = () => {
    setShowProfileDropdown(!showProfileDropdown);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const logout = () => {
    // TODO: Implement logout functionality
  };
  const Divider = () => <hr className="sidebar-hr" />;
  return (
    <div
      className="fixed z-99 top-0 left-0 h-screen w-16 flex flex-col
    text-white  bg-gradient-to-b from-slate-900 to-indigo-900  dark::bg-gray-100 shadow-lg"
    >
      <div className="menu-icon disable mb-0" onClick={toggleMenu}>
        {showMenu ? (
          <SideBarIcon icon={<IoMdMenu size="28" />} text="Expand Menu" />
        ) : (
          <SideBarIcon icon={<IoMdClose size="28" />} text="Collaspe Menu" />
        )}
      </div>
      {/* <Divider /> */}

      {isDarkMode ? (
        <SideBarIcon
          icon={<FaSun size="32" onClick={toggleTheme} />}
          text="Light Theme"
        />
      ) : (
        <SideBarIcon
          icon={<FaMoon size="32" onClick={toggleTheme} />}
          text="Dark Theme"
        />
      )}

      {/* <Divider /> */}

      <div className="sidebar">
        <IconContext.Provider value={{ className: "sidebar-icon" }}>
          {/* <div className="menu-icon disable mb-0" onClick={toggleMenu}>
          {showMenu ? (
            <IoMdMenu  className="hamburger-icon-expanded" />
          ) : (
            <IoMdClose className="hamburger-icon-collapsed" />
          )}
        </div> */}
          {/* <div className="theme-toggle hidden" onClick={toggleTheme}>
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </div> */}
          <div className="profile hidden">
            <div className="profile-button" onClick={toggleProfileDropdown}>
              <FaUser />
            </div>
            {showProfileDropdown && (
              <div className="profile-dropdown">
                <div className="profile-dropdown-item">
                  <FaCog />
                  <span>Edit Profile</span>
                </div>
                <div className="profile-dropdown-item">{user}</div>
                <div className="profile-dropdown-item" onClick={logout}>
                  <FaSignOutAlt />
                  <span>Logout</span>
                </div>
              </div>
            )}
          </div>
        </IconContext.Provider>
        {showMenu && (
          <ul className="menu hidden">
            <li>Menu Item 1</li>
            <li>Menu Item 2</li>
            <li>Menu Item 3</li>
          </ul>
        )}
      </div>
    </div>
  );
};
const SideBarIcon = ({ ...props }) => (
  <div className="sidebar-icon group">
    {props.icon}
    <span className="sidebar-tooltip group-hover:scale-100 z-99">
      {props.text}
    </span>
  </div>
);
export default SideMenu;
