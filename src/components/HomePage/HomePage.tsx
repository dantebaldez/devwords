import type { FC } from "react";
import { useState } from "react";
import { Header } from "../Header/Header";
import { SearchBar } from "../SearchBar/SearchBar";
import { Card } from "../Card/Card";
import {
  Container,
  Grid,
  PaginationContainer,
  PageButton,
  PageInfo,
} from "./styles";
import { useTerms } from "../../hooks/useTerms";
import { useFilteredTerms } from "../../hooks/useFilteredTerms";
import { useSessionStorage } from "../../hooks/useSessionStorage";

const ITEMS_PER_PAGE = 9;

interface HomePageProps {
  onToggleTheme: () => void;
}

export const HomePage: FC<HomePageProps> = ({ onToggleTheme }) => {
  const { terms, loading, error } = useTerms();
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useSessionStorage<number>(
    "currentPage",
    1
  );

  // filtra os termos com base na busca
  const filteredTerms = useFilteredTerms(terms, query);

  // calcula total de páginas com base nos termos filtrados e itens por página
  const totalPages = Math.ceil(filteredTerms.length / ITEMS_PER_PAGE);

  // seleciona os termos que devem aparecer na página atual
  const paginatedTerms = filteredTerms.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  function goToPreviousPage() {
    setCurrentPage((page) => Math.max(page - 1, 1));
  }

  function goToNextPage() {
    setCurrentPage((page) => Math.min(page + 1, totalPages));
  }

  if (loading) return <p>carregando termos...</p>;
  if (error) return <p>erro ao carregar termos: {error}</p>;

  return (
    <>
      <Header onToggleTheme={onToggleTheme} />
      <Container>
        <SearchBar
          onSearch={(q) => {
            setQuery(q);
          }}
        />

        <Grid>
          {paginatedTerms.length > 0 ? (
            paginatedTerms.map((term) => (
              <Card
                key={term.id}
                title={term.term}
                description={term.definition}
              />
            ))
          ) : (
            <p>nenhum termo encontrado para "{query}".</p>
          )}
        </Grid>

        <PaginationContainer>
          <PageButton onClick={goToPreviousPage} disabled={currentPage === 1}>
            anterior
          </PageButton>
          <PageInfo>
            página {currentPage} de {totalPages}
          </PageInfo>
          <PageButton
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
          >
            próximo
          </PageButton>
        </PaginationContainer>
      </Container>
    </>
  );
};
