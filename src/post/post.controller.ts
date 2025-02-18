import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { PostService } from './post.service';
import { PostDto, UpdateDto } from './post.dto';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';


@ApiTags("Posts")
@Controller('post')
export class PostController {
    constructor(private readonly postService: PostService){}

    @Get()
    @ApiOperation({summary: "Get all posts data"})
    @ApiResponse({
        status: 200,
        description: "Success",
        schema:{
            example:{
                msg: "Success",
                data:[
                    {
                        id: 1,
                        title: "Marketing Campaign",
                        brand: "Nike",
                        platform: "Instagram",
                        dueDate: "2025-03-01T00:00:00.000Z",
                        payment: 1000,
                        status: "Pending",
                        createdAt: "2025-02-17T18:02:56.351Z",
                        updatedAt: "2025-02-17T19:01:21.168Z"
                    },
                    {
                        id: 2,
                        title: "Marketing Campaign 2",
                        brand: "Nike",
                        platform: "Instagram",
                        dueDate: "2025-03-05T00:00:00.000Z",
                        payment: 30000,
                        status: "Pending",
                        createdAt: "2025-02-17T18:02:56.351Z",
                        updatedAt: "2025-02-17T19:01:21.168Z"  
                    }
                ]
            }
        }
    })
    getAllPost(){
        return this.postService.getAllPost()
    }

    @Post()
    @ApiOperation({summary: "Create a new post"})
    @ApiResponse({
        status: 201,
        description: "Success",
        schema:{
            example:{
                msg: "Success",
                data:{
                    id: 1,
                    title: "Marketing Campaign",
                    brand: "Nike",
                    platform: "Instagram",
                    dueDate: "2025-03-01T00:00:00.000Z",
                    payment: 1000,
                    status: "Pending",
                    createdAt: "2025-02-17T18:02:56.351Z",
                    updatedAt: "2025-02-17T19:01:21.168Z"  
                }
            }
        }
    })
    @ApiResponse({
        status: 500,
        description: "Error: Internal Server Error",
        schema:{
            example:{
                statusCode: 500,
                message: "Internal server error"
            }
        }
    })
    createPost(@Body() postDto: PostDto){
        return this.postService.createPost(postDto)
    }

    @Get(':id')
    @ApiOperation({summary: "Get Post By ID"})
    @ApiParam({
        name: "id",
        example: 1,
        description: "ID of the post data"
    })
    @ApiResponse({
        status: 200,
        description: "Success",
        schema:{
            example:{
                msg: "Success",
                data:{
                    id: 1,
                    title: "Marketing Campaign",
                    brand: "Nike",
                    platform: "Instagram",
                    dueDate: "2025-03-01T00:00:00.000Z",
                    payment: 1000,
                    status: "Pending",
                    createdAt: "2025-02-17T18:02:56.351Z",
                    updatedAt: "2025-02-17T19:01:21.168Z" 
                }
            }
        }
    })
    @ApiResponse({
        status: 404,
        description: "Error: Not Found",
        schema:{
            example:{
                message: "Not Found",
                statusCode: 404
            }
        }
    })
    getPostById(@Param('id') id: number){
        return this.postService.getPostById(id)
    }

    @Patch(':id')
    @ApiOperation({summary: "Update a post by ID"})
    @ApiParam({
        name: "id",
        example: 1,
        description: "ID of the post to update"
    })
    @ApiResponse({
        status:200,
        description: "Success",
        schema:{
            example:{
                msg: "Success",
                data:{
                    id: 1,
                    title: "Updated Campaign Title",
                    brand: "Adidas",
                    platform: "TikTok",
                    dueDate: "2025-05-01T00:00:00.000Z",
                    payment: 1500,
                    status: "Approved",
                    createdAt: "2025-02-17T18:02:56.351Z",
                    updatedAt: "2025-02-17T19:01:21.168Z"
                }
            }
        }
    })
    @ApiResponse({
        status: 404,
        description: "Error: Not Found",
        schema:{
            example:{
                message: "Not Found",
                statusCode: 404
            }
        }
    })
    updatePost(@Param('id') id: number, @Body() data: UpdateDto){
        return this.postService.updatePost(id, data)
    }

    @Delete(':id')
    @ApiOperation({ summary: "Delete a post by ID" })
    @ApiParam({ 
        name: "id", 
        example: 1, 
        description: "ID of the post to delete." 
    })
    @ApiResponse({
        status:200,
        description: "Success",
        schema:{
            example:{
                msg: "Data Deleted",
            }
        }
    })
    @ApiResponse({
        status: 404,
        description: "Error: Not Found",
        schema:{
            example:{
                message: "Not Found",
                statusCode: 404
            }
        }
    })
    deletePost(@Param('id') id: number){
        return this.postService.deletePost(id)
    }
}
