const myNumber = 42

localStorage.removeItem('number')
console.log(localStorage.getItem('number'))
localStorage.setItem('number', myNumber.toString())
console.log(localStorage.getItem('number'))
localStorage.clear()

const object0 = {
    name: 'Kari',
    age: myNumber
}

localStorage.setItem('person', object0)//при такой записи данные переменной объекта стираются local Storage, он с объектами не работает

console.log(object0)//т.к. typeof object0 зто объект


const object1 = {
    name: 'Max',
    age: 20
}
localStorage.setItem('person1', JSON.stringify(object1))// при такой: JSON.stringify перезаписывает их в object, и мы соответственно можем его данные: клоюч-значение увидеть в console.log после записи в local storage
console.log(object1)// при этом tapeof показхывает, что объект записан в строке


// для получения данных из local Storage: используем метод getItem
const raw = localStorage.getItem('person1')
raw.name = 'Jorj' //допустим при вызове имя ещё и поменяем
console.log(raw) // показывает как бы строку, ничего при этом не меняется, и понятно ибо вызвав ключ получаем:
console.log(raw.age)// undefined т.к. raw строка, а соответственно нет доступа к ключам 
console.log(typeof raw)//ибо raw - string, в которой не может быть ключей и их значений, или они не опреджелены.
// соответственно для получения объекта с ключами и значениями нам вновь нужно обратиться к глобальной переменной JSON , а точнее к его методу parse()
console.log(typeof JSON.parse(raw)) //typeof:object
console.log(JSON.parse(raw))//что и требовалось получить для дальнейшей работы ;объект с ключами и их значениями

///резюме:соответственно правильная запись для извлечяения данных(изменённых) из local Storage:
const object2 = {
    name2: 'Max',
    age2: 20
}
localStorage.setItem('person2', JSON.stringify(object2))
const raw2 = localStorage.getItem('person2')
const person2 = JSON.parse(raw2)
person2.name2 = 'Jorj'
console.log(person2)

/// другие возможности использования local Storage:
//при работе в разных окнах, мы можем их синхронизировать через установку слушателя в одном из окон:
window.addEventListener('storage', event => {
 console.log(event)
 })// первый способ установления слушателя, после обновления страницы(окна) мы к этому слушателю можем обратиться
//при этом на этой странице , если мы в консоли наберём: localStorage.setItem('temp', Date.now().toString()) мы получим undefined, хотя в хранилище local storage изменения будут записаны: и ключ temp, и его числовое значение .
//а вот набрав в другом окне в консоли тоже самое: localStorage.setItem('temp', Date.now().toString()) и вернувшись в окно, где установлен слушатель мы автоматически увидим в консоли все изменения StorageEvent в этом окне, соответственно появится и информация о ключе temp и о его изменениях, при этом будет указано: в каких окнах это происходило.
//window.onstorage = () => {}// - альтернативный способ установления слушателя