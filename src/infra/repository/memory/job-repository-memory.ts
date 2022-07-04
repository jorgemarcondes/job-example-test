import job from "../../../domain/entity/job";
import JobRepository from "../../../domain/repository/job-repository";
import Job from "../../../domain/entity/job";
import { JobStatus } from "../../../domain/job-status.enum";

export default class JobRepositoryMemory implements JobRepository {
  private jobs: Job[] = [];

  async save(job: Job): Promise<void> {
    this.jobs.push(job);
  }

  async findById(jobId: string): Promise<job | undefined> {
    return this.jobs.find((j) => j.id === jobId);
  }

  async getAvailableJobsAverageByType(jobType: string): Promise<number> {
    const jobs = this.jobs.filter(
      (j) =>
        j.type === jobType &&
        [JobStatus.POSTED, JobStatus.VIEWED].includes(j.status)
    );
    const sum = jobs.reduce((total, job) => {
      return total + job.price;
    }, 0);
    return parseFloat((sum / jobs.length).toFixed(2));
  }

  async update(jobId: string, updateJob: Partial<Job>) {
    const job = await this.findById(jobId);

    const newJob = { ...job, ...updateJob } as Job;

    const index = this.jobs.findIndex((j) => j.id === jobId);
    this.jobs[index] = newJob;
  }
}
