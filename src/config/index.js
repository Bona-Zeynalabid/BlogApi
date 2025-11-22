import 'dotenv/config';

export const port = process.env.PORT || 3000;
export const mongoURI = process.env.MONGO_URI;
export const nodeEnv = process.env.NODE_ENV || 'development';