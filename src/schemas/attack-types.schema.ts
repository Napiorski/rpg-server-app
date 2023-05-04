import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class AttackTypes {
  @Prop({ type: String, required: false, MAX_LENGTH: 20 })
  type: string;

  @Prop({ type: String, required: false, MAX_LENGTH: 20 })
  bonus: string;

  @Prop({ type: String, required: false, MAX_LENGTH: 20 })
  damage: string;
}

export const attackTypesSchema = SchemaFactory.createForClass(AttackTypes);
