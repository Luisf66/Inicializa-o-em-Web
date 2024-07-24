import { create } from "domain";
import prismaClient from "../prisma";

interface CreateCustomsProps {
    name: string;
    Email: string;
}

class CreateCustomsServes {
    async execute({ name, Email }: CreateCustomsProps) {
        if (!name || !Email) {
            throw new Error("Preencha Todos Os Campos")
        }
        console.log(name)
        console.log(Email)

        const customer = await prismaClient.custumer.create({
            data:{
                name,
                Email,
                status: true
            }
        })

        return customer
    }
}

export { CreateCustomsServes }