let age: number = 5;
age= 3

let user: object;
user = {}

let id: string|number
id=5
id='ff'
//
const temps: number[] = [30, 21, 50.851818]
const coords: (string|number)[] = [151, "5151"]
const array: readonly number[] = [30, 21, 50.851818] //только чтение на массив
const rgb: [number, number, number, number] = [30, 21, 50.851818, 0] //только для четко указанного количества елементов. Каждый елемент указывается отдельно
//
type TID = number|string

const userId: TID = 0

type TReqestStatus = 'request' | 'succcess' | 'error' //только эти значения

interface IEmployees {
    [key: string]: number,  //для неизвестного количества свойств
}
const empl: IEmployees = {
    mango: 26,
    "poly": 17,
    null: 15,   //ключи приводит к строке
    67: 151,     //ключи приводит к строке
}
const entries = Object.entries(empl)
let bestEmployeeName = ''
let bestEmployeeIndex = 0
  
for (const [name, value] of entries){  
    if(bestEmployeeIndex <= value){
        bestEmployeeIndex = value
        bestEmployeeName=name
    }
}
  
console.log(bestEmployeeName);
//
const func = function(x:number, y?:string) { //необязательный параматр ?:
    return x + y
}
const res = func(1,'2')

const func1 = function(x:number, y:string):string {  //(): - тип результата 
    return x + y
}
const fn= (a:number, b:number, ...c:number[]) => {}   

type TAddFn = (a:number, b:number) => number

const fn2: TAddFn = function(x, y) {return x+y}
//
interface IPlaginConfig {
    selector: string,
    perPage?: number, // необязательное свойство ?:
    readonly start: string, //readonly перед свойством, чтобы только читать
}
const config: IPlaginConfig = {selector: 'qe', start: 'vfvfvf'}
//
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
all(2,{3:'3'})
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