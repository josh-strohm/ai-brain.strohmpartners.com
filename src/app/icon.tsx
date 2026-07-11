import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#111a24",
          borderRadius: 8,
          border: "1px solid rgba(201, 169, 98, 0.35)",
          color: "#c9a962",
          fontSize: 14,
          fontWeight: 700,
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
          letterSpacing: "-0.02em",
        }}
      >
        SP
      </div>
    ),
    {
      ...size,
    },
  );
}
