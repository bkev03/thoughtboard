import { Comment } from "./Comment";
import { User } from "./User";

export interface Topic {
    id: string;
    name: string;
    description: string;
    createdBy: string;
    createdAt: Date;
    comments: string[];
}