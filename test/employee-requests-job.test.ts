import Employee from "../src/domain/entity/employee";
import Job from "../src/domain/entity/job";
import Company from "../src/domain/entity/company";
import JobRequest from "../src/application/job-request";
import { JobStatus } from "../src/domain/job-status.enum";

describe("Employee requests a job", () => {
  it("should request a job", async () => {
    const employee = new Employee(
      "123",
      "Jorge",
      new Date("1987-01-10"),
      "any"
    );
    const company = new Company("123", "Test Company", "any address");
    const job = new Job(
      company.identity,
      "Developer",
      "Create an authentication module",
      new Date("2022-01-10T10:00:00"),
      new Date("2022-01-10T19:00:00")
    );

    const jobRequest = new JobRequest();
    const output = await jobRequest.execute({
      employeeId: employee.identity,
      jobId: job.id,
    });
    expect(output.status).toBe(JobStatus.REQUESTED);
  });
});
