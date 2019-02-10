import { Max, Min } from "class-validator";
import { Field, InputType } from "type-graphql";

@InputType()
export class PaginationInput {
    static readonly DEFAULT_PAGE = 1;
    static readonly DEFAULT_PERPAGE = 10;

    @Field({ defaultValue: PaginationInput.DEFAULT_PAGE })
    @Min(1)
    page: number;

    @Field({ defaultValue: PaginationInput.DEFAULT_PERPAGE })
    @Min(1)
    @Max(50)
    perPage: number;

    getLimit() {
        return this.perPage;
    }

    getOffset() {
        return (this.page - 1) * this.perPage;
    }
}
