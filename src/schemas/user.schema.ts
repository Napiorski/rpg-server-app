import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
@Schema()
export class Character {
  @Prop({ type: String, required: true, MAX_LENGTH: 30 })
  firstName: string;

  @Prop({ type: String, required: true, MAX_LENGTH: 30 })
  lastName: string;

  @Prop({ type: String, required: true, MAX_LENGTH: 30 })
  password: string;

  @Prop({ type: Number, required: false, MAX_LENGTH: 30 })
  phoneNumber: number;

  @Prop({ type: String, required: true, MAX_LENGTH: 30 })
  email: string;

  @Prop({ type: String, required: true, MAX_LENGTH: 30 })
  birthday: string;
}
export const UserSchema = SchemaFactory.createForClass(User);
