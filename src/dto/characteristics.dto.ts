import { IsString, IsNotEmpty, MinLength, MaxLength } from 'class-validator';

export class CharacteristicsDto {
  @IsString()
  @MinLength(0)
  @MaxLength(200)
  personality: string;

  @IsString()
  @MinLength(0)
  @MaxLength(200)
  ideals: string;

  @IsString()
  @MinLength(0)
  @MaxLength(200)
  bonds: string;

  @IsString()
  @MinLength(0)
  @MaxLength(200)
  flaws: string;
}
