describe("index", () => {
  it("button click", () => {
    cy.visit("http://localhost:3000/");
    cy.get("button").click();
  });
});
