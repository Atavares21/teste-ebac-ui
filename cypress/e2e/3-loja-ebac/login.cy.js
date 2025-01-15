/// <reference types="cypress"/>

describe('Funcionalidade: Login', () =>{

 it('Deve fazer login com sucesso', ()=>{
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    cy.get('#username').type('arontavares2@gmail.com')
    cy.get('#password').type('Lorenzo@19')
    cy.get('.woocommerce-form > .button').click()

    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, arontavares2 (não é arontavares2? Sair)')


})  
    
})