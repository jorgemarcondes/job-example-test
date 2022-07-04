import JobRepository from "../domain/repository/job-repository";
import { JobStatus } from "../domain/job-status.enum";

export default class GetJobDetail {
  constructor(private jobRepository: JobRepository) {}

  async execute(jobId: string) {
    const job = await this.jobRepository.findById(jobId);
    if (
      !job ||
      ![JobStatus.POSTED, JobStatus.VIEWED, JobStatus.REQUESTED].includes(
        job.status
      )
    ) {
      throw new Error("Job not found");
    }
    return job;
  }
}
