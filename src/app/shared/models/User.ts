import { Timestamp } from "@angular/fire/firestore";

export interface User {
    id: string;
    email: string;
    nickname: string
    name: {
        firstname: string;
        lastname: string;
    };
    signupDate: Timestamp;
    role: "ROLE_USER" | "ROLE_ADMIN";
}