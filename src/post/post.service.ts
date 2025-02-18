import { Injectable, NotFoundException } from '@nestjs/common';
import { Post } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { PostDto, UpdateDto } from './post.dto';

@Injectable()
export class PostService {
    constructor(private readonly prisma: PrismaService){}

    async getAllPost(): Promise<{msg: string, data: Post[]}>{
        const data = await this.prisma.post.findMany()

        return {
            msg: "Success",
            data
        }
    }

    async createPost(data: PostDto): Promise<{msg: string, data: Post}>{
        const post = await this.prisma.post.create({
            data
        })
        return {msg: "Success", data: post}
    }

    async getPostById(id: number): Promise<{msg: string, data: Post}>{
        const data = await this.prisma.post.findUnique({
            where:{
                id: Number(id)
            }
        })
        if (!data) {
            throw new NotFoundException()
        }
        
        return {msg: "Success", data}
    }

    async updatePost(id: number, data: UpdateDto): Promise<{msg: string, data: Post}>{

        const find = await this.prisma.post.findUnique({
            where:{
                id: Number(id)
            }
        })

        if (!find) {
            throw new NotFoundException()
        }


        const post = await this.prisma.post.update({
            where:{
                id: Number(find.id)
            },
            data
        })


        return {msg: "Success", data: post}
    }

    async deletePost(id: number): Promise<{msg: string}>{

        const find = await this.prisma.post.findUnique({
            where:{
                id: Number(id)
            }
        })

        if (!find) {
            throw new NotFoundException()
        }

        const post = await this.prisma.post.delete({
            where:{
                id: Number(find.id)
            }
        })

        return {msg: "Data Deleted"}
    }
}


