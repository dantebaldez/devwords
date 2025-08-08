import type { FC } from "react";
import { HeaderContainer, ToggleButton } from "./styles";

interface HeaderProps {
  onToggleTheme: () => void;
}

export const Header: FC<HeaderProps> = ({ onToggleTheme }) => {
  return (
    <HeaderContainer>
      <h1>DevWords</h1>
      <ToggleButton
        onClick={onToggleTheme}
        aria-label="Alternar tema claro e escuro"
      >
        🌓
      </ToggleButton>
    </HeaderContainer>
  );
};
