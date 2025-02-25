describe('Pizza Sipariş Formu Testleri', () => {
    beforeEach(() => {
      cy.visit('http://localhost:5175/order'); 
      cy.wait(1000);
    });
  
    it('İsim inputuna metin girilebilmeli', () => {
      cy.get('[data-cy="name-input"]') // data-cy elemanı seç
        .should('exist')
        .type('Birçe')
        .should('have.value', 'Birçe');
    });
  
    it('Birden fazla malzeme seçilebilmeli', () => {
      cy.get('[data-cy="ingredient-checkbox"]').should('have.length.gte', 4); // En az 4 checkbox kontrolü
      cy.get('[data-cy="ingredient-checkbox"]').eq(0).check().should('be.checked');
      cy.get('[data-cy="ingredient-checkbox"]').eq(1).check().should('be.checked');
      cy.get('[data-cy="ingredient-checkbox"]').eq(2).check().should('be.checked');
      cy.get('[data-cy="ingredient-checkbox"]').eq(3).check().should('be.checked');
    });
  
    it('Form başarılı şekilde gönderilmeli', () => {
      cy.get('[data-cy="name-input"]').should('exist').type('Birçe');
      cy.get('input[type="radio"]').first().should('exist').check();
      cy.get('select').should('exist').select('İnce');
      cy.get('[data-cy="ingredient-checkbox"]').eq(0).check();
      cy.get('[data-cy="ingredient-checkbox"]').eq(1).check();
      cy.get('[data-cy="ingredient-checkbox"]').eq(2).check();
      cy.get('[data-cy="ingredient-checkbox"]').eq(3).check();
      cy.get('[data-cy="order-button"]').should('exist').click();
      cy.url().should('include', '/success');
    });
  });
  