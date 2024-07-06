import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  Length,
  Max,
  IsNotEmptyObject,
  ValidateNested,
  IsInt,
} from 'class-validator';

class createProductDetailsDto {
  @IsNotEmpty()
  color: string;
  @IsNotEmpty()
  @IsInt()
  size: string;
  @IsNotEmpty()
  brand: string;
}

export class CreateProductDto {
  // Required
  @Length(5, 50)
  title: string;
  @IsNotEmpty()
  @Max(50)
  description: string;
  @ValidateNested()
  @IsNotEmptyObject()
  @Type(() => createProductDetailsDto)
  details: createProductDetailsDto;
}
