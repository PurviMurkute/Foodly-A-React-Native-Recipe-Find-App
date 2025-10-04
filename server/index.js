import express from 'express';

const app = express();
const PORT = 8080;

app.use(express.json());

app.get('/health', (req, res) => {
    res.json({
        success: true,
        message: "Server is running"
    })
})

app.listen(PORT, () => {
    console.log(`server is running on PORT ${PORT}`);
});