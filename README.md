# DevFinder 🚀

![Project Banner](./public/devfinder_project_banner.png)

## 📝 Descrição do Projeto

O **DevFinder** é uma aplicação web desenvolvida para buscar perfis de usuários no GitHub e exibir suas informações, criado como uma demonstração prática das minhas habilidades em desenvolvimento Frontend com foco no ecossistema **React**.

O objetivo principal foi construir uma interface moderna e responsiva, consumindo uma API externa (a API do GitHub) e aplicando as melhores práticas de desenvolvimento, como componentização, tipagem estática com TypeScript e gerenciamento de rotas.

---

## ✨ Funcionalidades Principais

- **Busca de Usuários**: Permite pesquisar por qualquer usuário do GitHub através de seu nome de usuário.
- **Exibição de Perfil**: Mostra detalhes do usuário, como avatar, nome, bio, número de seguidores, repositórios públicos e localização.
- **Tratamento de Erros**: Apresenta uma mensagem amigável caso o usuário pesquisado não seja encontrado.
- **Navegação Intuitiva**: Utiliza o React Router DOM para uma experiência de navegação fluida como uma Single Page Application (SPA).
- **Design Responsivo**: A interface se adapta a desktops e a dispositivos móveis.

---

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído com um conjunto de tecnologias modernas e amplamente utilizadas no mercado de desenvolvimento Frontend:

- **React**: Biblioteca principal para a construção da interface de usuário de forma declarativa e baseada em componentes.
- **TypeScript**: Adiciona tipagem estática ao JavaScript, garantindo um código mais previsível e fácil de manter. Todos os dados retornados pela API do GitHub são rigorosamente tipados.
- **React Router DOM**: Para o gerenciamento de rotas da aplicação, permitindo a navegação entre páginas sem recarregar o navegador.
- **CSS Modules**: Para estilização de componentes de forma escopada, evitando conflitos de estilo globais.
- **Vite**: Ferramenta de build extremamente rápida que oferece um ambiente de desenvolvimento moderno e otimizado.
- **ESLint**: Para garantir a qualidade e a padronização do código.

---

## 📂 Estrutura de Pastas

A estrutura do projeto foi organizada para promover a modularidade e a escalabilidade:

```
/src
├── components/   # Componentes reutilizáveis (Search, User, Error)
├── routes/       # Componentes de página (Home)
├── types/        # Definições de tipos e interfaces (user.ts)
├── App.tsx       # Componente principal da aplicação
└── main.tsx      # Ponto de entrada da aplicação
```

Um destaque importante é a pasta `types`, onde a interface `User` define a estrutura dos dados do usuário. Essa abordagem com **TypeScript** garante que todos os componentes que manipulam esses dados o façam de maneira segura e previsível.

---

## 🚀 Instalação e Uso

Siga os passos abaixo para executar o projeto em seu ambiente local:

1.  **Clone o repositório:**

    ```bash
    git clone https://github.com/seu-usuario/devfinder.git
    ```

2.  **Navegue até o diretório do projeto:**

    ```bash
    cd devfinder
    ```

3.  **Instale as dependências:**

    ```bash
    npm install
    ```

4.  **Inicie o servidor de desenvolvimento:**

    ```bash
    npm run dev
    ```

5.  Abra seu navegador e acesse `http://localhost:5173` (ou a porta indicada no terminal).

---

## 🧠 Aprendizados e Propósito do Projeto

O desenvolvimento do DevFinder foi uma excelente oportunidade para aprofundar e praticar conceitos essenciais do desenvolvimento Frontend moderno:

- **Consumo de APIs**: Implementei a lógica de requisições assíncronas à API do GitHub, gerenciando estados de `loading`, `success` e `error` para fornecer um feedback claro ao usuário.
- **Tipagem com TypeScript**: A decisão de usar TypeScript foi estratégica no intuito de evitar bugs comuns e deixar o código mais legível e a funcionalidade de autocompletar do editor mais inteligente.
- **Componentização e Reutilização**: A interface foi dividida em componentes lógicos e reutilizáveis, como `Search` e `User`, seguindo os princípios do React para um código limpo e de fácil manutenção.
- **Gerenciamento de Estado**: Explorei o uso de hooks do React, como `useState` e `useEffect`, para controlar o estado da aplicação de forma eficiente e reativa.

Este projeto reflete minha paixão por criar soluções de software de alta qualidade, com código bem estruturado e foco na experiência do usuário.

---

## 📫 Contato

Obrigado por visitar meu projeto! Fique à vontade para se conectar comigo:

- **LinkedIn**: [Seu Nome no LinkedIn](https://www.linkedin.com/in/gabrielabalbuquerque/)
- **GitHub**: [@seu-usuario](https://github.com/gabriela-albuquerque)
- **Email**: gabrielabalbuquerque@outlook.com

---

_Este projeto foi desenvolvido como parte do meu portfólio pessoal. Sinta-se à vontade para explorar o código e me dar seu feedback!_
