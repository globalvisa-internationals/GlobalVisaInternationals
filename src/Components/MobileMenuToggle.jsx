// src/Components/MobileMenuToggle.jsx
"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import NavBar from "./NavBar";

export default function MobileMenuToggle() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const navRef = useRef(null);

    // Toggle mobile menu
    const toggleMenu = useCallback(() => setMenuOpen(prev => !prev), []);

    // Toggle dropdown for mobile
    const handleSubmenuToggle = (menu) => {
        setOpenDropdown(prev => (prev === menu ? null : menu));
    };

    // Close menus on link click
    const handleLinkClick = () => {
        setMenuOpen(false);
        setOpenDropdown(null);
    };

    // Close menus when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setMenuOpen(false);
                setOpenDropdown(null);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <NavBar
            menuOpen={menuOpen}
            openDropdown={openDropdown}
            navRef={navRef}
            toggleMenu={toggleMenu}
            handleSubmenuToggle={handleSubmenuToggle}
            handleLinkClick={handleLinkClick}
        />
    );
}
