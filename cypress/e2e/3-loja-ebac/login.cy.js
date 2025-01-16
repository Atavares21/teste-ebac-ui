/// <reference types="cypress"/>

describe('Funcionalidade: Login', () =>{

beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/') 
});

afterEach(() => {
    cy.screenshot()
});

 it('Deve fazer login com sucesso', ()=>{
    cy.get('#username').type('arontavares2@gmail.com')
    cy.get('#password').type('Lorenzo@19')
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, arontavares2 (não é arontavares2? Sair)')

})  

it('Deve exibir uma mensagem de erro ao inserir usuário invalido', () => {  
    cy.get('#username').type('tavares@gmail.com')
    cy.get('#password').type('Lorenzo@19')
    cy.get('.woocommerce-form > .button').click()
    //cy.get('.woocommerce-error > li') .should('contain', 'Endereço de e-mail desconhecido.')
    cy.get('.woocommerce-error > li') .should ('exist')

});

it('Deve exibir uma mensagem de erro ao inserir senha inválida', () => {
    cy.get('#username').type('arontavares2@gmail.com')
    cy.get('#password').type('Lorenzo@9')
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-error > li') .should('contain', 'Erro: A senha fornecida para o e-mail arontavares2@gmail.com está incorreta. Perdeu a senha?')
    cy.get('.woocommerce-error > li') .should ('exist')
});

})