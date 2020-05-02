class Appointment {
  id: string;

  provider: string;

  date: Date;

  constructor(provider: string, date: Date) {
    this.id = this.makeId();
    this.provider = provider;
    this.date = date;
  }

  makeId() {
    return '_' + Math.random().toString(36).substr(2, 9);
  }
}

export default Appointment;
