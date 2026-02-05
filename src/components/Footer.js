const Footer = () => {
  return (
    <footer className="bg-secondary-green text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & About */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-primary-yellow">
              Fruitland Cyprus
            </h3>
            <p className="text-white mb-2 leading-relaxed opacity-90">
              Family-owned citrus farm providing premium quality fruits directly from our Cyprus orchards to your table since 1940.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-yellow hover:text-white transition-colors">
                Facebook
              </a>
              <a href="#" className="text-primary-yellow hover:text-white transition-colors">
                Instagram
              </a>
              <a href="#" className="text-primary-yellow hover:text-white transition-colors">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-white hover:text-primary-yellow transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/products" className="text-white hover:text-primary-yellow transition-colors">
                  Our Products
                </a>
              </li>
              <li>
                <a href="/contact" className="text-white hover:text-primary-yellow transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="/sustainability" className="text-white hover:text-primary-yellow transition-colors">
                  Sustainability
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-2 text-white opacity-90">
              <p>Fruitland Cyprus Farm</p>
              <p>Limassol District</p>
              <p>Cyprus, EU</p>
              <p className="mt-4">+357 25 123456</p>
              <p>info@fruitland-cy.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-white opacity-75">
          <p>&copy; 2024 Fruitland Cyprus. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;