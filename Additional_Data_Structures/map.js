///
//
//мы знаем две формы записи объекта
const obj = {//в форме объьекта
name: 'Yirii',
age: 62,
job: 'unemployed'
}

const entries = [//в форме массива
    ['name', 'Yirii'],
    ['age', 62],
    ['job', 'unemployed']
]

//в js у глобального слова Object существуют два метода транспортации одной из вышеназванных записей в другую
console.log(Object.entries (obj))//1-ая
console.log(Object.fromEntries(entries))//2-ая

///но в js существует и структура данных map, переменная которой представляет собой объект(карту)
const map = new Map(entries)//создадим карту(map - объект)
console.log(map)// соответственно мы его можем получить
console.log(map.get('job'))//при этом в меп для получения какого либо значения необходимо обратиться к методу гет, 
console.log(obj.job)//в то время как для получения значения в объекте нужно обратиться к ключу объекта

map// удобен тем, что у него есть различные методы по умолчанию, что конечно же очень удобно, ибо их можно использовать без инициализации
    .set('newField', 45)//при этом используя , к примеру метод сет можно легко добавлять новые ключи и их значения 
    .set(obj, 'Value of object')//и даже добавлять как ключи целые объекты
    .set(NaN, 'NaN is ???')//и даже ключ в виде "нет"
console.log(map)//соответственно простой вызов будет иметь мап-объект, с ключами, такими же как в переменной в виде массива, но уже с вновь добавленными парами ключ-значение
console.log(map.get(obj))//для вызова соответственно значений новых пар требуется вызвать метод гет, с переменной ввиде соответствующего ключа.
console.log(map.get(NaN))

map// рассмотрим другие широко используемые методы map
    .delete('job')//одним из них является delete - данный метод возвращает нам, при успешном выполнении истину, при отрицательном ложь, т.е.булевые значения
console.log(map)//тогда объект после изменения увидеть можно либо так
console.log(map.has('job'))//либо так, используяочередной метод has(), который виводит также булевое значение
console.log(map.size)//используя очередной метод - size, мы можем узнать размер объекта
// map.clear()// а выполнив метод clear() - ликвидировать его полностью
// console.log(map.size)//что будет подтверждено в консоли

///дополнительные встроенные методы

for (let entry of map.entries()) {//так используя for of из карты через entries
    console.log(entry)//мы можем вызвать массивы в виде пар
}
//
for (let [key, value] of map.entries()) {//а используя некий массив с вызовом карты через entries 
    console.log(key, value)//это позволяет вызвать только пары,  при этом если мы опустим вызов метода entries, то он будет вызван автоматически , что соответственно на вывод не повлияет
}
for (let val of map.values()) {//используя метод  это позволяет вызвать лишь значения ключей
    console.log(val)
}
for (let key of map.keys()) {//а используя это позволяет вызвать только названия ключей
    console.log(key)
}
map.forEach( (val, key, m) => {//вызвав же у карты, метод  мы не только выведим пары, но и изменим синтаксис вывода
console.log(val, key)
})

///из карты можно делать массивы несколькими способами- это очередные возможности map
const array = [...map]//самый простой развернуть с помощью оператора spred
console.log(array)
//
const arr = Array.from(map)// или же можно использовать ему аналогичный метод from к глобальному массиву Array
console.log(arr)

///так как карта это объект, хоть и усложнённый, то мы можем создавать новые  объекты
const mapObj = Object.fromEntries(map.entries())
console.log(mapObj)//однако ключи в виде объектов у вновь созданных простых объектов не могут быть, поэтому ключ - объект становится [object Object] соответственно использовать его нельзя в этом случае


/// пример использования карты(map- объекта)
//расмотрим когда ключами могут быть объекты:
const users = [// допустим есть пользователи и мы хотим знать время их посещения сайта
    {name: 'Kol'},
    {name: 'Skol'},
    {name: 'Procol'}
]

const visits = new Map()//для этого мы создадим новую карту

visits
    .set(users[0], new Date())
    .set(users[1], new Date(new Date().getTime() + 1000*60))
    .set(users[2], new Date(new Date().getTime() + 5000*60))//и здадим в ней соответствующие посещения посетителей

function lastVisit(user) {//осталось создать некую функцию для вывода времени посещения для конкретного посетителя
    return visits.get(user)
}

console.log(lastVisit(users[2]))//требуемый результат даты получим в результате обращения к данной функции , у которой параметром будет указан конкретный посетитель
