import { useMemo } from "react";
import type { Term } from "../types/term";

export function useFilteredTerms(terms: Term[], query: string) {
  return useMemo(() => {
    const lowerQuery = query.toLowerCase().trim();

    if (!lowerQuery) return terms;

    return terms.filter(({ term, definition }) =>
      term.toLowerCase().includes(lowerQuery) ||
      definition.toLowerCase().includes(lowerQuery)
    );
  }, [terms, query]);
}
