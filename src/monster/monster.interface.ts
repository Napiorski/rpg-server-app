import { Document } from 'mongoose';

export interface IMonster extends Document {
  readonly monsterName: string;
  readonly monsterType: string;
  readonly size: number;
  readonly race: number;
  readonly environment: string;
  readonly hp: number;
  readonly strength: number;
  readonly dexterity: number;
  readonly constitution: number;
  readonly intelligence: number;
  readonly wisdom: number;
  readonly charisma: number;
  readonly challengeExperience: number;
  //readonly condition: string;
  readonly currentHp: number;
  readonly armorClass: number;
  readonly initiative: number;
  readonly speed: number;
  readonly proficiencyBonus: number;
  readonly savingThrows: boolean;
  readonly skills: string;
  readonly language: string;
  readonly alignment: string;
  readonly actions: string;
  readonly legendaryActions: string;
  readonly damageImmunities: string;
  readonly damageResistances: string;
  readonly senses: string;
}
