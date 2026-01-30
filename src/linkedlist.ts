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

    private is_unique( key: unknown ): boolean {
        let current: Data = this.head;
        let position: number = 1;

        while ( current !== null && position <= this.size() ) {
            if ( current !== null && key === current.data ) {
                return false;
            }

            position++;
            current = current.next_node;
        }

        return true;
    }

    public find( key: unknown ): Data {
        let current: Data = this.head;
        
        while ( current !== null ) {
            if ( current !== null && key === current.data ) {
                return current
            }

            current = current.next_node;
        }

        return null;
    }

    public search( index: number ): Data {
        if ( index === 0 ) {
            return this.head;
        } else if ( index > 0 ) {
            let current: Data = this.head;
            let position: number = index;

            while ( current !== null && position > 1 ) {
                current = current.next_node;
                position--;
            }

            return current;
        } else {
            return null
        }
    }

    public add( data: unknown ): void {
        const new_node: Node = new Node( data );
        
        new_node.next_node = this.head;
        this.head = new_node;

        return
    }

    public insert(): void {}

    public remove(): Data {}

    public delete(): Data {}

    public unhead(): Data {}

    public untail(): Data {}
}

export { LinkedList }
