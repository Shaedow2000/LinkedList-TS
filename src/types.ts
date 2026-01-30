import { Node } from './node.ts';

type Data = Node | null;

class ValueError extends Error {
    constructor( message: string ) {
        super( message );

        this.name = 'ValueError';
    }    
}

export type { 
    Data
}

export {
    ValueError
}
