import { Node } from "./node.ts";
import { Data } from "./types.ts";

class LinkedList {
    public head: Data;
    private unique: boolean;

    constructor( unique: boolean ) {
        this.head = null
        this.unique = unique;
    }

    public toString(): string {
        let current: Data = this.head;
        const nodes: string[] = [];

        while ( current !== null ) {
            if ( current !== null && current === this.head ) {
                nodes.push( `[ HEAD: ${ current.data } ]` );
            } else if ( current.next_node === null ) {
                nodes.push( `[ TAIL: ${ current.data } ]` );
            } else {
                nodes.push( `[ ${ current.data } ]` );
            }

            current = current.next_node;
        }

        return nodes.length !== 0 ? nodes.join( '-> ' ) : '[ No Data ]';
    }

    public is_empty(): boolean {
        return this.head === null;
    }

    public size(): number {
        let current: Data = this.head;
        let count: number = 0;

        while ( current !== null ) {
            count++;
            current = current.next_node;
        }

        return count;
    }

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
