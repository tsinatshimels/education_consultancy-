import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Image
                src="/images/logo.jpg"
                alt="Dream Fly Educational Consultancy"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
              <div className="text-lg font-bold">
                <span className="text-amber-500">Dream</span> Fly
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Your trusted partner for educational travel consultancy services.
              We help students achieve their dreams of studying abroad.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-amber-500">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-amber-500">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-amber-500">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-amber-500">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-amber-500">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-amber-500"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-400 hover:text-amber-500"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-gray-400 hover:text-amber-500"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/testimonials"
                  className="text-gray-400 hover:text-amber-500"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-amber-500"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services#study-abroad"
                  className="text-gray-400 hover:text-amber-500"
                >
                  Study Abroad Programs
                </Link>
              </li>
              <li>
                <Link
                  href="/services#visa-assistance"
                  className="text-gray-400 hover:text-amber-500"
                >
                  Visa Assistance
                </Link>
              </li>
              <li>
                <Link
                  href="/services#university-placement"
                  className="text-gray-400 hover:text-amber-500"
                >
                  University Placement
                </Link>
              </li>
              <li>
                <Link
                  href="/services#test-preparation"
                  className="text-gray-400 hover:text-amber-500"
                >
                  Test Preparation
                </Link>
              </li>
              <li>
                <Link
                  href="/services#career-counseling"
                  className="text-gray-400 hover:text-amber-500"
                >
                  Career Counseling
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin
                  size={20}
                  className="text-amber-500 mt-1 flex-shrink-0"
                />
                <span className="text-gray-400">
                  Worku bucha building, 6nd floor, Hawassa, Ethiopia
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-amber-500 flex-shrink-0" />
                <span className="text-gray-400">+1251-916-78-42-19</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-amber-500 flex-shrink-0" />
                <span className="text-gray-400">info@dreamfly.edu</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Dream Fly Educational Consultancy.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
