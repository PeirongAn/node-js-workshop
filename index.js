import app from './server';
import db from './db'; // Custom database
import log from './logger'; // Custom logger

// Our application will start in the defined port
// Get the application PORT from our env var
const {
  PORT,
} = process.env;
app.listen(PORT, () => {
  // Connect to database
  db();
  // Log that the application is running
  log(`Node app is running on port ${PORT}`);
});

// Export our API
export default { app };
