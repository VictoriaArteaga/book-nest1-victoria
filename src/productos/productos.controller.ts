import { Controller, Get, Param } from '@nestjs/common';

interface Products {
    id: string;
    state: boolean;
    category: string;
    stock: number;
}


@Controller('products')
export class ProductosController {

    private products: Products[] = [
        { 
            id: "1", 
            state: true, 
            category: "Electrónica", 
            stock: 25 
        },
        { 
            id: "2", 
            state: true, 
            category: "Ropa", 
            stock: 50 
        },
        { 
            id: "3", 
            state: false, 
            category: "Hogar", 
            stock: 0 
        },
        { 
            id: "4", 
            state: true, 
            category: "Electrónica", 
            stock: 12 
        },
        { 
            id: "5", 
            state: true, 
            category: "Deportes", 
            stock: 30 
        },
        { 
            id: "6", 
            state: false, 
            category: "Libros", 
            stock: 0 
        },
        { 
            id: "7", 
            state: true, 
            category: "Hogar", 
            stock: 18 
        },
        { 
            id: "8", 
            state: true, 
            category: "Alimentos", 
            stock: 100 
        },
        { 
            id: "9", 
            state: true, 
            category: "Ropa", 
            stock: 5 
        },
        { 
            id: "10", 
            state: false, 
            category: "Deportes", 
            stock: 0 
        }
    ]

    @Get("")
    getAllProducts() {
        return this.products;
    }

    @Get(":id")
    getProduct(@Param("id") id: string) {

        const product = this.products.find(product => product.id === id);
        return product;
    }

    
}
