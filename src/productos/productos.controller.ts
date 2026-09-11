import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

interface Product {
    id: string;
    name: string;
    expired: boolean;
    category: string;
    stock: number;
    price: number;
}


@Controller('products')
export class ProductosController {

    private products: Product[] = [
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
        if (product === undefined) {
            return { message: "Producto no encontrado"};
        }
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

    // E. Listar los productos por categoría.
    @Get("search/category/:category")
    getProductsByCategory(@Param("category") category: string) {
        const productsByCategory = this.products.filter(product => product.category.toLowerCase() === category.toLowerCase());
        return productsByCategory;
    }

    // ---- SEGUNDA CLASE DE NEST. ---- //

    // D. Crear un producto.
    @Post()
    createProduct(@Body() newProduct: Product) {

        const existingProduct = this.products.find((product) => product.id === newProduct.id || product.name === newProduct.name);

        if (existingProduct) {
            return {
                message: "El producto con ese ID ya existe."
            };
        }

        this.products.push(newProduct);
        return {
            message: "Productos creado exitosamente.",
            data: newProduct
        }
    }

    // E. Eliminar Producto
    @Delete("/:id") 
    deleteProduct(@Param("id") id: string) {

        const position = this.products.findIndex(product => product.id === id);

        if (position === -1) {
            return {
                message: "El producto con ese ID no existe."
            }
        }

        this.products.splice(position, 1);
        return {
            message: "Producto eliminado con exito."
        }
    }

    // F. Actualizar producto.
    @Put(":id")
    updateProducts(@Param("id") id: string, @Body() productChanges: Product) {

        const productIndex = this.products.findIndex((product) => id === product.id)

        if (productIndex === -1) {
            return {
                message: "El producto con ese ID no existe."
            }
        }

        const existingProduct = this.products[productIndex]
        const updateProduct = {...existingProduct, ...productChanges}

        this.products[productIndex] = updateProduct

        return {
            message: "Producto actualizado con exito.",
            data: updateProduct
        }
    
    }

}
