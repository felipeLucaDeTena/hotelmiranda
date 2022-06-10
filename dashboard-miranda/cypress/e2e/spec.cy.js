describe("empty spec", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/login");
        cy.clearLocalStorage();
    });
    it("Error free Login", () => {
        cy.get("[data-cy=email]").type("felipe@gmail.com");
        cy.get("[data-cy=password]").type("123");
        cy.get("[data-cy=submit]").click();
        cy.hash().should("eq", "");
    });
    it("Trying to navigate before logged", () => {
        cy.visit("http://localhost:3000/rooms");
        cy.location().should((location) =>
            expect(location.pathname).to.eq("/login")
        );
    });
});
