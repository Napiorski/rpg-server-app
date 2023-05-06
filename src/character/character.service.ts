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
import { Character } from 'src/schemas/character.schema';

@Injectable()
export class CharacterService {
  constructor(
    @InjectModel('Character') private characterModel: Model<Character>,
  ) {}

  async getCharacterByUsername(username: string): Promise<Character> {
    const existingCharacter = await this.characterModel
      .findOne({ username })
      .exec();
    if (!existingCharacter) {
      throw new NotFoundException(`Username #${username} not found`);
    }
    return existingCharacter;
  }
  async createCharacter(
    createCharacterDto: CreateCharacterDto,
  ): Promise<Character> {
    const newCharacter = await new this.characterModel(createCharacterDto);
    return newCharacter.save();
  }

  // We want CRUD: create, read, update, delete

  async getCharacters(): Promise<Character[]> {
    const characterData = await this.characterModel.find();
    if (!characterData || characterData.length == 0) {
      throw new NotFoundException('Character data not found!');
    }
    return characterData;
  }

  async getCharacter(characterId: string): Promise<Character> {
    const existingCharacter = await this.characterModel
      .findById(characterId)
      .exec();
    if (!existingCharacter) {
      throw new NotFoundException(`Character #${characterId} not found`);
    }
    return existingCharacter;
  }

  async deleteCharacter(characterId: string): Promise<Character> {
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
  ): Promise<Character> {
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
