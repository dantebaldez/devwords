import type { FC } from "react";
import { Container, Title, Description } from "./styles";

interface CardProps {
  title: string;
  description: string;
}

export const Card: FC<CardProps> = ({ title, description }) => {
  return (
    <Container tabIndex={0} aria-label={`Termo: ${title}`}>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  );
};
