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
import { CreateCharacterDto } from 'src/dto/create-character.dto';
import { UpdateCharacterDto } from 'src/dto/update-character.dto';
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

  async getCharacters(): Promise<ICharacter[]> {
    const characterData = await this.characterModel.find();
    if (!characterData || characterData.length == 0) {
      throw new NotFoundException('Character data not found!');
    }
    return characterData;
  }

  async getCharacter(characterId: string): Promise<ICharacter> {
    const existingCharacter = await this.characterModel
      .findById(characterId)
      .exec();
    if (!existingCharacter) {
      throw new NotFoundException(`Character #${characterId} not found`);
    }
    return existingCharacter;
  }

  async deleteCharacter(characterId: string): Promise<ICharacter> {
    const deletedCharacter = await this.characterModel.findByIdAndDelete(
      characterId,
    );
    if (!deletedCharacter) {
      throw new NotFoundException(`Character #${characterId} not found`);
    }
    return deletedCharacter;
  }

  async updateCharacter(
    characterId: string,
    updateCharacterDto: UpdateCharacterDto,
  ): Promise<ICharacter> {
    const existingCharacter = await this.characterModel.findByIdAndUpdate(
      characterId,
      updateCharacterDto,
      { new: true },
    );
    if (!existingCharacter) {
      throw new NotFoundException(`Character #${characterId} not found`);
    }
    return existingCharacter;
  }
}
