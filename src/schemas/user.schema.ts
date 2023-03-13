import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsEmail } from 'class-validator';
@Schema()
export class User {
  @IsEmail()
  @Prop({ type: String, required: true, MAX_LENGTH: 30 })
  username: string;

  @Prop({ type: String, required: true, MAX_LENGTH: 30 })
  password: string;
}
export const UserSchema = SchemaFactory.createForClass(User);
