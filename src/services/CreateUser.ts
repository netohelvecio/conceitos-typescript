export interface Techs {
  title: string;
  level: number;
}

export interface User {
  name: string;
  email: string;
  password: string;
  techs: Array<string | Techs>;
}

export function createUser({ name, email, password }: User) {
  const user = {
    name,
    email,
    password,
  };

  return user;
}