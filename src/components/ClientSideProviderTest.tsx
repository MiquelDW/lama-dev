// Provider Components always need to be Client Components
"use client";

import { ReactNode } from "react";

// imagine this being a Provider Component
const ClientSideProviderTest = ({ children }: { children: ReactNode }) => {
  return <div>{children}</div>;
};

export default ClientSideProviderTest;
