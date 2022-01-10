const mongoose = require('mongoose');

const ptaxGeneralSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  startYear: String,
  endYear: String,
  totalNoOfProperties: String,
  openingBalance: String,
  currentYearDemand: String
})

export default mongoose.model("PtaxGeneral", ptaxGeneralSchema);


