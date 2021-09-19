import mongoose from 'mongoose';

export const databaseConnection = () => {
    mongoose.connect('mongodb://localhost/mern-template', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('mongodb is connected'))
    .catch((err) => console.log(err.message));
};


