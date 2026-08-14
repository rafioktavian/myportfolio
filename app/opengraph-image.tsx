import { ImageResponse } from "next/og";
import { profile } from "@/lib/data/profile";

export const alt = "Akhmad Rafi Oktavian portfolio preview";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0A0A0A",
          color: "#F5F3EE",
          padding: 64,
          fontFamily: "Arial, Helvetica, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: -120,
            top: 72,
            width: 650,
            height: 650,
            background: "linear-gradient(135deg, rgba(43,76,126,0.65), rgba(232,112,58,0.45), rgba(244,233,216,0.22))",
            filter: "blur(52px)",
            transform: "skew(-12deg) rotate(8deg)",
          }}
        />
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", position: "relative" }}>
          <div style={{ fontSize: 28, fontWeight: 700 }}>ARO</div>
          <div style={{ color: "#8A8A85", fontSize: 24 }}>{profile.role}</div>
        </div>
        <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: 26 }}>
          <div style={{ color: "#E8703A", fontSize: 24, letterSpacing: 4, textTransform: "uppercase" }}>
            Portfolio / System Analyst
          </div>
          <div style={{ maxWidth: 980, fontSize: 82, lineHeight: 0.92, fontWeight: 900 }}>
            {profile.name}
          </div>
          <div style={{ maxWidth: 860, color: "#F4E9D8", fontSize: 34, lineHeight: 1.18 }}>
            {profile.role}
          </div>
        </div>
        <div style={{ position: "relative", display: "flex", gap: 18, color: "#8A8A85", fontSize: 24 }}>
          <span>5+ Years of Experience</span>
          <span>/</span>
          <span>20+ Clients</span>
          <span>/</span>
          <span>Available for selected projects</span>
        </div>
      </div>
    ),
    size,
  );
}
