"use client";

import { TrendingUp, Calendar, Zap, Clock } from "lucide-react";

export default function SmartDashboardGrid() {
  return (
    <div className="w-[90%] h-[90%] flex flex-col justify-between p-4 border-2 m-auto rounded-xl">
      {/* Top Row - Metrics */}
      <div className="grid grid-cols-2 gap-2 mb-3">
        {/* GPA Card */}
        <div className="bg-white/10 border rounded-lg p-3 backdrop-blur-sm hover:border-white/20 transition-colors">
          <div className="flex items-center gap-1.5 mb-1">
            <TrendingUp className="w-3.5 h-3.5" />
            <p className="text-xs font-medium">GPA</p>
          </div>
          <p className="text-xl font-bold">3.89</p>
          <p className="text-xs">↑ 0.12</p>
        </div>

        {/* Attendance */}
        <div className="bg-white/10 border rounded-lg p-3 backdrop-blur-sm hover:border-white/20 transition-colors">
          <div className="flex items-center gap-1.5 mb-1">
            <Calendar className="w-3.5 h-3.5 " />
            <p className="text-xs font-medium">Attendance</p>
          </div>
          <p className="text-xl font-bold ">96%</p>
          <p className="text-xs">19/20</p>
        </div>
      </div>

      {/* Middle Row - Metrics */}
      <div className="grid grid-cols-2 gap-2 mb-3">
        {/* Study Streak */}
        <div className="bg-white/10  border rounded-lg p-3 backdrop-blur-sm hover:border-white/20 transition-colors">
          <div className="flex items-center gap-1.5 mb-1">
            <Zap className="w-3.5 h-3.5 " />
            <p className="text-xs  font-medium">Streak</p>
          </div>
          <p className="text-xl font-bold ">12 Days</p>
          <p className="text-xs 0">Keep it up!</p>
        </div>

        {/* Next Due */}
        <div className="bg-white/10 border rounded-lg p-3 backdrop-blur-sm hover:border-white/20 transition-colors">
          <div className="flex items-center gap-1.5 mb-1">
            <Clock className="w-3.5 h-3.5 " />
            <p className="text-xs font-medium">Due Soon</p>
          </div>
          <p className="text-lg font-bold ">Math Exam</p>
          <p className="text-xs ">in 3 days</p>
        </div>
      </div>

      {/* Bottom - Progress Bar */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium text-slate-300">Study Time</span>
          <span className="text-xs text-slate-400">3h / 4h</span>
        </div>
        <div className="w-full bg-slate-800/50 rounded-full h-1.5 border border-slate-700/50 overflow-hidden">
          <div
            className="h-full bg-white/40 rounded-full shadow-lg"
            style={{ width: "75%" }}
          />
        </div>
      </div>
    </div>
  );
}
