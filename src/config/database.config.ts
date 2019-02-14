export const database = {
    connection: process.env.MONGODB_CONNECTION || "mongodb://mongodb:27017/",
    database: process.env.DATABASE || "treehole",
};
