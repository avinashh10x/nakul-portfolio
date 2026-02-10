"use client";
import React, { useState, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";

function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuItemsRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const isAnimating = useRef(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Works", href: "/work" },
    { name: "About me", href: "/about" },
    { name: "Contact me", href: "/contact" },
  ];

  const openMenu = useCallback(() => {
    if (isAnimating.current) return;
    isAnimating.current = true;
    setIsMenuOpen(true);

    // Wait for DOM to update
    setTimeout(() => {
      if (menuRef.current) {
        // Animate menu container
        gsap.fromTo(
          menuRef.current,
          { opacity: 0, scale: 0.95 },
          { opacity: 1, scale: 1, duration: 0.3, ease: "power2.out" },
        );

        // Animate menu items with stagger
        gsap.fromTo(
          menuItemsRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            stagger: 0.08,
            ease: "power3.out",
            onComplete: () => {
              isAnimating.current = false;
            },
          },
        );
      }
    }, 10);
  }, []);

  const closeMenu = useCallback(() => {
    if (isAnimating.current || !menuRef.current) return;
    isAnimating.current = true;

    // Animate menu items out with reverse stagger
    gsap.to(menuItemsRef.current, {
      opacity: 0,
      y: -30,
      duration: 0.3,
      stagger: 0.05,
      ease: "power2.in",
    });

    // Animate menu container out
    gsap.to(menuRef.current, {
      opacity: 0,
      scale: 0.95,
      duration: 0.3,
      delay: 0.2,
      ease: "power2.in",
      onComplete: () => {
        setIsMenuOpen(false);
        isAnimating.current = false;
      },
    });
  }, []);

  const toggleMenu = () => {
    if (isMenuOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  const handleLinkClick = () => {
    closeMenu();
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden md:block">
        <div className="flex items-center gap-2 bg-white/30 backdrop-blur-sm rounded-3xl px-3 py-2 shadow-lg border-2 border-gray-200/90">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`
                  px-6 py-2 rounded-2xl text-xs font-medium transition-all duration-300
                  ${
                    isActive
                      ? "bg-[#1a1a1a] text-white shadow-md"
                      : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  }
                `}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Mobile Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="fixed top-6 right-6 z-50 md:hidden bg-white/30 backdrop-blur-sm rounded-2xl p-3 shadow-lg border-2 border-gray-200/90"
        aria-label="Toggle menu"
      >
        <div className="w-6 h-5 flex flex-col justify-between">
          <span
            className={`block h-0.5 bg-gray-800 transition-all duration-300 origin-center ${
              isMenuOpen ? "rotate-45 translate-y-[9px]" : ""
            }`}
          />
          <span
            className={`block h-0.5 bg-gray-800 transition-all duration-300 ${
              isMenuOpen ? "opacity-0 scale-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 bg-gray-800 transition-all duration-300 origin-center ${
              isMenuOpen ? "-rotate-45 -translate-y-[9px]" : ""
            }`}
          />
        </div>
      </button>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="fixed inset-0 z-40 md:hidden bg-[#4E94C2]/98 backdrop-blur-lg"
        >
          <div className="flex flex-col items-center justify-center h-full gap-8 px-6">
            {navItems.map((item, index) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  ref={(el) => {
                    menuItemsRef.current[index] = el;
                  }}
                  onClick={handleLinkClick}
                  className={`
                    text-4xl font-bold transition-colors duration-300
                    ${
                      isActive ? "text-white" : "text-white/70 hover:text-white"
                    }
                  `}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
