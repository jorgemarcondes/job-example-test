import Job from "./job";

export default class Company {
  jobs: string[] = [];

  constructor(
    private identity: string,
    private name: string,
    private address: string
  ) {}

  addJob(jobId: string) {
    this.jobs = [...this.jobs, jobId];
  }

  getCurrentJobs() {
    return this.jobs;
  }
}
