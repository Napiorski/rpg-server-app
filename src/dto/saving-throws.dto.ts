import { IsNumber, IsNotEmpty, Min, Max } from 'class-validator';

export class SavingThrowsDto {
  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  @Max(10)
  strength: number;

  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  @Max(10)
  dexterity: number;

  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  @Max(10)
  constitution: number;

  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  @Max(10)
  intelligence: number;

  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  @Max(10)
  wisdom: number;

  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  @Max(10)
  charisma: number;
}
