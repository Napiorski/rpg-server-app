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

  @Get()
  async getMonsters(@Res() response) {
    try {
      const monsterData = await this.monsterService.getMonsters();
      return response.status(HttpStatus.OK).json({
        message: 'All monster data found successfully',
        monsterData,
      });
    } catch (err) {
      console.log('monster.controller.ts caught: ', JSON.stringify(err));
      return response.status(err.status).json(err.response);
    }
  }
}
