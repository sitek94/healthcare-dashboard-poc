export default function Layout({ children }) {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {children}
    </div>
  );
}

export function Main({ children }) {
  return <div style={{ flex: 1, padding: 20 }}>{children}</div>;
}
