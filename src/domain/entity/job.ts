import { v4 as uuidv4 } from "uuid";
import { JobStatus } from "../job-status.enum";

export default class Job {
  id: string;
  price: number = 0;
  status: JobStatus;

  constructor(
    public companyId: string,
    public type: string,
    public title: string,
    public description: string,
    public start: Date,
    public end: Date
  ) {
    if (start >= end) throw new Error("Start have to be greater than end");

    this.id = uuidv4();
    this.status = JobStatus.CREATED;
  }
}
