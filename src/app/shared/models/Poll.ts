export interface Poll {
    id: string;
    name: string;
    description: string;
    createdAt: Date
    createdBy: string;
    firstOption: string;
    secondOption: string;
}