"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { contactPageData, socialLinks } from "@/data/siteData";
import Footer2 from "@/component/Footer2";

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Build mailto link as a simple contact method
    const subject = encodeURIComponent(
      `New Project: ${formData.projectType || "General Inquiry"}`,
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nProject Type: ${formData.projectType}\nBudget: ${formData.budget}\n\n${formData.message}`,
    );
    window.location.href = `mailto:${contactPageData.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-[#F1F1F1]">
      {/* Header */}
      <div
        ref={headerRef}
        className="max-w-[1200px] mx-auto pt-32 pb-16 px-6 md:px-16 text-center"
      >
        <p className="text-xs uppercase tracking-widest text-[#4E94C2] mb-3">
          Get in Touch
        </p>
        <h1 className="text-5xl md:text-7xl font-bold text-[#121212] leading-[0.95] tracking-[-0.04em] max-w-3xl mx-auto">
          {contactPageData.headline}
        </h1>
        <p className="mt-6 text-lg text-[#121212]/60 max-w-xl mx-auto">
          {contactPageData.subtext}
        </p>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 md:px-16 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="lg:col-span-3 space-y-8"
          >
            {/* Name & Email */}
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

            {/* Project Type & Budget */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-mono text-[#121212]/40 tracking-widest uppercase mb-2">
                  Project Type
                </label>
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full px-0 py-3 bg-transparent border-b-2 border-[#121212]/10 focus:border-[#4E94C2] outline-none text-[#121212] text-lg transition-colors appearance-none cursor-pointer"
                >
                  <option value="">Select a type</option>
                  {contactPageData.projectTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs font-mono text-[#121212]/40 tracking-widest uppercase mb-2">
                  Budget Range
                </label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-0 py-3 bg-transparent border-b-2 border-[#121212]/10 focus:border-[#4E94C2] outline-none text-[#121212] text-lg transition-colors appearance-none cursor-pointer"
                >
                  <option value="">Select a range</option>
                  {contactPageData.budgetRanges.map((range) => (
                    <option key={range} value={range}>
                      {range}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Message */}
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

            {/* Submit */}
            <button
              type="submit"
              className="px-10 py-4 bg-[#121212] text-white rounded-full font-bold text-lg hover:bg-[#4E94C2] transition-colors duration-300 cursor-pointer"
            >
              Send Message
            </button>
          </form>

          {/* Sidebar Info */}
          <div className="lg:col-span-2 space-y-12">
            {/* Direct Contact */}
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

            {/* Location */}
            <div>
              <p className="text-xs uppercase tracking-widest text-[#4E94C2] mb-3">
                Location
              </p>
              <p className="text-lg text-[#121212]">
                {contactPageData.location}
              </p>
            </div>

            {/* Availability */}
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

            {/* Socials */}
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
