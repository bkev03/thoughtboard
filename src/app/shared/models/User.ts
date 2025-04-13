export interface User {
    nickname: string
    name: {
        firstname: string;
        lastname: string;
    };
    signupDate: Date;
    email: string;
    password: string;
    role: "ROLE_USER" | "ROLE_ADMIN";
}