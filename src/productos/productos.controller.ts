import { Controller, Get, Param } from '@nestjs/common';

interface Products {
    id: string;
    state: boolean;
    category: string;
    stock: number;
    price: number;
}


@Controller('products')
export class ProductosController {

    private products: Products[] = [
        { 
            id: "1", 
            state: true, 
            category: "Electrónica", 
            stock: 25,
            price: 120.00
        },
        { 
            id: "2", 
            state: true, 
            category: "Ropa", 
            stock: 50,
            price: 35.50
        },
        { 
            id: "3", 
            state: false, 
            category: "Hogar", 
            stock: 0,
            price: 89.99
        },
        { 
            id: "4", 
            state: true, 
            category: "Electrónica", 
            stock: 12,
            price: 450.00 
        },
        { 
            id: "5", 
            state: true, 
            category: "Deportes", 
            stock: 30,
            price: 65.00
        },
        { 
            id: "6", 
            state: false, 
            category: "Libros", 
            stock: 0,
            price: 18.25
        },
        { 
            id: "7", 
            state: true, 
            category: "Hogar", 
            stock: 18,
            price: 140.00
        },
        { 
            id: "8", 
            state: true, 
            category: "Alimentos", 
            stock: 100,
            price: 8.50
        },
        { 
            id: "9", 
            state: true, 
            category: "Ropa", 
            stock: 5,
            price: 95.00
        },
        { 
            id: "10", 
            state: false, 
            category: "Deportes", 
            stock: 0,
            price: 210.00
        }
    ]

    // A. Listar los productos.

    @Get("")
    getAllProducts() {
        return this.products;
    }

    // B. Listar producto por su ID.
    @Get(":id")
    getProduct(@Param("id") id: string) {

        const product = this.products.find(product => product.id === id);
        return product;
    }

    // C. Listar productos sin Stock.
    @Get("search/without-stock")
    getProductsWithoutStock() {
        const productsWithoutStock = this.products.filter(product => product.stock === 0);
        return productsWithoutStock;
    }
}
