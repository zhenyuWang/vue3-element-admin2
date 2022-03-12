describe("first", () => {
  it("one", () => {
    cy.visit("http://localhost:3000/");
    cy.get("button").click();
  });
});
