// app/layout.tsx
import './globals.css';
import '../styles/globals.css';

import { ReactNode } from 'react';

export const metadata = {
  title: 'Heaven Heroes',
  description: 'A godly game for children and parents.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}


