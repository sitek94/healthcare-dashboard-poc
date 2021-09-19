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
