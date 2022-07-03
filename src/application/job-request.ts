import { JobStatus } from "../domain/job-status.enum";

export default class JobRequest {
  async execute(input: Input): Promise<Output> {
    return {
      status: JobStatus.REQUESTED,
    };
  }
}

type Input = {
  employeeId: string;
  jobId: string;
};

type Output = {
  status: JobStatus;
};
