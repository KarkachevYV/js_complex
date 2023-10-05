const set = new Set([1, 2, 3, 3, 3, 3, 4, 5, 6])
console.log(set)//при выводе сет мы обнаруживанем, что в не зависимости от наличия дубликатов, сет выдаёт лишь уникальные(единственные экземпляры)

set.add(10).add(20).add(30).add(20)
console.log(set.has(40))
console.log(set.size)
console.log(set.delete(3))
// console.log(set.clear())

//в сете существуют вспомогательные поля, позволяющие получить его в пазных форматах
console.log(set.values())//данное поле хранит значения
console.log(set.keys())//данное тоже , и ответом для чего их два: для синхронизации с мепом
console.log(set.entries())// а это поле выводя показывает почему предыдущие два поля равны, потому что ключ и значение совпадают

//соответственно вызов через for of покажет только ключи
for (let key of set) {
    console.log(key)
} 

/// практические примеры

function uniqValues(array) {
    return Array.from(new Set(array))
}

console.log(uniqValues([1, 1, 2, 2, 3, 4, 4, 4, 5, 6, 6, 6 ]))

function uniqValues1(array) {
    return [...new Set(array)]
}
console.log(uniqValues1([1, 1, 2, 2, 3, 4, 4, 4, 5, 6, 6, 6 ]))