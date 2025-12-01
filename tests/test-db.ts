import { connectToDatabase } from '@/database/mongoose';

async function main() {
  try {
    await connectToDatabase();
    console.log('OK: Database connected successfully!');
    process.exit(0);
  } catch (err) {
    console.error('ERROR: Database failed to connect!');
    console.error(err);
    process.exit(1);
  }
}

main();
