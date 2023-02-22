import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
@Schema()
export class Monster {
  @Prop({ type: String, required: true, MAX_LENGTH: 30 })
  monsterName: string;

  @Prop({ type: String, required: true, MAX_LENGTH: 30 })
  monsterType: string;

  @Prop({ type: Number, required: true, MIN_VALUE: 1, MAX_VALUE: 300 })
  size: number;

  @Prop({ type: Number, required: true, MIN_VALUE: 1, MAX_VALUE: 500 })
  race: number;

  @Prop({ type: String, required: true })
  environment: string;

  @Prop({ type: Number, required: true, MIN_VALUE: 1, MAX_VALUE: 100 })
  hp: number;

  @Prop({ type: Number, required: true, MIN_VALUE: 1, MAX_VALUE: 100 })
  strength: number;

  @Prop({ type: Number, required: true, MIN_VALUE: 1, MAX_VALUE: 100 })
  dexterity: number;

  @Prop({ type: Number, required: true, MIN_VALUE: 1, MAX_VALUE: 100 })
  constitution: number;

  @Prop({ type: Number, required: true, MIN_VALUE: 1, MAX_VALUE: 100 })
  intelligence: number;

  @Prop({ type: Number, required: true, MIN_VALUE: 1, MAX_VALUE: 100 })
  wisdom: number;

  @Prop({ type: Number, required: true, MIN_VALUE: 1, MAX_VALUE: 100 })
  charisma: number;

  @Prop({ type: Number, required: true, MIN_VALUE: 0, MAX_VALUE: 100000 })
  challengeExperience: number;

  //@Prop({ type: String, required: true, MAX_LENGTH: 30 })
  //condition: string;

  @Prop({ type: Number, required: false, MIN_VALUE: 0, MAX_VALUE: 1000 })
  currentHp: number;

  @Prop({ type: Number, required: true, MIN_VALUE: 0, MAX_VALUE: 10 })
  armorClass: number;

  @Prop({ type: Number, required: true, MIN_VALUE: 0, MAX_VALUE: 10 })
  initiative: number;

  @Prop({ type: Number, required: true, MIN_VALUE: 0, MAX_VALUE: 120 })
  speed: number;

  @Prop({ type: Number, required: true, MIN_VALUE: 0, MAX_VALUE: 10 })
  proficiencyBonus: number;

  @Prop({ type: Boolean, required: false })
  savingThrows: boolean;

  @Prop({ type: Number, required: true, MIN_VALUE: 1, MAX_VALUE: 99 })
  skills: number;

  @Prop({ type: String, required: true })
  language: string;

  @Prop({ type: String, required: true })
  alignment: string;

  @Prop({ type: String, required: true })
  actions: string;

  @Prop({ type: String, required: false })
  legendaryActions: string;

  @Prop({ type: String, required: false })
  damageImmunities: string;

  @Prop({ type: String, required: false })
  damageResistances: string;

  @Prop({ type: String, required: false })
  senses: string;
  //need spellcasting prop!
}
export const MonstersSchema = SchemaFactory.createForClass(Monster);
