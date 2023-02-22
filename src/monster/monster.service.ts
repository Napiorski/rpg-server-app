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
import { IMonster } from './monster.interface';

@Injectable()
export class MonsterService {
  constructor(@InjectModel('Monster') private monsterModel: Model<IMonster>) {}

  async createMonster(createMonsterDto: CreateMonsterDto): Promise<IMonster> {
    const newMonster = await new this.monsterModel(createMonsterDto);
    return newMonster.save();
  }

  // We want CRUD: create, read, update, delete

  async getMonsters(): Promise<IMonster[]> {
    const monsterData = await this.monsterModel.find();
    if (!monsterData || monsterData.length == 0) {
      throw new NotFoundException('Monster data not found!');
    }
    return monsterData;
  }

  async getMonster(monsterId: string): Promise<IMonster> {
    const existingMonster = await this.monsterModel.findById(monsterId).exec();
    if (!existingMonster) {
      throw new NotFoundException(`Monster #${monsterId} not found`);
    }
    return existingMonster;
  }

  async deleteMonster(monsterId: string): Promise<IMonster> {
    const deletedMonster = await this.monsterModel.findByIdAndDelete(monsterId);
    if (!deletedMonster) {
      throw new NotFoundException(`Monster #${monsterId} not found`);
    }
    return deletedMonster;
  }

  async updateMonster(
    monsterId: string,
    updateMonsterDto: UpdateMonsterDto,
  ): Promise<IMonster> {
    const existingMonster = await this.monsterModel.findByIdAndUpdate(
      monsterId,
      updateMonsterDto,
      { new: true },
    );
    if (!existingMonster) {
      throw new NotFoundException(`Monster #${monsterId} not found`);
    }
    return existingMonster;
  }
}
