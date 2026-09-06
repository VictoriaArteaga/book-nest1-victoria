import { Controller, Get, Param } from '@nestjs/common';

interface Products {
    id: string;
    name: string;
    expired: boolean;
    category: string;
    stock: number;
    price: number;
}


@Controller('products')
export class ProductosController {

    private products: Products[] = [
        { 
            id: "1", 
            name: "Leche",
            expired: false,
            category: "Lacteos", 
            stock: 25,
            price: 120.00
        },
        { 
            id: "2", 
            name: "Zanahoria",
            expired: false,
            category: "Verduras", 
            stock: 50,
            price: 35.50
        },
        { 
            id: "3", 
            name: "Carne de res",
            expired: true, 
            category: "Carnes", 
            stock: 0,
            price: 89.99
        },
        { 
            id: "4", 
            name: "Laptop",
            expired: false, 
            category: "Electrónica", 
            stock: 12,
            price: 450.00 
        },
        { 
            id: "5", 
            name: "Balón de fútbol",
            expired: true, 
            category: "Deportes", 
            stock: 30,
            price: 65.00
        },
        { 
            id: "6", 
            name: "Chocolate",
            expired: false, 
            category: "Dulces", 
            stock: 0,
            price: 18.25
        },
        { 
            id: "7", 
            name: "Aspiradora",
            expired: true, 
            category: "Hogar", 
            stock: 18,
            price: 140.00
        },
        { 
            id: "8", 
            name: "Lentejas",
            expired: false, 
            category: "Legumbres", 
            stock: 100,
            price: 8.50
        },
        { 
            id: "9", 
            name: "Chaqueta",
            expired: true, 
            category: "Ropa", 
            stock: 5,
            price: 95.00
        },
        { 
            id: "10", 
            name: "Bicicleta",
            expired: true, 
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

    // D. Listar los productos vencidos.
    @Get("search/expired")
    getExpiredProducts() {
        const expiredProducts = this.products.filter( product => product.expired === true);
        return expiredProducts;
    }
}
