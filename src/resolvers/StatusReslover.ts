import { Query, Resolver } from "type-graphql";

@Resolver()
export class StatusResolver {
    @Query(returns => String, { description: "Server status testing" })
    hello() {
        return "Hello";
    }

    @Query(returns => String)
    version() {
        return process.env.npm_package_version;
    }
}
