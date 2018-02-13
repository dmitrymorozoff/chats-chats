// @flow
export interface IStore {
    fomr: any;
    account: IAccount;
}

export interface IAccount {
    data: {
        token: string,
        status: number,
        isAuth: boolean,
        user: {
            _id: string | number,
            firstname: string | number,
            email: string,
            username: string | number,
        },
    };
}
