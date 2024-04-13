export interface GenericResponseKey {
  _id?: string;
  id?: string;
  deleted?: number;
  updatedAt?: string;
  createdAt?: string;
  __v?: number;
}

export interface User {
  _id: string;
  firstName: string;
  fullName?: string;
  lastName?: string;
  email?: string;
}
