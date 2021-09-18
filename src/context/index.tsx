import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { AuthProvider } from './auth-context';

interface Props {
  children: React.ReactNode;
}

export default function AppProviders({ children }: Props) {
  return (
    <Router>
      <AuthProvider>{children}</AuthProvider>
    </Router>
  );
}
