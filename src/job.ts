import { v4 as uuidv4 } from "uuid";
import { JobStatus } from "./job-status.enum";

export default class Job {
  readonly id: string;
  private price: number = 0;
  readonly status: JobStatus;

  constructor(
    readonly companyId: string,
    readonly title: string,
    readonly description: string,
    readonly start: Date,
    readonly end: Date
  ) {
    if (start >= end) throw new Error("Start have to be greater than end");

    this.id = uuidv4();
    this.status = JobStatus.CREATED;
  }
}
