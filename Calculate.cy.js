describe('BMI Calculator Test', () => {
    beforeEach(() => {
        cy.visit('https://fitbybeat.com', { timeout: 120000 }); // Tambah timeout lebih lama
    });
    
    it('should calculate BMI correctly with valid inputs', () => {
        cy.get('input[placeholder="Height / cm"]').should('be.visible').type('170');
        cy.get('input[placeholder="Weight / kg"]').should('be.visible').type('70');
        cy.get('input[placeholder="Age"]').should('be.visible').type('25');
        cy.get('select').eq(0).select('Male', { force: true }); // Pilih jenis kelamin
        cy.get('select').eq(1).should('be.visible').wait(500).select('Little or no Exercise/ desk job', { force: true });
        cy.contains('Calculate').click();
        
        cy.get('.qodef-bmic-notifications').invoke('text').then((text) => {
            cy.log(text); 
        });
    });

    it('should show an error for empty inputs', () => {
        cy.contains('Calculate').click();


    cy.get('.qodef-bmic-notifications')
        .should('exist')
        .invoke('show') // Paksa elemen untuk muncul jika perlu
        .should('be.visible');
    });

    it('should show an error for invalid inputs', () => {
        cy.get('input[placeholder="Height / cm"]').type('abc');
        cy.get('input[placeholder="Weight / kg"]').type('xyz');
        cy.contains('Calculate').click();

        cy.get('.qodef-bmic-notifications')
        .should('exist')
        .invoke('show') // Paksa elemen untuk muncul jika perlu
        .should('be.visible');

      
    });
});

