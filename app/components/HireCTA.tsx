"use client";

import { useState } from "react";
import HireUsModal from "./HireUsModal";

export default function HireCTA() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="
          cursor-pointer
          w-full h-full border-6 border-blue-600
          bg-blue-600 py-4
          text-2xl font-semibold uppercase tracking-wide text-white
          transition-all duration-200
          hover:bg-white hover:text-blue-600
        "
      >
        Do you want to hire developers?
      </button>

      {isOpen && <HireUsModal onClose={() => setIsOpen(false)} />}
    </>
  );
}
