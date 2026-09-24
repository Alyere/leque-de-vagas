export default function LoadingVagas() {
  return (
    <main style={{ display: "grid", gap: "24px", padding: "24px 0" }}>
      <div
        style={{
          borderRadius: "20px",
          border: "1px solid var(--border)",
          background: "linear-gradient(135deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))",
          minHeight: "120px",
          opacity: 0.8,
        }}
      />

      <div
        style={{
          borderRadius: "20px",
          border: "1px solid var(--border)",
          background: "linear-gradient(135deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))",
          minHeight: "540px",
          opacity: 0.8,
        }}
      />
    </main>
  );
}