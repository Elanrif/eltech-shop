import { IsNumber, IsString } from 'class-validator';

export class UploadImgProductDto {
  @IsNumber()
  id: number;

  @IsString()
  imageUrl: string;
}
