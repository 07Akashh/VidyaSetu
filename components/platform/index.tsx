"use client";

import { motion } from "framer-motion";
import {
  Users,
  GraduationCap,
  Settings,
  Smartphone,
  Cloud,
  Shield,
  Zap,
  BarChart,
} from "lucide-react";

const PlatformComponent = () => {
  const platforms = [
    {
      icon: Users,
      title: "Student & Parent Platform",
      description: "Empowering students and parents with real-time insights",
      color: "from-blue-500/80 to-cyan-400/80",
      features: [
        "Real-time attendance tracking with instant notifications",
        "Interactive homework submission and feedback system",
        "Live GPS bus tracking for student safety",
        "Digital report cards and performance analytics",
        "Seamless fee payment with multiple options",
        "Direct communication with teachers and admin",
      ],
    },
    {
      icon: GraduationCap,
      title: "Teacher Platform",
      description: "AI-powered tools for modern educators",
      color: "from-purple-500/80 to-pink-500/80",
      features: [
        "AI homework and question paper generator",
        "Automated grading with OCR marksheet scanning",
        "Class performance analytics and insights",
        "Digital attendance with multiple verification methods",
        "Parent-teacher communication hub",
        "Smart substitution and leave management",
      ],
    },
    {
      icon: Settings,
      title: "Admin Platform",
      description: "Complete institutional control at your fingertips",
      color: "from-orange-400/80 to-red-500/80",
      features: [
        "Comprehensive student and staff management",
        "AI-powered predictive analytics dashboard",
        "Automated timetable and class promotion",
        "Transport, hostel, and library management",
        "GST-compliant finance and accounting",
        "Online admissions with merit list generation",
      ],
    },
  ];

  const techFeatures = [
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Native apps for iOS and Android with offline capabilities",
    },
    {
      icon: Cloud,
      title: "Cloud-Based Infrastructure",
      description: "Scalable, secure, and always accessible from anywhere",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade encryption and GDPR compliant data protection",
    },
    {
      icon: Zap,
      title: "Real-Time Sync",
      description: "Instant updates across all devices and platforms",
    },
    {
      icon: BarChart,
      title: "AI Analytics",
      description: "Predictive insights for better decision making",
    },
  ];

  return (
    <section className="flex flex-col items-center relative mx-auto my-12 px-4 w-full max-w-7xl">
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
        <div className="relative z-10 space-y-4 md:space-y-5 lg:space-y-6 mb-6 md:mb-7 lg:mb-9 max-w-md md:max-w-[500px] lg:max-w-[899px] mt-16 md:mt-[120px] lg:mt-[160px] px-4">
          <h1 className="text-foreground text-4xl md:text-5xl lg:text-6xl font-bold">
            Three Powerful Platforms
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4 text-lg">
            Tailored solutions for students, teachers, and administrators
            working together seamlessly.
          </p>
        </div>
      </motion.div>

      {/* MAIN CARDS */}
      <div className="space-y-20 w-full mb-32">
        {platforms.map((platform, index) => (
          <motion.div
            key={platform.title}
            initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="glass-strong rounded-3xl p-10 md:p-16 border border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.08)] backdrop-blur-xl bg-white/5"
          >
            <div className="grid md:grid-cols-2 gap-14 items-center">
              {/* LEFT SIDE CONTENT */}
              <div
                className={index % 2 === 0 ? "order-1" : "order-2 md:order-1"}
              >
                <div
                  className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${platform.color} flex items-center justify-center shadow-xl mb-6`}
                >
                  <platform.icon className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  {platform.title}
                </h2>
                <p className="text-muted-foreground text-lg mb-8">
                  {platform.description}
                </p>
              </div>

              {/* RIGHT SIDE FEATURES */}
              <div
                className={index % 2 === 0 ? "order-2" : "order-1 md:order-2"}
              >
                <ul className="space-y-4">
                  {platform.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: 25 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.08 }}
                      className="flex items-start gap-3 p-4 rounded-xl glass-light border border-white/10"
                    >
                      <div className="w-3 h-3 rounded-full bg-primary mt-2"></div>
                      <span className="text-foreground text-lg">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* TECHNOLOGY GRID */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-24 w-full"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Built on Modern Technology
        </h2>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {techFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-strong p-6 rounded-2xl text-center border border-white/10 shadow-[0_0_25px_rgba(255,255,255,0.06)]"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg">{feature.title}</h3>
              <p className="text-muted-foreground text-sm mt-1">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* INTEGRATION SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="glass-strong rounded-3xl p-14 text-center w-full border border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.08)] backdrop-blur-2xl bg-white/5"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Seamless Integration
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-10 text-lg">
          Education OS integrates with your existing systems including Tally,
          payment gateways, SMS providers & more. Our API-first approach ensures
          smooth data flow.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {[
            "Tally",
            "Razorpay",
            "Stripe",
            "SMS Gateway",
            "Google Workspace",
            "Microsoft 365",
          ].map((integration) => (
            <div
              key={integration}
              className="glass-light rounded-full px-8 py-3 border border-white/10 backdrop-blur-xl text-sm shadow-sm"
            >
              {integration}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default PlatformComponent;
