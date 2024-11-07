// auth/dto/register.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { BloodGroup, Gender, Role } from '@prisma/client';
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class RegisterDto {
  @ApiProperty()
  @IsNotEmpty()
  firstName: string;

  @ApiProperty()
  @IsNotEmpty()
  lastName: string;

  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  @MinLength(6)
  password: string;

  @ApiProperty()
  @IsNotEmpty()
  gender: Gender;

  @ApiProperty()
  @IsNotEmpty()
  bloodGroup: BloodGroup;

  @ApiProperty()
  @IsNotEmpty()
  address: string;

  @ApiProperty()
  @IsNotEmpty()
  role: Role;
}

