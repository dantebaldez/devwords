// src/types/term.ts
export interface Term {
  id: string;
  term: string;
  definition: string;
  tags?: string[];
  aliases?: string[];
  // slug, related, examples etc. podem ser adicionados depois
  slug?: string;
}
