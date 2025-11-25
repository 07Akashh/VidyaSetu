"use client"

import React from "react"
import { LineChart, TrendingUp, BarChart3, Sparkles, Activity } from "lucide-react"

const AIInsightsDashboardPreview: React.FC = () => {
  return (
    <div className="w-full h-full relative flex items-center justify-center">
      
      {/* Soft Glow Background */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500/10 to-blue-400/10 blur-3xl" />

      {/* Central Analytics Circle */}
      <div className="absolute w-44 h-44 rounded-full border border-primary/40 backdrop-blur-md flex items-center justify-center shadow-[0_0_30px_rgba(140,90,255,0.35)] animate-pulse">
        <LineChart className="w-12 h-12 text-primary" />
      </div>

      {/* Rotating Outer Ring */}
      <div className="absolute w-64 h-64 rounded-full border border-primary/20 animate-[spin_18s_linear_infinite]" />

      {/* Floating Insight Blocks */}

      {/* Prediction */}
      <div className="absolute top-8 left-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-2.5 shadow-md flex flex-col items-start">
        <div className="flex items-center gap-1">
          <Sparkles className="w-4 h-4 text-primary" />
          <p className="text-xs text-muted-foreground">Prediction</p>
        </div>
        <p className="text-sm font-semibold">87% Accuracy</p>
      </div>

      {/* Trend Rising */}
      <div className="absolute bottom-10 left-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-2 shadow-md">
        <div className="flex items-center gap-1">
          <TrendingUp className="w-4 h-4 text-primary" />
          <p className="text-sm">Trend ↑ 12%</p>
        </div>
      </div>

      {/* Bar Overview */}
      <div className="absolute bottom-8 right-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-2 shadow-md">
        <div className="flex items-center gap-1">
          <BarChart3 className="w-4 h-4 text-primary" />
          <p className="text-sm">Performance +9%</p>
        </div>
      </div>

      {/* Live Activity */}
      <div className="absolute top-8 right-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-2.5 shadow-md">
        <div className="flex items-center gap-1">
          <Activity className="w-4 h-4 text-primary" />
          <p className="text-sm">Live Metrics</p>
        </div>
      </div>

    </div>
  )
}

export default AIInsightsDashboardPreview
