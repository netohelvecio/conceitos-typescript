import { Response, Request } from "express";
import { createUser } from "./services/CreateUser";

export function helloWorld(request: Request, response: Response) {

  const user = createUser({
    name: 'Helvécio Neto', 
    email: 'helvecioneto77@gmail.com',
    password: '123456',
    techs: [
      { title: "React", level: 4 },
      "NodeJS",
    ],
  });

  return response.json({ message: 'Hello World' });
}