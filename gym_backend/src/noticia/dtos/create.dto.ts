import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateNoticiaDTO{

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    private readonly titulo:string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    private readonly descricao:string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    private readonly nomeAutor:string;
}