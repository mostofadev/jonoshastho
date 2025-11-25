"use client";
import Link from "next/link";

function LinkButton({ 
  label = "Join as Volunteer", 
  href = "/volunteer" 
}) {
  return (
    <Link
      href={href}
      className="
        inline-block
        px-6 
        py-3 
        bg-[var(--color-primary)] 
        hover:bg-teal-600 
        rounded-lg 
        font-semibold 
        text-white
        transition
      "
    >
      {label}
    </Link>
  );
}

export default LinkButton;
