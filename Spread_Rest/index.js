const citiesRussia = ['Москва', 'Санкт-Петербург', 'Казань', 'Новосибирск']
const citisEurope = ['Берлин', 'Прага', 'Париж']


///Spread
// оператор - Spread разарачивает массив в строку, что как видно в ниже преведённых случаях
console.log(...citiesRussia)
console.log(...citisEurope)

const allCities = [...citiesRussia, ...citisEurope]// оператор Spread может не просто разворачивая клонировать массив, освобождаясь от массива, но он может также объединять в один несколько массивов, и не только, при его помощи мы можем добавлять в массив новые элементы, т.е. используется для трансформации в более удобные типы данных.
console.log(allCities)
//до введения данного оператора , объединение массивов достигалось приминением метода concat
const allCities1 = citisEurope.concat(citiesRussia)
console.log(allCities1)

// при этом spread в отличие от concat ещё работает и с объектами

const citiesRussiaWithPopulation = {
    Moscow: 20,
    SaintPetersburg: 8,
    Kazan: 5,
    Novosibirsk: 3
}
const citiesEuropeWithPopulation = {
    Moscow: 26,
    Berlin: 10,
    Praha: 3,
    Paris: 2
}


console.log({...citiesEuropeWithPopulation})
console.log({...citiesEuropeWithPopulation, ...citiesRussiaWithPopulation})//подобный подход используют и фреймворки React, Vue, но...Spread также имеет возможность выборки по второму объекту 

///примеры использования

// первое приминение
console.log(Math.max(5, 37, 42, 17))
const numbers0 = [5, 37, 42, 17]
console.log(Math.max(numbers0))// нельзя найти максимум из массива 
console.log(Math.max(...numbers0))//используя же spread это становится возможным
//а это вызов из старой практики
console.log(Math.max.apply(null, numbers0))// что достигалось обращением к методу apply,  у которого первым параметром был контекст, и он был не важен, а вторым был массив

// второе приминение: при получении доступа к определенным dom node

const divs = document.querySelectorAll('div')
console.log(divs)
//приэтом использование функции map() - console.log(divs.map()) выдаёт ошибку по причинне того что divs коллекция DOM элементов, а не массив, и не все функции к ним применимы
const nodes = [...divs] // и здесь применим spread
console.log(nodes)
//осуществив же вызов метода Array.isArray для фиксации массив ли элемент, получаем
console.log(divs, Array.isArray(divs))// false
console.log(nodes, Array.isArray(nodes))// true

///Rest
//первая область приминения
function sum(a, b) {
    return a + b
}

const numbers = [1, 2, 3, 4, 5]

console.log(sum(...numbers))//не видит элементы массива более двух вызываемых

function sum1(a, b, ...rest) {//rest позволяет аккамулировать в себя не видимые, на что и  указывает консоль rest
    console.log(rest)
    return a + b + rest.reduce((a, i) => a +i, 0)// он же позволяет используя метод  reduce остальные и просуммировать
}

const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8]

console.log(sum1(...numbers1))// a + b + rest.reduce 

// вторая область приминения
function sum2(a, b, ...rest) {
    return a + b + rest.reduce((a, i) => a +i, 0)
}

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const a = numbers2[0]
// const b = numbers2[1] - в EC6 есть более короткая запись -деструктуризация:
const [a, b, ...other] = numbers2
console.log(a, b, other)

const person = {
    name: 'Max',
    age: 20,
    city: 'Moscow',
    country: 'Russia'
}

const {name, age, ...address} = person //деструктуризация объектов  с rest

console.log(name, age, address)
