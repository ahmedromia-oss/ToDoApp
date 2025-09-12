import {
  IsString
} from 'class-validator';
export class addToDoDto {
  @IsString()
  Title: string;
  @IsString()
  describtion: string;
}
