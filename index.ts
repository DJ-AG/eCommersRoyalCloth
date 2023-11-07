import express, { Request, Response } from 'express'; // Importing Request and Response
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const app = express(); // Creating an instance of express

const port = process.env.PORT || 3000; // Providing a default port if the environment variable is not set

app.use(express.static(path.join(__dirname, '../client/dist')))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});