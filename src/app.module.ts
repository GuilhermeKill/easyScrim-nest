import { Module } from '@nestjs/common';
import { HttpModule } from './infra/http/http.module';
import { ConfigModule } from '@nestjs/config'
import { AuthModule } from './infra/auth/auth.module';
import { EnvModule } from './infra/env/env.module';
import { envSchema } from './infra/env/env';

@Module({
    imports: [
        ConfigModule.forRoot({
            validate: (env) => envSchema.parse(env),
            isGlobal: true,
        }),
        AuthModule,
        HttpModule,
        EnvModule
    ]
})
export class AppModule {}
