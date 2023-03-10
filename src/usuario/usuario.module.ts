/*import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm"
import { Bcrypt } from "src/auth/bcrypt/bcrypt";
import { UsuarioController } from "./controller/usuario.controller";
import { Usuario } from "./entities/usuario.entity";
import { UsuarioService } from "./service/usuario.service";

@Module({
    imports: [TypeOrmModule.forFeature([Usuario])],
    providers:[UsuarioService, Bcrypt],
    controllers:[UsuarioController],
    exports: [UsuarioService]    //[TypeOrmModule]
})
    export class UsuarioModule{ }
    export class bcrypt{}*/
    
    import { Module } from "@nestjs/common";
    import { TypeOrmModule } from "@nestjs/typeorm";
import { Bcrypt } from "../auth/bcrypt/bcrypt";
    import { UsuarioController } from "./controller/usuario.controller";
    import { Usuarios} from "./entities/usuario.entity";
    import { UsuarioService } from "./service/usuario.service";
    
    @Module({
        imports: [TypeOrmModule.forFeature([Usuarios])],
        providers: [UsuarioService, Bcrypt],
        controllers: [UsuarioController],
        exports: [UsuarioService]
    
    })
    export class UsuarioModule { }
