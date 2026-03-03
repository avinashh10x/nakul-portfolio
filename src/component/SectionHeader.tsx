"use client";
import React from "react";

interface SectionHeaderProps {
  heading?: React.ReactNode;
  label?: string;
  subheading?: string;
  as?: "h1" | "h2" | "h3";
  className?: string;
  subheadingClassName?: string;
}

const SectionHeader = React.forwardRef<HTMLDivElement, SectionHeaderProps>(
  (
    {
      label,
      heading,
      subheading,
      as: Tag = "h2",
      className = "",
      subheadingClassName,
    },
    ref,
  ) => {
    return (
      <div ref={ref} className={`text-center ${className}`}>
        {label && (
          <p className="text-xs uppercase tracking-widest text-[#4E94C2] mb-3">
            {label}
          </p>
        )}
        {heading && (
          <Tag className="text-5xl md:text-7xl font-bold text-[#121212] leading-[0.95] tracking-[-0.04em]">
            {heading}
          </Tag>
        )}
        {subheading && (
          <p
            className={`text-lg max-w-xl mx-auto mt-4 ${subheadingClassName ?? "text-[#121212]/60"}`}
          >
            {subheading}
          </p>
        )}
      </div>
    );
  },
);

SectionHeader.displayName = "SectionHeader";

export default SectionHeader;
