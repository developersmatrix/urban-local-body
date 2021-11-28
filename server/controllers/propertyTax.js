import mongoose from "mongoose";

import PropertyTax from "../models/propertyTax.js";

export const getPropertyTaxCollection = (req, res, next) => {
  PropertyTax.find()
    .populate("monthlyCollection")
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(err.status).json(err);
    });
};

//post property tax collection
export const postPropertyTaxCollection = (req, res, next) => {
  const propertyTaxCollection = new PropertyTax({
    _id: new mongoose.Types.ObjectId(),
    year: req.body.year,
    totalNoOfProperties: req.body.totalNoOfProperties,
    openingBalance: req.body.openingBalance,
    currentYearDemand: req.body.currentYearDemand,
    monthlyCollection: [
      {
        month: req.body.month,
        OBCollection: req.body.OBCollection,
        CYDCollection: req.body.CYDCollection,
      },
    ],
  });
  propertyTaxCollection
    .save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      console.log(err);
    });
};
