'use client'

import Image from "next/image";

export function SocialProof() {
  return (
    <section className="self-stretch py-16 flex flex-col justify-center items-center gap-6 overflow-hidden">
      {/* <div className="text-center text-gray-300 text-sm font-medium leading-tight">
        Trusted by fast-growing startups
      </div> */}
      {/* <div className="self-stretch grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
        {Array.from({ length: 8 }).map((_, i) => (
          <Image
            key={i}
            src={`/logos/logo0${i + 1}.svg`}
            alt={`Company Logo ${i + 1}`}
            width={400}
            height={120}
            className="w-full max-w-[400px] h-auto object-contain grayscale opacity-70"
          />
        ))}
      </div> */}

      <button
        onClick={() => {
          const targetElement = document.getElementById("features-section");
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
          }
        }}
        className="group relative w-14 h-14 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 transition"
      >
        {/* Pulse Ring 1 */}
        <span className="absolute inset-0 rounded-full animate-[ping_2s_ease-in-out_infinite] bg-white/10"></span>

        {/* Pulse Ring 2 */}
        <span className="absolute inset-0 rounded-full animate-[ping_3s_linear_infinite] bg-white/5"></span>

        {/* Chevron Icon */}
        <svg
          className="w-6 h-6 text-white/90 group-hover:translate-y-1 transition-transform duration-300"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
    </section>
  );
}
