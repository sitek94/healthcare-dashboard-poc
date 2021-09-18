export enum UserType {
  Doctor = "Doctor",
  SingleUser = "Single User",
}

export interface User {
  type: UserType;
  firstName: string;
  lastName: string;
  address: {
    street: string;
    city: string;
  };
}
