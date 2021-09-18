import { Box } from '@primer/components';

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <Box
      color="text.white"
      bg="bg.primary"
      display="flex"
      flexDirection="column"
      minHeight="100vh"
    >
      {children}
    </Box>
  );
}

export function Main({ children }: Props) {
  return <div style={{ flex: 1, padding: 20 }}>{children}</div>;
}
