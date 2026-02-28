import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid md:grid-cols-4 gap-8">
          
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-blue-500 mb-4">RelayDor</h3>
            <p className="text-gray-400">
              Simplifying healthcare connections between patients and doctors.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/" className="hover:text-blue-500 transition">Home</Link></li>
              <li><Link href="/about" className="hover:text-blue-500 transition">About</Link></li>
              <li><Link href="/contact" className="hover:text-blue-500 transition">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/" className="hover:text-blue-500 transition">Find Doctors</Link></li>
              <li><Link href="/" className="hover:text-blue-500 transition">Book Appointments</Link></li>
              <li><Link href="/" className="hover:text-blue-500 transition">Referrals</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>support@relaydor.com</li>
              <li>+91 98765 43210</li>
              <li>Mumbai, Maharashtra</li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} RelayDor. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}
