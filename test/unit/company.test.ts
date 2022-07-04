import Company from "../../src/domain/entity/company";

describe("Company", () => {
  it("should be created", () => {
    const company = new Company("123", "Test Company", "any address");
    expect(company).toBeDefined();
  });
});
