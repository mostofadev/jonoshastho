"use client";

import { useState, useEffect } from "react";
import Footer from "./Footer";

export default function FooterWrapper() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setMounted(true), 0); 
    return () => clearTimeout(id);
  }, []);

  if (!mounted) return null;

  return <Footer />;
}
