"use client";

import { useState, useEffect } from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";

import Link from "next/link";
import { usePathname } from "next/navigation";
import MarginSection from "./Margin";
import Logo from "./Logo";

const navigation = [
  { name: "Home", to: "/", id: 1 },
  { name: "Find", to: "/find", id: 2 },
  { name: "About Us", to: "/about", id: 3 },
  { name: "Blog", to: "/blog", id: 4 },
  { name: "Contact Us", to: "/contact", id: 5 },
];

export default function Menu() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 70);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Disclosure
      as="nav"
      className={`
        w-full z-50 border-b border-gray-700/30 transition-all duration-500 ease-out
        ${
          isScrolled
            ? "fixed top-0 bg-white/10 backdrop-blur-lg shadow-xl text-[var(--text-one)]"
            : "relative bg-[var(--bg-one)] text-[var(--text-one)] shadow-md"
        }
      `}
    >
      <MarginSection>
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">

            {/* LEFT — LOGO */}
            <div className="flex-shrink-0">
              <Logo />
            </div>

            {/* RIGHT — DESKTOP MENU */}
            <div className="hidden lg:flex items-center space-x-1">
              {navigation.map((item) => {
                const isActive = pathname === item.to;
                return (
                  <Link
                    key={item.id}
                    href={item.to}
                    className={`
                      relative px-4 py-2.5 text-sm font-bold transition-all duration-300
                      ${
                        isActive
                          ? "text-[var(--primary-color)] border-b-2 border-white"
                          : "text-text-one"
                      }
                    `}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>

            {/* RIGHT — MOBILE MENU BUTTON */}
            <div className="flex items-center lg:hidden">
              <DisclosureButton className="inline-flex items-center justify-center p-3 rounded-full text-text-one hover:text-white hover:bg-gray-800/50 focus:outline-none transition-all duration-300">
                {({ open }) => (
                  <>
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <span className="block h-7 w-7 text-xl font-bold">X</span>
                    ) : (
                      <span className="block h-7 w-7 text-xl font-bold">
                        &#9776;
                      </span>
                    )}
                  </>
                )}
              </DisclosureButton>
            </div>

          </div>
        </div>

        {/* MOBILE MENU */}
        <DisclosurePanel className="lg:hidden transition-all duration-500 ease-[cubic-bezier(0.68,-0.6,0.32,1.6)]">
          <div className="px-2 pt-2 pb-4 space-y-1">
            {navigation.map((item) => {
              const isActive = pathname === item.to;
              return (
                <DisclosureButton
                  key={item.id}
                  as={Link}
                  href={item.to}
                  className={`
                    block px-4 py-3 rounded-lg text-base font-medium w-full text-left
                    transition-all duration-300
                    ${
                      isActive
                        ? "text-[var(--primary-color)] border-b-2 border-white"
                        : "text-text-one"
                    }
                  `}
                >
                  {item.name}
                </DisclosureButton>
              );
            })}
          </div>
        </DisclosurePanel>

      </MarginSection>
    </Disclosure>
  );
}
