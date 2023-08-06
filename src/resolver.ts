import fs from "fs";
import path from 'path';

// Function to read the JSON file synchronously
function readJsonFileSync(filePath: string) {
  try {
   console.log("XXXXXXXXX")
   const __dirname = path.resolve();

   console.log('Current working directory:', process.cwd());
   console.log('Current working directory:', path.join(__dirname, filePath));

   const data = fs.readFileSync(path.join(__dirname, filePath), 'utf8')
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading JSON file:', error);
    return null;
  }
}

export const resolvers = {
  Query: {
    details: () => readJsonFileSync('../jest-esm-example/data/sample.json'),
  },
};