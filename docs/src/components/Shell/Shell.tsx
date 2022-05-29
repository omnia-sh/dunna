import { AppShell, Header, Navbar } from '@mantine/core';

interface ShellProps {
  children: React.ReactNode;
}

const Shell = ({ children }: ShellProps) => {
  return (
    <AppShell
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      fixed
      header={<Header height={70}>Dunna</Header>}
      navbar={
        <Navbar p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
          Links
        </Navbar>
      }
    >
      {children}
    </AppShell>
  );
};

export default Shell;
