"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { contactPageData, socialLinks } from "@/data/siteData";
import SectionHeader from "@/component/SectionHeader";
import Footer2 from "@/component/Footer2";

interface CustomSelectProps {
  label: string;
  name: string;
  value: string;
  options: string[];
  placeholder: string;
  onChange: (name: string, value: string) => void;
}

function CustomSelect({ label, name, value, options, placeholder, onChange }: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={containerRef}>
      <label className="block text-xs font-mono text-[#121212]/40 tracking-widest uppercase mb-2">
        {label}
      </label>
      
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full px-0 py-3 bg-transparent border-b-2 transition-colors duration-300 cursor-pointer flex justify-between items-center group ${
          isOpen ? "border-[#4E94C2]" : "border-[#121212]/10 hover:border-[#4E94C2]/50"
        } ${value ? "text-[#121212]" : "text-[#121212]/40"}`}
      >
        <span className="text-lg select-none">{value || placeholder}</span>
        <div className={`transition-transform duration-300 ${isOpen ? "rotate-180 text-[#4E94C2]" : "text-[#121212]/20 group-hover:text-[#121212]/40"}`}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>
      </div>

      {/* Dropdown Menu */}
      <div 
        className={`absolute z-50 w-full mt-3 bg-white/95 backdrop-blur-xl rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-[#121212]/5 overflow-hidden transition-all duration-300 origin-top ${
          isOpen ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <ul className="max-h-64 overflow-y-auto py-2">
          {options.map((opt) => (
            <li
              key={opt}
              onClick={() => {
                onChange(name, opt);
                setIsOpen(false);
              }}
              className={`px-5 py-3.5 text-base cursor-pointer transition-all duration-200 ${
                value === opt 
                  ? "bg-[#4E94C2]/10 text-[#4E94C2] font-semibold pl-6" 
                  : "text-[#121212]/80 hover:bg-[#121212]/5 hover:text-[#121212] hover:pl-6"
              }`}
            >
              {opt}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function ContactPage() {
  const headerRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
      gsap.from(formRef.current, {
        y: 40,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
      });
    });
    return () => ctx.revert();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    // Replace this string with your Google Apps Script Web App URL later
    const scriptUrl = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || "";

    if (!scriptUrl) {
      // Fallback: Opens email client if Google Sheet is not connected yet
      const subject = encodeURIComponent(
        `New Project: ${formData.projectType || "General Inquiry"}`,
      );
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nProject Type: ${formData.projectType}\nBudget: ${formData.budget}\n\n${formData.message}`,
      );
      window.location.href = `mailto:${contactPageData.email}?subject=${subject}&body=${body}`;
      setIsSubmitting(false);
      return;
    }

    try {
      const searchParams = new URLSearchParams();
      Object.entries(formData).forEach(([key, value]) => {
        searchParams.append(key, value);
      });

      // Post to Google Apps Script
      await fetch(scriptUrl, {
        method: "POST",
        body: searchParams,
        mode: "no-cors", // Crucial for Google Apps Script to work from localhost/browsers directly
      });

      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        projectType: "",
        budget: "",
        message: "",
      });
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch (error) {
      console.error(error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <SectionHeader
        ref={headerRef}
        label="Contact"
        heading={contactPageData.headline}
        subheading={contactPageData.subtext}
        as="h1"
        className="max-w-[1200px] mx-auto pt-32 pb-16 px-6 md:px-16"
      />

      <div className="max-w-[1200px] mx-auto px-6 md:px-16 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="lg:col-span-3 space-y-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-mono text-[#121212]/40 tracking-widest uppercase mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full px-0 py-3 bg-transparent border-b-2 border-[#121212]/10 focus:border-[#4E94C2] outline-none text-[#121212] text-lg transition-colors placeholder:text-[#121212]/20"
                />
              </div>
              <div>
                <label className="block text-xs font-mono text-[#121212]/40 tracking-widest uppercase mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="w-full px-0 py-3 bg-transparent border-b-2 border-[#121212]/10 focus:border-[#4E94C2] outline-none text-[#121212] text-lg transition-colors placeholder:text-[#121212]/20"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <CustomSelect
                label="Project Type"
                name="projectType"
                value={formData.projectType}
                options={contactPageData.projectTypes}
                placeholder="Select a type"
                onChange={(name, value) => setFormData({ ...formData, [name]: value })}
              />

              <CustomSelect
                label="Budget Range"
                name="budget"
                value={formData.budget}
                options={contactPageData.budgetRanges}
                placeholder="Select a range"
                onChange={(name, value) => setFormData({ ...formData, [name]: value })}
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-[#121212]/40 tracking-widest uppercase mb-2">
                Tell me about your project
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Describe your project, timeline, and any specific requirements..."
                className="w-full px-0 py-3 bg-transparent border-b-2 border-[#121212]/10 focus:border-[#4E94C2] outline-none text-[#121212] text-lg transition-colors resize-none placeholder:text-[#121212]/20"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-10 py-4 w-full md:w-auto rounded-full font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3 ${
                submitStatus === "success"
                  ? "bg-[#C4EF7A] text-[#121212]"
                  : submitStatus === "error"
                  ? "bg-red-500 text-white"
                  : "bg-[#121212] text-white hover:bg-[#4E94C2]"
              } ${isSubmitting ? "opacity-70 cursor-wait" : ""}`}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : submitStatus === "success" ? (
                "Message Sent!"
              ) : submitStatus === "error" ? (
                "Error! Try Again"
              ) : (
                "Send Message"
              )}
            </button>
          </form>

          <div className="lg:col-span-2 space-y-12">
            <div>
              <p className="text-xs uppercase tracking-widest text-[#4E94C2] mb-3">
                Direct Contact
              </p>
              <div className="space-y-3">
                <a
                  href={`mailto:${contactPageData.email}`}
                  className="block text-lg text-[#121212] hover:text-[#4E94C2] transition-colors"
                >
                  {contactPageData.email}
                </a>
                <p className="text-lg text-[#121212]/60">
                  {contactPageData.phone}
                </p>
              </div>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-[#4E94C2] mb-3">
                Location
              </p>
              <p className="text-lg text-[#121212]">
                {contactPageData.location}
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-[#4E94C2] mb-3">
                Availability
              </p>
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#C4EF7A] animate-pulse" />
                <p className="text-lg text-[#121212]">
                  {contactPageData.availability}
                </p>
              </div>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-[#4E94C2] mb-3">
                Follow Me
              </p>
              <div className="flex gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-[#121212]/5 hover:bg-[#121212] flex items-center justify-center transition-colors duration-300 group"
                  >
                    <svg
                      className="w-5 h-5 text-[#121212] group-hover:text-white transition-colors duration-300"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d={link.iconPath} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer2 />
    </div>
  );
}

export default ContactPage;
