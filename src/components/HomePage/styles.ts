import styled from "styled-components";

export const Container = styled.main`
  padding-top: 60px;
  padding-left: 1rem;
  padding-right: 1rem;
  max-width: 900px;
  margin: 0 auto;
  background: ${({ theme }) => theme.colors.background};
  min-height: 100vh;
`;

export const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
`;

export const PaginationContainer = styled.div`
  margin: 3rem 0 4rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

export const PageButton = styled.button`
  background: ${({ theme, disabled }) =>
    disabled ? "#b3b3b3" : theme.colors.primary};
  border: none;
  border-radius: 12px;
  color: ${({ theme }) => theme.colors.text};
  padding: 0.75rem 1.8rem;
  font-weight: 700;
  font-size: 1.1rem;
  box-shadow: ${({ disabled }) =>
    disabled ? "none" : "0 4px 8px rgba(0,0,0,0.15)"};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  transition: background-color 0.3s ease, box-shadow 0.3s ease,
    transform 0.2s ease; /* adiciona transição para transform */

  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.colors.accent};
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.25);
    transform: scale(1.05); /* escala suave no hover */
  }

  &:focus {
    outline: 3px solid ${({ theme }) => theme.colors.accent};
    outline-offset: 3px;
  }
`;

export const PageInfo = styled.span`
  font-weight: 600;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.text};
  user-select: none;
`;
