const mongoose = require('mongoose');

const ptaxCollectionSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    year: String,
    month: String,
    OBCollection: String,
    CYDCollection: String
})

export default mongoose.model("PtaxCollection", ptaxCollectionSchema);