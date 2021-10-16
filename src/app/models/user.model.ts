export class User{
  fullName: string;
  email: string;
  username: string;
  password: string;
  confirmPassword ?: string;

  constructor(fullName: string, email: string, username: string, password: string){
    this.fullName = fullName;
    this.email = email;
    this.username = username;
    this.password = password;
  }
}