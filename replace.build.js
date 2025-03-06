const { writeFileSync } = require('fs');
const { join } = require('path');

const ASSETS_FOLDER = 'src/assets'; // Define the assets folder name
const TIME_STAMP_PATH = join(__dirname, ASSETS_FOLDER, 'buildDate.json');

const createBuildDate = {
  buildTime: new Date()
};

// Ensure the assets folder exists (if it doesn't, create it)
const fs = require('fs'); // Import fs again to use mkdirSync.

if (!fs.existsSync(join(__dirname, ASSETS_FOLDER))) {
  fs.mkdirSync(join(__dirname, ASSETS_FOLDER), { recursive: true });
}

writeFileSync(TIME_STAMP_PATH, JSON.stringify(createBuildDate, null, 2));
