import type { Data } from './types.ts';

class Node {
    public data: unknown;
    public next_node: Data;

    constructor( data: unknown ) {
        this.data = data;
        this.next_node = null;
    }
}

export { Node }
