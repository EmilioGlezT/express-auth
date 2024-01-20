import { app } from ".";
import dotenv from 'dotenv'

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
  });