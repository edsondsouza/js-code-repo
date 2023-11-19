# Javascript Async Code

## Default behavior Javascript
- Javascript is `Synchronous`, meaning code in javascript gets executed line-by-line.
- Javascript is `single-threaded` (execute one task at a time). It is comparitively slow when compared to other powerful languages, but javascript does not allow developers to feel as if it is slow (choking does not happen). This is because standalone javascript standalone engine is not available. Either javascript runs on browser environment or nodejs (deno, bun) environment. 

## Execution Context
- execute one line of code at a time
- each operation waits for the last one to complete before executing
- [Reference (Learn with Diagram)](https://youtu.be/ByhtOgF6uYM?si=FHbFDAuTqy34LZPd)

## Blocking code vs Non-Blocking code

### Blocking code
- Block the flow of the program
- Read file sync

### Non-Blocking code
- Does not block the flow of the program
- Read file async

## Event loop 
[Reference (Learn with Diagram)](https://www.youtube.com/watch?v=zgt5oTD3rRc&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=38)