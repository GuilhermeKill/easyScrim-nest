import { Module } from "@nestjs/common";

import { CreateAcountController } from "./controllers/create-account-controller";
import { RegisterUserUseCase } from "src/domain/webSite/application/use-cases/register-user";
import { DataBaseModule } from "../database/database.module";
import { CryptographyModule } from "../cryptography/cryptography.module";


@Module({
    imports: [DataBaseModule, CryptographyModule],
    controllers: [
        CreateAcountController
    ],
    providers: [
        RegisterUserUseCase
    ]
    

})



export class HttpModule {}