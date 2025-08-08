import type { FC, ChangeEvent } from "react";
import { useState, useEffect } from "react";
import { SearchInput, SearchLabel, SearchWrapper } from "./styles";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export const SearchBar: FC<SearchBarProps> = ({ onSearch }) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      onSearch(value);
    }, 500);

    return () => clearTimeout(handler);
  }, [value, onSearch]);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  return (
    <SearchWrapper>
      <SearchLabel htmlFor="search-input" $visuallyHidden>
        Buscar termos
      </SearchLabel>
      <SearchInput
        id="search-input"
        type="search"
        placeholder="Buscar termos..."
        value={value}
        onChange={handleChange}
        aria-label="Buscar termos no glossário"
      />
    </SearchWrapper>
  );
};
