"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(true);

  const pricingPlans = [
    {
      name: "VidyaSetu Basic",
      monthlyPrice: "₹0",
      annualPrice: "₹0",
      description: "Perfect for small schools starting their digital journey.",
      features: [
        "Upto 100 students",
        "Basic student & teacher records",
        "Attendance management",
        "Homework & announcements",
        "Mobile app access for parents",
        "Basic reports",
        "Email support",
      ],
      buttonText: "Get Started",
      buttonClass:
        "bg-zinc-300 shadow-[0px_1px_1px_-0.5px_rgba(16,24,40,0.20)] outline outline-0.5 outline-[#1e29391f] outline-offset-[-0.5px] text-gray-800 text-shadow-[0px_1px_1px_rgba(16,24,40,0.08)] hover:bg-zinc-400",
    },

    {
      name: "VidyaSetu Smart",
      monthlyPrice: "₹999",
      annualPrice: "₹799", // per month (₹9,588 yearly)
      description:
        "Most popular. Ideal for schools needing advanced automation.",
      features: [
        "Unlimited students",
        "Digital attendance (web + mobile)",
        "Smart ID cards & QR attendance",
        "Fees management + online payments",
        "Exam & results automation",
        "Transport & GPS tracking integration",
        "Staff payroll & HR tools",
        "AI-powered report insights",
        "AI homework generator",
        "Custom school branding",
        "Priority support",
      ],
      buttonText: "Join Now",
          buttonClass:
            "bg-primary-foreground shadow-[0px_1px_1px_-0.5px_rgba(16,24,40,0.20)] text-primary text-shadow-[0px_1px_1px_rgba(16,24,40,0.08)] hover:bg-primary-foreground/90",
      popular: true,
    },

    {
      name: "VidyaSetu Enterprise",
      monthlyPrice: "₹4999",
      annualPrice: "₹3999", // per month (₹47,988 yearly)
      description: "For large institutions with custom workflows.",
      features: [
        "Everything in Pro +",
        "Multi-branch management",
        "Dedicated account manager",
        "Custom dashboards & workflows",
        "Advanced AI analytics",
        "Biometric attendance integration",
        "Government compliance automation",
        "Offline mode support",
        "White-label mobile apps",
        "24/7 premium support",
        "SLA uptime guarantee",
      ],
      buttonText: "Talk to Sales",
      buttonClass:
        "bg-secondary shadow-[0px_1px_1px_-0.5px_rgba(16,24,40,0.20)] text-secondary-foreground text-shadow-[0px_1px_1px_rgba(16,24,40,0.08)] hover:bg-secondary/90",
    },
  ];

  return (
    <section className="w-full px-5 overflow-hidden flex flex-col justify-start items-center my-0 py-8 md:py-14">
      <div className="self-stretch relative flex flex-col justify-center items-center gap-2 py-0">
        <div className="flex flex-col justify-start items-center gap-4">
          <h2 className="text-center text-foreground text-4xl md:text-5xl font-semibold leading-tight md:leading-[40px]">
            Pricing built for every developer
          </h2>
          <p className="self-stretch text-center text-muted-foreground text-sm font-medium leading-tight">
            Choose a plan that fits your coding workflow, from individuals
            starting out to <br /> growing professionals and large
            organizations.
          </p>
        </div>
        <div className="pt-4">
          <div className="p-0.5 bg-muted rounded-lg outline outline-1 outline-[#0307120a] outline-offset-[-1px] flex justify-start items-center gap-1 md:mt-0">
            <button
              onClick={() => setIsAnnual(true)}
              className={`pl-2 pr-1 py-1 flex justify-start items-start gap-2 rounded-md ${
                isAnnual
                  ? "bg-accent shadow-[0px_1px_1px_-0.5px_rgba(0,0,0,0.08)]"
                  : ""
              }`}
            >
              <span
                className={`text-center text-sm font-medium leading-tight ${
                  isAnnual ? "text-accent-foreground" : "text-zinc-400"
                }`}
              >
                Annually
              </span>
            </button>
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-2 py-1 flex justify-start items-start rounded-md ${
                !isAnnual
                  ? "bg-accent shadow-[0px_1px_1px_-0.5px_rgba(0,0,0,0.08)]"
                  : ""
              }`}
            >
              <span
                className={`text-center text-sm font-medium leading-tight ${
                  !isAnnual ? "text-accent-foreground" : "text-zinc-400"
                }`}
              >
                Monthly
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="self-stretch px-5 flex flex-col md:flex-row justify-start items-start gap-4 md:gap-6 mt-6 max-w-[1100px] mx-auto">
        {pricingPlans.map((plan) => (
          <div
            key={plan.name}
            className={`flex-1 p-4 overflow-hidden rounded-xl flex flex-col justify-start items-start gap-6 ${
              plan.popular
                ? "bg-primary shadow-[0px_4px_8px_-2px_rgba(0,0,0,0.10)]"
                : "bg-gradient-to-b from-gray-50/5 to-gray-50/0"
            }`}
            style={
              plan.popular
                ? {}
                : {
                    outline: "1px solid hsl(var(--border))",
                    outlineOffset: "-1px",
                  }
            }
          >
            <div className="self-stretch flex flex-col justify-start items-start gap-6">
              <div className="self-stretch flex flex-col justify-start items-start gap-8">
                <div
                  className={`w-full h-5 text-sm font-medium leading-tight ${
                    plan.popular ? "text-primary-foreground" : "text-zinc-200"
                  }`}
                >
                  {plan.name}
                  {plan.popular && (
                    <div className="ml-2 px-2 overflow-hidden rounded-full justify-center items-center gap-2.5 inline-flex mt-0 py-0.5 bg-gradient-to-b from-primary-light/50 to-primary-light bg-white">
                      <div className="text-center text-primary-foreground text-xs font-normal leading-tight break-words">
                        Popular
                      </div>
                    </div>
                  )}
                </div>
                <div className="self-stretch flex flex-col justify-start items-start gap-1">
                  <div className="flex justify-start items-center gap-1.5">
                    <div
                      className={`relative h-10 flex items-center text-3xl font-medium leading-10 ${
                        plan.popular
                          ? "text-primary-foreground"
                          : "text-zinc-50"
                      }`}
                    >
                      <span className="invisible">
                        {isAnnual ? plan.annualPrice : plan.monthlyPrice}
                      </span>
                      <span
                        className="absolute inset-0 flex items-center transition-all duration-500"
                        style={{
                          opacity: isAnnual ? 1 : 0,
                          transform: `scale(${isAnnual ? 1 : 0.8})`,
                          filter: `blur(${isAnnual ? 0 : 4}px)`,
                        }}
                        aria-hidden={!isAnnual}
                      >
                        {plan.annualPrice}
                      </span>
                      <span
                        className="absolute inset-0 flex items-center transition-all duration-500"
                        style={{
                          opacity: !isAnnual ? 1 : 0,
                          transform: `scale(${!isAnnual ? 1 : 0.8})`,
                          filter: `blur(${!isAnnual ? 0 : 4}px)`,
                        }}
                        aria-hidden={isAnnual}
                      >
                        {plan.monthlyPrice}
                      </span>
                    </div>
                    <div
                      className={`text-center text-sm font-medium leading-tight ${
                        plan.popular
                          ? "text-primary-foreground/70"
                          : "text-zinc-400"
                      }`}
                    >
                      /month
                    </div>
                  </div>
                  <div
                    className={`self-stretch text-sm font-medium leading-tight ${
                      plan.popular
                        ? "text-primary-foreground/70"
                        : "text-zinc-400"
                    }`}
                  >
                    {plan.description}
                  </div>
                </div>
              </div>
              <Button
                className={`self-stretch px-5 py-2 rounded-[40px] flex justify-center items-center ${plan.buttonClass}`}
              >
                <div className="px-1.5 flex justify-center items-center gap-2">
                  <span
                    className={`text-center text-sm font-medium leading-tight ${
                      plan.name === "Free"
                        ? "text-gray-800"
                        : plan.name === "VidyaSetu Smart"
                        ? "text-primary"
                        : "text-zinc-950"
                    }`}
                  >
                    {plan.buttonText}
                  </span>
                </div>
              </Button>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start gap-4">
              <div
                className={`self-stretch text-sm font-medium leading-tight ${
                  plan.popular
                    ? "text-primary-foreground/70"
                    : "text-muted-foreground"
                }`}
              >
                {plan.name === "Free"
                  ? "Get Started today:"
                  : "Everything in Free +"}
              </div>
              <div className="self-stretch flex flex-col justify-start items-start gap-3">
                {plan.features.map((feature) => (
                  <div
                    key={feature}
                    className="self-stretch flex justify-start items-center gap-2"
                  >
                    <div className="w-4 h-4 flex items-center justify-center">
                      <Check
                        className={`w-full h-full ${
                          plan.popular
                            ? "text-primary-foreground"
                            : "text-muted-foreground"
                        }`}
                        strokeWidth={2}
                      />
                    </div>
                    <div
                      className={`leading-tight font-normal text-sm text-left ${
                        plan.popular
                          ? "text-primary-foreground"
                          : "text-muted-foreground"
                      }`}
                    >
                      {feature}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


export const pricingPlans = [
  {
    id: "basic",
    name: "VidyaSetu Basic",
    price: 0,
    studentLimit: 50,
    description: "Perfect for onboarding and trying the platform.",
    features: {
      included: [
        "Dashboard preview (limited features)",
        "Student & Staff directory (read-only)",
        "Static timetable",
        "Basic announcements",
        "Mobile app (read-only access)"
      ],
      excluded: [
        "Attendance",
        "Fees Management",
        "Exam Management",
        "Report Cards",
        "WhatsApp Alerts",
        "AI Features"
      ]
    }
  },

  {
    id: "plus",
    name: "VidyaSetu Plus",
    price: 999, // monthly or annual discount you can modify
    studentLimit: 500,
    description: "Best for small schools starting digital operations.",
    features: {
      included: [
        "Everything in Basic",
        "Student & Staff Attendance",
        "Homework Uploads",
        "Digital Notice Board",
        "Online Parent Communication",
        "Basic PDF Report Cards",
        "Custom Roles & Permissions",
        "Email Support"
      ],
      upgradeTriggers: [
        "Schools want automated fees",
        "Schools want exam management",
        "Schools want WhatsApp alerts",
        "Schools want AI features"
      ]
    }
  },

  {
    id: "smart",
    name: "VidyaSetu Smart",
    price: 2499,
    studentLimit: "Unlimited",
    description: "Perfect for growing schools that need full automation.",
    features: {
      included: [
        "Everything in Plus",
        "Complete Fees Management",
        "Online Payment Gateway",
        "Exam Management & Mark Entry",
        "AI Report Card Generator",
        "AI Chat Assistant",
        "WhatsApp Alerts (Attendance, Fees, Homework)",
        "Staff Payroll",
        "Event & Transport Management",
        "Smart Analytics Dashboard",
        "Priority Support"
      ],
      upgradeTriggers: [
        "Schools want multi-branch control",
        "Schools want advanced AI automation",
        "Schools need government-compliant reporting"
      ]
    }
  },

  {
    id: "enterprise",
    name: "VidyaSetu Enterprise",
    price: "Custom",
    studentLimit: "Unlimited",
    description: "For large institutions, chains, and government bodies.",
    features: {
      included: [
        "Everything in Smart",
        "Multi-Branch Management",
        "Dedicated Secure Server",
        "Gov-Compliant Reports",
        "Deep Analytics & AI Insights",
        "Custom Workflows",
        "White Label Branded App",
        "Dedicated Account Manager",
        "24/7 Support with SLA"
      ]
    }
  }
];

export const addons = [
  { id: "ai-assistant", name: "AI Teacher Assistant", price: 499 },
  { id: "ai-qp", name: "AI Question Paper Generator", price: 399 },
  { id: "gps", name: "Transport GPS Tracking", price: 199 },
  { id: "biometric", name: "Biometric Attendance Integration", price: 299 },
  { id: "hostel", name: "Hostel Management Module", price: 249 },
  { id: "videos", name: "Learning Content & Videos", price: 149 },
  { id: "white-label", name: "Custom Branded Mobile App", price: 999 },
  { id: "whatsapp", name: "WhatsApp Packs (Pay-per-message)", price: "Variable" }
];
