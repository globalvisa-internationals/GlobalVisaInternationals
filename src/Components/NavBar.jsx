"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import styles from "./NavBar.module.css";

const NAV_ITEMS = [
  { title: "TOURIST VISA", path: "tourist-visa", countries: ["Canada", "Australia", "USA", "United-Kingdom", "Europe", "Schengen", "Japan", "Dubai", "New-Zealand", "Singapore", "China"] },
  { title: "STUDENT VISA", path: "student-visa", countries: ["Canada", "Australia", "USA", "UK", "Europe", "New-Zealand"] },
  { title: "BUSINESS VISA", path: "business", countries: ["Canada", "Australia", "UK", "Europe", "New-Zealand"] },
  { title: "PERMANENT RESIDENCY (PR)", path: "permanent-residency-visa", countries: ["Canada-PR-Visa", "Australia-PR-Visa"] },
  // { title: "WORK", path: "work", countries: ["Canada", "Australia", "UK", "Europe", "New-Zealand"] },
  { title: "REFUSAL VISA", path: "refusal-visa", countries: ["Canada", "Australia", "USA", "UK", "Europe", "New-Zealand"] },
];

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const navRef = useRef(null);

  // Toggle mobile menu
  const toggleMenu = useCallback(() => setMenuOpen((prev) => !prev), []);

  // Handle submenu toggle for mobile
  const handleSubmenuToggle = (menu) => {
    setOpenDropdown((prev) => (prev === menu ? null : menu));
  };
  const handleLinkClick = () => {
    setMenuOpen(false);
    setOpenDropdown(null);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMenuOpen(false);
        setOpenDropdown(null);
      }
      // Close menu + dropdowns on link click


    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className={styles.navContainer} ref={navRef}>
      <nav className={styles.navBar} aria-label="Main Navigation">
        {/* Logo */}
        <Link href="/" className={styles.logoLink}>
          <Image
            className={styles.logo}
            src="/Global-Visa-Internationals-Logo.svg"
            alt="Global Visa Internationals Logo"
            width={120}
            height={40}
            priority
          />
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className={clsx(styles.menu, { [styles.menuOpen]: menuOpen })}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Navigation Links */}
        <ul className={clsx(styles.navLinks, { [styles.showMenu]: menuOpen })}>

          <li><Link href="/about-us" title="ABOUT US" onClick={handleLinkClick} >ABOUT</Link></li>

          {/* Dropdown Menus */}
          {NAV_ITEMS.map(({ title, path, countries }) => (
            <li
              key={title}
              className={styles.submenuContainer}
              onMouseEnter={() => window.innerWidth > 768 && setOpenDropdown(title)}
              onMouseLeave={() => window.innerWidth > 768 && setOpenDropdown(null)}
            >
              <button
                className={styles.submenuToggle}
                aria-expanded={openDropdown === title}
                onClick={() => handleSubmenuToggle(title)}
                title={`${title} VISA`}
              >
                {title} <FaChevronDown className={clsx(styles.dropdownIcon, { [styles.rotate]: openDropdown === title })} />
              </button>
              <ul className={clsx(styles.submenu, { [styles.submenuOpen]: openDropdown === title })}>
                {countries.map((country) => (
                  <li key={country}>
                    <Link href={`/Visa/${path}/${country.toLowerCase()}`} title={`${title} Visa for ${country}`} onClick={handleLinkClick}>
                      {country.replace("-", " ")}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}

          <li><Link href="/blog" title="BLOG" onClick={handleLinkClick}>BLOG</Link></li>
          <li><Link href="/career" title="CAREER" onClick={handleLinkClick}>CAREER</Link></li>
          {/* <li><Link href="/UAE-Career" title="UAE-Career">UAE-Career</Link></li> */}
          <li><Link href="/contact" title="CONTACT-US" onClick={handleLinkClick}>CONTACT</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
