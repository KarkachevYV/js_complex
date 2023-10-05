const users = [
    {name: 'Kol'},
    {name: 'Skol'},
    {name: 'Procol'}
]

const visits = new WeakSet()//создадим слабый сет(с ограничениями)

visits.add(users[0]).add(users[1])

console.log(visits.has(users[0]))
console.log(visits.has(users[1]))

users.splice(1, 1)

console.log(visits.has(users[0]))
console.log(visits.has(users[1]))