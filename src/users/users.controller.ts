import { Controller, Get, Param } from '@nestjs/common';

interface User {
    id: string;
    name: string;
    email: string;
}

@Controller('users')
export class UsersController {

    private users: User[] = [
    { 
        id: "1", 
        name: "Mavi", 
        email: "mavi@correo.com" 
    },

    { 
        id: "2", 
        name: "Carlos", 
        email: "carlos@correo.com" 
    },
    { 
        id: "3", 
        name: "Ana", 
        email: "ana@correo.com" 
    },
    { 
        id: "4", 
        name: "Lucas", 
        email: "lucas@correo.com" 
    },
    { 
        id: "5", 
        name: "Sofía", 
        email: "sofia@correo.com" 
    },
    { 
        id: "6", 
        name: "Mateo", 
        email: "mateo@correo.com" 
    },
    { 
        id: "7", 
        name: "Valeria", 
        email: "valeria@correo.com" 
    },
    { 
        id: "8", 
        name: "Diego", 
        email: "diego@correo.com" 
    },
    { 
        id: "9", 
        name: "Camila", 
        email: "camila@correo.com" 
    },
    { 
        id: "10", 
        name: "Alejandro", 
        email: "alejandro@correo.com" 
    }
];

    @Get("")
    getAllUsers() {
        return this.users;
    }

    @Get(":id")
    getUserById(@Param("id") id: string ) {
        console.log(".:: User ID: ", id);

        const user = this.users.find((user)=> user.id === id);
        console.log("Usuario buscado: ", user);
        return user;
    }

    @Get("search/:name")
    getUserByName(@Param("name") name: string) {


        const user = this.users.find((user) => user.name === name);

        if (user?.name !== name) {
            return { result: "El usuario con ese nombre no existe." };
        }

        return {
            result: user?.email 
        };

    }
}
