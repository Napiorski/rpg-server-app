import {
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
  MinLength,
  Min,
  Max,
  IsBoolean,
  ValidateNested,
  IsDefined,
  IsNotEmptyObject,
  IsOptional,
} from 'class-validator';
import { SavingThrowsDto } from './saving-throws.dto';
import { Type } from 'class-transformer';
import { AttackTypesDto } from './attack-types.dto';
import { ProficienciesDto } from './proficiencies.dto';
export class CreateCharacterDto {
  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly characterName: string;

  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly playerName: string;

  @IsNumber()
  @IsNotEmpty()
  @Min(1)
  @Max(300)
  readonly age: number;

  @IsNumber()
  @IsNotEmpty()
  @Min(100)
  @Max(500)
  readonly weight: number;

  @IsNumber()
  @IsNotEmpty()
  @Min(120)
  @Max(300)
  readonly height: number;

  @IsString()
  @MaxLength(500)
  @IsNotEmpty()
  readonly backstory: string;

  @IsString()
  @MaxLength(300)
  @IsNotEmpty()
  readonly alliesAndOrganizations: string;

  @IsString()
  @MaxLength(15)
  @IsNotEmpty()
  readonly race: string;

  @IsString()
  @MaxLength(15)
  @IsNotEmpty()
  readonly class: string;

  @IsNumber()
  @IsNotEmpty()
  @Min(1)
  @Max(100)
  readonly level: number;

  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  @Max(1000)
  readonly experience: number;

  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  @Max(1000)
  readonly maxHp: number;

  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  @Max(1000)
  readonly currentHp: number;

  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  @Max(10)
  readonly armorClass: number;

  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  @Max(10)
  readonly initiative: number;

  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  @Max(120)
  readonly speed: number;

  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  @Max(10)
  readonly inspiration: number;

  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  @Max(10)
  readonly proficiencyBonus: number;

  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  @Max(10)
  readonly perception: number;

  @IsNumber()
  @IsNotEmpty()
  @Min(1)
  @Max(20)
  readonly hitDice: number;

  @IsDefined()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => SavingThrowsDto)
  savingThrows: SavingThrowsDto;

  @IsDefined()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => ProficienciesDto)
  proficiencies: ProficienciesDto;

  @ValidateNested({ each: true })
  @Type(() => AttackTypesDto)
  attackTypes: AttackTypesDto[];

  @IsBoolean()
  readonly deathSaves: boolean;

  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  @Max(99)
  readonly skills: number;

  @IsString()
  @IsNotEmpty()
  readonly language: string;

  @IsString()
  @IsNotEmpty()
  readonly equippedItems: string;

  @IsString()
  @MaxLength(300)
  @IsNotEmpty()
  readonly background: string;

  @IsString()
  @MaxLength(300)
  @IsNotEmpty()
  readonly personality: string;

  @IsString()
  @MaxLength(300)
  readonly ideals: string;

  @IsString()
  @MaxLength(300)
  readonly bonds: string;

  @IsString()
  @MaxLength(15)
  @IsNotEmpty()
  readonly flaws: string;

  @IsString()
  @IsNotEmpty()
  readonly alignment: string;

  @IsString()
  readonly attackItem: string;

  @IsString()
  readonly attackItemBonus: string;

  @IsString()
  readonly attackItemDamageType: string;

  @IsString()
  @MaxLength(400)
  readonly attackNotes: string;

  @IsString()
  @MaxLength(400)
  readonly featuresAndTraits: string;
}
