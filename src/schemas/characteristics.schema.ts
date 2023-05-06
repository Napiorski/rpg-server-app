import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { CharacteristicsDto } from 'src/dto/characteristics.dto';

@Schema()
export class Characteristics {
  @Prop({ type: String, required: false, MAX_LENGTH: 75 })
  personality: string;

  @Prop({ type: String, required: false, MAX_LENGTH: 75 })
  ideals: string;

  @Prop({ type: String, required: false, MAX_LENGTH: 75 })
  bonds: string;

  @Prop({ type: String, required: false, MAX_LENGTH: 75 })
  flaws: string;
}

export const characteristicsSchema =
  SchemaFactory.createForClass(CharacteristicsDto);
