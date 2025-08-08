import { Suspense } from "react";

import CatalogLoading from "./loading";

export default function CatalogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Suspense fallback={<CatalogLoading />}>{children}</Suspense>;
}
