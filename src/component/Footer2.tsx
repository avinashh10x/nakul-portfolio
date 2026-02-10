import React from "react";
import {
  personalInfo,
  socialLinks,
  footerMenus,
  footerData,
} from "@/data/siteData";

function Footer2() {
  return (
    <footer className="relative w-full">
      {/* Video background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div
          className="absolute inset-0 z-10 bg-gradient-to-b from-white via-white/70 to-transparent"
          style={{ height: "40%" }}
        />
        <video
          src={footerData.videoUrl}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content overlay */}
      <div className="relative z-20 px-8 md:px-16 pt-32 pb-6 flex flex-col min-h-[320px] justify-between">
        {/* Main footer content */}
        <div className="flex flex-wrap gap-y-10 justify-between text-[#ffffff]">
          {/* Left: Name, tagline, socials */}
          <div className="flex flex-col gap-3 min-w-[200px]">
            <h4 className="text-sm font-semibold tracking-wide">
              {personalInfo.name}
            </h4>
            <p className="text-xs leading-relaxed">
              {personalInfo.tagline.map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  {i < personalInfo.tagline.length - 1 && <br />}
                </React.Fragment>
              ))}
            </p>
            <div className="flex gap-3 mt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  className="transition-colors"
                  aria-label={social.label}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d={social.iconPath} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Menu columns */}
          {footerMenus.map((menu) => (
            <div key={menu.title} className="flex flex-col gap-2 min-w-[120px]">
              <h4 className="text-xs font-semibold tracking-wide mb-1">
                {menu.title}
              </h4>
              {menu.links.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  className="text-xs transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          ))}

          {/* Contact Me */}
          <div className="flex flex-col gap-2 min-w-[180px]">
            <h4 className="text-xs font-semibold tracking-wide mb-1">
              Contact Me
            </h4>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-xs transition-colors flex items-center gap-1.5"
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              {personalInfo.email}
            </a>
            <a
              href={`tel:${personalInfo.phone.replace(/\s/g, "")}`}
              className="text-xs transition-colors flex items-center gap-1.5"
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              {personalInfo.phone}
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-12">
          <p className="text-xs">{footerData.copyright}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer2;
