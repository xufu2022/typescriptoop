# normal run

    tsc ./src/test.ts --outdir ./dist
    node ./dist/test.js
    
     tsc.cmd -p ./src (this command will tell where the source code is)
     tsc.cmd -h

the line below in watch mode
     tsc.cmd -p ./src -w 
     node .\dist\test.js

note: abstract class inheritance, need update variable after call super

## UML

**black triangle arrow**

    Person -> car (person start the car)

extended fancy car -> car (**white triangle arrow**)

interface: ----> (**dotline with white triangle arrow**)

Aggregate <-<>  class A reference class B (both can exists independently)
        Class A <>->class B
        Library <>-> Book 

Compose Class A composed of class B (black diamond with arrow)

        AeroPlane <>-> Wings 

Pseudocode Annotation **page folded**

