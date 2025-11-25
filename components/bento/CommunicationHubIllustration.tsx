import React from "react";
import { MessageCircle, Radio, User, Users } from "lucide-react";
// Broadcast does not exist in lucide-react; use an alternative icon, e.g. "Megaphone"
import { Megaphone } from "lucide-react";

export default function CommunicationHubIllustration() {
  return (
    <div className="relative w-[95%] h-[95%] m-auto rounded-3xl overflow-hidden border-2 border-white/10 shadow-lg flex items-center justify-center">

      {/* Soft background waves */}
      <div className="absolute inset-0">
        <div className="absolute w-56 h-56 bg-blue-500/10 rounded-full blur-3xl -top-10 -left-6" />
        <div className="absolute w-56 h-56 bg-purple-500/10 rounded-full blur-3xl bottom-0 right-0" />
      </div>

      {/* Central Chat Node */}
      <div className="relative z-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl w-52 h-40 flex flex-col items-center justify-center shadow-xl">
        <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500/40 to-purple-500/40 border border-white/20 backdrop-blur-lg shadow-lg">
          <MessageCircle className="text-white/90 w-7 h-7" />
        </div>
        <p className="text-white/70 text-xs mt-2">Central Messaging</p>
      </div>

      {/* Connection Lines */}
      <svg className="absolute inset-0 pointer-events-none">
        <line x1="50%" y1="55%" x2="20%" y2="35%" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
        <line x1="50%" y1="55%" x2="80%" y2="35%" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
        <line x1="50%" y1="55%" x2="20%" y2="75%" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
        <line x1="50%" y1="55%" x2="80%" y2="75%" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
      </svg>

      {/* Top Left Node — Students */}
      <div className="absolute top-8 left-8 bg-white/5 px-4 py-3 rounded-xl backdrop-blur-md border border-white/10 flex flex-col items-center w-28 shadow-md">
        <Users className="w-6 h-6 text-blue-300" />
        <p className="text-[11px] text-white/70 mt-1">Students</p>
      </div>

      {/* Top Right Node — Parents */}
      <div className="absolute top-8 right-8 bg-white/5 px-4 py-3 rounded-xl backdrop-blur-md border border-white/10 flex flex-col items-center w-28 shadow-md">
        <User className="w-6 h-6 text-purple-300" />
        <p className="text-[11px] text-white/70 mt-1">Parents</p>
      </div>

      {/* Bottom Left Node — Broadcasting */}
      <div className="absolute bottom-8 left-8 bg-white/5 px-4 py-3 rounded-xl backdrop-blur-md border border-white/10 flex flex-col items-center w-28 shadow-md">
        <Megaphone className="w-6 h-6 text-pink-300" />
        <p className="text-[11px] text-white/70 mt-1">Announcements</p>
      </div>

      {/* Bottom Right Node — Alerts */}
      <div className="absolute bottom-8 right-8 bg-white/5 px-4 py-3 rounded-xl backdrop-blur-md border border-white/10 flex flex-col items-center w-28 shadow-md">
        <Radio className="w-6 h-6 text-teal-300" />
        <p className="text-[11px] text-white/70 mt-1">Instant Alerts</p>
      </div>

    </div>
  );
}
