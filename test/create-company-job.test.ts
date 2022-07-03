import Company from "../src/company";
import Job from "../src/job";

describe("Create a company job", () => {
  it("A job is created by a company", () => {
    const company = new Company("123", "Test Company", "any address");
    const job = new Job(
      "123",
      "Developer",
      "Create an authentication module",
      new Date("2022-01-10T10:00:00"),
      new Date("2022-01-10T19:00:00"),
      50
    );
    company.addJob(job.id);
    const currentJobs = company.getCurrentJobs();
    expect(currentJobs).toHaveLength(1);
  });
});
