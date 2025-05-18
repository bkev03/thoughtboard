import { PollOption } from "./PollOption";

export interface Poll {
    id: number;
    name: string;
    description: string;
    open: boolean;
    createdAt: Date
    closeDate: Date;
    createdBy: string;
    options: PollOption[];
    allVotes: number;
}