import express from "express";
import validateRequest from "../middlewares/validateRequest";
import benefitValidationSchema from "./benefit.validation";
import { BenefitControllers } from "./benefit.controller";

const router = express.Router();

router.post(
  "/",
  validateRequest(benefitValidationSchema),
  BenefitControllers.createBenefit
);
router.post("/images", BenefitControllers.createImages);
router.get("/images", BenefitControllers.getAllImages);
router.get("/", BenefitControllers.getAllBenefits);
router.get("/:benefitId", BenefitControllers.getSingleBenefit);
router.put("/:benefitId", BenefitControllers.updateSingleBenefit);
router.delete("/:benefitId", BenefitControllers.deleteSingleBenefit);

export const BenefitRoutes = router;
