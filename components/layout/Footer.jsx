"use client";

import React from "react";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* About */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Jono Shato Foundation</h2>
          <p className="text-gray-400">
            Improving community health, education, and well-being through humanitarian programs.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <Link href="#"><FaFacebookF className="hover:text-blue-500 transition"/></Link>
            <Link href="#"><FaTwitter className="hover:text-blue-400 transition"/></Link>
            <Link href="#"><FaLinkedinIn className="hover:text-blue-700 transition"/></Link>
            <Link href="#"><FaInstagram className="hover:text-pink-500 transition"/></Link>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><Link href="/" className="hover:text-white transition">Home</Link></li>
            <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
            <li><Link href="/programs" className="hover:text-white transition">Our Programs</Link></li>
            <li><Link href="/blog" className="hover:text-white transition">Blog</Link></li>
            <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <p className="text-gray-400">123 Health St., Dhaka, Bangladesh</p>
          <p className="text-gray-400">Email: info@jonoshatho.org</p>
          <p className="text-gray-400">Phone: +880 1234 567890</p>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Subscribe</h3>
          <p className="text-gray-400 mb-4">Get updates about our programs and events.</p>
          <form className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="p-2 rounded-lg text-gray-900"
            />
            <button className="bg-blue-600 hover:bg-blue-700 p-2 rounded-lg text-white font-semibold transition">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-500">
        &copy; 2025 Jono Shato Foundation. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
