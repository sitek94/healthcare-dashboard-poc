import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider, BaseStyles } from '@primer/components';

import { AuthProvider } from 'context/auth-context';

import pkg from '../../package.json';

interface Props {
  children: React.ReactNode;
}

export default function AppProviders({ children }: Props) {
  return (
    <ThemeProvider colorMode="night">
      <div data-color-mode="dark" data-dark-theme="dark">
        <BaseStyles>
          <Router basename={pkg.name}>
            <AuthProvider>{children}</AuthProvider>
          </Router>
        </BaseStyles>
      </div>
    </ThemeProvider>
  );
}
