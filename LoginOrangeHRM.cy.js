describe('OrangeHRM Login Test', () => {
    it('Login Successfully', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        // Input Username
        cy.get('input[name="username"]').type('Admin')

        // Input Password
        cy.get('input[name="password"]').type('admin123')

        // Klik tombol login
        cy.get('button[type="submit"]').click()

        // Verifikasi login berhasil dengan mengecek URL atau elemen dashboard
        cy.url().should('include', '/dashboard')
        cy.get('.oxd-topbar-header-breadcrumb > h6').should('contain', 'Dashboard')
    })
})