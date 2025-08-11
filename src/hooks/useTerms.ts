import { useEffect, useState } from "react";
import type { Term } from "../types/term";

export function useTerms() {
  const [terms, setTerms] = useState<Term[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    setLoading(true);

    import("../data/terms.json")
      .then((mod) => {
        if (!mounted) return;
        const data = (mod.default ?? mod) as Term[];
        setTerms(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch((err) => {
        if (!mounted) return;
        console.error("Erro ao carregar termos:", err);
        setError(String(err?.message ?? err));
        setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, []);

  return { terms, loading, error };
}
