import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-900 to-blue-800 text-gray-300 py-12 px-6 mt-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
        {/* About */}
        <div>
          <h3 className="text-white font-bold mb-3 text-lg">Traffic Saathi</h3>
          <p className="text-sm">
            Innovating Indian roads for safer, smarter, and eco-friendly traffic
            management using AI and IoT.
          </p>
          <div className="flex items-center gap-3 mt-4">
            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition">
              <FaTwitter />
            </a>
            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-bold mb-3 text-lg">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-white transition">Home</a>
            </li>
            <li>
              <a href="/features" className="hover:text-white transition">Features</a>
            </li>
            <li>
              <a href="/about" className="hover:text-white transition">About</a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white transition">Contact</a>
            </li>
            <li>
              <a href="/terms" className="hover:text-white transition">Terms & Conditions</a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-bold mb-3 text-lg">Contact</h3>
          <p className="text-sm">📧 info@trafficsaathi.com</p>
          <p className="text-sm">📞 +91 98765 43210</p>
          <p className="text-sm">📍 New Delhi, India</p>
        </div>

        {/* Newsletter / CTA */}
        <div>
          <h3 className="text-white font-bold mb-3 text-lg">Stay Updated</h3>
          <p className="text-sm mb-3">
            Subscribe to get the latest updates on our smart traffic system.
          </p>
          <form className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg shadow hover:from-blue-700 hover:to-blue-800 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <p className="text-center text-xs text-gray-400 mt-8">
        © {new Date().getFullYear()} Traffic Saathi. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
