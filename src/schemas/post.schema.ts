import { Schema, SchemaDefinition } from "mongoose";

const postDefinition: SchemaDefinition = {
    content: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Number,
        required: true,
    },
};

export const postSchema = new Schema(postDefinition);
