import { JobRequest } from "../../src/domain/entity/job-request";

describe("Job request", () => {
  it("should be created", () => {
    const jobRequest = new JobRequest("123", "123");
    expect(jobRequest.date).toBeDefined();
  });
});
