/* eslint-disable jest/expect-expect */
/// <reference types="Cypress" />

describe('Index page', () => {
    /*
     * Visits the page before each test
     */
    beforeEach(() => {
        cy.log(`Visiting http://localhost:3000`);
        cy.visit('/');
    });

    describe('The Home Page', () => {
        it('successfully loads', () => {
            cy.visit('/');
        });
    });
});
