# Interface

    interface ErrorContainer{
        id: string;
        [prop:string]: string;
    }

    const errorBag: ErrorContainer={
        id:1,
        username:'must start with a captial char',
        email: 'not a valid email'
    }

    type combined= string | number;
    type numberic= number | boolean;
    type universal= combined & numberic;

    function add(a: number, b:number):number;
    function add(a: string, b:string):string;

    function add (a: combined, b: combined){
        if(typeof a === 'string' || typeof b ==='string'){
            return a.toString() + b.toString();
        }
        return a + b;
    }
    const result=add(5,5);

# Optional Chaining

    console.log(a?.job?.title);

## Nullish Coalescing
