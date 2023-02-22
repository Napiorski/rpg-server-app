import { Document } from 'mongoose';

export interface IUser extends Document {
  readonly firstName: string;
  readonly lastName: string;
  readonly password: string;
  readonly phoneNumber: number;
  readonly email: string;
  readonly birthday: Date;
}
