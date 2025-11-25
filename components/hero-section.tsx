import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HeroSection() {
  return (
    <section
      className="flex flex-col items-center text-center relative mx-auto rounded-2xl overflow-hidden my-6 py-0 px-4
         w-full sm:mb-12 md:px-0"
    >
      <div className="relative z-10 space-y-4 md:space-y-5 lg:space-y-6 mb-6 md:mb-7 lg:mb-9 max-w-md md:max-w-[500px] lg:max-w-[799px] mt-16 md:mt-[120px] lg:mt-[160px] px-4 mx-auto">
        <h1 className="text-foreground text-3xl md:text-4xl lg:text-7xl font-semibold leading-tight">
          Intelligence for Every Classroom
        </h1>
        <p className="text-muted-foreground text-base md:text-base lg:text-lg font-medium leading-relaxed max-w-lg mx-auto">
          The ultimate all-in-one platform for schools, colleges, and
          universities. Transform your institution with AI-powered management
          and seamless digital experiences.{" "}
        </p>
      </div>

      <Link
        href="/contact"
        // target="_blank"
        rel="noopener noreferrer"
      >
        <Button className="relative z-10 bg-secondary text-secondary-foreground hover:bg-secondary/90 px-8 py-3 rounded-full font-medium text-base shadow-lg ring-1 ring-white/10">
          Contact Us
        </Button>
      </Link>
    </section>
  );
}
