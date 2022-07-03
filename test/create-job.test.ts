import Job from "../src/job";
import { JobStatus } from "../src/job-status.enum";

describe("Create job", () => {
  it("should to be created", async () => {
    const job = new Job(
      "123",
      "Developer",
      "Create an authentication module",
      new Date("2022-01-10T10:00:00"),
      new Date("2022-01-10T19:00:00")
    );

    expect(job.id).toBeDefined();
  });

  it("should have start greater than end", () => {
    expect(() => {
      new Job(
        "123",
        "Developer",
        "Create an authentication module",
        new Date("2022-01-10T17:00:00"),
        new Date("2022-01-10T10:00:00")
      );
    }).toThrow(new Error("Start have to be greater than end"));
  });

  it("should have start not equal to end", () => {
    expect(() => {
      new Job(
        "123",
        "Developer",
        "Create an authentication module",
        new Date("2022-01-10T17:00:00"),
        new Date("2022-01-10T17:00:00")
      );
    }).toThrow(new Error("Start have to be greater than end"));
  });

  it("should create job with status CREATED", () => {
    const job = new Job(
      "123",
      "Developer",
      "Create an authentication module",
      new Date("2022-01-10T10:00:00"),
      new Date("2022-01-10T17:00:00")
    );
    expect(job.status).toBe(JobStatus.CREATED);
  });
});
