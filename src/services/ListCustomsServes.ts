import prismaClient from "../prisma";

class ListCustomsServes {
    async execute() {
        const customer = await prismaClient.custumer.findMany()
        return customer;
    }
}

export { ListCustomsServes}