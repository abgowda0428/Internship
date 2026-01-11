import { motion } from "motion/react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    if (formData.name && formData.email && formData.message) {
      alert(`Thank you for your message, ${formData.name}! We'll get back to you at ${formData.email} within 24 hours.`);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } else {
      alert('Please fill in all required fields.');
    }
  };

  return (
    <div className="min-h-screen bg-black noise pt-24">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden py-20">
        <div className="absolute inset-0 grid-background opacity-50"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#00ff88] rounded-full blur-[200px] opacity-10"></div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 text-[#00ff88] text-xs tracking-[0.3em] font-medium mb-8">
              GET IN TOUCH
            </span>
            
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-space font-bold tracking-tighter mb-8">
              <span className="block text-white">LET'S</span>
              <span className="block gradient-text-alt">CONNECT</span>
            </h1>

            <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              Have questions? Want to learn more? Our team is here to help you 
              start your healthcare transformation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="text-4xl font-space font-bold text-white mb-8">
                Send Us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm text-white/60 mb-2 tracking-wider">
                    FULL NAME
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-0 py-4 bg-transparent border-b border-white/20 text-white focus:outline-none focus:border-[#00ff88] transition-colors duration-300"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm text-white/60 mb-2 tracking-wider">
                    EMAIL ADDRESS
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-0 py-4 bg-transparent border-b border-white/20 text-white focus:outline-none focus:border-[#00ff88] transition-colors duration-300"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm text-white/60 mb-2 tracking-wider">
                    SUBJECT
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-0 py-4 bg-transparent border-b border-white/20 text-white focus:outline-none focus:border-[#00ff88] transition-colors duration-300"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm text-white/60 mb-2 tracking-wider">
                    MESSAGE
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={6}
                    className="w-full px-0 py-4 bg-transparent border-b border-white/20 text-white focus:outline-none focus:border-[#00ff88] transition-colors duration-300 resize-none"
                    placeholder="Tell us more about your needs..."
                  />
                </div>

                <button
                  type="submit"
                  className="group w-full px-8 py-5 bg-[#00ff88] text-black font-medium tracking-wider relative overflow-hidden mt-8"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    SEND MESSAGE
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-white"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-12"
            >
              <div>
                <h2 className="text-4xl font-space font-bold text-white mb-8">
                  Contact Information
                </h2>
                <p className="text-lg text-white/60 leading-relaxed">
                  Reach out through any of these channels. We typically respond 
                  within 24 hours during business days.
                </p>
              </div>

              <div className="space-y-8">
                {[
                  {
                    icon: Mail,
                    title: "Email",
                    info: "support@healsphere.com",
                    link: "mailto:support@healsphere.com",
                  },
                  {
                    icon: Phone,
                    title: "Phone",
                    info: "+91 9986911532",
                    link: "tel:+919986911532",
                  },
                  {
                    icon: MapPin,
                    title: "Office",
                    info: "Manyata Embassy Business Park, Hebbal Outer Ring Rd, Nagavara, Bengaluru, Karnataka 560045, India",
                    link: "#",
                  },
                ].map((contact, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="group flex items-start gap-6 p-6 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#00ff88]/50 transition-all duration-500"
                  >
                    <div className="w-12 h-12 bg-[#00ff88]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#00ff88]/20 transition-all duration-500">
                      <contact.icon className="w-6 h-6 text-[#00ff88]" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-2 tracking-wider">{contact.title}</h3>
                      <a
                        href={contact.link}
                        className="text-white/60 hover:text-[#00ff88] transition-colors duration-300"
                      >
                        {contact.info}
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Office Hours */}
              <div className="p-8 bg-gradient-to-br from-[#00ff88]/10 to-transparent border border-[#00ff88]/20">
                <h3 className="text-xl font-space font-medium text-white mb-4">Office Hours</h3>
                <div className="space-y-2 text-white/60">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM PST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM PST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map/Image Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative max-w-7xl mx-auto"
          >
            <div className="aspect-video bg-gradient-to-br from-[#00ff88]/20 to-transparent border border-white/10 overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1720180246446-d1738fe8ca76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3NwaXRhbCUyMG1vZGVybiUyMGludGVyaW9yfGVufDF8fHx8MTc2ODAzNzgwOXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Modern Healthcare Facility"
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center px-6">
                  <MapPin className="w-16 h-16 text-[#00ff88] mx-auto mb-4" />
                  <p className="text-white text-xl font-space font-medium mb-2">Our Office</p>
                  <p className="text-white/80 text-sm max-w-md">
                    Manyata Embassy Business Park, Hebbal Outer Ring Rd<br />
                    Nagavara, Bengaluru, Karnataka 560045, India
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00ff88]/5 to-transparent"></div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-5xl md:text-6xl font-space font-bold tracking-tighter text-white mb-8">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-white/60 mb-12">
              Find quick answers to common questions about our platform and services
            </p>

            <div className="space-y-4 text-left">
              {[
                {
                  q: "How quickly can I get started?",
                  a: "You can create an account and start using Healsphere in under 5 minutes.",
                },
                {
                  q: "Is my health data secure?",
                  a: "Yes, we use enterprise-grade encryption and are fully HIPAA compliant.",
                },
                {
                  q: "Do you accept insurance?",
                  a: "We work with most major insurance providers. Contact us for specific details.",
                },
              ].map((faq, idx) => (
                <div key={idx} className="p-6 bg-white/5 backdrop-blur-sm border border-white/10">
                  <h3 className="text-white font-medium mb-2">{faq.q}</h3>
                  <p className="text-white/60">{faq.a}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}