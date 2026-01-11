import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, Sparkles, Zap, Shield, Heart } from "lucide-react";
import { useRef } from "react";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <div className="min-h-screen bg-black noise">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
        {/* Animated Background */}
        <motion.div 
          style={{ y }}
          className="absolute inset-0 grid-background"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black"></div>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0"
        >
          <div className="absolute top-20 left-20 w-64 h-64 bg-[#00ff88] rounded-full blur-[120px] opacity-20"></div>
          <div className="absolute bottom-40 right-20 w-96 h-96 bg-[#00ccff] rounded-full blur-[120px] opacity-20"></div>
        </motion.div>

        {/* Hero Content */}
        <motion.div
          style={{ opacity }}
          className="relative z-10 container mx-auto px-6 lg:px-12 text-center py-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8"
          >
            <span className="inline-block px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 text-[#00ff88] text-xs tracking-[0.3em] font-medium">
              NEXT-GEN HEALTHCARE
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-space font-bold tracking-tighter mb-10 leading-[0.9]"
          >
            <span className="block gradient-text">REDEFINING</span>
            <span className="block text-white">WELLNESS</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl lg:text-2xl text-white/60 max-w-4xl mx-auto mb-16 leading-relaxed"
          >
            Experience the future of healthcare through our revolutionary platform 
            that integrates cutting-edge technology with human-centered care
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <button
              onClick={() => onNavigate("services")}
              className="group relative px-10 py-5 bg-[#00ff88] text-black font-medium tracking-wider overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                EXPLORE PLATFORM
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <motion.div
                className="absolute inset-0 bg-white"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </button>

            <button
              onClick={() => onNavigate("contact")}
              className="group px-10 py-5 border border-white/20 text-white font-medium tracking-wider hover:border-[#00ff88] hover:text-[#00ff88] transition-all duration-300"
            >
              BOOK CONSULTATION
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mt-24 grid grid-cols-3 gap-8 max-w-3xl mx-auto"
          >
            {[
              { value: "10K+", label: "Active Users" },
              { value: "98%", label: "Satisfaction" },
              { value: "24/7", label: "Support" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm text-white/40 tracking-wider">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs text-white/40 tracking-widest">SCROLL</span>
            <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent"></div>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-20"
          >
            <span className="text-[#00ff88] text-sm tracking-[0.3em] font-medium mb-4 block">
              WHY CHOOSE US
            </span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-space font-bold tracking-tighter mb-6">
              <span className="gradient-text-alt">Built Different</span>
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Advanced technology meets compassionate care in our revolutionary healthcare ecosystem
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Zap,
                title: "Lightning Fast",
                description: "Instant access to healthcare services with real-time consultations and AI-powered diagnostics",
              },
              {
                icon: Shield,
                title: "Secure & Private",
                description: "Enterprise-grade security with end-to-end encryption protecting your sensitive health data",
              },
              {
                icon: Heart,
                title: "Patient-Centric",
                description: "Personalized care plans tailored to your unique health profile and wellness goals",
              },
              {
                icon: Sparkles,
                title: "AI-Powered",
                description: "Machine learning algorithms that predict, prevent, and optimize your health outcomes",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative p-8 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#00ff88]/50 transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#00ff88]/0 to-[#00ff88]/0 group-hover:from-[#00ff88]/5 group-hover:to-transparent transition-all duration-500"></div>
                <div className="relative z-10">
                  <feature.icon className="w-12 h-12 text-[#00ff88] mb-6 group-hover:scale-110 transition-transform duration-500" />
                  <h3 className="text-2xl font-space font-medium mb-4 text-white">{feature.title}</h3>
                  <p className="text-white/60 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Large Image Section */}
      <section className="relative h-screen overflow-hidden">
        <motion.div
          initial={{ scale: 1.2, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          <img
            src="https://images.unsplash.com/photo-1758691462749-a95ce1bd7f96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N0b3IlMjBwYXRpZW50JTIwY29uc3VsdGF0aW9uJTIwbW9kZXJufGVufDF8fHx8MTc2ODA3MDcwNHww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Healthcare Professional Consultation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
        </motion.div>

        <div className="relative z-10 container mx-auto px-6 lg:px-12 h-full flex items-end pb-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-space font-bold tracking-tighter mb-6 text-white">
              Technology Meets Humanity
            </h2>
            <p className="text-xl text-white/80 leading-relaxed">
              We've reimagined healthcare from the ground up, creating an experience 
              that's as intuitive as it is powerful.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00ff88] rounded-full blur-[150px] opacity-10"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00ccff] rounded-full blur-[150px] opacity-10"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center"
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-space font-bold tracking-tighter mb-8">
              <span className="gradient-text">Ready to Transform</span>
              <br />
              <span className="text-white">Your Health Journey?</span>
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto mb-12">
              Join thousands of users who have already discovered a better way to manage their health
            </p>
            <button
              onClick={() => onNavigate("contact")}
              className="group px-12 py-6 bg-[#00ff88] text-black font-medium text-lg tracking-wider relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                GET STARTED NOW
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
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