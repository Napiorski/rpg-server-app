import { IsString, MaxLength, MinLength } from 'class-validator';

export class AttackTypesDto {
  @IsString()
  @MinLength(0)
  @MaxLength(15)
  type: string;

  @IsString()
  @MinLength(0)
  @MaxLength(7)
  bonus: string;

  @IsString()
  @MinLength(0)
  @MaxLength(15)
  damage: string;
}
