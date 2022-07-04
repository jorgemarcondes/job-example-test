export class JobRequest {
  constructor(
    public userId: string,
    public jobId: string,
    public date = new Date()
  ) {}
}
