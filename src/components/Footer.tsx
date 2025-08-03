const Footer = () => {
  return (
    <footer className="bg-ancient-bronze text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Company of Us - Iraq 2030</h3>
            <p className="text-white/80 text-sm leading-relaxed">
              From Mesopotamia to the Future: Bridging ancient wisdom with modern innovation 
              for a stronger, more prosperous Iraq.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><a href="#modules" className="hover:text-heritage transition-colors">Our Modules</a></li>
              <li><a href="#impact" className="hover:text-heritage transition-colors">Global Impact</a></li>
              <li><a href="#get-involved" className="hover:text-heritage transition-colors">Get Involved</a></li>
              <li><a href="#contact" className="hover:text-heritage transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Connect With Us</h4>
            <div className="space-y-2 text-sm text-white/80">
              <p>Email: hello@iraqcompanyofus.org</p>
              <p>Baghdad, Iraq</p>
              <div className="flex gap-4 mt-4">
                <a href="#" className="text-white/60 hover:text-heritage transition-colors">LinkedIn</a>
                <a href="#" className="text-white/60 hover:text-heritage transition-colors">Twitter</a>
                <a href="#" className="text-white/60 hover:text-heritage transition-colors">Facebook</a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/60 text-sm mb-2">
            © 2024 Company of Us - Iraq 2030. All rights reserved.
          </p>
          <p className="text-heritage font-medium">
            From Mesopotamia to the Future: The Company of Us
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;