import {
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
  MinLength,
  Min,
  Max,
  IsBoolean,
  IsDate,
  IsDateString,
} from 'class-validator';
export class CreateUserDto {
  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly firstName: string;

  @IsString()
  @MaxLength(30)
  readonly lastName: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(7)
  @MaxLength(20)
  readonly password: string;

  @IsNumber()
  @IsNotEmpty()
  readonly phoneNumber: number;

  @IsDateString()
  @IsNotEmpty()
  readonly birthday: Date;

  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly email: string;
}
