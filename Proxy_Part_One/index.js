//Прокси это некий класс, который создаёт заглушки для объектов, функций, классов и т.д.
//Прокси в объектах
//создадим некий объект
const person = {
    name: 'Yirii',
    age: 62,
    job: 'fullstack'
}

//и заглушку под него(запроксируем его)
const op = new Proxy(person, {//первым параметром будет та цель на которую мы повесим прокси, это таргет(персона), вторым некий хендлер или его набор, к примеру метод get
    get(target, prop) {//методов, позволяющих сделать ловушки,  у прокси много, но геттер с сеттером основные из них , здесь геттер вызывает некий объект и некий ключ 
    return target[prop]//в такой форме иы обращаемся к объекту и его ключю, и получаем результаты вызова, однако при таком функционале результат вызова в консоле поля переменной op.name будет как и у person.name       
    }
})
// в чем тогда смысл прокси, а в установленной ловушке, ибо если в вызванном методе мы перепишем имена объекта и его ключей
const op1 = new Proxy(person, {
    get(target, prop) {//  
        console.log('Target', target)//переписываем объект
        console.log('Prop', prop)//переписываем ключи
        return target[prop]//теперь вызов результата op.name(op.age/op.job) будет другим, и будет выводиться сразу же как переписанный объект так и переписанный ключ, хотя и с теми же значениями, что и до перепеси
    }
})
//как же работают другие заглушки, рассмотрим set, has, deleteProperty
const op2 = new Proxy(person, {
    get(target, prop) {  
        console.log(`Getting prop ${prop}`)//для наглядности создаём следующий вызов, где prop изменяется динамически
        return target[prop]
    },
    set(target, prop, value) {//а сеттер принимает три параметра
        if (prop in target) {//при этом, если указываем такую логику перезаписи
            target[prop] = value//проверка условий при существовании ключа
        } else {
            throw new Error(`No ${prop} failed in target`)// или отсутствии ключа, то она будет выполнять именно её, другая логика может добавлять новые ключи объекта и тогда подобных приведенным условиям ошибок выдавать не будет
        }
    },
    has(target, prop) {//этим методом проверяется наличие того или иного ключа в объекте
        return ['age', 'job'].includes(prop)//данной логикой можно  проверять на наличие какой угодно ключ, но истнным ключом будут лишь указанные  в массиве метода ключи
    },
    deleteProperty(target, prop) {//этим методои мы можем удалять ключи
        console.log('Deleting', prop)
        delete target[prop]
        return true
    }
})
//более подробную информацию о методах у Прокси см. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
//Прокси в функциях
//создадим простую работающую функцию
const log = text => `Log: ${text}`
//через прокси создадим ловушку, для этого лучше всего подходит метод appky
const fp = new Proxy(log, {
    apply(target, thisArg, args) {
        console.log('Calling fn...')
//теперь мы можем делать с текстом что угодно, к примеру приведем его верхнему регистру
        return target.apply(thisArg, args).toUpperCase()
    }
})

//Прокси и классы
class Person {//создадим простой класс
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}
const PersonProxy = new Proxy(Person, {//и запроксируем его
    construct(target, args) {// для чего используем construct
            console.log('Construct...')//при организации логики заглушки выведем сообщение

            return new target(...args)//и проинициализируем новый объект с массивом аргуменетов используя определитель спред
    }
})

const p = new PersonProxy('Yirii', 62)// а создав новую переменную, как дочку прокси, мы сполучаем её значения в консоли, соответственно после реализации простой логики прокси мы можем её усложнить как угодно
//к примеру обернем в прокси проинициализированный объект
const PersonProxy2 = new Proxy(Person, {
    construct(target, args) {
        console.log('Construct...')

        return new Proxy(new target(...args), {
            get(t, prop) {// образовав ловушку с помощью геттера
                console.log(`Getting prop "${prop}"`) 
                return t[prop]//
            }
        })
    }
})

const p2 = new PersonProxy2('Yirii', 62)

//прикольный пример прокси заглушек со странной логикой
const op0 = new Proxy(person, {
    get(target, prop) {
        if (!(prop in target)) {//если в объекте нет поля(ключа)
            return prop// получим валидность ключа через следующую логику
                .split('_')//разобём имеющиеся ключи объекта target методом split пробелом
                .map(p => target[p])//обработаем полученный массив ключей методом map
                .join(' ')//и соединим после этого методом join через пробел
        }        
    return target[prop]//результат вывода op0.age_age_name_name_ job_age - впечатлит
    }
})