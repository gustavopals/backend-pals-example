import express from 'express'

import { Router, Request, Response } from 'express';

const app = express();
const route = Router()

app.use(express.json())

route.get('/', (req: Request, res: Response) => {
    res.json({ message: 'hello world with Typescript' })
})

app.use(route)

const PORT = process.env.PORT || 3333

app.listen(PORT, () => 'server running on port 3333')