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
import { CreateMonsterDto } from 'src/dto/create-monster.dto';
import { UpdateMonsterDto } from 'src/dto/update-monster.dto';
import { MonsterService } from './monster.service';

@Controller('monster')
export class MonsterController {
  constructor(private readonly monsterService: MonsterService) {}

  // HTTP POST - /user BODY: { ...data }
  @Post() async createMonster(
    @Res() response,
    @Body() createMonsterDto: CreateMonsterDto,
  ) {
    try {
      const newMonster = await this.monsterService.createMonster(
        createMonsterDto,
      );
      return response.status(HttpStatus.CREATED).json({
        message: 'Monster has been created successfully',
        newMonster,
      });
    } catch (err) {
      console.error(err);
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'Error: Monster not created!',
        error: 'Bad Request',
      });
    }
  }

  @Get()
  async getMonsters(@Res() response) {
    try {
      const monsterData = await this.monsterService.getMonsters();
      return response.status(HttpStatus.OK).json({
        message: 'All monster data found successfully',
        monsterData,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Get('/:id')
  async getMonsterUser(@Res() response, @Param('id') monsterId: string) {
    try {
      const existingMonster = await this.monsterService.getMonster(monsterId);
      return response.status(HttpStatus.OK).json({
        message: 'Monster found successfully',
        existingMonster,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Delete('/:id')
  async deleteMonster(@Res() response, @Param('id') monsterId: string) {
    try {
      const deletedMonster = await this.monsterService.deleteMonster(monsterId);
      return response.status(HttpStatus.OK).json({
        message: 'Monster deleted successfully',
        deletedMonster,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Put('/:id')
  async updateMonster(
    @Res() response,
    @Param('id') monsterId: string,
    @Body() updateMonsterDto: UpdateMonsterDto,
  ) {
    try {
      const existingMonster = await this.monsterService.updateMonster(
        monsterId,
        updateMonsterDto,
      );
      return response.status(HttpStatus.OK).json({
        message: 'Monster has been successfully updated',
        existingMonster,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }
}
