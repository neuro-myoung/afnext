import { SearchFilters } from "./search-filters";
import { getQueryClient, trpc } from "@/trpc/server";
import { HydrateClient } from "@/trpc/server";
import { Suspense } from "react";

interface Props {
  children: React.ReactNode;
}

const Layout = async ({ children }: Props) => {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(trpc.categories.getMany.queryOptions());

  return (
    <div>
      <HydrateClient>
        <Suspense fallback={<p>Loading...</p>}>
        <SearchFilters />
        </Suspense>
      </HydrateClient>
      {children}
    </div>
  );
};

export default Layout;
