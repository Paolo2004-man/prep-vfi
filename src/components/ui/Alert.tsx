import type { ReactNode } from 'react';

interface AlertProps {
  children: ReactNode;
}

export function Alert({ children }: AlertProps) {
  return <div className="alert">{children}</div>;
}
