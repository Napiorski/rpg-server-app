import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
@Schema()
export class Character {
  @Prop({ type: String, required: true, maxlength: 30 })
  name: string;

  @Prop({ type: String, required: true })
  race: string;

  @Prop({ type: String, required: true })
  class: string;

  @Prop({ type: Number, required: true, MIN_VALUE: 0, MAX_VALUE: 100 })
  level: number;

  @Prop({ type: Number, required: true, MIN_VALUE: 0, MAX_VALUE: 1000 })
  hp: number;

  @Prop({ type: Number, required: true, MIN_VALUE: 0, MAX_VALUE: 10 })
  ac: number;

  @Prop({ type: Number, required: true, MIN_VALUE: 0, MAX_VALUE: 10 })
  init: number;

  @Prop({ type: Number, required: true, MIN_VALUE: 0, MAX_VALUE: 10 })
  speed: number;

  @Prop({ type: Number, required: true, MIN_VALUE: 0, MAX_VALUE: 10 })
  inspiration: number;

  @Prop({ type: Number, required: true, MIN_VALUE: 0, MAX_VALUE: 10 })
  proficiencyBonus: number;

  @Prop({ type: Number, required: true, MIN_VALUE: 1, MAX_VALUE: 10 })
  hitDice: number;

  @Prop({ type: Boolean, required: false })
  savingThrows: boolean;

  @Prop({ type: Boolean, required: false })
  deathSaves: boolean;

  @Prop({ type: Number, required: true, MIN_VALUE: 1, MAX_VALUE: 99 })
  skills: number;
}
export const StudentSchema = SchemaFactory.createForClass(Character);
