import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ProficienciesDto } from 'src/dto/proficiencies.dto';

@Schema()
export class Proficiencies {
  @Prop({ type: String, required: false, MAX_LENGTH: 50 })
  armorProficiencies: string;

  @Prop({ type: String, required: false, MAX_LENGTH: 50 })
  weaponProficiencies: string;

  @Prop({ type: String, required: false, MAX_LENGTH: 50 })
  vehicleProficiencies: string;

  @Prop({ type: String, required: false, MAX_LENGTH: 50 })
  toolProficiencies: string;

  @Prop({ type: String, required: false, MAX_LENGTH: 50 })
  otherProficiencies: string;

  @Prop({ type: String, required: false, MAX_LENGTH: 50 })
  otherSpeeds: string;
}

export const proficienciesSchema =
  SchemaFactory.createForClass(ProficienciesDto);
