import express from "express";

import {
  getPropertyTaxCollection,
  postPropertyTaxCollection,
} from "../controllers/propertyTax.js";

const router = express.Router();

router.get("/", getPropertyTaxCollection);
router.post("/", postPropertyTaxCollection);

export default router;
