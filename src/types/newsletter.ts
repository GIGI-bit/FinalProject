export class Newsletter {
  email: string;
  date: string;
  constructor(email: string) {
    if (email.includes("@")) this.email = email;
    else alert("Wrong Email!");
    this.email = "";
    this.date = new Date().toString();
  }
}
