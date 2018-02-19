export interface Store {
    form: any;
    account: Account;
}

export interface Account {
    data: {
        token: string;
        status: number;
        isAuth: boolean;
        user: {
            _id: string | number;
            firstname: string | number;
            email: string;
            username: string | number;
        };
    };
}
