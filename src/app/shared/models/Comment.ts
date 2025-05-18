import { User } from "./User";

export interface Comment {
    id: string;
    nickname: string;
    content: string;
    createdAt: Date;
}