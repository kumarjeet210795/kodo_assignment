import express, { Express, Request, Response,NextFunction } from 'express';
import dotenv from 'dotenv';
import routes from './routes/feed';

// const router = express();



dotenv.config();

const app =  express();
const port = process.env.PORT;

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use((req, res, next) => {
    // set the CORS policy
    res.header('Access-Control-Allow-Origin', '*');
    // set the CORS headers
    res.header('Access-Control-Allow-Headers', 'origin, X-Requested-With,Content-Type,Accept, Authorization');
    // set the CORS method headers
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET PATCH DELETE POST');
        return res.status(200).json({});
    }
    next();
});

/** Routes */
// router.use('/', routes);

app.use('/api',routes)
// console.log('33')
/** Error handling */
app.use((req, res, next) => {
    const error = new Error('not found');
    return res.status(404).json({
        message: error.message
    });
});


app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
