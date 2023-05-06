import { IsString, IsNotEmpty, MinLength, MaxLength } from 'class-validator';

export class ProficienciesDto {
  @IsString()
  @MinLength(0)
  @MaxLength(200)
  armorProficiencies: string;

  @IsString()
  @MinLength(0)
  @MaxLength(200)
  weaponProficiencies: string;

  @IsString()
  @MinLength(0)
  @MaxLength(200)
  vehicleProficiencies: string;

  @IsString()
  @MinLength(0)
  @MaxLength(200)
  toolProficiencies: string;

  @IsString()
  @MinLength(0)
  @MaxLength(200)
  otherProficiencies: string;

  @IsString()
  @MinLength(0)
  @MaxLength(200)
  otherSpeeds: string;
}
