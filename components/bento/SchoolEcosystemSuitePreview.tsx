"use client"

import React from "react"
import { Bus, Building2, Wallet, BookOpen, Network } from "lucide-react"

const SchoolEcosystemSuitePreview: React.FC = () => {
  return (
    <div className="w-full h-full relative flex items-center justify-center">

      {/* Soft Glow Background */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/10 to-emerald-400/10 blur-2xl" />

      {/* Central System Core */}
      <div className="absolute w-40 h-40 rounded-full border border-primary/40 backdrop-blur-md flex items-center justify-center shadow-[0_0_25px_rgba(0,200,150,0.25)] animate-pulse">
        <Network className="w-12 h-12 text-primary" />
      </div>

      {/* Outer Rotating Ring */}
      <div className="absolute w-64 h-64 rounded-full border border-primary/20 animate-[spin_20s_linear_infinite]" />

      {/* --- Floating Ecosystem Modules --- */}

      {/* Transport */}
      <div className="absolute top-6 left-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-2.5 shadow">
        <div className="flex items-center gap-2">
          <Bus className="w-4 h-4 text-primary" />
          <p className="text-sm font-medium">Transport</p>
        </div>
      </div>

      {/* Hostel */}
      <div className="absolute bottom-8 left-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-2.5 shadow">
        <div className="flex items-center gap-2">
          <Building2 className="w-4 h-4 text-primary" />
          <p className="text-sm font-medium">Hostel</p>
        </div>
      </div>

      {/* Finance */}
      <div className="absolute bottom-8 right-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-2.5 shadow">
        <div className="flex items-center gap-2">
          <Wallet className="w-4 h-4 text-primary" />
          <p className="text-sm font-medium">Finance</p>
        </div>
      </div>

      {/* Library */}
      <div className="absolute top-8 right-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-2.5 shadow">
        <div className="flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-primary" />
          <p className="text-sm font-medium">Library</p>
        </div>
      </div>

    </div>
  )
}

export default SchoolEcosystemSuitePreview
