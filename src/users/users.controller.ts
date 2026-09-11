import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

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
    getUserById(@Param("id") id: string) {
        console.log(".:: User ID: ", id);

        const user = this.users.find((user) => user.id === id);
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

    // ---- SEGUNDA CLASE DE NEST. ---- //

    // Enpoints para crear.
    @Post()
    createUser(@Body() newUser: User) {

        console.log(".:: newUser: ", newUser);

        const existingUser = this.users.find((user) => user.id === newUser.id || user.email === newUser.email);

        if (existingUser) {
            return {
                message: "El usuario con ese ID y/o correo ya existe."
            }
        }

        // El else no es necesario, ya que si entra al if, retorna y no ejecuta el resto del código.
        this.users.push(newUser);
        return {
            msg: "usuario creado.",
            data: newUser
        }
    }


    // Enpdpoint para eliminmar.
    @Delete(":id")
    deleteUser(@Param("id") id: string) {

        console.log(".:: ID del usuario a eliminar: ", id);
        const position = this.users.findIndex((user) => user.id === id);

        if (position === -1) {
            return {
                message: "El usuario con ese ID no existe."
            }
        }

        console.log(".:: posicion: ", position);
        this.users.splice(position, 1);  // .splice => Para borrar.

        return {
            message: "Usuario eliminado con exito."
        }
    }

    // Endpoint para actualizar. 
    @Put(":id")
    updateUser(@Param("id") id: string, @Body() userChanges: User) {

        console.log(".:: userId Update: ", id);
        console.log(".:: userChanges: ", userChanges);
        
        const position = this.users.findIndex((user) => user.id === id);

        if (position === -1) {
            return {
                message: "No existe un usuario con ese ID."
            }
        }

        const existingUser = this.users[position];
        console.log(".:: user: ", position);

        const updateUser = {...existingUser, ...userChanges};
        this.users[position] = updateUser;

        return {
            message: "Usuario actualizado con exito.",
            data: updateUser
        }
    }
}
