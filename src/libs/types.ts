interface Tasks {
  userId?: string;
  taskId?: string;
  title?: string;
  description?: string;
  dueDate?: Date;
  doneAt?: Date | null;
  isDone?: boolean;
  filename?: string | null;
  createAt?: Date;
  updateAt?: Date;
}
export type { Tasks };

interface User {
  username: string;
  password: string;
  userId?: string | null;
  tokens?: string[];
}
export type { User };

interface Signup {
  userId: string;
  firstName: string;
  lastName: string;
  username: string;
  dateOfBirth: Date;
  password: string;
  createAt?: Date;
  updateAt?: Date;
}
export type { Signup };
// JWT Payload interface
interface UserPayload {
  username: string;
  userId?: string;
}
export type { UserPayload };

// Custom HTTP Request interface
import { type Request } from "express";
interface CustomRequest extends Request {
  user?: UserPayload; // Define the user property
  token?: string; // Define the token property
}
export type { CustomRequest };
