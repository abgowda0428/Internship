import { motion } from "motion/react";
import { Mail, MapPin, Phone, ArrowRight } from "lucide-react";

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const handleNavigate = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-black border-t border-white/10">
      <div className="absolute inset-0 grid-background opacity-30"></div>
      
      <div className="container mx-auto px-6 lg:px-12 py-20 relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 bg-[#00ff88] rounded-full"></div>
              <span className="text-2xl font-space font-medium tracking-tight text-white">
                HEALSPHERE
              </span>
            </div>
            <p className="text-white/60 leading-relaxed mb-6">
              Revolutionizing healthcare through cutting-edge technology and 
              compassionate care.
            </p>
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 bg-[#00ff88] rounded-full"></div>
              <span className="text-sm text-white/40">Next-gen healthcare platform</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-medium tracking-wider mb-6">NAVIGATION</h4>
            <ul className="space-y-3">
              {["home", "about", "services", "wellness", "contact"].map((page) => (
                <li key={page}>
                  <button
                    onClick={() => handleNavigate(page)}
                    className="group text-white/60 hover:text-[#00ff88] transition-colors duration-300 flex items-center gap-2"
                  >
                    <span className="capitalize">{page}</span>
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-medium tracking-wider mb-6">SERVICES</h4>
            <ul className="space-y-3 text-white/60">
              <li>AI Diagnostics</li>
              <li>Virtual Consultations</li>
              <li>Wellness Programs</li>
              <li>Health Monitoring</li>
              <li>Preventive Care</li>
              <li>Emergency Response</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-medium tracking-wider mb-6">CONTACT</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#00ff88] flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:support@healsphere.com"
                  className="text-white/60 hover:text-[#00ff88] transition-colors duration-300 text-sm"
                >
                  support@healsphere.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#00ff88] flex-shrink-0 mt-0.5" />
                <a
                  href="tel:+919986911532"
                  className="text-white/60 hover:text-[#00ff88] transition-colors duration-300 text-sm"
                >
                  +91 9986911532
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#00ff88] flex-shrink-0 mt-0.5" />
                <span className="text-white/60 text-sm">
                  Manyata Embassy Business Park, Bengaluru, Karnataka 560045, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="py-12 border-y border-white/10 mb-12"
        >
          <div className="max-w-2xl">
            <h3 className="text-2xl font-space font-medium text-white mb-4">
              Stay Updated
            </h3>
            <p className="text-white/60 mb-6">
              Get the latest healthcare insights and platform updates delivered to your inbox
            </p>
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-[#00ff88] transition-colors duration-300"
              />
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  alert('Thank you for subscribing! We\'ll keep you updated with the latest healthcare insights.');
                }}
                className="px-8 py-4 bg-[#00ff88] text-black font-medium tracking-wider hover:bg-white transition-colors duration-300"
              >
                SUBSCRIBE
              </button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
          <div className="text-white/40">
            © {new Date().getFullYear()} Healsphere. All rights reserved.
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 text-white/40">
            <a href="#" className="hover:text-[#00ff88] transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#00ff88] transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="hover:text-[#00ff88] transition-colors duration-300">
              HIPAA Compliance
            </a>
            <a href="#" className="hover:text-[#00ff88] transition-colors duration-300">
              Accessibility
            </a>
          </div>

          <div className="flex gap-4">
            {["Twitter", "LinkedIn", "Instagram"].map((social) => (
              <a
                key={social}
                href="#"
                className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center hover:border-[#00ff88] hover:bg-[#00ff88]/10 transition-all duration-300"
              >
                <span className="text-xs text-white/60 hover:text-[#00ff88]">
                  {social[0]}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}