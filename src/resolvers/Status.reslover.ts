import { Query, Resolver } from "type-graphql";

@Resolver()
export class StatusResolver {
    @Query(returns => String, { description: "Server status testing field for greeting client" })
    hello() {
        return "Hello";
    }

    @Query(returns => String, { description: "Get server version" })
    version() {
        return process.env.npm_package_version;
    }
}
