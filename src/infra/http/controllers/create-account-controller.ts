import { 
    BadRequestException,
    Body,
    ConflictException,
    Controller,
    HttpCode,
    Post,
} from '@nestjs/common'
import { z } from 'zod'
import { ZodValidationPipe } from '../pipes/zod-validation-pipes'
import { UsePipes } from '@nestjs/common/decorators/core/use-pipes.decorator'
import { RegisterUserUseCase } from 'src/domain/webSite/application/use-cases/register-user'
import { Public } from '@/infra/auth/public'

const RoleEnum = z.enum(['ADMIN', 'PLAYER', 'COACH']);

const createAccountBodySchema = z.object({
    avatar: z.string(),
    name: z.string(),
    email: z.string().email(),
    password: z.string(),
    riot_id: z.string(),
    riot_nick_name: z.string(),
    lane: z.string(),
    description: z.string(),
    role: RoleEnum
})

type createAccountBodySchema = z.infer<typeof createAccountBodySchema>

@Controller('/accounts')
@Public()
export class CreateAcountController{
    constructor(private registerUser: RegisterUserUseCase) {}
    

    @Post()
    @HttpCode(201)
    @UsePipes(new ZodValidationPipe(createAccountBodySchema))
    async handle(@Body() body: createAccountBodySchema){
        const { avatar ,name, email, password, riot_id, riot_nick_name, lane, description, role } = body

            const result = await this.registerUser.execute({
                avatar,
                name,
                email,
                password,
                riot_id,
                riot_nick_name,
                lane,
                description,
                role
            })
        
    }
}



