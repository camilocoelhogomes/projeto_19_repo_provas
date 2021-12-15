import dotenv from 'dotenv';

let path: string;

path = '.env.test';
if (process.env.NODE_ENV === 'dev') path = '.env.dev';
if (process.env.NODE_ENV === 'production') path = '.env';

dotenv.config({ path });
