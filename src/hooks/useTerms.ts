// src/hooks/useTerms.ts
import { useEffect, useState } from "react";
import type { Term } from "../types/term";

export function useTerms() {
  const [terms, setTerms] = useState<Term[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let mounted = true;

    (async () => {
      try {
        // Dynamic import: permite code-splitting e é fácil de substituir por fetch
        const module = await import("../data/terms.json");
        const data = module.default as Term[];
        if (!mounted) return;
        setTerms(data);
      } catch (err) {
        if (!mounted) return;
        setError(err as Error);
      } finally {
        if (mounted) setLoading(false);
      }
    })();

    return () => {
      mounted = false;
    };
  }, []);

  return { terms, loading, error };
}
