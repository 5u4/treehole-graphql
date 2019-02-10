import { Arg, Mutation, PubSub, PubSubEngine, Query, Resolver, Root, Subscription } from "type-graphql";
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
        @Arg("post", { description: "The content of the post" }) post: PostInput,
        @PubSub() pubSub: PubSubEngine
    ) {
        const createdPost = await Post.create({ content: post.content });

        await pubSub.publish(Post.SUBSCRIPTION_TOPIC, createdPost);

        return createdPost;
    }

    @Subscription(returns => Post, { topics: Post.SUBSCRIPTION_TOPIC })
    async newPost(
        @Root() post: Post
    ) {
        return post;
    }
}
