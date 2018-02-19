export interface Store {
    form: any;
    contacts: Contact[];
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

export interface Contact {
    _id: string | number;
    username: string | number;
    lastMessage?: string;
    date: string;
}
