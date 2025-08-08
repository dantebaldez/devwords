import type { FC } from "react";
import { useState } from "react";
import { Header } from "../Header/Header";
import { SearchBar } from "../SearchBar/SearchBar";
import { Card } from "../Card/Card";
import { Container, Grid } from "./styles";

interface HomePageProps {
  onToggleTheme: () => void;
}

const mockTerms = [
  { id: 1, title: "React", description: "Biblioteca para criar interfaces." },
  { id: 2, title: "TypeScript", description: "Superset tipado do JavaScript." },
  { id: 3, title: "CSS", description: "Folhas de estilo em cascata." },
];

export const HomePage: FC<HomePageProps> = ({ onToggleTheme }) => {
  const [query, setQuery] = useState("");

  const filteredTerms = mockTerms.filter((term) =>
    term.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <Header onToggleTheme={onToggleTheme} />
      <Container>
        <SearchBar onSearch={setQuery} />
        <Grid>
          {filteredTerms.map((term) => (
            <Card
              key={term.id}
              title={term.title}
              description={term.description}
            />
          ))}
        </Grid>
      </Container>
    </>
  );
};
