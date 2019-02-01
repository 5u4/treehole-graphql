export const app = {
    name: process.env.APP_NAME || "treehole",
    port: process.env.APP_PORT || 4000,
    playground: process.env.NODE_ENV !== "production",
    tracing: process.env.NODE_ENV !== "production",
};
