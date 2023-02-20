import {
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
  MinLength,
  Min,
  Max,
  IsBoolean,
} from 'class-validator';
export class CreateMonsterDto {
  @IsString()
  @MaxLength(50)
  @IsNotEmpty()
  readonly monsterName: string;

  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly monsterType: string;

  @IsNumber()
  @IsNotEmpty()
  @Min(1)
  @Max(300)
  readonly size: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(2)
  @MinLength(20)
  readonly race: string;

  @IsString()
  @IsNotEmpty()
  @Min(5)
  @Max(20)
  readonly environment: string;

  @IsNumber()
  @IsNotEmpty()
  @Min(1)
  @Max(1000)
  readonly hp: number;

  @IsNumber()
  @IsNotEmpty()
  @Min(1)
  @Max(20)
  readonly strength: number;

  @IsNumber()
  @IsNotEmpty()
  @Min(1)
  @Max(20)
  readonly dexterity: number;

  @IsNumber()
  @IsNotEmpty()
  @Min(1)
  @Max(20)
  readonly constitution: number;

  @IsNumber()
  @IsNotEmpty()
  @Min(1)
  @Max(20)
  readonly intelligence: number;

  @IsNumber()
  @IsNotEmpty()
  @Min(1)
  @Max(20)
  readonly wisdom: number;

  @IsNumber()
  @IsNotEmpty()
  @Min(1)
  @Max(20)
  readonly charisma: number;

  @IsNumber()
  @IsNotEmpty()
  @Min(10)
  @Max(10000)
  readonly challengeExperience: number;

  // @IsString()
  // @IsNotEmpty()
  // @Min(100)
  // @Max(500)
  //readonly condition: string;

  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  @Max(1000)
  readonly currentHp: number;

  @IsNumber()
  @IsNotEmpty()
  @Min(1)
  @Max(50)
  readonly armorClass: number;

  @IsNumber()
  @IsNotEmpty()
  @Min(1)
  @Max(50)
  readonly initiative: number;

  @IsNumber()
  @IsNotEmpty()
  @Min(20)
  @Max(200)
  readonly speed: number;

  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  @Max(10)
  readonly proficiencyBonus: number;

  @IsBoolean()
  readonly savingThrows: boolean;

  @IsString()
  @MaxLength(1000)
  readonly skills: String;

  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  @MaxLength(100)
  readonly language: String;

  @IsString()
  @IsNotEmpty()
  @MinLength(4)
  @Max(20)
  readonly alignment: string;

  @IsString()
  @Min(1)
  @Max(1000)
  readonly actions: string;

  @IsString()
  @MinLength(1)
  @MaxLength(1000)
  readonly legendaryActions: string;

  @IsString()
  @IsNotEmpty()
  @Min(1)
  @Max(1000)
  readonly damageImmunities: string;

  @IsString()
  @IsNotEmpty()
  @Min(1)
  @Max(1000)
  readonly damageResistances: string;

  @IsString()
  @IsNotEmpty()
  @Min(1)
  @Max(500)
  readonly senses: string;
}
