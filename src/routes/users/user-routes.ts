import { Request, Response, Router } from "express";
import { prisma } from "../../app";

export const userRoutes = Router()

userRoutes.get('/', async (req: Request, res: Response) => {
    const users = await prisma.user.findMany()
    console.log(users)
    res.json(users)
})

