import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import { configs } from "../config/config";

export const build = async () => {
    const schema = await buildSchema({
        resolvers: configs.graphql.resolver.paths,
        emitSchemaFile: configs.graphql.schema.emitPath,
    });

    return new ApolloServer({
        schema,
        playground: configs.app.playground,
        tracing: configs.app.tracing,
    });
};

export const serve = async () => {
    const app = await build();

    const server = await app.listen(configs.app.port);

    // tslint:disable-next-line:no-console
    console.log(`🚀 Server started on ${server.url}`);

    return server;
};
