import * as React from 'react';
import { NavLink as RouterNavLink, NavLinkProps } from 'react-router-dom';

import { useAuth } from '../context/auth-context';
import { Button, UnderlineNav } from '@primer/components';

interface Props {
  children: React.ReactNode;
}

export default function Navbar({ children }: Props) {
  const { logout } = useAuth();

  return (
    <UnderlineNav
      sx={{ px: 4 }}
      aria-label="Main navigation"
      actions={<Button onClick={logout}>Logout</Button>}
    >
      {children}
    </UnderlineNav>
  );
}

export function NavLink({ to, children }: NavLinkProps) {
  return (
    <UnderlineNav.Link
      as={RouterNavLink}
      to={to}
      sx={{
        width: 110,
        // Remove weird, flashing border on hover/focus
        '&:focus, &:hover': {
          outline: 'none',
        },
      }}
    >
      {children}
    </UnderlineNav.Link>
  );
}
