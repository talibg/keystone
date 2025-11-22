import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";
import type { FallacyCategorySlug } from "@/data/fallacies";
import { getCategoryBySlug, getFallaciesByCategory } from "@/lib/fallacies";

export const runtime = "edge";

export async function GET(
  _request: NextRequest,
  context: { params: Promise<{ slug: string }> },
) {
  const { slug } = await context.params;
  const category = getCategoryBySlug(slug as FallacyCategorySlug);

  if (!category) {
    return new Response("Not found", { status: 404 });
  }

  const fallacies = getFallaciesByCategory(category.slug).slice(0, 3);

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
          "linear-gradient(135deg, #0b1224 0%, #0f172a 40%, #020617 100%)",
      }}
    >
      <div style={{ fontSize: 22, color: "#a5b4fc", fontWeight: 700 }}>
      
      </div>
      <div style={{ marginTop: 24, fontSize: 50, fontWeight: 800 }}>
        {category.name}
      </div>
      <div
        style={{
          marginTop: 16,
          fontSize: 26,
          color: "#cbd5e1",
          maxWidth: "940px",
          lineHeight: 1.4,
        }}
      >
        {category.description}
      </div>
      <div style={{ marginTop: 28, fontSize: 20, color: "#94a3b8" }}>
        Featured fallacies:
      </div>
      <div style={{ display: "flex", gap: "18px", marginTop: 12 }}>
        {fallacies.map((f) => (
          <div
            key={f.slug}
            style={{
              padding: "14px",
              borderRadius: "12px",
              background: "rgba(255,255,255,0.04)",
              width: "300px",
            }}
          >
            <div style={{ fontSize: 22, fontWeight: 700 }}>{f.name}</div>
            <div style={{ fontSize: 16, color: "#cbd5e1", marginTop: 6 }}>
              {f.shortDefinition}
            </div>
          </div>
        ))}
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
    },
  );
}
