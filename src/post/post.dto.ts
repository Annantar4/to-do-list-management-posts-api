import { ApiProperty } from "@nestjs/swagger";
import { IsDateString, IsNumber, IsOptional, IsString } from "class-validator"


export class PostDto{

    @ApiProperty({ example: "Marketing Campaign", description: "The title of the project or campaign." })
    @IsString()
    title: string;

    @ApiProperty({ example: "Nike", description: "The brand associated with this campaign." })
    @IsString()
    brand: string;

    @ApiProperty({ example: "Instagram", description: "The platform where the campaign will be executed." })
    @IsString()
    platform: string;

    @ApiProperty({ example: "2025-03-01T00:00:00.000Z", description: "The deadline for the project (ISO 8601 format)." })
    @IsDateString()
    dueDate: string;

    @ApiProperty({ example: 1000, description: "The payment amount in USD.", required: false })
    @IsOptional()
    @IsNumber()
    payment?: number;

    @ApiProperty({ example: "Pending", description: "The current status of the project (Pending, Approved, Rejected)." })
    @IsString()
    status: string;

}

export class UpdateDto{

    @ApiProperty({ example: "Updated Campaign Title", description: "The updated title of the project.", required: false })
    @IsOptional()
    @IsString()
    title?: string;

    @ApiProperty({ example: "Adidas", description: "The updated brand name.", required: false })
    @IsOptional()
    @IsString()
    brand?: string;

    @ApiProperty({ example: "TikTok", description: "The updated platform name.", required: false })
    @IsOptional()
    @IsString()
    platform?: string;

    @ApiProperty({ example: "2025-05-01T00:00:00.000Z", description: "The updated project deadline (ISO 8601 format).", required: false })
    @IsOptional()
    @IsDateString()
    dueDate?: string;

    @ApiProperty({ example: 1500, description: "The updated payment amount in USD.", required: false })
    @IsOptional()
    @IsNumber()
    payment?: number;

    @ApiProperty({ example: "Approved", description: "The updated project status.", required: false })
    @IsOptional()
    @IsString()
    status?: string;

}