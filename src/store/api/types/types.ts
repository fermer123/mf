// auth
export interface IAuthDataRequest {
  email: string;
  password: string;
  id: string;
}
export interface IAuthDataResponse {
  name: string;
  token: string;
}

// words
export interface IWord {
  id: string;
  value: string;
}
export interface IWords {
  words: IWord[];
}
