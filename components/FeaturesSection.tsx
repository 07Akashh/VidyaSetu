'use client'

import { Smartphone, GraduationCap, LayoutDashboard, Sparkles } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import FeatureCard from "./FeatureCard";

const FeaturesSection = () => {
  const studentFeatures = [
    {
      icon: LayoutDashboard,
      title: "Smart Dashboard",
      description: "Everything at a glance",
      features: [
        "Real-time attendance tracking",
        "Homework summary & submissions",
        "Fee status & payment history",
        "Live timetable & exam schedule",
        "Class rankings & performance",
        "Transport tracking (GPS)",
      ],
      color: "primary" as const,
    },
    {
      icon: Smartphone,
      title: "Advanced Attendance",
      description: "Multiple verification methods",
      features: [
        "QR Code scanning",
        "RFID card authentication",
        "Face recognition AI",
        "Live photo with location",
        "Bus entry/exit tracking",
        "Instant parent notifications",
      ],
      color: "secondary" as const,
    },
    {
      icon: GraduationCap,
      title: "Learning & Exams",
      description: "Complete academic ecosystem",
      features: [
        "Online exams (MCQ + writing)",
        "AI cheating detection",
        "Previous year papers",
        "AI-generated practice questions",
        "Digital report cards",
        "Personalized study suggestions",
      ],
      color: "accent" as const,
    },
  ];

  const teacherFeatures = [
    {
      icon: LayoutDashboard,
      title: "Teacher Dashboard",
      description: "Complete classroom control",
      features: [
        "Assigned classes overview",
        "Personal timetable",
        "Salary & leave details",
        "Substitution requests",
        "Class performance analytics",
        "Pending homework tracker",
      ],
      color: "primary" as const,
    },
    {
      icon: Sparkles,
      title: "AI-Powered Tools",
      description: "Smart teaching assistance",
      features: [
        "AI homework generator",
        "Auto-grading for MCQs",
        "OCR marksheet scanner",
        "Auto plagiarism detection",
        "AI question paper creator",
        "Smart progress reports",
      ],
      color: "secondary" as const,
    },
    {
      icon: GraduationCap,
      title: "Communication Hub",
      description: "Connect with everyone",
      features: [
        "Broadcast announcements",
        "Parent-teacher chat",
        "Class-specific messaging",
        "Voice notes support",
        "PTM booking system",
        "Admin communication",
      ],
      color: "accent" as const,
    },
  ];

  const adminFeatures = [
    {
      icon: LayoutDashboard,
      title: "Institution Management",
      description: "Total administrative control",
      features: [
        "Students & staff management",
        "Timetable & substitution",
        "Class promotion system",
        "Online admissions portal",
        "Auto merit list generation",
        "Document management",
      ],
      color: "primary" as const,
    },
    {
      icon: Sparkles,
      title: "AI Analytics",
      description: "Predictive insights dashboard",
      features: [
        "Student performance prediction",
        "Dropout risk analysis",
        "Fee defaulter prediction",
        "Transport fuel optimization",
        "Teacher performance metrics",
        "Engagement analytics",
      ],
      color: "secondary" as const,
    },
    {
      icon: Smartphone,
      title: "Complete Ecosystem",
      description: "Everything you need",
      features: [
        "Transport GPS & route planning",
        "Hostel management system",
        "Library with QR scanning",
        "Health centre module",
        "Media gallery",
        "GST-compliant finance",
      ],
      color: "accent" as const,
    },
  ];

  return (
    <section className="py-32 px-4 relative" id="features">
      <div className="flex flex-col justify-start items-center gap-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full max-w-[655px] text-center text-foreground text-4xl md:text-6xl font-semibold leading-tight md:leading-[66px]"
          >
              Complete Solutions
          </motion.h2>
          <p className="w-full max-w-[600px] text-center text-muted-foreground text-lg md:text-xl font-medium leading-relaxed">
            Tailored platforms for students, teachers, and administrators
          </p>
        </motion.div>

        <Tabs defaultValue="student" className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <TabsList className="glass-strong w-full max-w-2xl mx-auto grid grid-cols-3 h-auto mb-16 p-2">
              <TabsTrigger
                value="student"
                className="text-base py-4 data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary/20 data-[state=active]:to-primary/10 transition-all duration-300"
              >
                Students & Parents
              </TabsTrigger>
              <TabsTrigger
                value="teacher"
                className="text-base py-4 data-[state=active]:bg-gradient-to-r data-[state=active]:from-secondary/20 data-[state=active]:to-secondary/10 transition-all duration-300"
              >
                Teachers
              </TabsTrigger>
              <TabsTrigger
                value="admin"
                className="text-base py-4 data-[state=active]:bg-gradient-to-r data-[state=active]:from-accent/20 data-[state=active]:to-accent/10 transition-all duration-300"
              >
                Admin
              </TabsTrigger>
            </TabsList>
          </motion.div>

          <TabsContent value="student" className="mt-0">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {studentFeatures.map((feature, index) => (
                <FeatureCard key={index} {...feature} index={index} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="teacher" className="mt-0">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teacherFeatures.map((feature, index) => (
                <FeatureCard key={index} {...feature} index={index} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="admin" className="mt-0">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {adminFeatures.map((feature, index) => (
                <FeatureCard key={index} {...feature} index={index} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default FeaturesSection;
