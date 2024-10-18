import { Module } from "@nestjs/common"
import { PrismaService } from "./prisma/prisma.service"
import { PrismaUserRepository } from "./prisma/repositories/prisma-user-repository"
import { UserRepository } from "@/domain/webSite/application/repositories/User-repository"







@Module({
    providers: [
        PrismaService,
        {
            provide: UserRepository,
            useClass: PrismaUserRepository
        }
    ],
    exports: [
        PrismaService,
        UserRepository
    ]
})


export class DataBaseModule {}