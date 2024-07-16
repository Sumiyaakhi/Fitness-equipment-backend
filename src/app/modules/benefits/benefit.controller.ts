import { Request, Response } from "express";
import { BenefitServices } from "./benefit.service";

// create Benefit
const createBenefit = async (req: Request, res: Response) => {
  const benefitData = req.body;
  console.log(benefitData);
  // Proceed to create the Benefit if validation passes
  try {
    const result = await BenefitServices.createBenefit(benefitData);
    console.log(result);
    res.json({
      success: true,
      message: "Benefit data created successfully!",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: "Failed to create benefit",
      error: err.message,
    });
  }
};
const createImages = async (req: Request, res: Response) => {
  const data = req.body;
  console.log(data);
  // Proceed to create the Benefit if validation passes
  try {
    const result = await BenefitServices.createImages(data);
    console.log(result);
    res.json({
      success: true,
      message: "data created successfully!",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: "Failed to create data",
      error: err.message,
    });
  }
};

// get all Benefits and search Benefits by name
const getAllBenefits = async (req: Request, res: Response) => {
  try {
    const { searchTerm } = req.query;

    let result;
    if (searchTerm && typeof searchTerm === "string") {
      result = await BenefitServices.searchBenefitsByName(searchTerm);
      res.status(200).json({
        success: true,
        message: `Benefits matching search term '${searchTerm}' fetched successfully!`,
        data: result,
      });
    } else {
      result = await BenefitServices.getAllBenefit();
      res.status(200).json({
        success: true,
        message: "Benefits are fetched successfully!",
        data: result,
      });
    }
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: "An error occurred while fetching Benefits.",
      error: err.message,
    });
  }
};
const getAllImages = async (req: Request, res: Response) => {
  try {
    const { searchTerm } = req.query;

    let result;
    if (searchTerm && typeof searchTerm === "string") {
      result = await BenefitServices.searchBenefitsByName(searchTerm);
      res.status(200).json({
        success: true,
        message: `Benefits matching search term '${searchTerm}' fetched successfully!`,
        data: result,
      });
    } else {
      result = await BenefitServices.getAllImages();
      res.status(200).json({
        success: true,
        message: "Benefits are fetched successfully!",
        data: result,
      });
    }
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: "An error occurred while fetching Benefits.",
      error: err.message,
    });
  }
};

// get single Benefit
const getSingleBenefit = async (req: Request, res: Response) => {
  try {
    const { benefitId } = req.params;
    const result = await BenefitServices.getSingleBenefit(benefitId);
    res.status(200).json({
      success: true,
      message: "Benefit is retrieved successfully!",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: "Could not match Benefit!",
      error: err,
    });
  }
};
//update single Benefit
const updateSingleBenefit = async (req: Request, res: Response) => {
  try {
    const { benefitId } = req.params;
    const updateData = req.body;
    // const { error } = BenefitValidationSchema.validate(updateData);

    // // Check for validation errors
    // if (error) {
    //   return res.status(400).json({
    //     success: false,
    //     message: "Validation failed",
    //     error: error.details,
    //   });
    // }

    const updatedBenefit = await BenefitServices.updateSingleBenefit(
      benefitId,
      updateData
    );

    if (updatedBenefit) {
      res.status(200).json({
        success: true,
        message: "Benefit updated successfully!",
        data: updatedBenefit,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Benefit not found!",
      });
    }
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: "Could not update Benefit!",
      error: err.message,
    });
  }
};

// delete a single Benefit
const deleteSingleBenefit = async (req: Request, res: Response) => {
  try {
    const { BenefitId } = req.params;

    const deletedBenefit = await BenefitServices.deleteSingleBenefit(BenefitId);

    if (deletedBenefit) {
      res.status(200).json({
        success: true,
        message: "Benefit deleted successfully!",
        data: null,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Benefit not found!",
      });
    }
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: "Could not delete Benefit!",
      error: err.message,
    });
  }
};

export const BenefitControllers = {
  createBenefit,
  createImages,
  getAllBenefits,
  getAllImages,
  getSingleBenefit,
  updateSingleBenefit,
  deleteSingleBenefit,
};
