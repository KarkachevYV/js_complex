function calcValues(a, b) {
    return[
        a + b,
        a - b
    ]
}
/// деструктуризация и массивы

const [sum, sub] = calcValues(42, 10) // (4) включает в себя (3) т.к. мы вместо const result из (3) вставляем [sum, sub] и получили новую константу-массив (деструктуризацию) и это новый, современный концепт
// const sum = result[0] // (1)
// const sub = result[1] //(2)

//const [sum, sub] = result //деструктуризация (3) - сокращение кода (1) и (2) без потери его результата
console.log(sum, sub)


// но допустим мы добавляем в функцию ещё два(две) выражения(переменных), при этом они будут игнорироваться до тех пор, пока мы не введем новую переменную диструктуризации mult, заведомо желая получить на выходе лишь sum и mult
function calcValues1(a, b) {
    return[
        a + b,
        a - b,
        a * b,
        a / b
    ]
}
// в этом случае переменную sub1 можно не указывать, но запятая должна остаться, это правило деструктуризации
const [sum1, , mult1, ...other1] = calcValues1(42, 10) // (4) включает в себя (3) т.к. мы вместо const result из (3) вставляем [sum, sub] и получили новую константу-массив (деструктуризацию) и это новый, современный концепт

console.log(sum1, mult1, other1)// при этом для вывода значений остальных переменных мы можем применять оператор Rest

//теперь допустим переменная вычетания 
function calcValues2(a, b) {
    return[
        a + b,
        undefined,//не определена 
        a * b,
        a / b
    ]
}
const [sum2, sub2 = 'Вычитания нет', mult2, ...other2] = calcValues2(42, 10)// тогда и её значение соответственно будет undefined, но при введении  для неё значения по умолчанию в виде строки к примеру

console.log(sum2, mult2, other2, sub2)//мы это дефолтное значение по умолчанию и получим
// соответственно вернув переменную вычетания в функцию, дефольное значение проигнорируется и мы получим значение вычетания

///деструктуризация и объекты
const person = {
    name: 'Max',
    age: 20,
    address: {
        country: 'Russia',
        city:'Moscow' 
    }
}
// деструктуризация =
const {name} = person  //что полностью эквивалентно: const name = person.name однако последнее дублирует name, что ни есть хорошо 
console.log(name) //у деструктуримзации этой проблемы нет

//далее, допустим имеем объект:
const person1 = {
    name1: 'Max',
    age1: 20,
    address1: {
        country1: 'Russia',
        city1:'Moscow' 
    }
}

// в д-объекте мы вызываем несколько переменных из  person1 и даже такую какой там нет
const {
    name1: firsName1 = 'Без имени',
     age1,
     car1 = 'Машины нет',
     address1: {city1: homeTown, country1}
} = person1  // в случае когда мы вставляем в деструктуризацию  не определенную переменную, мы естесмтвенно получаем indefined и это естественно, поэтому в таких случаях в деструктуроризации для неопределенной переменной вводится значение по умолчанию, как это мы делали выше. 
console.log(firsName1, age1, car1, homeTown, country1)// это верно и в случае , когда мы переназначаем название на другое , но с дефолтным значением, что удобно использовать в случае конфликтов в названиях ключей(переменных), при этом естественно в person1 данного ключ: значения не должно быть.

///в случае использования определителя Rest:

const person2 = {
    name2: 'Max',
    age2: 20,
    address2: {
        country2: 'Russia',
        city2:'Moscow' 
    }
}


const {name2, ...info2} = person2
console.log(name2, info2)

///примеры приминения

const person3 = {
    name3: 'Max',// name3: 'Max', -в случае переопределения с дефолтным значением
    age3: 20,
    address3: {
        country3: 'Russia',
        city2:'Moscow' 
    }
}

// function logPerson(per) { 
//     console.log(per.name3 + ' ' + per.age3)
//     }

//     logPerson(person3)  //- чтобы избежать дублирования per используем деструктуризацию обрамив в фигурные скобки параметр per

function logPerson({name3, age3}) { 
    console.log(name3 + ' ' + age3)
    }

    logPerson(person3) 
    
//подобный подход довольно часто встречается при разработке на React, когда вы передаёте problems(probs) для дочернего кеомпонента, вы разбиваете пробс на отдельные переменные для лучшего с ними взаимодействия (см. ниже), соответственно, при переопределении переменной и присвоении ей дефолтного значения, самой переменной в родительском объекте не должно быть 

// function logPerson({name3: firstName = '111', age3}) { 
//     console.log(firstName + ' ' + age3)
//     }
    
//     logPerson(person3) 