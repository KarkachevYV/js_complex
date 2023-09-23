console.log('Start')
console.log('Start 2')

function timeout2sec() {
    console.log('timeout2sec')
}

window.setTimeout(function() {
    console.log('Inside timout, after 5000 secongs')
}, 5000)//данный вызов построен на концепте event loop

setTimeout(timeout2sec, 2000)//вызываем не функцию tumeout2sec, иначе она српзу вызовется, а её ссылку, и тогда она вызывется через установленное время.

function timeout0sec() {
    console.log('timeout0sec')
}

setTimeout(timeout0sec, 0)

console.log('End')