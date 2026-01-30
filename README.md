# Linked list data structure - Implementation with the *TypeScript* programming language:
![Static Badge](https://img.shields.io/badge/LinkedList-TS?style=plastic&logo=github&logoColor=white&label=Github%20Repo&color=blue&link=https%3A%2F%2Fgithub.com%2FShaedow2000%2FLinkedList-TS)
![Static Badge](https://img.shields.io/badge/Shaedow2000-Me?style=plastic&label=Creator&color=green&link=https%3A%2F%2Fgithub.com%2FShaedow2000)
![Static Badge](https://img.shields.io/badge/TypeScript-ts?style=plastic&logo=typescript&logoColor=white&label=Language&color=%233178C6)

A liked list is a type of data stucture, like a normal list, but more efficent in some cases.

## I) Installation:
### 1- JavaScript module:
Install the js version of the module by using npm:
```bash
add code
```
This version is for use in js files and programs.
### 2- TypeScript module:
Install the ts version of the module by using npm:
```bash
add code
```
This version is for use in ts files and programs. Or for contributing to the project.

## II) Usage:
After installation, import the module by:
```javascript
add code
import { LinkedList } from "";

list = new LinkedList( unique=false ); // Set to false by default, so no need to add the unique=false.
list_unique = new LinkedList( unique=true );
```
### Methods:
#### 1. .toString():
This is the string representation of the data inside of the linked list:
```javascript
list.toString();
// returns >>> [ No Data ] if there is no data else it returns the structure of the data: [ HEAD: x ]-> [ y ]-> [ TAIL: z ].
```
#### 2. .is_empty():
This returns `true` if the linked list is empty, and `false` if the linked list is not empty:
```javascript
list.is_empty();
// >>> true
```
#### 3. .size():
Returns the size or how many elements are found in the linked list:
```javascript
list.size();
// >>> 0
```
#### 4. .is_unique( key: unknown ) [ private method ]:
> This is a private method.
> And its for use only inside the class.
This method returns true if the parameter key is unique in the linked list. If there is a value like this value that is found in the linked list, it returns false.
#### 5. .check_index( index: number ) [ private method ]:
> This is a private method.
> And its for use only inside the class.
This methods raises two errors, by entering the parameter index, it checks if the index is negative, or out of the range of the linked list. if one of the statements is true, then it raises a RangeError.
#### 6. .find( key: unknown ):
This method returns the Node object for the entered key, not to be confused with search with index:
```javascript
list.find( 'value' );
// >>> Node { data: 'value', next_node: null }
```
#### 7. .search( index: number ):
This method returns the Node object for the index of it in the linked list, the indexing starts from 0 like an ordinary array:
```javascript
list.search( 0 );
// >>> Node { data: 'value', next_node: null }
```
#### 8. .add( data: unknown ):
This method adds a new element to the beginning of the linked list:
```javascript
list.add( 'value' );
list.toString();
// >>> [ HEAD: value ]
```
#### 9. .insert( data: unknown, index: number ):
This method takes the data and the index, and places the data in the given index:
```javascript
list.insert( 'new', 1 );
list.toString();
// >>> [ HEAD: value ]-> [ TAIL: new ]
```
#### 10. .remove( index: number ):
This method removes an element from the linked list by giving it its index:
```javascript
list.remove( 0 );
```
#### 11. .deleted( key: unknown ):
This method deleted an element from the linked list by giving it the key, or its value:
```javascript
list.delete( 'new' );
```
#### 12. .unhead():
This method removes the head of the linked list:
```javascript
list.unhead();
```
#### 13. .untail():
This method removes the tail of the linked list:
```javascript
list.untail();
```

## III) Contribution:
To contribute to the project, u can clone this repo, and start coding !!
```bash
git clone 'https://github.com/Shaedow2000/LinkedList-TS.git'
```
> NOTE: Please when you change the src directory of the code, dont forget to compile everything to javascript in the dist folder, and place the respective README.md and package.json to their place it they where removed:
> ```bash
> tsc
> ```
All contribution are Welcome !! 🎉🎉🎉

## IV) LICENSING:
The project is licensed under the `` © Shaedow2000 2026.
