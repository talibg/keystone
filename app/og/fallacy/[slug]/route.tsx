import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";
import { getFallacyBySlug } from "@/lib/fallacies";

export const runtime = "edge";

export async function GET(
  _request: NextRequest,
  context: { params: Promise<{ slug: string }> },
) {
  const { slug } = await context.params;
  const fallacy = getFallacyBySlug(slug);

  if (!fallacy) {
    return new Response("Not found", { status: 404 });
  }

  return new ImageResponse(
    <div
      style={{
        fontFamily: '"Inter", system-ui, sans-serif',
        display: "flex",
        flexDirection: "column",
        width: "1200px",
        height: "630px",
        padding: "60px",
        color: "#e2e8f0",
        background:
          "linear-gradient(135deg, #0f172a 0%, #020617 50%, #0b1224 100%)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          color: "#a5b4fc",
          fontSize: 24,
          fontWeight: 700,
        }}
      ></div>
      <div style={{ marginTop: 30, fontSize: 52, fontWeight: 800 }}>
        {fallacy.name}
      </div>
      <div
        style={{
          marginTop: 12,
          fontSize: 26,
          color: "#cbd5e1",
          fontWeight: 600,
        }}
      >
        {fallacy.category.name}
      </div>
      <div
        style={{
          marginTop: 24,
          fontSize: 28,
          lineHeight: 1.4,
          color: "#cbd5e1",
          maxWidth: "950px",
        }}
      >
        {fallacy.shortDefinition}
      </div>
      <div
        style={{
          marginTop: "auto",
          display: "flex",
          gap: "12px",
          color: "#94a3b8",
          fontSize: 20,
        }}
      >
        <span>{fallacy.severity} severity</span>
        <span>•</span>
        <span>{fallacy.pattern[0]}</span>
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
    },
  );
}
