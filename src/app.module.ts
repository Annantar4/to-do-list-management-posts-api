import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { PostModule } from './post/post.module';

@Module({
  imports: [PrismaModule, PostModule],
  providers: [],
})
export class AppModule {}
