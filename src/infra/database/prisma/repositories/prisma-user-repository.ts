import { Injectable } from "@nestjs/common"
import { PrismaService } from "../prisma.service"
import { UserRepository } from "@/domain/webSite/application/repositories/User-repository" 
import { User } from "@/domain/webSite/enterprise/entities/user"
import { PrismaStudentMapper } from '../mappers/prisma-user-mapper'


@Injectable()
export class PrismaUserRepository implements UserRepository {
    constructor(private prisma: PrismaService) { }

    async findByEmail(email: string): Promise<User | null> {
        const user = await this.prisma.user.findUnique({
             where: { 
                email 
            },
        })

        if(!user){
            return null
        }
  
        return PrismaStudentMapper.toDomain(user)
    }


    async create(user: User): Promise<void> {
        const data = PrismaStudentMapper.toPrisma(user)

        await this.prisma.user.create({
            data
        })
    }  
}

