import {
  Delete,
  HttpStatus,
  Injectable,
  NotFoundException,
  Param,
  Res,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateMonsterDto } from 'src/dto/create-monster.dto';
import { UpdateMonsterDto } from 'src/dto/update-monster.dto';
import { MonsterType } from './monster.type';

const domain = 'https://www.dnd5eapi.co';
const monstersUrl = `${domain}/api/monsters`;

@Injectable()
export class MonsterService {
  async getMonsters(): Promise<any> {
    const monsterResp = await fetch(monstersUrl);
    if (!monsterResp) {
      throw new NotFoundException('Monster data not found!');
    }

    const monsterJSON = await monsterResp.json();
    if (!monsterJSON) {
      throw new NotFoundException('Monster results not found!');
    }

    const { results } = monsterJSON;

    // The result object (schema) will have the following properties { index, name, url }
    const promises = results.map(async ({ url }) => {
      const resp = await fetch(`${domain}${url}`);
      return resp.json();
    });

    const monsters = await Promise.all(promises);

    return monsters;
  }

  /*
  async getMonster(monsterId: string): Promise<any> {
    const existingMonster = await this.monsterModel.findById(monsterId).exec();
    if (!existingMonster) {
      throw new NotFoundException(`Monster #${monsterId} not found`);
    }
    return existingMonster;
  }
  */
}
