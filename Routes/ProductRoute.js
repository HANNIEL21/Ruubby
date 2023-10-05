import express from 'express';
import multer from "multer";
import Product from '../models/product';

const ProductRouter = express.Router();

// FIle Upload

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/Assets/uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname + '-' + Date.now())
    }
});
const upload = multer({ storage: storage });


// Create a product
ProductRouter.post("/", upload.array('images', 5), async (req, res) => {
    const { title, desc, category, owner, price } = req.body;

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
        });

        const savedProduct = await newProduct.save();

        res.status(200).json({
            status: "Successful",
            message: "Product has been added",
            data: savedProduct,
        });
    } catch (error) {
        res.status(500).json({
            status: "Failed",
            error: "Internal server error",
        });
    }
});

// Get all products
ProductRouter.get("/", async (req, res) => {
    try {
        const products = await Product.find()
        if (product.length === 0) {
            res.status(200).json({
                status: "Successful",
                message: "No product Found",
                data: null,
            })
        }

        res.status(200).json({
            success: true,
            data: products,
        })
    } catch (error) {
        res.status(500).json({
            status: "Failed",
            error: error
        });
    }
});

// Get products by owner
ProductRouter.get("/:id", async (req, res) => {
    try {
        const products = await Product.find({ owner: req.params.id })
        if (products.length == 0) {
            res.status(200).json({
                status: "Successful",
                message: "Please Upload A Product",
                data: products,
            });

        }

        res.status(200).json({
            status: "Successful",
            message: "Data from this User",
            data: products,
        })
    } catch (error) {
        res.status(500).json({
            status: "Failed",
            error: error,
            data: null,
        })
    }
})

// Update a product
ProductRouter.put("/:id", async (req, res) => {
    try {
        const existingProduct = await Product.findById(req.params.id);
        if (!existingProduct) {
            res.status(404).json({
                status: "Failed",
                message: "Product Not Found",
                data: existingProduct,
            })

            existingProduct.set(req.body);
            const updatedProduct = existingProduct.save();

            res.status(200).json({
                status: "Successful",
                message: "Product Updated",
                data: updatedProduct,
            })

        }
    } catch (error) {
        res.status(500).json({
            status: "Failed",
            error: error,
        })
    }
})

// Delete a product
ProductRouter.delete("/:id", async (req, res) => {
    try {
        const product = await Product.find({ _id: req.params.id });
        if (!product) {
            res.status(404).json({
                status: "Failed",
                message: "product not found",
                data: product
            });
        }
        res.status(204)
    } catch (error) {
        res.status(500).json({
            status: "Failed",
            message: "Failed to delete product",
            error: error
        })
    }
})
