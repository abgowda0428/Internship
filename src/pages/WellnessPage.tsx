import { motion } from "motion/react";
import { Leaf, Dumbbell, Moon, Apple } from "lucide-react";

interface WellnessPageProps {
  onNavigate?: (page: string) => void;
}

export function WellnessPage({ onNavigate }: WellnessPageProps) {
  const programs = [
    {
      icon: Apple,
      title: "Nutrition Optimization",
      description: "AI-powered meal planning based on your metabolic profile, preferences, and health goals.",
      duration: "8 Weeks",
      benefits: ["Personalized meal plans", "Macro tracking", "Supplement guidance", "Progress analytics"],
    },
    {
      icon: Dumbbell,
      title: "Fitness Evolution",
      description: "Adaptive workout programs that evolve with your progress and adjust to your fitness level.",
      duration: "12 Weeks",
      benefits: ["Custom workouts", "Form analysis", "Performance tracking", "Recovery optimization"],
    },
    {
      icon: Moon,
      title: "Sleep Mastery",
      description: "Comprehensive sleep optimization using circadian science and behavioral interventions.",
      duration: "6 Weeks",
      benefits: ["Sleep tracking", "Environment optimization", "Habit formation", "Quality metrics"],
    },
    {
      icon: Leaf,
      title: "Stress Management",
      description: "Evidence-based techniques to manage stress and build resilience through mindfulness.",
      duration: "10 Weeks",
      benefits: ["Meditation guides", "Breathing exercises", "Cognitive tools", "Biometric feedback"],
    },
  ];

  return (
    <div className="min-h-screen bg-black noise pt-24">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden py-20">
        <div className="absolute inset-0 grid-background opacity-50"></div>
        
        {/* Animated gradients */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-20 w-[600px] h-[600px] bg-[#00ff88] rounded-full blur-[200px]"
        ></motion.div>

        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-20 right-20 w-[600px] h-[600px] bg-[#00ccff] rounded-full blur-[200px]"
        ></motion.div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-5xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 text-[#00ff88] text-xs tracking-[0.3em] font-medium mb-8">
              WELLNESS PROGRAMS
            </span>
            
            <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-space font-bold tracking-tighter mb-8">
              <span className="block text-white">OPTIMIZE</span>
              <span className="block gradient-text-alt">EVERY ASPECT</span>
              <span className="block text-white">OF LIFE</span>
            </h1>

            <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
              Science-backed wellness programs designed to transform your health from the inside out
            </p>
          </motion.div>
        </div>

        {/* Scroll indicator */}
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
            <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent"></div>
          </motion.div>
        </motion.div>
      </section>

      {/* Programs Grid */}
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
              FEATURED PROGRAMS
            </span>
            <h2 className="text-5xl md:text-6xl font-space font-bold tracking-tighter text-white mb-6">
              Personalized Wellness Journeys
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Each program adapts to your unique biology, lifestyle, and goals
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative p-10 bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-[#00ff88]/50 transition-all duration-500"
              >
                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#00ff88]/0 to-[#00ff88]/0 group-hover:from-[#00ff88]/10 group-hover:to-transparent transition-all duration-500"></div>
                
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-16 h-16 bg-[#00ff88]/10 flex items-center justify-center group-hover:bg-[#00ff88]/20 transition-all duration-500">
                      <program.icon className="w-8 h-8 text-[#00ff88] group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <span className="text-sm text-[#00ff88] tracking-wider">{program.duration}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl font-space font-medium text-white mb-4 group-hover:text-[#00ff88] transition-colors duration-500">
                    {program.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/60 leading-relaxed mb-8">
                    {program.description}
                  </p>

                  {/* Benefits */}
                  <div className="space-y-3">
                    {program.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-[#00ff88] rounded-full"></div>
                        <span className="text-white/40">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <button 
                    onClick={() => onNavigate?.("contact")}
                    className="mt-8 w-full px-6 py-3 border border-white/20 text-white font-medium tracking-wider hover:border-[#00ff88] hover:text-[#00ff88] transition-all duration-300"
                  >
                    LEARN MORE
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Image Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="relative aspect-square bg-gradient-to-br from-[#00ff88]/20 to-transparent border border-white/10 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1635545999375-057ee4013deb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWxsbmVzcyUyMG1lZGl0YXRpb24lMjB5b2dhfGVufDF8fHx8MTc2ODA3MDcwNnww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Wellness and Meditation"
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-[#00ff88] text-sm tracking-[0.3em] font-medium mb-6 block">
                THE SCIENCE
              </span>
              <h2 className="text-4xl md:text-5xl font-space font-bold tracking-tighter text-white mb-8">
                Data-Driven Wellness
              </h2>
              <p className="text-lg text-white/60 leading-relaxed mb-6">
                Every program is built on the latest scientific research and personalized 
                using your biometric data, genetic markers, and lifestyle factors.
              </p>
              <p className="text-lg text-white/60 leading-relaxed mb-8">
                Our AI continuously analyzes your progress and adjusts your program in 
                real-time to ensure optimal results.
              </p>

              <div className="space-y-4">
                {[
                  "Continuous biometric monitoring",
                  "Real-time program adjustments",
                  "Personalized recommendations",
                  "Evidence-based protocols",
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-[#00ff88]/10 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-[#00ff88] rounded-full"></div>
                    </div>
                    <span className="text-white/80">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonial/Results Section */}
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
              Real Results, Real People
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mt-16">
              {[
                { metric: "87%", label: "Achieved Goals" },
                { metric: "12K+", label: "Active Members" },
                { metric: "4.9/5", label: "Avg Rating" },
              ].map((stat, idx) => (
                <div key={idx} className="p-8 bg-white/5 backdrop-blur-sm border border-white/10">
                  <div className="text-5xl font-space font-bold gradient-text-alt mb-2">
                    {stat.metric}
                  </div>
                  <div className="text-white/60 tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
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
              Start Your Transformation
            </h2>
            <p className="text-xl text-white/60 mb-12 leading-relaxed">
              Take the first step towards optimal health with a personalized wellness assessment
            </p>
            <button 
              onClick={() => onNavigate?.("contact")}
              className="group px-12 py-6 bg-[#00ff88] text-black font-medium text-lg tracking-wider relative overflow-hidden"
            >
              <span className="relative z-10">BEGIN ASSESSMENT</span>
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