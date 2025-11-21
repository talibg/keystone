"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import SearchInput from "./SearchInput";

export default function SearchContainer() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentSearchTerm = searchParams.get("q") || "";

  const handleSearch = useCallback(
    (searchTerm: string) => {
      if (searchTerm) {
        router.push(`/search?q=${encodeURIComponent(searchTerm)}`);
      } else {
        router.push("/search");
      }
    },
    [router],
  );

  return (
    <SearchInput
      onSearch={handleSearch}
      initialSearchTerm={currentSearchTerm}
    />
  );
}
