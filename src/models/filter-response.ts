import { FilterItem } from "./filter-tem";

export class FilterResponse {
    constructor(
        public page: number,
        public perPage: number,
        public totalPages: number,
        public results: FilterItem[]
    ) { }

    static fromJson(json: any): FilterResponse {
        const items = json.results.map((item: any) => FilterItem.fromJson(item));
        return new FilterResponse(json.page, json.perPage, json.totalPages, items);
    }
}
