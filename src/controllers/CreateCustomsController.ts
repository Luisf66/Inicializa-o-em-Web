import { FastifyRequest, FastifyReply } from "fastify";
import { CreateCustomsServes } from "../services/CreateCustomsServes";

class CreateCustomsController {
    async handle(request: FastifyRequest, reply: FastifyReply){
        const { name, Email} = request.body as {name: string, Email: string};

        const customerService = new CreateCustomsServes()
        const customer = await customerService.execute({ name, Email});
        reply.send(customer)
    }
}

export {CreateCustomsController}