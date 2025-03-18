
```markdown:README.md
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
    - **todo.context.tsx**: Gerencia o estado das tarefas em toda a aplicação
  - **screens/**: Telas da aplicação
    - **Home/**: Tela inicial da aplicação
    - **ToDo/**: Tela de gerenciamento de tarefas
  - **utils/**: Utilitários e funções auxiliares
    - **i18n/**: Arquivos de tradução para internacionalização
      - **en-us.json**: Traduções em inglês
      - **pt-br.json**: Traduções em português

## Como Executar o Projeto

### Pré-requisitos

Certifique-se de ter configurado seu ambiente de desenvolvimento React Native conforme a [documentação oficial](https://reactnative.dev/docs/environment-setup).

### Instalação

```sh
# Clone o repositório
git clone [url-do-repositorio]

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

- Gerenciamento de tarefas (ToDo)
- Suporte a múltiplos idiomas (português e inglês)
- Interface responsiva e amigável
- Persistência de dados localmente
- Animações fluidas para melhor experiência do usuário

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.
```
