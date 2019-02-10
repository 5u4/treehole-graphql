import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { PaginationInput } from "../inputs/pagination/PaginationInput";
import { PostInput } from "../inputs/post/PostInput";
import { Post } from "../models/Post";

@Resolver(of => Post)
export class PostResolver {
    @Query(returns => [Post])
    async posts(
        @Arg("pagination", { defaultValue: new PaginationInput() })
        pagination: PaginationInput
    ) {
        return Post.fetchRecentPosts(pagination);
    }

    @Mutation(returns => Post, { description: "Create a post" })
    async createPost(
        @Arg("post", { description: "The content of the post" })
        post: PostInput
    ) {
        return Post.create({ content: post.content });
    }
}
