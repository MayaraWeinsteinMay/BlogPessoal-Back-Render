import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { Postagem } from './postagem/entities/postagem.entity';
import { PostagemModule } from './postagem/postagem.module';
import { Tema } from './tema/entities/tema.entity';
import { TemaModule } from './tema/tema.module';
import { Usuarios } from './usuario/entities/usuario.entity';
import { UsuarioModule } from './usuario/usuario.module';
import { AppController } from './app.controller';

@Module({
  imports: [
    // TypeOrmModule.forRoot({
    //   type: 'mysql',
    //   host: 'localhost',
    //   port: 3306,
    //   username: 'root',
    //   password: 'root',
    //   database: 'db_blogpessoal',
    //   entities: [Postagem, Tema, Usuarios],
    //   synchronize: true
    // }), 
    // Comentei da linha 14 a 23 para fazer o Deploy com as linhas 28-38
    // As linhas 14-23 serve para usar o banco de dados local do msql no Postman e insomnia
    // As linhas 28-38 é para usar o banco de dados do "RENDER"

     TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      logging: false,
      dropSchema: false,
      ssl: {
      rejectUnauthorized: false,
      },
      synchronize: true,
      autoLoadEntities: true,
    }),

      PostagemModule,
      TemaModule,
      AuthModule,
      UsuarioModule
  ],

  controllers: [AppController],
  providers: [],
})
export class AppModule { }












/*import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Postagem } from './postagem/entities/postagem.entity';
import { Tema } from './tema/entities/tema.entity';
import { UsuarioController } from './usuario/controller/usuario.controller';
import { Usuario } from './usuario/entities/usuario.entity';
import { UsuarioService } from './usuario/service/usuario.service';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
  imports: [
    TypeOrmModule.forRoot ({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root', 
      database: 'db_blogpessoal1', 
      entities:[Postagem, Tema],
      synchronize: true }),

    UsuarioController,
    UsuarioModule,
    UsuarioService

      
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}*/
