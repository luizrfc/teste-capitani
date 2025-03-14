export interface AuthDTO {
  email: string;
  password: string;
}

export interface UserDTO {
  id?: string;
  name: string;
  email: string;
  password: string;
  safeword?: string;
  createdAt?: Date;
  updatedAt?: Date;
  code?: string;
}
