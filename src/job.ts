export default class Job {
  constructor(
    readonly id: string,
    private title: string,
    private description: string,
    private start: Date,
    private end: Date,
    private price: number
  ) {
    if (start >= end) throw new Error("Start have to be greater than end");
    if (price <= 0) throw new Error("Price must be greater than zero");
  }
}
