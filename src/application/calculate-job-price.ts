import JobRepository from "../domain/repository/job-repository";
import { JobStatus } from "../domain/job-status.enum";

export default class CalculateJobPrice {
  private BASE_VALUE = 60;
  private MIN_VALUE = 30;

  constructor(private jobRepository: JobRepository) {}

  async execute(jobId: string): Promise<Output> {
    const job = await this.jobRepository.findById(jobId);
    if (!job) throw new Error("Job not found");

    const average = await this.jobRepository.getAvailableJobsAverageByType(
      job.type
    );

    const jobPrice = !average
      ? this.BASE_VALUE
      : Math.max(parseFloat((average * 0.95).toFixed(2)), this.MIN_VALUE);

    await this.jobRepository.update(job.id, {
      price: jobPrice,
      status: JobStatus.POSTED,
    });

    return {
      price: jobPrice,
    };
  }
}

type Output = {
  price: number;
};
