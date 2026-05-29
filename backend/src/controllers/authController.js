import mongoose from 'mongoose';

export async function connectDB(): Promise<boolean> {
  const mongoURI = process.env.MONGODB_URI;

  if (!mongoURI) {
    console.warn('⚠️ MONGODB_URI is not set in the environment variables.');
    console.warn('Backend will run, but database actions will require database connection setup or simulation.');
    return false;
  }

  try {
    const conn = await mongoose.connect(mongoURI, {
      serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of hanging
    });
    console.log(`📡 Connected to MongoDB successfully: ${conn.connection.host}`);
    return true;
  } catch (err: any) {
    console.error(`❌ Error connecting to MongoDB: ${err.message}`);
    return false;
  }
}

export default connectDB;
