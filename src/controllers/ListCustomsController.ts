import { FastifyRequest, FastifyReply } from "fastify"
import { ListCustomsServes } from "../services/ListCustomsServes"

class ListCustomsController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const listCustomsController = new ListCustomsServes();

        const customer = await listCustomsController.execute();
        reply.send(customer);
    }
}

export { ListCustomsController }