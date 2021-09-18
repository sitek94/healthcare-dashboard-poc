interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
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

export function Main({ children }: Props) {
  return <div style={{ flex: 1, padding: 20 }}>{children}</div>;
}
