import { ImageResponse } from "next/og";
import { getSiteUrl } from "@/lib/site";

export const alt = "Amr Naseem — Frontend Developer portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: 80,
          background: "linear-gradient(135deg, #0f0f12 0%, #1a1a22 45%, #111827 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 24,
          }}
        >
          <div
            style={{
              width: 12,
              height: 56,
              borderRadius: 6,
              background: "#4f46e5",
            }}
          />
          <span
            style={{
              fontSize: 28,
              fontWeight: 600,
              color: "#a5b4fc",
              letterSpacing: "0.02em",
            }}
          >
            Portfolio
          </span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 12,
          }}
        >
          <div
            style={{
              fontSize: 64,
              fontWeight: 700,
              color: "#f9fafb",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
            }}
          >
            Amr Naseem
          </div>
          <div
            style={{
              fontSize: 36,
              fontWeight: 500,
              color: "#9ca3af",
              lineHeight: 1.2,
            }}
          >
            Frontend Developer
          </div>
        </div>
        <div
          style={{
            marginTop: 48,
            fontSize: 22,
            color: "#6b7280",
            maxWidth: 720,
            lineHeight: 1.4,
          }}
        >
          React, TypeScript & Next.js — polished interfaces and production-ready web apps.
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 48,
            left: 80,
            fontSize: 18,
            color: "#4b5563",
          }}
        >
          {getSiteUrl().replace(/^https?:\/\//, "")}
        </div>
      </div>
    ),
    { ...size },
  );
}
