//генераторы-функции способные выдавать последовательно результаты её работы
//
//для создания функции генератора достаточно создать обычную функцию со звёздочкой
function* strGenerator() {//которая позволяет получить доступ до ключевого слова yield которое порционно выдаёт результат наружу
    yield 'H'
    yield 'e'
    yield 'l'
    yield 'l'
    yield 'o'//это классический генератор
}

const str = strGenerator()//

function* numberGen(n = 10) {
    for (let  i = 0; i < n; i++ )
    yield i
}

const number = numberGen(7) 
//так как работает генератор? для этого:
const iterator = {//создадим некую переменую для анализа работы генератора
    gen(n = 10) {//и некую функцию со следующей логикой:
        let i = 0
        // return {//если зададим первую логику вывода, то мы убедимся, данный вывод не будет обеспечивать работу генератора, в консоли мы в этом можем убедиться
        //     value: i,
        //     done: false
        // }
        return {//создав же такую логику(следующую) , то получим функционал по которому работают генераторы, для этого достаточно создать в консоли новую переменую const itr = iterator.gen(10) ; itr; itr.next(), и выводы об этом будут свидетельствовать, 
            next() {
                if (i < n) {
                    return { value: ++i, done: false }
                }
                return { value: undefined, done: true }
            }
        }
    }
}     
//в js также существует функция , которая как и генератор, посимвольно выводит элементы строк(массивов)
for (let k of 'Hello') {
    console.log(k)
}//об этом свидетельствует вывод строки через даную функцию

for (let k of [1, 1, 2, 3, 4, 5, 12]) {
    console.log(k)
}//и вывод массива, и это без вызова генератора, так почему это происходит
//а происходит это потому,что данная функция работает со специальным типом данных называемых Symbol, седьмым типом даных в js, для масивов и строк он установлен по умолчанию через Symbol.iterator() специальную функцию в прототипах
//тогда получается мы можем переназначить тип и генератор будет работать и для других типов
//проверим это, подставив вместо некой функции в переменую iterator функцию Symbol.iterator, соответствено пропустим переменую через for of , ибо эта фнкция находится в прототипах имено у неё, и мы уубедимся, что это сработает

const iterator1 = {//создадим другую переменую для анализа работы генератора
    [Symbol.iterator](n = 10) {//вызовем Symbol.iterator как масив, так как она должна работать с масивами
        let i = 0
        
        return {
            next() {
                if (i < n) {
                    return { value: ++i, done: false }
                }
                return { value: undefined, done: true }
            }
        }
    }
}   
for (let k of iterator1) {
    console.log(k)
}// и результат вывода будет посимвольным, только без дополнительных вызовов как у yield

//а что будет с работой for of, если мы перепишем код переменой имитирующий работу генератора на использование генераторов

function* iterator2(n = 10) {
    for ( let i = 0; i < n; i++) {
        yield i
    }
}
for (let k of iterator2()) {
    console.log(k)
}//мы также получим посимвольный вывод, что свидетельствует что в генераторе функция Symbol.iterator установлена по умолчанию 