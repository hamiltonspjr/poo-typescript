export class Person {
  private _firstName: string;
  private lastName: string;
  private birthDate: Date;

  constructor(firstName: string, lastName: string, birthDate: Date) {
    this._firstName = firstName;
    this.lastName = lastName;
    this.birthDate = birthDate;
  }

  // getters
  get firstName(): string {
    return this._firstName;
  }

  // setters
  set firstName(name: string) {
    if (name.length > 0) {
      this._firstName = name;
    }
  }

  // methods
  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  getAge(): number {
    const today = new Date();
    const age = today.getFullYear() - this.birthDate.getFullYear();

    return this.isBirthdayPassed() ? age : age - 1;
  }

  // method encapsulation
  private isBirthdayPassed(): boolean {
    const today = new Date();
    return (
      today.getMonth() > this.birthDate.getMonth() ||
      (today.getMonth() === this.birthDate.getMonth() &&
        today.getDate() >= this.birthDate.getDate())
    );
  }
}
