export enum ROLE {
  MEMBER = 'MEMBER',
  ADMIN = 'ADMIN',
}

export interface IUser {
  username: string;
  role: ROLE;
}