import { model, Document } from "mongoose";
import { Field, Int, ID, ObjectType } from "type-graphql";
import { postSchema } from "../schemas/post.schema";

@ObjectType()
export class Post {
    static model = model("Post", postSchema);

    @Field(type => ID)
    _id: string;

    @Field()
    content: string;

    @Field(type => Int, { description: "The created time in unix timestamp" })
    createdAt: number;

    static async create(payload: { content: string }) {
        const post = await this.model.create({ ...payload, createdAt: Date.now() / 1000 | 0 });

        return Post.build(post);
    }

    static build(doc: Document): Post {
        const post = new Post();

        post._id = doc._id;
        post.content = doc.get("content");
        post.createdAt = doc.get("createdAt");

        return post;
    }
}
