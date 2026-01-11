import { motion } from "motion/react";
import { Target, Users, Award, TrendingUp } from "lucide-react";

export function AboutPage() {
  return (
    <div className="min-h-screen bg-black noise pt-24">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden py-20">
        <div className="absolute inset-0 grid-background opacity-50"></div>
        
        {/* Floating gradient orbs */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#00ff88] rounded-full blur-[150px] opacity-10"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#00ccff] rounded-full blur-[150px] opacity-10"></div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-6xl mx-auto"
          >
            <span className="inline-block px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 text-[#00ff88] text-xs tracking-[0.3em] font-medium mb-8">
              ABOUT HEALSPHERE
            </span>
            
            <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-space font-bold tracking-tighter mb-12">
              <span className="block text-white">WE'RE</span>
              <span className="block gradient-text">REVOLUTIONIZING</span>
              <span className="block text-white">HEALTHCARE</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/60 max-w-3xl leading-relaxed">
              Born from a vision to make healthcare accessible, intelligent, and human-centric, 
              Healsphere combines cutting-edge technology with deep medical expertise to create 
              the future of wellness.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-20 items-center max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-[#00ff88] text-sm tracking-[0.3em] font-medium mb-6 block">
                OUR MISSION
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-space font-bold tracking-tighter mb-8 text-white">
                Empowering Health Through Innovation
              </h2>
              <p className="text-lg text-white/60 leading-relaxed mb-6">
                We believe healthcare should be proactive, not reactive. Our platform leverages 
                artificial intelligence, predictive analytics, and real-time data to help you 
                stay ahead of health issues before they become problems.
              </p>
              <p className="text-lg text-white/60 leading-relaxed">
                By combining world-class medical professionals with state-of-the-art technology, 
                we're creating a healthcare experience that's both deeply personal and incredibly powerful.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-[#00ff88]/20 to-transparent border border-white/10 p-8 flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1758691463203-cce9d415b2b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwdGVjaG5vbG9neSUyMGRpZ2l0YWwlMjBoZWFsdGh8ZW58MXx8fHwxNzY4MDcwNzA1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Medical Technology Innovation"
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
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
            <h2 className="text-5xl md:text-6xl font-space font-bold tracking-tighter gradient-text-alt mb-6">
              Impact in Numbers
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {[
              { number: "10,000+", label: "Active Users", icon: Users },
              { number: "98%", label: "Satisfaction Rate", icon: Award },
              { number: "50+", label: "Healthcare Professionals", icon: Target },
              { number: "2.5M+", label: "Consultations Completed", icon: TrendingUp },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative p-8 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#00ff88]/50 transition-all duration-500"
              >
                <stat.icon className="w-8 h-8 text-[#00ff88] mb-6 group-hover:scale-110 transition-transform duration-500" />
                <div className="text-5xl font-space font-bold text-white mb-2">{stat.number}</div>
                <div className="text-white/60 tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-20"
          >
            <span className="text-[#00ff88] text-sm tracking-[0.3em] font-medium mb-6 block">
              CORE VALUES
            </span>
            <h2 className="text-5xl md:text-6xl font-space font-bold tracking-tighter text-white mb-6">
              What Drives Us Forward
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Innovation First",
                description: "We constantly push boundaries, exploring new technologies and methodologies to deliver breakthrough healthcare solutions.",
              },
              {
                title: "Patient-Centric",
                description: "Every decision we make starts with one question: How does this improve the patient experience and outcomes?",
              },
              {
                title: "Data Privacy",
                description: "Your health data is sacred. We employ military-grade encryption and never compromise on security or privacy.",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative p-10 bg-gradient-to-br from-white/5 to-transparent border border-white/10 group hover:border-[#00ff88]/50 transition-all duration-500"
              >
                <div className="text-8xl font-space font-bold text-white/5 mb-4 group-hover:text-[#00ff88]/10 transition-colors duration-500">
                  0{index + 1}
                </div>
                <h3 className="text-2xl font-space font-medium text-white mb-4">{value.title}</h3>
                <p className="text-white/60 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-[#00ff88]/5 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="text-[#00ff88] text-sm tracking-[0.3em] font-medium mb-6 block">
              OUR TEAM
            </span>
            <h2 className="text-5xl md:text-6xl font-space font-bold tracking-tighter text-white mb-8">
              Built by Experts, For Everyone
            </h2>
            <p className="text-xl text-white/60 leading-relaxed mb-12">
              Our multidisciplinary team brings together medical professionals, technologists, 
              designers, and researchers—all united by a shared passion for transforming healthcare.
            </p>

            <div className="relative h-[500px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1615177393114-bd2917a4f74a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY4MDM5MDI0fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Team"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}