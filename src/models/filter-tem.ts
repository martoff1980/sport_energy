export class FilterItem {
    constructor(
        public name: string,
        public filter: string,
        public imgUrl: string
    ) { }

    static fromJson(json: any): FilterItem {
        return new FilterItem(json.name, json.filter, json.imgURL);
    }
}