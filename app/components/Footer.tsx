"use client";

import React from "react";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Youtube, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#F0F8FF] px-6 pt-16 pb-8">
      <div className="max-w-6xl mx-auto">

        {/* TOP FOOTER */}
        <div className="grid gap-10 md:grid-cols-5">

          {/* Logo */}
          <div className="md:col-span-1">
            <Image src="/PodTrust-Logo2.png" alt="podtrust logo" width={121} height={53}/>
          </div>

          {/* Column 1 */}
          <div className="space-y-3 text-gray-700">
            <p className="font-semibold text-gray-900">Company</p>
            <ul className="space-y-2 text-sm">
              <li>About Us</li>
              <li>Services</li>
              <li>Support</li>
              <li>Privacy Policy</li>
              <li>Terms of Use</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="space-y-3 text-gray-700">
            <p className="font-semibold text-gray-900">Resources</p>
            <ul className="space-y-2 text-sm">
              <li>Contact Us</li>
              <li>Blog</li>
              <li>FAQs</li>
              <li>Testimonials</li>
              <li>Careers</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="space-y-3 text-gray-700">
            <p className="font-semibold text-gray-900">Explore</p>
            <ul className="space-y-2 text-sm">
              <li>Contact Us</li>
              <li>Blog</li>
              <li>FAQs</li>
              <li>Testimonials</li>
              <li>Careers</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="text-sm text-gray-700 space-y-3">
            <p className="font-semibold text-gray-900">Contact</p>
            <p>officiapodtrust@gmail.com</p>
            <p>+234 701 848 5261</p>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 my-10" />

        {/* BOTTOM FOOTER */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          <p className="text-sm text-gray-600">
            © 2025 PodTrust. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            

          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;