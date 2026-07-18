import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const alt = `${siteConfig.name} | AI-Powered Business Growth Partner`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        gap: 28,
        padding: "80px 96px",
        backgroundImage: "linear-gradient(135deg, #4f46e5 0%, #4338ca 45%, #1e1b4b 100%)",
        color: "#ffffff",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 88,
          height: 88,
          borderRadius: 20,
          background: "rgba(255, 255, 255, 0.16)",
          fontSize: 44,
          fontWeight: 700,
        }}
      >
        {siteConfig.shortName.charAt(0)}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 920 }}>
        <div style={{ display: "flex", fontSize: 56, fontWeight: 700, lineHeight: 1.1 }}>
          {siteConfig.name}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 30,
            fontWeight: 400,
            lineHeight: 1.4,
            color: "rgba(255, 255, 255, 0.85)",
          }}
        >
          AI-Powered Business Growth Partner
        </div>
      </div>
    </div>,
    { ...size },
  );
}
