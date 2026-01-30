import { Node } from "./node.ts";
import type { Data } from "./types.ts";
import { ValueError } from "./types.ts";

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

    private check_index( index: number ): void {
        if ( index > this.size() ) {
            throw new RangeError( 'Index out of linked list range.' );
        }
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
        this.check_index( index );

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
        if ( this.unique && !this.is_unique( data ) ) {
            throw new ValueError( 'Value should be unique.' );
        }

        const new_node: Node = new Node( data );
        
        new_node.next_node = this.head;
        this.head = new_node;

        return;
    }

    public insert( data: unknown, index: number ): void {
        this.check_index( index );

        if ( this.unique && !this.is_unique( data ) ) {
            throw new ValueError( 'Value should be unique.' );
        }

        if ( index === 0 ) {
            this.add( data );
        } else if ( index > 0 ) {
            const new_node: Node = new Node( data );
            let current: Data = this.head;
            let position: number = index;

            while ( current !== null && position > 1 ) {
                current = current.next_node;
                position--;
            }

            const prev_node: Data = current;
            const next_node: Data = current!.next_node;

            prev_node!.next_node = new_node;
            new_node.next_node = next_node;

            return;
        }
    }

    public remove( index: number ): Data {
        this.check_index( index );

        if ( index === 0 ) {
            return this.unhead(); 
        } else if ( index > 0 ) {
            let current: Data = this.head;
            let position: number = index;

            while ( current !== null && position > 1 ) {
                current = current.next_node;
                position--;
            }

            const prev_node: Data = current;
            const deleted: Data = current!.next_node;

            prev_node!.next_node = deleted!.next_node;

            return deleted;
        } else {
            return null;
        }
    }

    public delete( key: unknown ): Data {
        let current: Data = this.head;
        let previous: Data = null;
        let found: boolean = false;

        while ( current !== null && !found ) {
            if ( key === current.data && current === this.head ) {
                this.head = current.next_node;
                found = true;
            } else if ( key === current.data ) {
                previous!.next_node = current.next_node;
                found = true;
            } else {
                previous = current;
                current = current.next_node;
            }
        }

        return current;
    }

    public unhead(): Data {
        const current: Data = this.head;

        this.head = current!.next_node;
        
        return current;
    }

    public untail(): Data {
        let current: Data = this.head;
        let previous: Data = null;

        while ( current !== null ) {
            if ( current.next_node === null ) {
                previous!.next_node = null;                
            }

            previous = current;
            current = current.next_node;
        }

        return current
    }
}

export { LinkedList }
