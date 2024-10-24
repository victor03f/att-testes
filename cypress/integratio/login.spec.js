describe('Teste de Login', () => {
    it('deve permitir login e redirecionar para o dashboard', () => {
        cy.visit('/login'); // URL da página de login
        cy.get('input[name="username"]').type('user'); // Nome do campo de usuário
        cy.get('input[name="password"]').type('password'); // Nome do campo de senha
        cy.get('button[type="submit"]').click(); // Nome do botão de login
        cy.url().should('include', '/dashboard'); // Verifica se redireciona para o dashboard
    });
});