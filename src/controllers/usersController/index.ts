import { Request, Response } from "express";
import { database } from "../../database";

export default class UsersController {

    createUser (req: Request, res:Response): Response {
        const {name} = req.body;
        
        if (name.length < 1) return res.status(403).json({message:"Não é possível criar usuários sem um nome!"});

        database.push(name);

        return res.status(201).json({message:`usuário ${name} criado com sucesso.`});
    }

    getUsers ( req: Request, res: Response): Response {
        return res.status(200).json(database);
    }
}