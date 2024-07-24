import { FastifyRegister, FastifyReply, FastifyRequest } from "fastify";
import { DeleteCustomsServes } from "../services/DeleteCustomsServes"

class DeleteCustomsController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { id } = request.query as { id: string }
        const customerService = new DeleteCustomsServes();

        const customer = await customerService.execute({ id })

        reply.send(customer);
    }
}

export { DeleteCustomsController }