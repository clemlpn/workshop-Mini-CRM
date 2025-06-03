import UserRoutes from "./routes/user.routes"
import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/users', userRoutes);
app.listen(port, () => {
    console.log(`Serveur lancé sur http://localhost:$(port)`);
})