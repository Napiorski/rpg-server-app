import {
  Controller,
  Post,
  Delete,
  Get,
  Put,
  Res,
  Body,
  HttpStatus,
} from '@nestjs/common';
import { response } from 'express';
import { CreateCharacterDto } from 'src/dto/create-character.dto';
import { CharacterService } from './character.service';

@Controller('character')
export class CharacterController {
  constructor(private readonly characterService: CharacterService) {}

  // HTTP POST - /character BODY: { ...data }
  @Post() async createCharacter(
    @Res() response,
    @Body() createCharacterDto: CreateCharacterDto,
  ) {
    try {
      const newCharacter = await this.characterService.createCharacter(
        createCharacterDto,
      );
      return response.status(HttpStatus.CREATED).json({
        message: 'Character has been created successfully',
        newCharacter,
      });
    } catch (err) {
      console.error(err);
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'Error: Character not created!',
        error: 'Bad Request',
      });
    }
  }
}
