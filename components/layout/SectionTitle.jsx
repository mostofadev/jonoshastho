// import React from "react";

// function SectionTitle({ Title, description, center = false }) {
//   return (
//     <div
//       className={`${
//         center ? "text-center" : "text-left"
//       } w-full max-w-3xl  my-10`}
//     >
//       <h2
//         className={`text-4xl md:text-5xl font-extrabold tracking-tight mb-4 ${
//           center ? "mx-auto" : ""
//         }`}
//       >
//         <span className="border-l-[4px] border-[var(--color-primary)] pl-4">
//           {Title}
//         </span>
//       </h2>

//       {description && (
//         <p className="text-base md:text-lg text-gray-600 leading-relaxed">
//           {description}
//         </p>
//       )}
//     </div>
//   );
// }

// export default SectionTitle;


import React from 'react'

function SectionTitle({
  Title,
  description,
}) {
  return (
    <div>
      <div className="text-center">
        <p className="text-md text-[var(--text-color)] font-medium uppercase my-2">{Title}</p>
        <h2 className="text-3xl text-[var(--text-color)] font-medium uppercase my-3">{description}</h2>
      </div>
    </div>
  )
}

export default SectionTitle