"use client";

import { type ChangeEvent, useEffect, useState } from "react";

interface SearchInputProps {
  onSearch: (searchTerm: string) => void;
  initialSearchTerm?: string;
}

export default function SearchInput({
  onSearch,
  initialSearchTerm = "",
}: SearchInputProps) {
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm);

  useEffect(() => {
    const handler = setTimeout(() => {
      onSearch(searchTerm);
    }, 300); // Debounce for 300ms

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm, onSearch]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search fallacies..."
      value={searchTerm}
      onChange={handleChange}
      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
    />
  );
}
