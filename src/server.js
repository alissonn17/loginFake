import express from 'express';
import login from './routes/login.routes.js';

const app = express();

const PORT = 3000;

app.use(express.json());

app.use("/", login);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});