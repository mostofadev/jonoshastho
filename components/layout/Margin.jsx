import React from "react";

function MarginSection({ children }) {
  return (
    <div
      className="mx-auto px-0 sm:px-6 lg:px-8"
      style={{ maxWidth: "125rem" }} 
    >
      {children}
    </div>
  );
}

export default MarginSection;
