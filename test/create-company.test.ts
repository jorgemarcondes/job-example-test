import Company from "../src/company";

describe("Create company", () => {
  it("Have to be created", () => {
    const company = new Company("123", "Test Company", "any address");
    expect(company).toBeDefined();
  });
});
