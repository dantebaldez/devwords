// src/components/Card/styles.ts
import styled from "styled-components";

export const Container = styled.article`
  background: ${({ theme }) => theme.colors.cardBackground};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  padding: 1rem;
  transition: transform 0.2s ease;
  cursor: pointer;

  &:hover,
  &:focus {
    transform: translateY(-2px);
    outline: none;
  }
`;

export const Title = styled.h2`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`;

export const Description = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;
