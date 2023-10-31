import { Router } from 'express';
import multer, { diskStorage } from 'multer';
import Product from '../models/product.js';

const ProductRouter = Router();

// File Upload
const storage = diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/Assets/uploads');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname + '-' + Date.now());
    },
});
const upload = multer({ storage: storage });

// Create a product
ProductRouter.post("/", upload.array('images', 5), async (req, res) => {
    const { title, desc, category, owner, price, brand, size } = req.body;

    try {
        const images = req.files.map(file => ({
            filename: file.filename,
        }));

        const newProduct = new Product({
            title,
            desc,
            category,
            owner,
            price,
            images,
            brand,
            size,
        });

        const savedProduct = await newProduct.save();

        res.status(201).json({
            success: true,
            message: "Product has been added",
            data: savedProduct,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error,
        });
    }
});

// Get all products
ProductRouter.get("/", async (req, res) => {
    try {
        const products = await Product.find();
        if (products.length === 0) {
            return res.status(204).json({
                success: true,
                message: "Products List is Empty",
                data: [],
            });
        }

        const simplifiedProducts = products.map(product => ({
            id: product._id,
            image: product.images[0].filename, // Assuming you want the first image
            name: product.title,
            price: product.price,
            quantity: product.quantity,
            category: product.category,
        }));

        res.status(200).json({
            success: true,
            message: "All Products",
            data: simplifiedProducts,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to retrieve products",
            error: error,
        });
    }
});

// Get products by owner
ProductRouter.get("/:id", async (req, res) => {
    try {
        const products = await find({ owner: req.params.id });
        if (products.length === 0) {
            return res.status(200).json({
                success: true,
                message: "No products found for this user",
                data: products,
            });
        }

        res.status(200).json({
            success: true,
            message: "Products from this User",
            data: products,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to retrieve products for this user",
            error: error,
        });
    }
});

// Update a product
ProductRouter.put("/:id", async (req, res) => {
    try {
        const existingProduct = await findById(req.params.id);
        if (!existingProduct) {
            return res.status(404).json({
                success: false,
                message: "Product Not Found",
            });
        }

        existingProduct.set(req.body);
        const updatedProduct = await existingProduct.save();

        res.status(200).json({
            success: true,
            message: "Product Updated",
            data: updatedProduct,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to update the product",
            error: error,
        });
    }
});

// Delete a product
ProductRouter.delete("/:id", async (req, res) => {
    try {
        const product = await findByIdAndRemove(req.params.id);
        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product not found",
            });
        }
        res.status(204).json({
            success: true,
            message: "Product deleted",
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to delete product",
            error: error,
        });
    }
});

export default ProductRouter;
