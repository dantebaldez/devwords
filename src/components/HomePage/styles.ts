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
