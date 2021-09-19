import express from 'express';
import morgan from 'morgan';

// custom middlewares
import { cors } from './controllers/cors.js';
import { customError, serverError } from './controllers/errors.js';
import { databaseConnection } from './controllers/mongoose.js';

// routes
import postRoutes from './routes/posts.js';

const app = express();


// for logging information during development
app.use(morgan('dev'));

// connect to database
databaseConnection();

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

// Prevent CORS(Cross Origin Resource Sharing) error
app.use(cors);

// routes
app.use('/', postRoutes);

// error handling
app.use(customError);
app.use(serverError);

export default app;
