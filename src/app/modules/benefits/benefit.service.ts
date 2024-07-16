import { TBenefit, TImage } from "./benefit.interface";
import { Benefit, Images } from "./benefit.model";

// create Benefit
const createBenefit = async (payLoad: TBenefit) => {
  const result = await Benefit.create(payLoad);
  return result;
};
const createImages = async (payLoad: TImage) => {
  const result = await Images.create(payLoad);
  return result;
};
// get all Benefits and search Benefits by name
const getAllBenefit = async () => {
  const result = await Benefit.find();
  return result;
};
const getAllImages = async () => {
  const result = await Images.find();
  return result;
};
// get single Benefit
const getSingleBenefit = async (_id: string) => {
  const result = await Benefit.findOne({ _id });
  return result;
};
// update single Benefit
const updateSingleBenefit = async (_id: string, updateData: any) => {
  const updatedBenefit = await Benefit.findOneAndUpdate({ _id }, updateData, {
    new: true,
  });
  return updatedBenefit;
};
// delete a single Benefit
const deleteSingleBenefit = async (BenefitId: string) => {
  try {
    const deletedBenefit = await Benefit.findByIdAndDelete(BenefitId).exec();
    return deletedBenefit;
  } catch (err: any) {
    throw new Error(`Could not delete Benefit: ${err.message}`);
  }
};

// search Benefits by name
const searchBenefitsByName = async (query: string) => {
  try {
    const searchResults = await Benefit.find({
      name: { $regex: query, $options: "i" },
    }).exec();

    return searchResults;
  } catch (err: any) {
    throw new Error(
      `An error occurred while searching Benefits: ${err.message}`
    );
  }
};

export const BenefitServices = {
  createBenefit,
  createImages,
  getAllBenefit,
  getAllImages,
  getSingleBenefit,
  updateSingleBenefit,
  deleteSingleBenefit,
  searchBenefitsByName,
};
