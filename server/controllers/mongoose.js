import mongoose from 'mongoose';

export const databaseConnection = () => {
  mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => console.log('mongodb is connected'))
    .catch((err) => console.log(err.message));
};


