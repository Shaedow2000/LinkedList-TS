import { Node } from "./node.ts";
import { Data } from "./types.ts";

class LinkedList {
    public head: Data;
    private unique: boolean;

    constructor( unique: boolean ) {
        this.head = null
        this.unique = unique;
    }

    public toString(): string {}

    public is_empty(): boolean {}

    public size(): number {}

    public is_unique(): boolean {}

    public find(): Data {}

    public search(): Data {}

    public add(): void {}

    public insert(): void {}

    public remove(): Data {}

    public delete(): Data {}

    public unhead(): Data {}

    public untail(): Data {}
}

export { LinkedList }
