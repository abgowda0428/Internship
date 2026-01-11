import { motion } from "motion/react";
import { Brain, Activity, Heart, Smartphone, Shield, Zap } from "lucide-react";

export function ServicesPage() {
  const services = [
    {
      icon: Brain,
      title: "AI Diagnostics",
      description: "Advanced machine learning algorithms analyze your symptoms and health data to provide instant, accurate preliminary diagnostics.",
      features: ["Real-time analysis", "Pattern recognition", "Predictive insights", "Symptom tracking"],
    },
    {
      icon: Activity,
      title: "Virtual Consultations",
      description: "Connect with certified healthcare professionals instantly through our HIPAA-compliant video platform.",
      features: ["24/7 availability", "Instant prescriptions", "Follow-up care", "Specialist access"],
    },
    {
      icon: Heart,
      title: "Wellness Programs",
      description: "Personalized health programs designed by experts to help you achieve your wellness goals sustainably.",
      features: ["Custom nutrition plans", "Fitness tracking", "Mental wellness", "Progress monitoring"],
    },
    {
      icon: Smartphone,
      title: "Health Monitoring",
      description: "Continuous health tracking through wearable integration and smart health devices with real-time alerts.",
      features: ["Vital signs tracking", "Anomaly detection", "Smart alerts", "Data visualization"],
    },
    {
      icon: Shield,
      title: "Preventive Care",
      description: "Proactive health screening and risk assessment to catch potential issues before they become serious.",
      features: ["Risk profiling", "Early detection", "Vaccination tracking", "Genetic analysis"],
    },
    {
      icon: Zap,
      title: "Emergency Response",
      description: "Rapid emergency triage and connection to local emergency services with your complete medical history.",
      features: ["Instant triage", "Location services", "Emergency contacts", "Medical records"],
    },
  ];

  return (
    <div className="min-h-screen bg-black noise pt-24">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden py-20">
        <div className="absolute inset-0 grid-background opacity-50"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#00ff88] rounded-full blur-[200px] opacity-10"></div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-5xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 text-[#00ff88] text-xs tracking-[0.3em] font-medium mb-8">
              SERVICES & SOLUTIONS
            </span>
            
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-space font-bold tracking-tighter mb-8">
              <span className="block gradient-text-alt">COMPREHENSIVE</span>
              <span className="block text-white">DIGITAL HEALTH</span>
            </h1>

            <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
              From AI-powered diagnostics to 24/7 virtual care, our platform delivers 
              everything you need for optimal health in one seamless experience
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative p-8 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#00ff88]/50 transition-all duration-500"
              >
                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#00ff88]/0 to-[#00ff88]/0 group-hover:from-[#00ff88]/10 group-hover:to-transparent transition-all duration-500"></div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-16 h-16 mb-6 bg-[#00ff88]/10 flex items-center justify-center group-hover:bg-[#00ff88]/20 transition-all duration-500">
                    <service.icon className="w-8 h-8 text-[#00ff88] group-hover:scale-110 transition-transform duration-500" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-space font-medium text-white mb-4 group-hover:text-[#00ff88] transition-colors duration-500">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/60 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-white/40">
                        <div className="w-1 h-1 bg-[#00ff88] rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00ff88]/5 to-transparent"></div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-20"
          >
            <span className="text-[#00ff88] text-sm tracking-[0.3em] font-medium mb-6 block">
              HOW IT WORKS
            </span>
            <h2 className="text-5xl md:text-6xl font-space font-bold tracking-tighter text-white mb-6">
              Seamless Healthcare in 3 Steps
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {[
              {
                step: "01",
                title: "Create Your Profile",
                description: "Sign up in minutes and complete your comprehensive health profile with our intuitive onboarding process.",
              },
              {
                step: "02",
                title: "Get Matched",
                description: "Our AI matches you with the right healthcare professionals and creates personalized care plans.",
              },
              {
                step: "03",
                title: "Access Care",
                description: "Connect instantly with doctors, track your health metrics, and get the care you need, anytime.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                {/* Step number */}
                <div className="text-8xl font-space font-bold text-white/5 mb-6">
                  {item.step}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-space font-medium text-white mb-4">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-white/60 leading-relaxed">
                  {item.description}
                </p>

                {/* Connection line */}
                {index < 2 && (
                  <div className="hidden md:block absolute top-12 left-full w-full h-px bg-gradient-to-r from-[#00ff88]/50 to-transparent"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Image */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative max-w-6xl mx-auto"
          >
            <div className="aspect-video bg-gradient-to-br from-[#00ff88]/20 to-transparent border border-white/10 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1758691461932-d0aa0ebf6b31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWxlbWVkaWNpbmUlMjB2aWRlbyUyMGNhbGx8ZW58MXx8fHwxNzY4MDcwNzA1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Telemedicine Virtual Consultations"
                className="w-full h-full object-cover opacity-80"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="mt-12 max-w-3xl"
            >
              <h3 className="text-4xl font-space font-bold text-white mb-6">
                Technology That Works For You
              </h3>
              <p className="text-xl text-white/60 leading-relaxed">
                Our platform seamlessly integrates with your life, providing intelligent 
                health insights when you need them most. Experience healthcare that adapts 
                to you, not the other way around.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00ff88] rounded-full blur-[200px] opacity-10"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-5xl md:text-6xl font-space font-bold tracking-tighter text-white mb-8">
              Ready to Experience the Future?
            </h2>
            <p className="text-xl text-white/60 mb-12 leading-relaxed">
              Join thousands of users who trust Healsphere for their healthcare needs
            </p>
            <button className="group px-12 py-6 bg-[#00ff88] text-black font-medium text-lg tracking-wider relative overflow-hidden">
              <span className="relative z-10">START YOUR JOURNEY</span>
              <motion.div
                className="absolute inset-0 bg-white"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}