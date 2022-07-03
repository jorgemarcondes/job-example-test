import Job from "../src/job";

describe("Create job test", () => {
  it("Have to be created", () => {
    const job = new Job(
      "123",
      "Developer",
      "Create an authentication module",
      new Date("2022-01-10T10:00:00"),
      new Date("2022-01-10T19:00:00"),
      50
    );
    expect(job).toBeDefined();
  });

  it("Should throw an error if start be greater than end", () => {
    expect(() => {
      new Job(
        "123",
        "Developer",
        "Create an authentication module",
        new Date("2022-01-10T17:00:00"),
        new Date("2022-01-10T10:00:00"),
        50
      );
    }).toThrow(new Error("Start have to be greater than end"));
  });

  it("Should throw an error if start equal to end", () => {
    expect(() => {
      new Job(
        "123",
        "Developer",
        "Create an authentication module",
        new Date("2022-01-10T17:00:00"),
        new Date("2022-01-10T17:00:00"),
        50
      );
    }).toThrow(new Error("Start have to be greater than end"));
  });

  it("Should throw an error if price is less or equal zero", () => {
    expect(() => {
      new Job(
        "123",
        "Developer",
        "Create an authentication module",
        new Date("2022-01-10T10:00:00"),
        new Date("2022-01-10T18:00:00"),
        0
      );
    }).toThrow(new Error("Price must be greater than zero"));
  });
});
