import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const alt = `${siteConfig.name} | AI-Powered Business Growth Partner`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logo = await readFile(join(process.cwd(), "public/brand/krebig-logo-wordmark.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

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
        backgroundImage: "linear-gradient(135deg, #404040 0%, #262626 45%, #0a0a0a 100%)",
        color: "#ffffff",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <img src={logoSrc} alt="" width={320} height={83} style={{ height: 83, width: 320 }} />
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
    {
      ...size,
      // This route's default `Cache-Control` is `max-age=0, must-revalidate`
      // (hardcoded by next/og for all ImageResponse routes). The image is
      // static build output, so cache it for a day while still picking up
      // content changes within a day of the next deploy.
      headers: { "cache-control": "public, max-age=86400, must-revalidate" },
    },
  );
}
