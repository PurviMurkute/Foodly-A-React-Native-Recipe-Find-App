import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import userRouter from './routes/userRoutes.js';
dotenv.config();

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(cors());

app.get('/health', (req, res) => {
    res.json({
        success: true,
        message: "Server is running"
    })
})

app.use('/api', userRouter);

connectDB();
app.listen(PORT, () => {
    console.log(`server is running on PORT ${PORT}`);
});