import React from "react";
import Image from "next/image";
import { MenuIcon } from "lucide-react";

const Navbar = async () => {
  return (
    <header className="fixed font-dm right-0 left-0 top-0 pb-4 pt-8 px-8 bg-[#fbfbfd]  z-[100] flex items-center border-b-[2px] border-[#F1F1F1] justify-between">
      <aside className="flex items-center gap-[2px]">
        <p className="text-2xl font-bold">BlankBullet</p>
      </aside>
      <nav className="absolute left-[50%] top-[60%] transform translate-x-[-50%] translate-y-[-50%] hidden md:block">
        <ul className="flex items-center gap-8 list-none">
          {["Quantity", "Pricing", "Clients", "Bento", "Docs", "Contact"].map(
            (text) => (
              <li key={text}>
                <button className="text_button">
                  <span className="span-mother">
                    {[...text].map((char, index) => (
                      <span key={index}>{char}</span>
                    ))}
                  </span>
                  <span className="span-mother2">
                    {[...text].map((char, index) => (
                      <span key={index}>{char}</span>
                    ))}
                  </span>
                </button>
              </li>
            )
          )}
        </ul>
      </nav>
      <aside className="flex justify-end items-center gap-4">
        <a
          href="/dashboard"
          className="relative inline-flex h-12 overflow-hidden rounded-full p-[4px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
          <span className="absolute inset-[-100%] animate-[spin_1s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#908894_0%,#edeceb_50%,#908894_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-4 py-2 text-sm font-medium text-white backdrop-blur-3xl">
            {true ? "Dashboard" : "Get Started"}
          </span>
        </a>
      </aside>
      <MenuIcon className="md:hidden" />
    </header>
  );
};

export default Navbar;
