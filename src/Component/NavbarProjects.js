import React, { Suspense, useState } from "react";
import DropdownProject from "./DropdownProject";
import DropdownCV from "./DropdownCV";
import DropdownTraduction from "./DropdownTraduction";

// Traduction
import { Loader } from "./ComponentTraduction";
import { withTranslation } from "react-i18next";

const NavbarProjectsT = ({ t }) => {
  const [showNavbarBool, setShowNavbarBool] = useState(false);

  const handleNavbarBtnClick = () => {
    setShowNavbarBool(!showNavbarBool);
  };

  return (
    <div>
      <button className="btnNavbarProjects" onClick={handleNavbarBtnClick}>
        <h5 id="navbarHomeBtn" className="sizeCategoryProjectGames fontsBold">
          Navbar
        </h5>
      </button>
      <div
        style={{
          opacity: showNavbarBool ? 1 : 0,
          visibility: showNavbarBool ? "visible" : "hidden",
          maxHeight: showNavbarBool ? "200px" : "0",
          transition: "all 0.5s ease-in-out",
        }}
        className="dropdown-content-NProjects overflowNavbarProjects"
      >
        <ul className="dropdownProjectPadding">
          <DropdownTraduction />
        </ul>
        <ul className="backgroundUnderCategory">
          <a href="/" className="noColorNavbar fontsBold">
            {t("ClassicNavBar.Home")}
          </a>
        </ul>
        <ul className="dropdownProjectPadding">
          <DropdownProject />
        </ul>
        <ul className="dropdownProjectPadding">
          <DropdownCV />
        </ul>
        <ul className="backgroundUnderCategory">
          <a href="contactme" className="noColorNavbar fontsBold">
            {t("ClassicNavBar.ContactMe")}
          </a>
        </ul>
      </div>
    </div>
  );
};

const TranslatedNavbarProjects = withTranslation()(NavbarProjectsT);

export default function NavbarProjects() {
  return (
    <Suspense fallback={<Loader />}>
      <TranslatedNavbarProjects />
    </Suspense>
  );
}