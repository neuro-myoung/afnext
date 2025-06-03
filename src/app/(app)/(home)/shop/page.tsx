"use client"
import { useTRPC } from "@/trpc/client";
import { useQuery } from "@tanstack/react-query";

export default function Shop() {
  const trpc = useTRPC();
  const { data } = useQuery(trpc.auth.session.queryOptions());
  return(
    <div className="min-h-[50vh]">
      {JSON.stringify(data?.user, null, 2)}
    </div>
  )
}
