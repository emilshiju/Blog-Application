





import mongoose from 'mongoose';

const dbURI = 'mongodb+srv://blog:WIGCVQYzUFItoW4H@cluster0.9o6pm.mongodb.net/'

const connectToMongo = async () => {
  try {
    await mongoose.connect(dbURI);
    console.log('Connected to MongoDB');


  } catch (error) {
    console.error('Error connecting to MongoDB', error);
    process.exit(1);
  }
};

export default connectToMongo;
