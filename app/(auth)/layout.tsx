import { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
  return <main className="min-h-screen text-gray-400">{children}</main>;
};

export default Layout;
