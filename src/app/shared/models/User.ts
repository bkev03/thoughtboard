export interface User {
    id: number;
    nickname: string
    name: {
        firstname: string;
        lastname: string;
    };
    signupDate: Date;
    email: string;
    password: string;
    role: string;
}