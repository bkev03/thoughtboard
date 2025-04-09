import { PollOption } from "./PollOption";
import { User } from "./User";

export interface Poll {
    id: number;
    name: string;
    description: string;
    open: boolean;
    createdAt: Date
    closeDate: Date;
    createdBy: User;
    options: PollOption[];
}