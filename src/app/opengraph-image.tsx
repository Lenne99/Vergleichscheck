import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Vergleichscheck.com – Unabhängige Software-Vergleiche für Selbstständige";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0F172A 0%, #1E3A5F 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "32px" }}>
          <div style={{ width: "48px", height: "48px", background: "#2563EB", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ color: "white", fontSize: "24px", fontWeight: "bold" }}>✓</div>
          </div>
          <div style={{ color: "white", fontSize: "28px", fontWeight: "bold", letterSpacing: "-0.5px" }}>
            vergleichs<span style={{ color: "#60A5FA" }}>check</span>.com
          </div>
        </div>
        <div style={{ color: "white", fontSize: "52px", fontWeight: "bold", lineHeight: 1.15, marginBottom: "24px", maxWidth: "900px" }}>
          Unabhängige Software-Vergleiche für Selbstständige
        </div>
        <div style={{ color: "#94A3B8", fontSize: "26px", lineHeight: 1.4, maxWidth: "800px" }}>
          Buchhaltung · KI-Tools · Marketing · Produktivität · Website
        </div>
        <div style={{ display: "flex", gap: "16px", marginTop: "48px" }}>
          {["🔬 Selbst getestet", "🚫 Keine bezahlten Platzierungen", "🇩🇪 Fokus Deutschland"].map((t) => (
            <div key={t} style={{ background: "rgba(255,255,255,0.1)", color: "#CBD5E1", fontSize: "18px", padding: "10px 20px", borderRadius: "8px" }}>
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
