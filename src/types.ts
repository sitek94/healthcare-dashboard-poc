export enum UserRole {
  Doctor = 'Doctor',
  SingleUser = 'Single User',
}

export interface User {
  role: UserRole;
  id: string;
  firstName: string;
  lastName: string;
}

export interface Patient {
  id: string;
  name: string;
  email: string;
  phone: string;
  age: number;
  tags: Tag[];
}

export interface Tag {
  text: string;
  color: string;
}
