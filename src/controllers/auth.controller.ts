import { Request, Response } from "express";

export default class AuthController {
    
    static async register(req: Request, res: Response) {
        const { name, email, password } = req.body;

        console.log(`name: ${name}, email: ${email}, password: ${password}`)

        return res.status(201).json({ user: 'mock register' })
    }

    static async login(req: Request, res: Response) {
        const { email, password } = req.body;
        console.log(`email: ${email}, password: ${password}`)
        return res.status(201).json({ user: 'mock login' })
    }
}