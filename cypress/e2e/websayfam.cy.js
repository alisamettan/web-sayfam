describe("template spec", () => {
  it("passes", () => {
    cy.visit("https://alisamettan.vercel.app/");
  });

  it("page is turning to darkmode after clicking the checkbox", () => {
    cy.visit("https://alisamettan.vercel.app/");
    cy.get("[data-cy='darkMode-toggle']").click();

    cy.get('[data-cy="haveDark"]').should("have.class", "dark");
  });
});
