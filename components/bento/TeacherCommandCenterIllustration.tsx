"use client"

import type React from "react"

const TeacherCommandCenterIllustration: React.FC = () => {
  const themeVars = {
    "--tcc-primary": "hsl(var(--primary))",
    "--tcc-bg": "hsl(var(--background) / 0.7)",
    "--tcc-card-bg": "hsl(var(--background) / 0.5)",
    "--tcc-text": "hsl(var(--foreground))",
    "--tcc-border": "hsl(var(--border))",
    "--tcc-glow": "hsl(var(--primary) / 0.6)",
  }

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        background: "transparent",
        ...themeVars,
      }}
      aria-label="Teacher Command Center futuristic illustration"
    >
      {/* Main Central Panel */}
      <div
        style={{
          position: "absolute",
          top: "45px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "420px",
          height: "230px",
          borderRadius: "14px",
          background: "var(--tcc-bg)",
          backdropFilter: "blur(12px)",
          border: "1px solid var(--tcc-border)",
          boxShadow: "0 0 40px var(--tcc-glow)",
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
            fontSize: "15px",
            fontWeight: 600,
            color: "var(--tcc-text)",
            marginBottom: "12px",
          }}
        >
          Class Dashboard
        </div>

        {/* Analytics Bar */}
        <div
          style={{
            height: "50px",
            width: "100%",
            borderRadius: "10px",
            background: "var(--tcc-card-bg)",
            border: "1px solid var(--tcc-border)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            marginBottom: "14px",
          }}
        >
          {[
            { label: "Present", value: "92%", color: "var(--tcc-primary)" },
            { label: "Assignments", value: "12", color: "var(--tcc-text)" },
            { label: "Exams", value: "3", color: "var(--tcc-text)" },
          ].map((item, index) => (
            <div key={index} style={{ textAlign: "center" }}>
              <div
                style={{
                  fontSize: "13px",
                  fontWeight: 600,
                  color: item.color,
                  fontFamily: "'Geist', sans-serif",
                }}
              >
                {item.value}
              </div>
              <div
                style={{
                  fontSize: "10px",
                  opacity: 0.7,
                  color: "var(--tcc-text)",
                }}
              >
                {item.label}
              </div>
            </div>
          ))}
        </div>

        {/* Timeline Section */}
        <div
          style={{
            flexGrow: 1,
            borderRadius: "10px",
            background: "var(--tcc-card-bg)",
            border: "1px solid var(--tcc-border)",
            padding: "10px",
            overflow: "hidden",
            fontFamily: "'Geist', sans-serif",
            fontSize: "11px",
            color: "var(--tcc-text)",
            display: "flex",
            flexDirection: "column",
            gap: "8px",
          }}
        >
          <div>• 10:00 AM — Math Class</div>
          <div>• 12:00 PM — Assignment Review</div>
          <div>• 02:00 PM — Parent Meeting</div>
        </div>
      </div>

      {/* Floating Attendance Panel */}
      <div
        style={{
          position: "absolute",
          top: "50px",
          left: "calc(50% - 260px)",
          transform: "translate(10%,-50%)",
          width: "210px",
          height: "140px",
          borderRadius: "12px",
          background: "var(--tcc-card-bg)",
          backdropFilter: "blur(10px)",
          border: "1px solid var(--tcc-border)",
          boxShadow: "0 0 25px var(--tcc-glow)",
          padding: "14px",
        }}
      >
        <div
          style={{
            fontSize: "12px",
            fontWeight: 600,
            color: "var(--tcc-text)",
            marginBottom: "10px",
          }}
        >
          Attendance
        </div>

        {/* Progress Bar */}
        <div
          style={{
            width: "100%",
            height: "6px",
            borderRadius: "10px",
            background: "hsl(var(--foreground) / 0.15)",
            overflow: "hidden",
            marginBottom: "8px",
          }}
        >
          <div
            style={{
              width: "92%",
              height: "100%",
              background: "var(--tcc-primary)",
            }}
          />
        </div>

        <div style={{ fontSize: "11px", color: "var(--tcc-text)" }}>92% present</div>
      </div>

      {/* Floating Announcement Panel */}
      <div
        style={{
          position: "absolute",
          top: "175px",
          left: "calc(50% - 260px)",
          transform: "translate(30%,40%)",
          width: "210px",
          height: "120px",
          borderRadius: "12px",
          background: "var(--tcc-card-bg)",
          backdropFilter: "blur(10px)",
          border: "1px solid var(--tcc-border)",
          boxShadow: "0 0 25px var(--tcc-glow)",
          padding: "14px",
        }}
      >
        <div
          style={{
            fontSize: "12px",
            fontWeight: 600,
            color: "var(--tcc-text)",
            marginBottom: "8px",
          }}
        >
          Announcements
        </div>

        <div style={{ fontSize: "11px", opacity: 0.8 }}>
          • Homework due Friday  
          • Test next Monday
        </div>
      </div>

      {/* Floating Students Panel */}
      <div
        style={{
          position: "absolute",
          top: "95px",
          left: "calc(50% + 260px)",
          transform: "translate(-90%,40%)",
          width: "210px",
          height: "180px",
          borderRadius: "12px",
          background: "var(--tcc-card-bg)",
          backdropFilter: "blur(10px)",
          border: "1px solid var(--tcc-border)",
          boxShadow: "0 0 25px var(--tcc-glow)",
          padding: "14px",
          display: "flex",
          flexDirection: "column",
          gap: "6px",
        }}
      >
        <div
          style={{
            fontSize: "12px",
            fontWeight: 600,
            color: "var(--tcc-text)",
          }}
        >
          Quick Actions
        </div>

        {["Mark Attendance", "Assign Homework", "Start Live Class"].map((txt, i) => (
          <div
            key={i}
            style={{
              padding: "6px 10px",
              background: "hsl(var(--primary) / 0.12)",
              borderRadius: "8px",
              border: "1px solid hsl(var(--primary) / 0.4)",
              fontSize: "11px",
              color: "var(--tcc-primary)",
              fontWeight: 500,
              cursor: "pointer",
              transition: "0.2s",
            }}
          >
            {txt}
          </div>
        ))}
      </div>
    </div>
  )
}

export default TeacherCommandCenterIllustration
