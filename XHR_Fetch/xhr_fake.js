const requestURL = 'https://jsonplaceholder.typicode.com/users'



//get запросы обьчные колбеки, для более универсальных запросов стоит изпользовать промисы , ибо они хорошо работают с асинхронным кодом
//для этого используем универсальную функцию  в которую в промис дополнительно спрячем всю логику асинхронного кода

function sendRequest(method, url, body = null) {
    return new Promise( (resolve, reject) => {
        const xhr = new XMLHttpRequest()

        xhr.open(method, url)
        xhr.responseType = 'json'
        
        // xhr.onload = () => {
        //     console.log(JSON.parse(xhr.response) )
        // } 1-ый вариант получения объекта, либо ниже второй из двуз вызовов:
             
        xhr.setRequestHeader('Content-Type','application/json')
        xhr.onload = () => {
            if (xhr.status >= 400) {
                reject(xhr.response) //reject вызываем в случае >= 400 ошибки 
            } else {
                resolve(xhr.response) // resolve вызываем  в случае успеха
            }
        }
        // для обработки ошибок используем метод onerror
        xhr.onerror = () => {
            reject(xhr.response)// reject в случае ошибки вызова
        }
        xhr.send(JSON.stringify(body))//в случае вызова просто body мы получим  object object вместо string для вызова string нужно обернуть body в JSON.stringify(body)
    })
 
}
const body = {
    name: 'Yirii',
    age: 62
}

// после чего можем оперировать методами вызова вызывая универсальную функцию:
sendRequest('POST', requestURL, body)// для чего в универсальной функции в метод open вводим динамиические параметры вместо GET - metod , вместо requestURL - url, при этом в случае метода POST добавляется третий параметр body
    .then(data => console.log(data))// после чего зачейним вызвав дату через консоль-лог
    .catch(err => console.log(err))//а через кетч вызовим ошибку

