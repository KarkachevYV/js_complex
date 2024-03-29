function hello() {
    console.log('Hello', this)
}

const person = {
    name: 'Yirii',
    age: 62,
    sayHello: hello,
   // sayHelloWindow: hello.bind(window)// this === window
    sayHelloWindow: hello.bind(document),// this === document
    logInfo: function(job, phone) {
        console.group(`${this.name} информация:`)
        console.log(`Меня зовут ${this.name}`)
        console.log(`Мне: ${this.age}`)
        console.log(`Я работаю: ${job}`)
        console.log( `Мой телефон: ${phone}`)
        
        console.groupEnd()
    }
}//this это ключевое динамичное слово вызывающее объект, к которому мы вызываем ту или иную функцию

const Lena = {
    name: 'Elena',
    age: 58,
   
}

person.logInfo.bind(Lena)('Full-Stack', 7900000001)//вызывая функцию отсутствующую у объекта через bind() обязательны в конце ещё одни (), указывающие на вызов функции logInfo() и тогда this будет вызывать свойства(переменные) объекта, указанного в методе bind в качестве параметра, в bind соответственно можно передавать и прочие необходимые свойства, которые тут же в качестве параметров требуется занести в функцию.
person.logInfo.bind(Lena, 'Full-Stack', 7900000001)()//эти две записи идентичны

person.logInfo.call(Lena, 'Full-Stack', 7900000001)//call вызывает функцию сама и сразу же, в остальном итог такой же как и у первых двух вызовов.

person.logInfo.apply(Lena, ['Full-Stack', 7900000001])//apply в отличии от call вызывает только два параметра, второй, при двух и более новых свойств, является массивом из них.

///приминение: допустим имеем массив

const array = [1, 2, 3, 4, 5] 

console.log(array)// его вывод указывает на число элементов и на сам массив

function multBy(arr, n) {//допустим создадим функцию увеличивающую каждый элемент массива на какое-то число
    return arr.map(function(i) {
        return i * n
    })
}

console.log(multBy(array, 5)) // вывод фиксирует правильную реализацию данного функционала, но он не совершенен, требует постоянного импортирования и вызова , ввода массива и множителя, а как добиться этого функционала более универсальной реализацией, какой можно применить для этого метод? prototype и this нам помогут в этом :

Array.prototype.multBy = function(n) { // вызвав прототип глобального объекта родительского класса Array и создав желаемую функцию  multBy с требуемым множителем (n) 
    console.log('multBy', this) // мы получим через консоль, вызвав метод array.multBy(2), что this === array
    
}

array.multBy(2)

// тогда подставив реализацию функции и заменив массив ключевым словом, мы добъемся требуемой универсальности.
Array.prototype.multBy = function(n) { 
    return this.map(function(i) {
        return i * n
    })
    
}

console.log(array.multBy(20))//и данный консоль лог это подтверждает, функция будет применима для любого массива и любого множителя через обращение к этому методу везде и всегда, для любой дочки данного объекта.
// таким образом, мы можем расширять объекты ошибок, строк, чего угодно... промисов и вообще всех классов какие у нас есть(присутствуют), а в связке с ключевым словом , которое каждый раз указывает на элемент находящийся слева от него, мы получаем гибкий и универсальный код.