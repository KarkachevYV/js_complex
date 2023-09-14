const requestURL = 'https://jsonplaceholder.typicode.com/users'



//get запросы обьчные колбеки, для более универсальных запросов стоит изпользовать промисы , ибо они хорошо работают с асинхронным кодом
//для этого используем универсальную функцию  в которую в промис дополнительно спрячем всю предыдущую логику асинхронного кода

function sendRequest(method, url, body = null) {// с двумя параметрами method  и URL
    return new Promise( (resolve, reject) => {
        const xhr = new XMLHttpRequest()

        xhr.open(method, url)
        
        // xhr.onload = () => {
        //     console.log(JSON.parse(xhr.response) )
        // } 1-ый вариант получения объекта, либо ниже второй из двуз вызовов:
        
        xhr.responseType = 'json'
        xhr.setRequestHeader('Content-Type','application/json')// - на 15.09.23 переназначение не требуется во всяком случае для EDJI
        xhr.onload = () => {
            if (xhr.status >= 400) {
                reject(xhr.response) //reject вызываем в случае >= 400 ошибки 
            } else {
                resolve(xhr.response) // resolve вызываем  в случае успеха
            }
        }
        // для обработки ошибок используем метод onerror
        xhr.onerror = () => {
            reject(xhr.response)// и в случае ошибки запроса-вызова
        }
        xhr.send(JSON.stringify(body))//в случае ызова просто "бади" мы получим из данных "обьект-обьект" вместо сточки для вызова строчки нужно обернуть body в JSON.stringify(body)
    })
 
}
const body = {
    name: 'Yirii',
    age: 62
}

// после чего можем оперировать методами вызова вызывая универсальную функцию:
sendRequest('POST', requestURL, body)// для чего в универсальной функции в метод open вводим динамиические параметры вместо GET - metod , вместо requestURL - URL, при этом в случае метода пост добавляется третий параметр "боди"
    .then(data => console.log(data))// после чего зачейним вызвав дату через консоль-лог
    .catch(err => console.log(err))//а через кетч вызовим ошибку

