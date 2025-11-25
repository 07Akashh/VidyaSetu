"use client"

import React from "react"
import { CheckCircle, Clock, Users, ScanFace } from "lucide-react"

const AIAttendancePreview: React.FC = () => {
  return (
    <div className="w-full h-full relative flex items-center justify-center">
      {/* Background Blur Layer */}
      <div className="absolute inset-0 rounded-xl backdrop-blur-sm  border-white/10" />

      {/* Central Face Scanner Ring */}
      <div className="absolute w-40 h-40 rounded-full border border-primary/40 backdrop-blur-md flex items-center justify-center animate-pulse">
        <ScanFace className="w-10 h-10 text-primary" />
      </div>

      {/* Outer Scanning Ring */}
      <div className="absolute w-56 h-56 rounded-full border border-primary/20 animate-[spin_12s_linear_infinite]" />

      {/* Small floating indicators */}
      <div className="absolute top-6 left-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-2 flex flex-col items-start">
        <p className="text-xs text-muted-foreground">Today’s Attendance</p>
        <p className="text-lg font-bold">96%</p>
      </div>

      <div className="absolute bottom-8 left-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-2">
        <div className="flex items-center gap-1">
          <Clock className="w-4 h-4 text-primary" />
          <p className="text-sm">Last Sync: 2m ago</p>
        </div>
      </div>

      <div className="absolute bottom-10 right-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-2">
        <div className="flex items-center gap-1">
          <Users className="w-4 h-4 text-primary" />
          <p className="text-sm">128 Present</p>
        </div>
      </div>

      <div className="absolute top-8 right-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-2">
        <div className="flex items-center gap-1">
          <CheckCircle className="w-4 h-4 text-primary" />
          <p className="text-sm">Face Match: Active</p>
        </div>
      </div>
    </div>
  )
}

export default AIAttendancePreview
