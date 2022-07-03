import Employee from "../src/employee";

describe("Create employee", () => {
  it("Have to be created", () => {
    const employee = new Employee(
      "123",
      "Jorge",
      new Date("1987-01-10"),
      "any"
    );
    expect(employee).toBeDefined();
  });

  it("Should throw and error if age are less than 12 years", () => {
    expect(
      () => new Employee("123", "Jorge", new Date("2020-01-10"), "any")
    ).toThrow(new Error("Age must be greater than 12 years"));
  });
});
