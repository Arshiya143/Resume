import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './User/user.module';
import { EduModule } from './Education/edu.module';
import { JobModule } from './Experience/exp.module';
import { IntModule } from './Interest/interest.module';
import { LangModule } from './Language/lang.module';
import { PersonalModule } from './Personal/personal.module';
import { ResumeModule } from './Resume/resume.module';
import { SkillModule } from './Skill/skill.module';
import { SocialModule } from './Social/social.module';
import { SumModule } from './Summary/sum.module';

// This is a typical NestJS module file. It defines the necessary imports, controllers, and providers for an application.

@Module({
  imports: [
    
    // It imports several other modules
    UserModule,
    EduModule,
    JobModule,
    IntModule,
    LangModule,
    PersonalModule,
    ResumeModule,
    SkillModule,
    SocialModule,
    SumModule,
    
    /**It also imports ConfigModule and TypeOrmModule with their respective configurations. ConfigModule is used to load environment 
     * variables, while TypeOrmModule is used to connect to a PostgreSQL database with the specified credentials and synchronize the 
     * database (useful for development purposes only). */

    ConfigModule.forRoot({isGlobal:true}),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: parseInt(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      entities: ['dist/**/*.entity.{ts,js}'],
      migrations: ['dist/migrations/*.{ts,js}'],
      migrationsTableName: 'typeorm_migrations',
      logger: 'file',
      synchronize: true, // never use TRUE in production!
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})

// Finally, this module is exported as AppModule, which is the root module that is run by the application.
export class AppModule {}
