import app from './src/app.js';
import connectDB from './src/config/db.js';
import { port } from './src/config/index.js';

// Connect to database
connectDB();

const server = app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});




export default server;