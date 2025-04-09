import { Comment } from "./Comment";
import { User } from "./User";

export interface Topic {
    id: number;
    name: string;
    description: string;
    createdBy: User;
    createdAt: Date;
    comments: Comment[];
}