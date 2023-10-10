$.confirm = function(options) {//создаём новый промис для удаления карточек
    return new Promise((resolve, reject) => {//из-за асинхронности окон используем промисы
        const modal = $.modal({
            title: options.title,
            width: '400px',
            closable: false,
            content: options.content,
            onclose() {
                modal.destroy()//соответственно имея этот метод в наличие его можно и переопределить для удаления модального окна, о чём свидетельствует дом дерево..
            },
            footerButtons: [
                {text: 'Отменить', type: 'secondary', handler() {
                    modal.close()
                    reject()
                }},
                {text: 'Удалить', type: 'danger', handler() {
                    modal.close()
                    resolve()
                }}
            ]
        })
        setTimeout(  () =>modal.open(), 100)//устанавливаем анимацию окна
        // modal.open()
    })
}