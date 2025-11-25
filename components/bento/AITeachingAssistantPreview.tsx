"use client"

import React from "react"
import { Brain, MessageSquare, Sparkles, Timer, Wand2 } from "lucide-react"

const AITeachingAssistantPreview: React.FC = () => {
  return (
    <div className="w-full h-full relative flex items-center justify-center">
      
      {/* Glow Background */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-indigo-500/10 to-cyan-400/10 blur-3xl" />

      {/* Central AI Brain Orb */}
      <div className="absolute w-44 h-44 rounded-full border border-primary/40 backdrop-blur-md flex items-center justify-center shadow-[0_0_30px_rgba(0,200,255,0.3)] animate-pulse">
        <Brain className="w-12 h-12 text-primary" />
      </div>

      {/* Rotating Outer Ring */}
      <div className="absolute w-64 h-64 rounded-full border border-primary/20 animate-[spin_18s_linear_infinite]" />

      {/* Floating Widgets */}

      {/* Auto Lesson Plans */}
      <div className="absolute top-8 left-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-2.5 flex flex-col items-start shadow-md">
        <div className="flex items-center gap-1">
          <Wand2 className="w-4 h-4 text-primary" />
          <p className="text-xs text-muted-foreground">Auto-Lesson Plan</p>
        </div>
        <p className="text-sm font-semibold">Generated ✓</p>
      </div>

      {/* Smart Replies */}
      <div className="absolute bottom-10 left-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-2 shadow-md">
        <div className="flex items-center gap-1">
          <MessageSquare className="w-4 h-4 text-primary" />
          <p className="text-sm">Smart Replies Ready</p>
        </div>
      </div>

      {/* AI Suggestions */}
      <div className="absolute bottom-8 right-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-2 shadow-md">
        <div className="flex items-center gap-1">
          <Sparkles className="w-4 h-4 text-primary" />
          <p className="text-sm">Suggestions: 4</p>
        </div>
      </div>

      {/* Time Saver */}
      <div className="absolute top-8 right-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-2.5 shadow-md">
        <div className="flex items-center gap-1">
          <Timer className="w-4 h-4 text-primary" />
          <p className="text-sm">Saved: 32 min</p>
        </div>
      </div>

    </div>
  )
}

export default AITeachingAssistantPreview
