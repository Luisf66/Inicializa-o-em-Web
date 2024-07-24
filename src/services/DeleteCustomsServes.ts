import { error } from "console";
import prismaClient from "../prisma";

interface DeleteCustomsProps {
    id: string;
}

class DeleteCustomsServes {
    async execute({ id }: DeleteCustomsProps){

        if(!id) {
            throw new Error("Solicitação inválida")
        }

        const findCustomer = await prismaClient.custumer.findFirst({
            where:{
                id: id
            }
        })

        if(!findCustomer) {
            throw new Error("Cliente inexistente")
        }

        await prismaClient.custumer.delete({
            where:{
                id: findCustomer.id
            }
        })

        return { message: "Cliente Deletado"}
    }
}

export { DeleteCustomsServes}