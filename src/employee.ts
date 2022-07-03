export default class Employee {
  constructor(
    readonly identity: string,
    readonly name: string,
    readonly dob: Date,
    readonly address: string
  ) {
    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    const month = today.getMonth() - dob.getMonth();
    if (month < 0 || (month === 0 && dob.getDate() > today.getDate())) {
      age--;
    }
    if (age < 12) throw new Error("Age must be greater than 12 years");
  }
}
