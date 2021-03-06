// ---- Generics ----- 
console.log('---- Generics ----- ')

//Generics , yani tek bir bileşen yerine çeşitli türler üzerinde çalışabilen bir bileşen oluşturabilmektir. Bu, kullanıcıların bu bileşenleri tüketmelerine ve kendi türlerini kullanmalarına olanak tanır.

function getRandomNumber(items : number[]): number{
    let randomIndex = Math.round(Math.random() * items.length);
    return items[randomIndex] 
}

let numbers = [12 , 213,5, 12, 222]
console.log(getRandomNumber(numbers))

const getRandomString = (items : string[]) : string => {
    let randomIndex = Math.round(Math.random() * items.length);
    return items[randomIndex]
}

let strings = ['Vahap', 'Filiz', 'Meral', 'Ferat', 'Gurbet', 'Ufuk']
console.log(getRandomString(strings))

//yukarıda yapılan kod tekrarından kurtulmak için any type'ı kullanılabilir ama bu type safe değil o yüzden önerilmez.
const getRandomElement = (items : any[]) : any => {
    let randomIndex = Math.round(Math.random() * items.length);
    return items[randomIndex]
}

console.log(getRandomElement(strings))
console.log(getRandomElement(numbers))


//TypeScript otomatik olarak type inference yardımı ile girilen verilerin typelarına bakarak T'nin type'nı atadı.
function getRandomItem <T>(items : T[]) : T {
    let randomIndex = Math.round(Math.random() * items.length);
    return items[randomIndex]
}

let booleans = [true , false, false, true, true]


//Type atamasına bakmadan direk istediğimiz type'ı da belirtebiliriz.
console.log(getRandomItem<string>(strings))
console.log(getRandomItem(numbers))
console.log(getRandomItem<boolean>(booleans))

// --- Generic Constraints -----
console.log('--- Generic Constraints -----')

function merge<U extends object,V extends object>(obj1:U, obj2:V){
    return{
        ...obj1, 
        ...obj2
    }
}
let objs = merge(
    {name : "Ufuk"}, 
    {name : "Gümüş"})
console.log(objs)


//Interfacelerde Generic Kullanımı


interface Months<U,V> {
    key : U,
    value : V
}
let month :Months<number, string> = {
    key : 2,
    value : 'January'
}
console.log(month) //{key: 2, value: 'January'}


interface Collection <T> {
    add(o : T) : void;
    remove(o : T) : void;
}

class List<T> implements Collection<T>{
    private items: T[] = [];
    add(o :T) : void{
        this.items.push(o)
        console.log(this.items)
    }
    remove(o: T): void {
        (o : T) : void{
            let index = this.items.indexOf(o)
            if(index > -1) {
                this.items.splice(index, 1);
                console.log(this.items)
            }
        }
    }
}

let list = new List<number>();

for(let i = 0; i<10; i++){
    list.add(i)
}

//Classlarda Generics Kullanımı

class Stack<T>{
    private elements : T[] = [];

    constructor(private size : number){}

    isEmpty() : boolean{
        return this.elements.length === 0
    }
    isFull() : boolean{
        return this.elements.length === this.size
    }
    push(element : T) : void{
        if(this.elements.length === this.size){
            throw new Error('The stack is overflow!')
        }
        this.elements.push(element)
    }
    pop(): T {
        if(this.elements.length == 0){
            throw new Error('The stack is overflow!')
        }
        return this.elements.pop()
    }
}
function randBetween(low : number, high : number) : number {
    return Math.floor(Math.random() * (high - low + 1) + low)
}

let numaralar = new Stack<number>(5)

while(!numaralar.isFull()){
    let n = randBetween(1,10)
    console.log(`Push ${n} into the stack`)
    numaralar.push(n)
}