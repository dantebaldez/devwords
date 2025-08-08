import styled from "styled-components";

export const SearchWrapper = styled.div`
  display: flex;
  justify-content: center; /* centraliza horizontalmente */
  margin: 1.5rem 0 2rem 0; /* margem cima e baixo pra separar do Header e conteúdo */
`;

export const SearchLabel = styled.label<{ $visuallyHidden?: boolean }>`
  ${({ $visuallyHidden }) =>
    $visuallyHidden
      ? `
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  `
      : ""}
`;

export const SearchInput = styled.input`
  width: 100%;
  max-width: 450px;
  padding: 0.6rem 1rem;
  font-size: 1.1rem;
  font-weight: 500;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 6px;
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.background};
  transition: border-color 0.25s ease, box-shadow 0.25s ease;

  &::placeholder {
    color: ${({ theme }) => theme.colors.secondary};
    font-style: italic;
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.accent};
    box-shadow: 0 0 6px ${({ theme }) => theme.colors.accent};
  }

  @media (max-width: 500px) {
    max-width: 100%;
    font-size: 1rem;
  }
`;
