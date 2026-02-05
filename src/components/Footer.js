const Footer = () => {
  return (
    <footer className="bg-[#1a3d0c] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & About */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-[#ffd700]">
              Fruitland Cyprus
            </h3>
            <p className="text-gray-200 mb-4 leading-relaxed">
              Family-owned citrus farm providing premium quality fruits directly from our Cyprus orchards to your table since 2000.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-[#ffd700] hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#ffd700] focus:ring-offset-2 focus:ring-offset-[#1a3d0c] rounded">
                Facebook
              </a>
              <a href="#" className="text-[#ffd700] hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#ffd700] focus:ring-offset-2 focus:ring-offset-[#1a3d0c] rounded">
                Instagram
              </a>
              <a href="#" className="text-[#ffd700] hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#ffd700] focus:ring-offset-2 focus:ring-offset-[#1a3d0c] rounded">
                LinkedIn
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
            <h4 className="text-lg font-semibold mb-4 text-white">Get in Touch</h4>
            <address className="space-y-2 text-gray-200 not-italic">
              <p>Fruitland Cyprus Farm</p>
              <p>Lefke District</p>
              <p>KKTC, Turkiye</p>
              <p className="mt-4">
                <a href="tel:+35725123456" className="hover:text-[#ffd700] focus:outline-none focus:ring-2 focus:ring-[#ffd700] rounded">+357 25 123456</a>
              </p>
              <p>
                <a href="mailto:info@fruitland-cy.com" className="hover:text-[#ffd700] focus:outline-none focus:ring-2 focus:ring-[#ffd700] rounded">info@fruitland-cy.com</a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-500 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2026 Fruitland Cyprus. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;