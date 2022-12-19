import { User } from "../User";

export interface Comment {
  id: string;
  created_at: number;
  url: string;
  text: string;
  user: User;
}
