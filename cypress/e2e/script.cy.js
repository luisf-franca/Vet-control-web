describe('Animal Registration', () => {
  beforeEach(() => {
    // Visita a página inicial antes de cada teste
    cy.visit('https://amazing-meerkat-ecc48e.netlify.app/');
  });

  // Cadastro de Tutor
  it('Deve adicionar um tutor com sucesso', () => {
    // Clica no botão para cadastrar um tutor
    cy.contains('Cadastrar tutor').click();

    // Preenche todos os campos do formulário
    cy.get('input[name="nome"]').type('João'); // Preenche o campo nome
    cy.get('input[name="telefone"]').type('123456789'); // Preenche o campo telefone
    cy.get('input[name="endereco"]').type('Rua A, 123'); // Preenche o campo endereço
    cy.get('input[name="email"]').type('joao@example.com'); // Preenche o campo email
    cy.get('input[name="metodo_pagamento"]').type('Cartão de Crédito'); // Preenche o campo método de pagamento

    // Clica no botão para submeter o formulário
    cy.get('button[type="button"]').click();

    // Verifica se a URL inclui '/cadastro-completo'
    cy.url().should('include', '/cadastro-completo');
    // Verifica se a mensagem de cadastro completo é exibida
    cy.contains('Cadastro completo!');
    cy.wait(1000);

    // Clica no botão para voltar à página inicial
    cy.contains('Voltar à pagina inicial').click();
  });

  // Cadastro de Animal - Cenário de Erro
  it('Deve mostrar uma mensagem de erro na página quando nem todos os campos são preenchidos', () => {
    // Intercepta a chamada para obter os tutores
    cy.intercept('GET', 'https://luisffranca.pythonanywhere.com/tutors').as(
      'getTutors',
    );

    // Clica no botão para cadastrar um animal
    cy.contains('Cadastrar animal').click();

    // Aguarda a resposta da API dos tutores
    cy.wait('@getTutors');

    // Preenche alguns campos do formulário
    cy.get('input[name="nome"]').type('Rex'); // Nome do animal
    cy.get('input[name="peso"]').type('20'); // Peso do animal
    cy.get('input[name="porte"]').type('Médio'); // Porte do animal
    cy.get('input[name="idade"]').type('1 ano'); // Idade do animal
    cy.get('input[name="sintomas"]').type('Nenhum'); // Sintomas do animal
    // Deixa outros campos em branco para simular o erro

    // Tenta submeter o formulário
    cy.get('button[type="button"]').click();

    // Verifica se a mensagem de erro é exibida na página
    cy.contains('Por favor, preencha todos os campos').should('be.visible');
    cy.wait(2000);
  });

  // Cadastro de Animal - Cenário de Sucesso
  it('Deve adicionar um animal com sucesso vinculado ao tutor cadastrado', () => {
    // Intercepta a chamada para obter os tutores
    cy.intercept('GET', 'https://luisffranca.pythonanywhere.com/tutors').as(
      'getTutors',
    );

    // Clica no botão para cadastrar um animal
    cy.contains('Cadastrar animal').click();

    // Aguarda a resposta da API dos tutores
    cy.wait('@getTutors');

    // Preenche todos os campos do formulário
    cy.get('input[name="tutor_id"]').type('5'); // ID do tutor
    // cy.get('select[name="tutor_name"]').select('João'); // Nome do tutor
    cy.get('input[name="nome"]').type('Rex'); // Nome do animal
    cy.get('input[name="peso"]').type('20'); // Peso do animal
    cy.get('input[name="raca"]').type('Labrador'); // Raça do animal
    cy.get('input[name="porte"]').type('Médio'); // Porte do animal
    cy.get('input[name="idade"]').type('1 ano'); // Idade do animal
    cy.get('input[name="sintomas"]').type('Nenhum'); // Sintomas do animal

    // Clica no botão para submeter o formulário
    cy.get('button[type="button"]').click();

    // Verifica se a URL inclui '/cadastro-completo'
    cy.url().should('include', '/cadastro-completo');
    // Verifica se a mensagem de cadastro completo é exibida
    cy.contains('Cadastro completo!');
    cy.wait(1000);

    // Clica no botão para voltar à página inicial
    cy.contains('Voltar à pagina inicial').click();
  });

  // Cadastro de Veterinário
  it('Deve adicionar um veterinário com sucesso', () => {
    // Clica no botão para cadastrar um veterinário
    cy.contains('Cadastrar veterinário').click();

    // Preenche todos os campos do formulário
    cy.get('input[name="nome"]').type('Dr. Pedro'); // Preenche o campo nome
    cy.get('input[name="crmv"]').type('123456'); // Preenche o campo CRMV
    cy.get('input[name="endereco"]').type('Rua B, 456'); // Preenche o campo endereço
    cy.get('input[name="email"]').type('dr.pedro@example.com'); // Preenche o campo email
    cy.get('input[name="telefone"]').type('987654321'); // Preenche o campo telefone

    // Clica no botão para submeter o formulário
    cy.get('button[type="button"]').click();

    // Verifica se a URL inclui '/cadastro-completo'
    cy.url().should('include', '/cadastro-completo');
    // Verifica se a mensagem de cadastro completo é exibida
    cy.contains('Cadastro completo!');
    cy.wait(1000);

    // Clica no botão para voltar à página inicial
    cy.contains('Voltar à pagina inicial').click();
  });
});
