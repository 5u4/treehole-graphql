import { Arg, Mutation, Resolver } from "type-graphql";
import { Post } from "../models/Post";

@Resolver(of => Post)
export class PostResolver {
    @Mutation(returns => Post, { description: "Create a post" })
    async createPost(@Arg("content", { description: "The content of the post" }) content: string) {
        return Post.create({ content });
    }
}
