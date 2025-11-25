import React from "react";
import { Shield, Users2, Building2, Activity, Grip, Radar } from "lucide-react";

export default function InstitutionControlPanelIllustration() {
  return (
    <div className="relative w-[95%] h-[95%] m-auto flex items-center justify-center bg-white/10 rounded-3xl border border-white/10 shadow-xl overflow-hidden">

      {/* Floating Glow Orbs */}
      <div className="absolute w-40 h-40 bg-blue-500/10 blur-3xl rounded-full top-4 left-6" />
      <div className="absolute w-32 h-32 bg-purple-500/10 blur-3xl rounded-full bottom-6 right-6" />

      {/* Central Control Panel */}
      <div className="relative z-10 flex flex-col items-center space-y-4">
        
        <div className="w-[260px] h-[150px] bg-white/5 rounded-xl border border-white/10 backdrop-blur-md shadow-md flex items-center justify-center">
          <Grip className="text-white/30 w-7 h-7" />
        </div>

        {/* Round radar-like top element */}
        <div className="absolute -top-8 w-24 h-24 rounded-full bg-gradient-to-br from-blue-500/40 to-purple-500/40 border border-white/20 flex items-center justify-center backdrop-blur-md shadow-lg">
          <Radar className="text-white w-9 h-9" />
        </div>

      </div>

      {/* Left floating cards */}
      <div className="absolute left-8 flex flex-col gap-4">
        <div className="w-36 h-20 bg-white/5 border border-white/10 rounded-xl backdrop-blur-md flex flex-col items-center justify-center">
          <Users2 className="w-6 h-6 text-blue-300" />
          <p className="text-[11px] text-white/70">Students</p>
        </div>

        <div className="w-36 h-20 bg-white/5 border border-white/10 rounded-xl backdrop-blur-md flex flex-col items-center justify-center">
          <Building2 className="w-6 h-6 text-purple-300" />
          <p className="text-[11px] text-white/70">Staff</p>
        </div>
      </div>

      {/* Right floating cards */}
      <div className="absolute right-8 flex flex-col gap-4">
        <div className="w-36 h-20 bg-white/5 border border-white/10 rounded-xl backdrop-blur-md flex flex-col items-center justify-center">
          <Shield className="w-6 h-6 text-teal-300" />
          <p className="text-[11px] text-white/70">Security</p>
        </div>

        <div className="w-36 h-20 bg-white/5 border border-white/10 rounded-xl backdrop-blur-md flex flex-col items-center justify-center">
          <Activity className="w-6 h-6 text-orange-300" />
          <p className="text-[11px] text-white/70">Operations</p>
        </div>
      </div>

    </div>
  );
}
