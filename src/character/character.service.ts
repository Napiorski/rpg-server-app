import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCharacterDto } from 'src/dto/create-character.dto';
import { ICharacter } from './character.interface';

@Injectable()
export class CharacterService {
  constructor(
    @InjectModel('Character') private characterModel: Model<ICharacter>,
  ) {}

  async createCharacter(
    createCharacterDto: CreateCharacterDto,
  ): Promise<ICharacter> {
    const newCharacter = await new this.characterModel(createCharacterDto);
    return newCharacter.save();
  }

  // We want CRUD: create, read, update, delete

  // TODO: read: getCharacter

  // TODO: read: getCharacters

  // TODO: update: updateCharacter

  // TODO: delete: deleteCharacter
}
