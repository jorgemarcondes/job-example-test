import Job from "./job";

export default class Company {
  jobs: string[] = [];

  constructor(
    readonly identity: string,
    readonly name: string,
    readonly address: string
  ) {}

  addJob(jobId: string) {
    this.jobs = [...this.jobs, jobId];
  }

  getCurrentJobs() {
    return this.jobs;
  }
}
