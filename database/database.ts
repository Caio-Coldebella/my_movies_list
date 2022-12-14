import pkg from '@prisma/client';

const {PrismaClient} = pkg;
export const prisma = new PrismaClient();

import pg from 'pg';
import dotenv from 'dotenv';
dotenv.config()

const { Pool } = pg;

const databaseConfig = {
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
}

export const connection = new Pool(databaseConfig);

