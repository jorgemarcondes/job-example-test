import Job from "../entity/job";

export default interface JobRepository {
  save(job: Job): Promise<void>;
  findById(jobId: string): Promise<Job | undefined>;
  getAvailableJobsAverageByType(jobType: string): Promise<number>;
  update(jobId: string, updateJob: Partial<Job>): Promise<void>;
}
