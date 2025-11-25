"use client";

import type React from "react";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    question: "What is VidyaSetu and who is it for?",
    answer:
      "VidyaSetu is an AI-powered school management ecosystem designed for Indian schools, colleges, and coaching institutes. It helps administrators manage operations efficiently, empowers teachers with smart tools, keeps parents connected, and improves student learning outcomes.",
  },
  {
    question: "How does VidyaSetu's AI attendance system work?",
    answer:
      "VidyaSetu supports multiple attendance verification methods including QR scanning, RFID cards, GPS-based photo attendance, and AI-powered face recognition. Schools get real-time reports, while parents receive instant notifications for every check-in and check-out.",
  },
  {
    question: "Can VidyaSetu replace our existing school software?",
    answer:
      "Yes. VidyaSetu is a complete all-in-one solution covering academics, attendance, fees, transport, communication, exams, analytics, and administration. Your school can fully migrate from old systems or choose to integrate specific modules.",
  },
  {
    question: "Does VidyaSetu support online exams and evaluations?",
    answer:
      "Absolutely. VidyaSetu offers AI-powered online exams with MCQs, written answers, automated evaluation, anti-cheating features, and instant result generation. Teachers can also create question papers using AI suggestions.",
  },
  {
    question: "How does VidyaSetu help parents?",
    answer:
      "Parents receive real-time alerts for attendance, homework, fees, transport GPS tracking, announcements, and academic performance. VidyaSetu acts as a single parent app to stay connected with the school at all times.",
  },
  {
    question: "Is our school data secure with VidyaSetu?",
    answer:
      "Yes. VidyaSetu uses enterprise-level encryption, secure cloud storage, OTP verification, and role-based access control. All data stays protected, and only authorized personnel can view sensitive information. We also support on-premise deployment for institutions with strict compliance needs.",
  },
  {
    question: "Can VidyaSetu be customized for our school?",
    answer:
      "Yes. Every module—from attendance and fees to transport and exams—can be customized according to your institution’s workflow. Branding, features, and permissions can be tailored to match your exact needs.",
  },
  {
    question: "Does VidyaSetu support multiple campuses?",
    answer:
      "Yes. VidyaSetu includes multi-branch management where administrators can manage students, staff, fees, reports, and analytics for all branches from one centralized dashboard.",
  },
  {
    question: "Is VidyaSetu easy for teachers to use?",
    answer:
      "VidyaSetu is built with a teacher-first approach. Teachers get a simple and intuitive dashboard to mark attendance, assign homework, check submissions, manage exams, communicate with parents, and track class performance in seconds.",
  },
  {
    question: "How can our school get started with VidyaSetu?",
    answer:
      "Your school can book a free demo, and our onboarding team will help you with setup, data import, training, and full platform activation—usually within 48 hours.",
  },
];

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQItem = ({ question, answer, isOpen, onToggle }: FAQItemProps) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onToggle();
  };
  return (
    <div
      className={`w-full bg-[rgba(231,236,235,0.08)] shadow-[0px_2px_4px_rgba(0,0,0,0.16)] overflow-hidden rounded-[10px] outline outline-1 outline-border outline-offset-[-1px] transition-all duration-500 ease-out cursor-pointer`}
      onClick={handleClick}
    >
      <div className="w-full px-5 py-[18px] pr-4 flex justify-between items-center gap-5 text-left transition-all duration-300 ease-out">
        <div className="flex-1 text-foreground text-base font-medium leading-6 break-words">
          {question}
        </div>
        <div className="flex justify-center items-center">
          <ChevronDown
            className={`w-6 h-6 text-muted-foreground-dark transition-all duration-500 ease-out ${
              isOpen ? "rotate-180 scale-110" : "rotate-0 scale-100"
            }`}
          />
        </div>
      </div>
      <div
        className={`overflow-hidden transition-all duration-500 ease-out ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{
          transitionProperty: "max-height, opacity, padding",
          transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <div
          className={`px-5 transition-all duration-500 ease-out ${
            isOpen ? "pb-[18px] pt-2 translate-y-0" : "pb-0 pt-0 -translate-y-2"
          }`}
        >
          <div className="text-foreground/80 text-sm font-normal leading-6 break-words">
            {answer}
          </div>
        </div>
      </div>
    </div>
  );
};

export function FAQSection() {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());
  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };
  return (
    <section className="w-full pt-[66px] pb-20 md:pb-40 px-5 relative flex flex-col justify-center items-center">
      <div className="w-[300px] h-[500px] absolute top-[150px] left-1/2 -translate-x-1/2 origin-top-left rotate-[-33.39deg] bg-primary/10 blur-[100px] z-0" />
      <div className="self-stretch pt-8 pb-8 md:pt-14 md:pb-14 flex flex-col justify-center items-center gap-2 relative z-10">
        <div className="flex flex-col justify-start items-center gap-4">
          <h2 className="w-full max-w-[435px] text-center text-foreground text-4xl font-semibold leading-10 break-words">
            Frequently Asked Questions
          </h2>
          <p className="self-stretch text-center text-muted-foreground text-sm font-medium leading-[18.20px] break-words">
            Everything you need to know about VidyaSetu and how it can transform
            your school’s entire management system.{" "}
          </p>
        </div>
      </div>
      <div className="w-full max-w-[600px] pt-0.5 pb-10 flex flex-col justify-start items-start gap-4 relative z-10">
        {faqData.map((faq, index) => (
          <FAQItem
            key={index}
            {...faq}
            isOpen={openItems.has(index)}
            onToggle={() => toggleItem(index)}
          />
        ))}
      </div>
    </section>
  );
}
