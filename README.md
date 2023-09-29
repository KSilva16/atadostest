# About the project
Este é um projeto de automação para uma empresa voluntária chamada Atados.

# Pre-requirements

É necessário ter o Node.js e o npm instalados para executar este projeto.

Usei as versões v20.1.0 e 9.6.4 do Node.js e npm, respectivamente. Sugiro que você use as mesmas versões ou versões mais recentes.

Também usei o Cypress na versão 13.3.0 e o Git na versão 2.41.0.windows.3

# Installation

Execute npm install (ou npm i para a versão curta) para instalar as dependências de desenvolvimento.

# Tests

Execute npm test (ou npm t para a versão curta) para executar os testes no modo headless.
Ou execute npm cypress open para abrir o Cypress no modo interativo.

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
