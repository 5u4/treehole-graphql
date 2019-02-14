import * as path from "path";

export const graphql = {
    resolver: {
        paths: [
            path.resolve(__dirname, "../resolvers/**/*.ts"),
        ],
    },
    schema: {
        emitPath: path.resolve(__dirname, "../schema.graphql"),
    },
};
