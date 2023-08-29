import React from "react";
import { AiFillHome } from "react-icons/ai";
import { BsTools } from "react-icons/bs";

function Navigation() {
  const [settingDropdown, setSettingDropdown] = React.useState(false);

  const handleSettingDropdown = () => settingDropdown(!settingDropdown);
  return (
    <>
      <nav className="py-4 bg-tm-gradient max-h-full min-h-full h-[calc(100vh_-_66px)] lg:h-[70vh] overflow-y-auto custom__scroll">
        <ul>
          <li className="nav__link">
            <a href="#">
              <AiFillHome />
              Home
            </a>
          </li>
          <li className="nav__link">
            <a href="#">
              <BsTools />
              Tools
            </a>
          </li>
          <li className="nav__link">
            <a href="#">Time Entry</a>
          </li>
          <li className="nav__link">
            <a href="#">Staff</a>
          </li>
          <li className="nav__link">
            <a href="#">Client</a>
          </li>
          <li className="nav__link">
            <button onClick={handleSettingDropdown}>Settings</button>
            <ul className="ml-9">
              <li>
                <a href="#" className="dropdown__link">
                  Access Level
                </a>
              </li>
              <li>
                <a href="#" className="dropdown__link">
                  Users
                </a>
              </li>
              <li>
                <a href="#" className="dropdown__link">
                  Activities
                </a>
              </li>
              <li>
                <a href="#" className="dropdown__link">
                  Rates
                </a>
              </li>
              <li>
                <a href="#" className="dropdown__link">
                  Engagements
                </a>
              </li>
              <li>
                <a href="#" className="dropdown__link">
                  Offices
                </a>
              </li>
              <li>
                <a href="#" className="dropdown__link">
                  Departments
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navigation;
