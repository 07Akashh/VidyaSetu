"use client"

import type React from "react"

const OneClickIntegrationsIllustration: React.FC = () => {
  const themeVars = {
    "--learn-primary": "hsl(var(--primary))",
    "--learn-bg-card": "hsl(var(--background) / 0.75)",
    "--learn-text": "hsl(var(--foreground))",
    "--learn-border": "hsl(var(--border))",
    "--learn-accent": "hsl(var(--primary))",
  }

  return (
    <div
      style={
        {
          width: "100%",
          height: "100%",
          position: "relative",
          background: "transparent",
          ...themeVars,
        } as React.CSSProperties
      }
      aria-label="Learning and Exams Suite illustration"
    >
      {/* Main Study Panel */}
      <div
        style={{
          position: "absolute",
          top: "40px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "380px",
          height: "230px",
          borderRadius: "12px",
          background: "var(--learn-bg-card)",
          backdropFilter: "blur(10px)",
          border: "1px solid var(--learn-border)",
          padding: "16px",
          display: "flex",
          flexDirection: "column",
          boxSizing: "border-box",
        }}
      >
        {/* Header */}
        <div
          style={{
            fontFamily: "'Geist', sans-serif",
            fontSize: "14px",
            fontWeight: 600,
            color: "var(--learn-text)",
            marginBottom: "10px",
          }}
        >
          Study Notes
        </div>

        {/* Sample Notes */}
        <div
          style={{
            flexGrow: 1,
            background: "hsl(var(--background) / 0.4)",
            borderRadius: "8px",
            border: "1px solid var(--learn-border)",
            padding: "10px",
            fontFamily: "'Geist Mono','SF Mono',monospace",
            fontSize: "11px",
            color: "var(--learn-text)",
            lineHeight: "16px",
            overflow: "hidden",
          }}
        >
          • Photosynthesis converts light energy into chemical energy.{"\n"}
          • The process occurs inside chloroplasts.{"\n"}
          • Oxygen is released as a byproduct.
        </div>
      </div>

      {/* Exam Panel – MCQ Practice */}
      <div
        style={{
          position: "absolute",
          top: "45px",
          left: "calc(50% + 210px)",
          transform: "translateX(-50%)",
          width: "230px",
          height: "230px",
          borderRadius: "12px",
          background: "var(--learn-bg-card)",
          backdropFilter: "blur(10px)",
          border: "1px solid var(--learn-border)",
          padding: "16px",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            fontFamily: "'Geist', sans-serif",
            fontSize: "14px",
            fontWeight: 600,
            color: "var(--learn-text)",
            marginBottom: "12px",
          }}
        >
          Quick Quiz
        </div>

        {/* MCQ Options */}
        {["Leaf", "Stem", "Flower", "Root"].map((opt, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "8px",
            }}
          >
            <div
              style={{
                width: "14px",
                height: "14px",
                borderRadius: "50%",
                border: "2px solid var(--learn-accent)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {i === 0 && (
                <div
                  style={{
                    width: "7px",
                    height: "7px",
                    background: "var(--learn-accent)",
                    borderRadius: "50%",
                  }}
                />
              )}
            </div>
            <span
              style={{
                fontSize: "12px",
                color: "var(--learn-text)",
                fontFamily: "'Geist', sans-serif",
              }}
            >
              {opt}
            </span>
          </div>
        ))}
      </div>

      {/* Exam Certificate Panel */}
      <div
        style={{
          position: "absolute",
          bottom: "35px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "260px",
          height: "130px",
          borderRadius: "12px",
          background: "var(--learn-bg-card)",
          backdropFilter: "blur(10px)",
          border: "1px solid var(--learn-border)",
          padding: "16px",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <div
          style={{
            fontFamily: "'Geist', sans-serif",
            fontSize: "14px",
            fontWeight: 600,
            color: "var(--learn-text)",
          }}
        >
          Exam Score
        </div>

        <div
          style={{
            fontSize: "36px",
            fontWeight: 700,
            color: "var(--learn-accent)",
            fontFamily: "'Geist', sans-serif",
            textAlign: "center",
            marginTop: "6px",
          }}
        >
          92%
        </div>
      </div>
    </div>
  )
}

export default OneClickIntegrationsIllustration
