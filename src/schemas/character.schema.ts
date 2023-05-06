import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { AttackTypes, attackTypesSchema } from './attack-types.schema';
import { CharacteristicsDto } from 'src/dto/characteristics.dto';
import { ProficienciesDto } from 'src/dto/proficiencies.dto';
import {
  Characteristics,
  characteristicsSchema,
} from './characteristics.schema';
import { Proficiencies, proficienciesSchema } from './proficiencies.schema';

@Schema()
class SavingThrows {
  @Prop({ type: Number, required: true, MIN_VALUE: 0, MAX_VALUE: 10 })
  strength: number;

  @Prop({ type: Number, required: true, MIN_VALUE: 0, MAX_VALUE: 10 })
  dexterity: number;

  @Prop({ type: Number, required: true, MIN_VALUE: 0, MAX_VALUE: 10 })
  constitution: number;

  @Prop({ type: Number, required: true, MIN_VALUE: 0, MAX_VALUE: 10 })
  intelligence: number;

  @Prop({ type: Number, required: true, MIN_VALUE: 0, MAX_VALUE: 10 })
  wisdom: number;

  @Prop({ type: Number, required: true, MIN_VALUE: 0, MAX_VALUE: 10 })
  charisma: number;
}

const savingThrowsSchema = SchemaFactory.createForClass(SavingThrows);

@Schema()
export class Character {
  @Prop({ type: savingThrowsSchema, required: true })
  savingThrows: SavingThrows;

  @Prop({ type: characteristicsSchema, required: false })
  characteristics?: Characteristics;

  @Prop({ type: proficienciesSchema, required: false })
  proficiencies?: Proficiencies;

  @Prop({ type: [attackTypesSchema], required: true })
  attackTypes: AttackTypes[];

  @Prop({ type: String, required: true, MAX_LENGTH: 30 })
  username: string;

  @Prop({ type: String, required: true, MAX_LENGTH: 30 })
  characterName: string;

  @Prop({ type: String, required: true, MAX_LENGTH: 30 })
  playerName: string;

  @Prop({ type: Number, required: true, MIN_VALUE: 1, MAX_VALUE: 300 })
  age: number;

  @Prop({ type: Number, required: true, MIN_VALUE: 1, MAX_VALUE: 500 })
  weight: number;

  @Prop({ type: Number, required: true, MIN_VALUE: 1, MAX_VALUE: 100 })
  height: number;

  @Prop({ type: String, required: true, MAX_LENGTH: 500 })
  backstory: string;

  @Prop({ type: String, required: true, MAX_LENGTH: 300 })
  alliesAndOrganizations: string;

  @Prop({ type: String, required: true })
  race: string;

  @Prop({ type: String, required: true })
  class: string;

  @Prop({ type: Number, required: true, MIN_VALUE: 1, MAX_VALUE: 100 })
  level: number;

  @Prop({ type: Number, required: true, MIN_VALUE: 0, MAX_VALUE: 10000 })
  experience: number;

  @Prop({ type: Number, required: true, MIN_VALUE: 0, MAX_VALUE: 1000 })
  maxHp: number;

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
  inspiration: number;

  @Prop({ type: Number, required: true, MIN_VALUE: 0, MAX_VALUE: 10 })
  proficiencyBonus: number;

  @Prop({ type: Number, required: true, MIN_VALUE: 0, MAX_VALUE: 10 })
  perception: number;

  @Prop({ type: Number, required: true, MIN_VALUE: 1, MAX_VALUE: 20 })
  hitDice: number;

  @Prop({ type: Boolean, required: false })
  deathSaves: boolean;

  @Prop({ type: Number, required: true, MIN_VALUE: 1, MAX_VALUE: 99 })
  skills: number;

  @Prop({ type: String, required: true })
  language: string;

  @Prop({ type: String, required: false })
  equippedItems: string;

  @Prop({ type: String, required: true })
  background: string;

  @Prop({ type: String, required: true, MAX_LENGTH: 300 })
  personality: string;

  @Prop({ type: String, required: false, MAX_LENGTH: 300 })
  ideals: string;

  @Prop({ type: String, required: false, MAX_LENGTH: 300 })
  bonds: string;

  @Prop({ type: String, required: true, MAX_LENGTH: 300 })
  flaws: string;

  @Prop({ type: String, required: true })
  alignment: string;

  @Prop({ type: String, required: false })
  attackItem: string;

  @Prop({ type: String, required: false })
  attackItemBonus: string;

  @Prop({ type: String, required: false })
  attackItemDamageType: string;

  @Prop({ type: String, required: true, MAX_LENGTH: 400 })
  attackNotes: string;

  @Prop({ type: String, required: true, MAX_LENGTH: 400 })
  featuresAndTraits: string;

  //Need Spell Props and Proficiency Props
}
export const CharacterSchema = SchemaFactory.createForClass(Character);
