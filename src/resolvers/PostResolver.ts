import { Arg, Mutation, Resolver } from "type-graphql";
import { PostInput } from "../inputs/post/PostInput";
import { Post } from "../models/Post";

@Resolver(of => Post)
export class PostResolver {
    @Mutation(returns => Post, { description: "Create a post" })
    async createPost(
        @Arg("post", { description: "The content of the post" })
        post: PostInput
    ) {
        return Post.create({ content: post.content });
    }
}
