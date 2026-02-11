const Footer = () => {
  return (
    <footer className="bg-[#1a3d0c] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          {/* Logo & About */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-2 text-[#ffd700]">
              Fruitlandcyprus
            </h3>
            <div className="flex space-x-4">
              <a href="https://m.facebook.com/fruitlandcyprus/" className="text-[#ffd700] hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#ffd700] focus:ring-offset-2 focus:ring-offset-[#1a3d0c] rounded">
                Facebook
              </a>
              <a href="https://www.instagram.com/fruitlandcyprus?igsh=MXBtejd5NGRjOWlncQ==" className="text-[#ffd700] hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#ffd700] focus:ring-offset-2 focus:ring-offset-[#1a3d0c] rounded">
                Instagram
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-gray-200 hover:text-[#ffd700] transition-colors focus:outline-none focus:ring-2 focus:ring-[#ffd700] rounded">
                  About Us
                </a>
              </li>
              <li>
                <a href="/products" className="text-gray-200 hover:text-[#ffd700] transition-colors focus:outline-none focus:ring-2 focus:ring-[#ffd700] rounded">
                  Our Products
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-200 hover:text-[#ffd700] transition-colors focus:outline-none focus:ring-2 focus:ring-[#ffd700] rounded">
                  Contact
                </a>
              </li>
              <li>
                <a href="/sustainability" className="text-gray-200 hover:text-[#ffd700] transition-colors focus:outline-none focus:ring-2 focus:ring-[#ffd700] rounded">
                  Sustainability
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-2 text-white">Get in Touch</h4>
            <address className="space-y-2 text-gray-200 not-italic">
              <p>Lefke District</p>
              <p>North Cyprus</p>
              <p className="mt-4">
                <a href="tel:+35725123456" className="text-[#ffd700] hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#ffd700] focus:ring-offset-2 focus:ring-offset-[#1a3d0c] rounded">+90 5488687763</a>                
              </p>
              <p className="mt-1">
                <a href="tel:+35725123456" className="text-[#ffd700] hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#ffd700] focus:ring-offset-2 focus:ring-offset-[#1a3d0c] rounded">+357 96384537</a>
              </p>
              <p>
                <a href="mailto: Info@fruitlandcyprus.com" className="text-[#ffd700] hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#ffd700] focus:ring-offset-2 focus:ring-offset-[#1a3d0c] rounded"> Info@fruitlandcyprus.com</a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-500 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2026 Fruitlandcyprus. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;