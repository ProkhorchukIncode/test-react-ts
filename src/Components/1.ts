const a = <T>(array: T[]) => {
    return array
}
console.log(a([1,2,3]));
console.log(a(["1",2,3]));
//
const b = <A, B>(x:A, y:B) => {
    return `${x}, ${y}`
}
b(1,true)
//
const all = <M, T>(a: M, b:T) =>{
    return `${a}, ${b}`
}
all(2,{3:3})
//
interface ILength {
    length: number
}
const useLength = <T extends ILength>(arg:T) => {
    return arg.length
} 
useLength([{151:5151}])
//

interface IPerson {
    firstName: string,
    lastName: string,
}

const addNames = <P extends IPerson>(person:P) => {
    return `${person.firstName}, ${person.lastName}`
}
addNames({firstName:'151', lastName: '115'})
//
interface ITab<T> {
    id: string,
    name: string,
    content: T
}
type TStringTab = ITab<string>;
const tab1: ITab<number> ={
    id: 'string',
    name: 'string',
    content: 2
}
const tab2: TStringTab = {
    id: 'string',
    name: 'string',
    content: '2'
}
//

class State<S> {
    private state:S;

    constructor (initialState: S) {
        this.state = initialState;
    }
    getState() {
        return this.state
    }
    setState (newState:S){
        this.state = newState;;
    }
}
console.log(State);

export {}