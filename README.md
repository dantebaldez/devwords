# DevWords — Glossário Interativo de Termos Técnicos

Este é um projeto pessoal que criei para facilitar a vida de quem, como eu, está na jornada de aprender desenvolvimento e quer consultar termos técnicos com explicações simples, diretas e acessíveis. O DevWords é uma aplicação web responsiva, focada em oferecer uma experiência fluida e organizada para busca e consulta rápida dos principais conceitos e tecnologias usadas no desenvolvimento front-end.

---

## O que o projeto faz

O DevWords funciona como um glossário interativo onde você pode:

- Buscar termos técnicos por palavra-chave, com busca inteligente e debounce para evitar travamentos.
- Navegar pela lista de termos paginada, para não sobrecarregar a tela.
- Alternar entre temas claro e escuro, garantindo conforto visual.
- Visualizar cards com título e definição resumida dos termos, de forma clara e acessível.

No momento, estou focando no MVP com essas funcionalidades para entregar algo sólido e útil, mas tenho planos para expandir com filtros por categoria, favoritos, e até traduções no futuro.

---

## Tecnologias usadas

- **React** com **TypeScript**: para criar uma interface robusta, escalável e tipada, facilitando manutenção e evolução.
- **Styled-components**: para estilização via CSS-in-JS, permitindo criar temas dinâmicos e componíveis, alinhados com minha identidade visual.
- **Hooks customizados**: para organizar a lógica de busca, carregamento dos termos, paginação e controle de tema.
- **JSON local**: os termos técnicos estão armazenados num arquivo JSON local, simplificando o desenvolvimento e deployment.
<!-- - **Vercel** (planejado): deploy rápido e fácil da aplicação, para facilitar acesso e testes em produção. -->

---

## Estrutura do projeto

A organização do código segue uma estrutura limpa e modular:

- **components/** — Componentes React como Header, SearchBar, Card, etc.
- **hooks/** — Lógica reutilizável para estados, filtros e carregamento de dados.
- **data/** — Dados dos termos técnicos em JSON.
- **styles/** — Estilos globais e específicos via styled-components.
- **pages/** — Página principal da aplicação.
- **types/** — Tipagens TypeScript para garantir segurança e clareza.
- **App.tsx** — Componente raiz que gerencia o tema e estrutura geral.

---

## Próximos passos

Nos próximos dias, vou trabalhar na implementação de:

- Filtros por categoria para facilitar a busca por áreas específicas.
- Sistema de favoritos, com persistência via localStorage.
- Melhorias na responsividade e acessibilidade.
- Microinterações suaves para uma experiência ainda mais agradável.
- Possivelmente, uma API para carregar termos dinamicamente.

---

## Como rodar localmente

1. Clone este repositório
2. Rode `npm install` ou `yarn` para instalar dependências
3. Execute `npm run dev` ou `yarn dev` para rodar o projeto localmente
4. Abra `http://localhost:3000` no navegador

---

## Conclusão

Este projeto é uma forma prática e visual de organizar e compartilhar conhecimento técnico, com foco em usabilidade e aprendizado contínuo. Se quiser contribuir, sugerir termos ou melhorias, é só falar!
