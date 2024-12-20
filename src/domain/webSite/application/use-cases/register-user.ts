import { Injectable } from "@nestjs/common";
import { UserRepository } from "../repositories/User-repository"
import { HashGenerator } from "../cryptography/hash-generator";
import { User } from "../../enterprise/entities/user";
import { Role } from '@prisma/client';

interface RegisterUserUseCaseRequest {
    avatar: string
    name: string,
    email: string,
    riot_id: string,
    riot_nick_name: string,
    password: string,
    lane: string,
    description: string,
    role: Role
}



@Injectable()
export class RegisterUserUseCase{
    constructor(
        private userRepository: UserRepository,
        private hashGenerator: HashGenerator
    ) {}

    
    async execute({
        avatar,
        name,
        email,
        riot_id,
        riot_nick_name,
        password,
        lane,
        description,
        role
        
    }: RegisterUserUseCaseRequest): Promise<RegisterUserUseCaseRequest>{
        
        const userWithSameEmail = 
        await this.userRepository.findByEmail(email);
        
    

      
        
        const hashedPassword = await this.hashGenerator.hash(password)
        

        

        const user = User.create({
            avatar,
            name,
            email,
            description,
            riot_id,
            riot_nick_name,
            password: hashedPassword,
            lane,
            role
        })




      
        await this.userRepository.create(user);
     
        
        return user
        
    }
}