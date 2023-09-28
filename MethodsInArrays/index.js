// как мы обычно итерируем массивы
//
const people = [
    { name: 'Yiri', age: 62, budjet: 35000},
    { name: 'Elena', age: 16, budjet: 5000},
    { name: 'Vladimir', age: 16, budjet: 5000},
    { name: 'Jordj', age: 45, budjet: 85000},
    { name: 'Svetlana', age: 35, budjet: 75000},
    { name: 'Vladislav', age: 30, budjet: 235000}
]

// первый метод
for (let i = 0; i < people.length; i++) {//это синтаксис EC5
    console.log(people[i])
}
// второй метод
for (let person of people) {//это синтаксис EC6
    console.log('Object', person)
}
// метод ForEach
people.forEach(function(person, index, pArr) {
    console.log('Person', person)
    console.log(index)
    console.log(pArr)
})
//или эквивалентная ей запись:
people.forEach(person => console.log('Person', person))// когда вторым и третим параметрами обычно не пользуются

/// метод Map
//работает примерно также, но при обращении к нему создаётся новая переменная, которая и выводит массив
const newPeople = people.map(person => {return person})//но есть и хорошее у map отличие: он может трансформировать через return данные и заносить их в результатирующий массив
console.log('Map', newPeople)
//это не практичный, но пример
const newPeople1 = people.map(person => {return "Hello"})
console.log('1',newPeople1)
// это практичный пример
const newPeople2 = people.map(person => {return person.name})
console.log('2', newPeople2)
//или такой пример, тоже практичеый
const newPeople3 = people.map(person =>  `${person.name} (${person.age})` )//а эта запись как бы без return, однако это просто профессиональная запись в одну строчку
console.log('3', newPeople3)

//метод Filter
const adults = []
for (let i=0; i < people.length; i++) {
    if (people[i].age >= 18 ) {
        adults.push(people[i])
    }
}
console.log('Filter', adults)//традиционый подход отфильтровывания по возрасту

const adults1 = people.filter(person => {
    if( person.age >= 18) {
        return true
    }
})
console.log('Adults1', adults1)// отфильтровывание по возрасту с помощью метода filter
//при этом, если мы будем использовать весь функционал стрелочных функций, данная запись будет ещё короче(профессиональней)
const adults2 = people.filter(person => person.age >= 18)
console.log('Adults2', adults2)

/// Reduce
//этот метод резко отличается от остальных, вот пример: допустим мы хотим вычеслить общий  бюджет всех персон, через обычный метод это решается как то так
let amount = 0
for (let i = 0; i < people.length; i++) {
    amount += people[i].budjet
}
console.log(amount)
//а так решается через reduce, 
const amount1 = people.reduce((total, person) => {
    return total + person.budjet
}, 0)
console.log(amount1)
//что в нем происходит, он принимает два параметра первое глобальное изменяемое, а второе, то, которое его изменяет, пройдя весь цикл итераций мы и получаем желаемый результат
const amount2 = people.reduce((total, person) => total + person.budjet, 0)
console.log(amount2)//а это самая его оптимальная (профессионалная) запись

/// далее представлены два метода поиска чего либо в массиве

// Find предназначен для поиска элементов в массиве, в данном случае объектов person
const yirii = people.find(person => person.name = 'Yirii')//person итерируемый объект
console.log(yirii)
// FindIndex предназначен для поиска индекса элементов в массиве, в данном случае индекса объектов person
const indexYirii = people.findIndex(person => person.name = 'Yirii')//person итерируемый объект
console.log(indexYirii)

///и на закуску пример с обобщенным использованием этих методов
const newPeople4 = people
    .filter(person => person.budjet > 5000)
    .map(person => {
        return {
            info: `${person.name} (${person.age})`,
            budjet: person.budjet
        }        
    })

console.log(newPeople4)//здесь мы изменим елементы массива по своему усмотрению

const amountSqrt = people
    .filter(person => person.budjet > 5000)
    .map(person => {
        return {
            info: `${person.name} (${person.age})`,
            budjet: Math.sqrt(person.budjet)
        }        
    })
    .reduce((total, person) => total + person.budjet, 0)

    console.log(amountSqrt)//а тут найдём что-то общее, не адекватное
