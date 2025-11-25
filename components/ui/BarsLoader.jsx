"use client";

import { useState, useEffect } from "react";

export default function Loader({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
        {/* Smooth loader bars */}
        <div className="flex gap-2">
          {[0,1,2,3].map((i) => (
            <div
              key={i}
              className="w-3 h-10 bg-[var(--color-primary)] rounded-sm animate-bounce"
              style={{ animationDelay: `${i*0.2}s` }}
            />
          ))}
        </div>
      </div>
    );
  }

  return children;
}
