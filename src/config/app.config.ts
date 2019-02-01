export const app = {
    name: process.env.APP_NAME || "treehole",
    port: process.env.APP_PORT || 4000,
    playground: !!(process.env.ENABLE_PLAYGROUND || false),
    tracing: !!(process.env.ENABLE_TRACING || false),
};
