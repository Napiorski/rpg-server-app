import {
  Controller,
  Post,
  Delete,
  Get,
  Put,
  Res,
  Body,
  HttpStatus,
  Param,
} from '@nestjs/common';
import { response } from 'express';
import { CreateCharacterDto } from 'src/dto/create-character.dto';
import { UpdateCharacterDto } from 'src/dto/update-character.dto';
import { CharacterService } from './character.service';
import { Character } from 'src/schemas/character.schema';

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

  @Get()
  async getCharacters(@Res() response) {
    try {
      const characterData = await this.characterService.getCharacters();
      return response.status(HttpStatus.OK).json({
        message: 'All character data found successfully',
        characterData,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Get('/:username')
  async getCharacter(@Res() response, @Param('username') username: string) {
    try {
      const existingCharacter =
        await this.characterService.getCharacterByUsername(username);
      return response.status(HttpStatus.OK).json({
        message: 'Character found successfully',
        existingCharacter,
      });
    } catch (err) {
      console.log('getCharacter error:', err);
      return response.status(err.status).json(err.response);
    }
  }

  @Delete('/:id')
  async deleteCharacter(@Res() response, @Param('id') characterId: string) {
    try {
      const deletedCharacter = await this.characterService.deleteCharacter(
        characterId,
      );
      return response.status(HttpStatus.OK).json({
        message: 'Character deleted successfully',
        deletedCharacter,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Put('/:id')
  async updateCharacter(
    @Res() response,
    @Param('id') characterId: string,
    @Body() updateCharacterDto: UpdateCharacterDto,
  ) {
    try {
      const existingCharacter = await this.characterService.updateCharacter(
        characterId,
        updateCharacterDto,
      );
      return response.status(HttpStatus.OK).json({
        message: 'Character has been successfully updated',
        existingCharacter,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }
}
