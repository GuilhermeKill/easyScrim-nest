import { User as PrismaUser, Prisma } from '@prisma/client'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { User } from '@/domain/webSite/enterprise/entities/user'

export class PrismaStudentMapper {
  static toDomain(raw: PrismaUser): User {
    return User.create(
      {
        avatar: raw.avatar,
        name: raw.name,
        email: raw.email,
        riot_id: raw.riot_id,
        riot_nick_name: raw.riot_nick_name,
        password: raw.password,
        lane: raw.lane,
        description: raw.description,
      },
        new UniqueEntityID(raw.uu_id),
    )
  }

  static toPrisma(user: User): Prisma.UserUncheckedCreateInput {
   return {
        uu_id: user.uu_id.toString(),
        avatar: user.avatar,
        name: user.name,
        email: user.email,
        riot_id: user.riot_id,
        riot_nick_name: user.riot_nick_name,
        password: user.password,
        lane: user.lane,
        description: user.description,
    }
  }
}

