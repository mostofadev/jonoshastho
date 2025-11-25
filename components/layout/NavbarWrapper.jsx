"use client";

import { useState, useEffect } from "react";
import Navbar from "./Navbar";

export default function NavbarWrapper() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setMounted(true), 0); 
    return () => clearTimeout(id);
  }, []);

  if (!mounted) return null;

  return <Navbar />;
}
