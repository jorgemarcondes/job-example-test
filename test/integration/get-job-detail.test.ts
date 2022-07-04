import JobRepositoryMemory from "../../src/infra/repository/memory/job-repository-memory";
import Job from "../../src/domain/entity/job";
import CalculateJobPrice from "../../src/application/calculate-job-price";
import { JobStatus } from "../../src/domain/job-status.enum";
import GetJobDetail from "../../src/application/get-job-detail";

describe("Get job detail", () => {
  let jobRepository: JobRepositoryMemory;
  let getJobDetail: GetJobDetail;
  let job: Job;
  let calculateJobPrice: CalculateJobPrice;

  beforeEach(async () => {
    jobRepository = new JobRepositoryMemory();
    getJobDetail = new GetJobDetail(jobRepository);
    calculateJobPrice = new CalculateJobPrice(jobRepository);
    job = new Job(
      "123",
      "Development",
      "Developer",
      "Create an authentication module",
      new Date("2022-01-10T10:00:00"),
      new Date("2022-01-10T19:00:00")
    );
    await jobRepository.save(job);
    await calculateJobPrice.execute(job.id);
  });

  it("should return a job", async () => {
    const output = await getJobDetail.execute(job.id);

    expect(output.status).toBe(JobStatus.POSTED);
  });

  it("should throw an error if job not exists", async () => {
    await expect(getJobDetail.execute("123")).rejects.toThrow(
      new Error("Job not found")
    );
  });

  it("should throw an error if job status is CREATED", async () => {
    const job2 = new Job(
      "123",
      "Development",
      "Developer",
      "Create an authentication module",
      new Date("2022-01-10T10:00:00"),
      new Date("2022-01-10T19:00:00")
    );
    await jobRepository.save(job);

    await expect(getJobDetail.execute(job2.id)).rejects.toThrow(
      new Error("Job not found")
    );
  });
});
