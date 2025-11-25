"use client"

import { AnimatedSection } from "@/components/animated-section"
import { motion } from "framer-motion"

export default function ContactPageComponent() {
  return (
    <div className="min-h-screen w-full py-20 px-6 md:px-12 lg:px-20 bg-background text-foreground">

      {/* HERO */}
      <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
          Get in Touch
        </h1>
        <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
          We're here to help with anything — product demos, support, pricing, business enquiries.
        </p>
      </AnimatedSection>

      {/* GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* FORM SECTION */}
        <AnimatedSection delay={0.2}>
          <div className="rounded-xl border border-border bg-card p-8 shadow-sm">
            <h2 className="text-2xl font-semibold mb-6">Send us a message</h2>

            <form className="space-y-5">
              <div>
                <label className="text-sm font-medium">Full Name</label>
                <input
                  type="text"
                  className="w-full mt-1 px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-ring"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="text-sm font-medium">Email Address</label>
                <input
                  type="email"
                  className="w-full mt-1 px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-ring"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="text-sm font-medium">Message</label>
                <textarea
                  rows={5}
                  className="w-full mt-1 px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-ring"
                  placeholder="How can we help?"
                />
              </div>

              <button className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-medium hover:opacity-90 transition">
                Submit
              </button>
            </form>
          </div>
        </AnimatedSection>

        {/* CONTACT INFO SIDEBAR */}
        <AnimatedSection delay={0.3}>
          <div className="flex flex-col gap-8">

            {/* CARD 1 */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="rounded-xl border border-border bg-card p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold">📧 Email</h3>
              <p className="text-muted-foreground mt-1">support@yourdomain.com</p>
            </motion.div>

            {/* CARD 2 */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="rounded-xl border border-border bg-card p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold">📞 Phone</h3>
              <p className="text-muted-foreground mt-1">+91 98765 43210</p>
            </motion.div>

            {/* CARD 3 */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="rounded-xl border border-border bg-card p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold">📍 Office Location</h3>
              <p className="text-muted-foreground mt-1">Connaught Place, New Delhi, India</p>
            </motion.div>

          </div>
        </AnimatedSection>

      </div>

      {/* MAP SECTION */}
      <AnimatedSection delay={0.4} className="mt-20">
        <div className="rounded-xl overflow-hidden border border-border w-full h-[350px] shadow-sm">
          <iframe
            className="w-full h-full"
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.0887457312946!2d77.22002527542576!3d28.628901875652695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd383e01fa11%3A0xa0a9fbdc401e8c52!2sConnaught%20Place!5e0!3m2!1sen!2sin!4v1716001297990"
          ></iframe>
        </div>
      </AnimatedSection>
    </div>
  )
}
