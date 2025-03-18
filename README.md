# Projeto To Do List

Este é um projeto de teste para a empresa Capitani, um To Do List desenvolvido com React Native e Typescript, com objetivo de validar o conhecimento e aplicação de conceitos de React Native, Context API, Styled Components, React Navigation, React Native Reanimated e Async Storage.

## Bibliotecas Principais

- **React Navigation**: Utilizada para gerenciamento de rotas e navegação entre telas, facilitando a experiência do usuário.
- **Context API**: Implementada para gerenciamento de estado global da aplicação, especialmente para os dados de tarefas (ToDo).
- **i18n**: Sistema de internacionalização que permite a tradução da aplicação para diferentes idiomas (atualmente suporta português e inglês).
- **Styled Components**: Biblioteca para estilização de componentes com CSS-in-JS, permitindo estilos dinâmicos e reutilizáveis.
- **React Native Reanimated**: Utilizada para criar animações fluidas e de alta performance, melhorando a experiência do usuário com transições suaves.
- **Async Storage**: Biblioteca para persistência de dados localmente, permitindo salvar as tarefas do usuário mesmo após o fechamento do aplicativo.

## Estrutura de Pastas

- **src/**: Diretório principal do código fonte
  - **components/**: Componentes reutilizáveis que podem ser utilizados em qualquer parte do projeto
  - **context/**: Contextos React para gerenciamento de estado global da aplicação
    - **todo.context.tsx**: Gerencia o estado das tarefas em toda a aplicação, incluindo adição, remoção e atualização de tarefas
    - **config.context.tsx**: Gerencia o estado global das configurações de loading e modal
    - **auth.context.tsx**: Gerencia o estado global do usuário
  - **hooks/**: Hooks customizados para reutilização de lógica
    - **useTodo.tsx**: Hook que encapsula a lógica de manipulação de tarefas, facilitando o acesso ao contexto de tarefas
    - **useLanguage.tsx**: Hook para gerenciamento de idiomas
  - **screens/**: Telas da aplicação
    - **Home/**: Tela inicial da aplicação que exibe um resumo das tarefas e opções de navegação
    - **ToDo/**: Tela principal de gerenciamento de tarefas com listagem, adição, edição e remoção
    - **Auth/**: Tela de login e cadastro de usuário
    - **TaskDetail/**: Tela de detalhes de uma tarefa específica
    - **Profile/**: Tela de perfil do usuário
  - **utils/**: Utilitários e funções auxiliares
    - **i18n/**: Arquivos de tradução para internacionalização
      - **en-us.json**: Traduções em inglês
      - **pt-br.json**: Traduções em português
    - **storage/**: Funções para persistência de dados
    - **constants/**: Constantes utilizadas em toda a aplicação
    - **helpers/**: Funções auxiliares para formatação, validação, etc.

## Detalhes dos Contextos

### Todo Context
Gerencia o estado global das tarefas com as seguintes funcionalidades:
- Armazenamento da lista de tarefas
- Adição de novas tarefas
- Edição de tarefas existentes
- Remoção de tarefas
- Marcação de tarefas como concluídas
- Gerenciamento de subtarefas
- Persistência das tarefas usando Async Storage

### Config Context
Gerencia o estado global das configurações de loading e modal:
- Loading: Controle de estado de loading da aplicação
- Modal: Controle de estado de modal da aplicação

### Auth Context
Gerencia o estado global do usuário:
- Login e cadastro de usuário
- Logout
- Persistência do usuário usando Async Storage

## Detalhes das Telas

### Home
- Exibe um resumo das tarefas pendentes
- Opções de navegação para as telas de tarefas e perfil

### Auth
- Interface para login e cadastro de usuário

### TaskDetail
- Visualização detalhada de uma tarefa específica
- Edição de todos os campos da tarefa
- Criação de subtarefas
- Remoção de subtarefas

### Profile
- Informações do usuário
- Ações para sair da conta
- Ações para deletar a conta
- Ações para resetar todas as tarefas

## Como Executar o Projeto

### Pré-requisitos

Certifique-se de ter configurado seu ambiente de desenvolvimento React Native conforme a [documentação oficial](https://reactnative.dev/docs/environment-setup).

### Instalação

```sh
# Clone o repositório
git clone https://github.com/luizrfc/teste-capitani.git

# Instale as dependências
npm install
# OU
yarn install

# Para iOS, instale as dependências do CocoaPods
bundle install
bundle exec pod install
```

### Executando

```sh
# Inicie o Metro Bundler
npm start
# OU
yarn start

# Em outro terminal, execute o app no Android
npm run android
# OU
yarn android

# Ou no iOS
npm run ios
# OU
yarn ios
```

## Funcionalidades

- Gerenciamento completo de tarefas (ToDo)
- Suporte a múltiplos idiomas (português e inglês)
- Interface responsiva e amigável
- Persistência de dados localmente
- Animações fluidas para melhor experiência do usuário
- Autenticação de usuário
- Persistência do usuário
- Reset de todas as tarefas
- Deleção de conta
- Sair da conta
