export interface IAuthDataRequest {
  email: string;
  password: string;
  id: string;
}
export interface IAuthDataResponse {
  name: string;
  token: string;
}
