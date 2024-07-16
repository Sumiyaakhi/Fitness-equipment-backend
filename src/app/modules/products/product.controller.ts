import { Request, Response } from "express";
import { ProductServices } from "./product.service";

// create product
const createProduct = async (req: Request, res: Response) => {
  const productData = req.body;
  // console.log(productData);
  // Proceed to create the product if validation passes
  try {
    const result = await ProductServices.createProduct(productData);
    console.log(result);
    res.json({
      success: true,
      message: "Product created successfully!",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: "Failed to create product",
      error: err.message,
    });
  }
};
const createCartProduct = async (req: Request, res: Response) => {
  const cartProduct = req.body;
  // console.log(productData);
  // Proceed to create the product if validation passes
  try {
    const result = await ProductServices.createProduct(cartProduct);
    console.log(result);
    res.json({
      success: true,
      message: "Cart Product created successfully!",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: "Failed to create product",
      error: err.message,
    });
  }
};

// get all products and search products by name
const getAllProducts = async (req: Request, res: Response) => {
  try {
    const { searchTerm } = req.query;

    let result;
    if (searchTerm && typeof searchTerm === "string") {
      result = await ProductServices.searchProductsByName(searchTerm);
      res.status(200).json({
        success: true,
        message: `Products matching search term '${searchTerm}' fetched successfully!`,
        data: result,
      });
    } else {
      result = await ProductServices.getAllProduct();
      res.status(200).json({
        success: true,
        message: "Products are fetched successfully!",
        data: result,
      });
    }
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: "An error occurred while fetching products.",
      error: err.message,
    });
  }
};
// get all products and search products by name
const getAllCartProducts = async (req: Request, res: Response) => {
  try {
    const { searchTerm } = req.query;

    let result;
    if (searchTerm && typeof searchTerm === "string") {
      result = await ProductServices.searchProductsByName(searchTerm);
      res.status(200).json({
        success: true,
        message: `Products matching search term '${searchTerm}' fetched successfully!`,
        data: result,
      });
    } else {
      result = await ProductServices.getAllProduct();
      res.status(200).json({
        success: true,
        message: "Products are fetched successfully!",
        data: result,
      });
    }
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: "An error occurred while fetching products.",
      error: err.message,
    });
  }
};

// get single product
const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductServices.getSingleProduct(productId);
    res.status(200).json({
      success: true,
      message: "Product is retrieved successfully!",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: "Could not match product!",
      error: err,
    });
  }
};
//update single product
const updateSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const updateData = req.body;
    // const { error } = productValidationSchema.validate(updateData);

    // // Check for validation errors
    // if (error) {
    //   return res.status(400).json({
    //     success: false,
    //     message: "Validation failed",
    //     error: error.details,
    //   });
    // }

    const updatedProduct = await ProductServices.updateSingleProduct(
      productId,
      updateData
    );

    if (updatedProduct) {
      res.status(200).json({
        success: true,
        message: "Product updated successfully!",
        data: updatedProduct,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Product not found!",
      });
    }
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: "Could not update product!",
      error: err.message,
    });
  }
};

// delete a single product
const deleteSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;

    const deletedProduct = await ProductServices.deleteSingleProduct(productId);

    if (deletedProduct) {
      res.status(200).json({
        success: true,
        message: "Product deleted successfully!",
        data: null,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Product not found!",
      });
    }
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: "Could not delete product!",
      error: err.message,
    });
  }
};

export const ProductControllers = {
  createProduct,
  createCartProduct,
  getAllProducts,
  getAllCartProducts,
  getSingleProduct,
  updateSingleProduct,
  deleteSingleProduct,
};
