import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { request } from "http";
import { CreateCustomsController } from "./controllers/CreateCustomsController";
import { ListCustomsController } from "./controllers/ListCustomsController";
import { DeleteCustomsController } from "./controllers/DeleteCustomsController";

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {
    fastify.get("/test", async (request: FastifyRequest, reply: FastifyReply) => {
        return { ok : true}
    })

    fastify.post("/costumer", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateCustomsController().handle(request, reply)
    })

    fastify.get("/costumers", async (request: FastifyRequest, reply: FastifyReply) => {
        return new ListCustomsController().handle(request, reply)
    })

    fastify.delete("/costumer", async (request: FastifyRequest, reply: FastifyReply) => {
        return new DeleteCustomsController().handle(request, reply)
    })
}