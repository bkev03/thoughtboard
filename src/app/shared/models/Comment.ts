import { User } from "./User";

export interface Comment {
    id: number;
    user: string;
    content: string;
    createdAt: Date;
}