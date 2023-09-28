# About the project
This is an automation project for a volunteer company called Atados. 

# Pre-requirements

It is required to have Node.js and npm installed to run this project.

I used versions v20.1.0 and 9.6.4 of Node.js and npm, respectively. I suggest you use the same or later versions.

I also used the Cypress version 13.3.0 and the git version 2.41.0.windows.3

# Installation

Run npm install (or npm i for the short version) to install the dev dependencies.

# Tests

Run npm test (or npm t for the short version) to run the test in headless mode.
Or, run npm cypress open to open Cypress in interactive mode.

Para conduzir os testes, optei pela estratégia de "mocking", na qual utilizei dados fictícios como base para a execução dos testes. Inicialmente, inseri dados fictícios e, posteriormente, realizei modificações conforme necessário para abordar cenários específicos.
Além disso, implementei o uso de "Data Fixtures" para isolar os dados de teste, garantindo a devida confidencialidade. Isso permite manter a integridade dos dados sensíveis durante os testes.

- Para fazer a gestão de erros, foram adicionadas asserções no código e a opção {timeout} para definir um limite de tempo para retentativas.

<details><summary>Testes de Interface de Usuário (UI) - Abra para ver os casos de teste</summary> 

**Caso 1: Login com "Continuar com Email"**
- **Descrição:** Este teste avalia a funcionalidade de login utilizando a opção "Continuar com Email".
- **Passos:**
  1. Abra a página de login.
  2. Insira um email válido.
  3. Insira a senha correta.
  4. Clique no botão "Entrar".
- **Expectativa:** O usuário deve conseguir fazer login com sucesso após inserir um email e senha válidos.

**Caso 2: Tentativa de Login com Senha Incorreta**
- **Descrição:** Este teste verifica como o sistema lida com tentativas de login com uma senha incorreta.
- **Passos:**
  1. Abra a página de login.
  2. Insira um email válido.
  3. Insira uma senha incorreta.
  4. Clique no botão "Entrar".
- **Expectativa:** O acesso não deve ser permitido, e uma mensagem de erro deve ser exibida informando que a senha está incorreta.

**Caso 3: Logout**
- **Descrição:** Este teste verifica se o usuário pode fazer logout com sucesso.
- **Passos:**
  1. Garanta que o usuário esteja logado.
  2. Clique na opção de logout no dropdown.
- **Expectativa:** O usuário deve ser deslogado e redirecionado para a página de login ou para uma página inicial de logout.

**Caso 4: Busca na Barra de Pesquisa**
- **Descrição:** Este teste avalia a funcionalidade de busca na barra de pesquisa após o usuário estar logado.
- **Passos:**
  1. Garanta que o usuário esteja logado.
  2. Digite um termo de busca na barra de pesquisa.
  3. Pressione a tecla "Enter".
- **Expectativa:** Os resultados da busca devem ser exibidos de acordo com o termo de busca inserido.
