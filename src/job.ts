export default class Job {
  constructor(
    private title: string,
    private description: string,
    private start: Date,
    private end: Date,
    private price: number
  ) {
    if (start >= end) throw new Error("Start have to be greater than end");
  }
}
