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
export class CreateUserDto {
  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly firstName: string;

  @IsString()
  @MaxLength(30)
  readonly lastName: string;

  @IsNumber()
  @IsNotEmpty()
  @Min(1)
  @Max(20)
  readonly password: number;

  @IsNumber()
  @IsNotEmpty()
  @Min(8)
  @Max(9)
  readonly phoneNumber: number;

  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly birthday: string;

  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly email: string;
}
