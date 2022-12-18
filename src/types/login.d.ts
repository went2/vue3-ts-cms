export interface IAccount {
  id: number;
  name: string;
  token: string;
}

export interface ILoginRequest {
  name: string;
  password: string;
}
