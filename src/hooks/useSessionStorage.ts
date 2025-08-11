import { useState, useEffect } from "react";

export function useSessionStorage<T>(key: string, initialValue: T) {
  // tenta pegar do sessionStorage na inicialização do estado
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }
    try {
      const item = window.sessionStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : initialValue;
    } catch {
      return initialValue;
    }
  });

  // sempre que storedValue mudar, atualiza no sessionStorage
  useEffect(() => {
    try {
      window.sessionStorage.setItem(key, JSON.stringify(storedValue));
    } catch {
      // falha em gravar sessionStorage não é crítica, só ignora
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue] as const;
}
