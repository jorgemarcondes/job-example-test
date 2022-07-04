import Job from "../../src/domain/entity/job";
import CalculateJobPrice from "../../src/application/calculate-job-price";
import JobRepositoryMemory from "../../src/infra/repository/memory/job-repository-memory";
import { JobStatus } from "../../src/domain/job-status.enum";

describe("Calculate job price", () => {
  let jobRepository: JobRepositoryMemory;
  let job: Job;
  let calculateJobPrice: CalculateJobPrice;

  beforeEach(() => {
    jobRepository = new JobRepositoryMemory();
    calculateJobPrice = new CalculateJobPrice(jobRepository);
    job = new Job(
      "123",
      "Development",
      "Developer",
      "Create an authentication module",
      new Date("2022-01-10T10:00:00"),
      new Date("2022-01-10T19:00:00")
    );
    jobRepository.save(job);
  });

  it("should calculate price", async () => {
    const output = await calculateJobPrice.execute(job.id);

    const updatedJob = await jobRepository.findById(job.id);

    expect(output.price).toBe(60);
    expect(updatedJob?.price).toBe(60);
    expect(updatedJob?.status).toBe(JobStatus.POSTED);
  });

  it("should calculate price with jobs at database", async () => {
    const job2 = new Job(
      "123",
      "Development",
      "Developer",
      "Create an authentication module",
      new Date("2022-01-10T10:00:00"),
      new Date("2022-01-10T19:00:00")
    );
    await jobRepository.save(job2);

    const output = await calculateJobPrice.execute(job.id);
    const output2 = await calculateJobPrice.execute(job2.id);

    const updatedJob = await jobRepository.findById(job.id);
    const updatedJob2 = await jobRepository.findById(job2.id);

    expect(output.price).toBe(60);
    expect(output2.price).toBe(57);
    expect(updatedJob?.price).toBe(60);
    expect(updatedJob2?.price).toBe(57);
  });
});
