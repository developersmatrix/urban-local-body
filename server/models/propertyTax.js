import mongoose from "mongoose";

const propertyTaxSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  year: String,
  totalNoOfProperties: Number,
  openingBalance: Number,
  currentYearDemand: Number,
  monthlyCollection: [
    {
      month: String,
      OBCollection: Number,
      CYDCollection: Number,
    },
  ],
});

export default mongoose.model("PropertyTax", propertyTaxSchema);
