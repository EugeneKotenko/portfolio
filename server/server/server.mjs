import fastify from "fastify";
import fastifyStatic from "@fastify/static";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = fastify();

server.setNotFoundHandler((_, reply) => {
  return reply.sendFile("index.html");
});

server.register(fastifyStatic, {
  root: path.join(__dirname, "../../dist"),
});

const port = process.env.PORT || 5555;
const host = process.env.HOST || "localhost";

server
  .listen({ port, host })
  .then(() => {
    console.log("Server is running");
  })
  .catch((error) => {
    console.error(error);
  });