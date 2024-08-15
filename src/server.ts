import express from 'express'
import cors from 'cors';
import { Router, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const app = express();
const route = Router()

const prisma = new PrismaClient();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

route.get('/', (req: Request, res: Response) => {
    res.json({ message: 'hello world - backend example pals server' })
})

route.get('/users', async (req: Request, res: Response) => {
    const users = await prisma.user.findMany()
    console.log(users)
    res.json(users)
})

app.use(route)

const PORT = process.env.PORT || 3333

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}: http://localhost:${PORT}`);
});