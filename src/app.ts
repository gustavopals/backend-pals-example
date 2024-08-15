import express from 'express'
import cors from 'cors';
import { Router, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { router } from './routes/routes';

const app = express();
const route = Router()
const allowedOrigins = '*'
const options: cors.CorsOptions = {
    origin: allowedOrigins,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
}

export const prisma = new PrismaClient();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors(options))

route.get('/', (req: Request, res: Response) => {
    res.json({ message: 'hello world - backend example pals server' })
})

app.use(route)

app.use(router)



export { app }