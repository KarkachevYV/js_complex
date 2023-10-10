const queen_bees = [
    {id: 1, title: 'Средне-Русская', price: 1500, img: 'https://th.bing.com/th/id/R.98a747ac8207681d5a3887fe86e86a8a?rik=fuP7%2bwdJHfslyA&riu=http%3a%2f%2fwww.pchelu.com.ua%2fsites%2fdefault%2ffiles%2fpictures%2farticles%2fsrednerusskaya-poroda-pchel.jpg&ehk=V84u6zJls%2fet%2b9wWJouytAvsrfnKYihiMhmMSD1haMg%3d&risl=&pid=ImgRaw&r=0'},
    {id: 2, title: 'Карпатка', price: 1000, img: 'https://th.bing.com/th/id/R.552fef6dbe8de61a4d7595698e3392de?rik=NTFiiKlkOXAimQ&riu=http%3a%2f%2fwww.pchelu.com.ua%2fsites%2fdefault%2ffiles%2fpictures%2farticles%2fkarpatskaya-poroda-pchel.jpg&ehk=yobkRE7Cb53gQfEjfmsv2O1XGv1pAl1JPGbNOhtdkRA%3d&risl=&pid=ImgRaw&r=0'},
    {id: 3, title: 'Итальянка', price: 1100, img: 'https://th.bing.com/th/id/R.c17f70f3a29bb7a54a16f13d9bcc17e9?rik=eTnSUQa%2bQttgnw&riu=http%3a%2f%2fwww.pchelu.com.ua%2fsites%2fdefault%2ffiles%2fpictures%2farticles%2fitalyanskaja-poroda-pchel.jpg&ehk=uYJEXya3Opa9AZ%2fYaUpmDd2c8bMUpP0BX%2fY0ZjOxhvQ%3d&risl=&pid=ImgRaw&r=0'}
]//создадим некий массив для отработки и приминения модального окна на практике... 

const toHTML = queen_bee => `
    <div class="col">
        <div class="card">
            <img style="height: 300px;" src="${queen_bee.img}" alt="${queen_bee.title}">
            <div class="card-body">
                <h5 class="card-title">${queen_bee.title}</h5>
                <a href="#" class="btn btn-primary" data-btn="price" data-id="${queen_bee.id}">Посмотреть цену</a>
                <a href="#" class="btn btn-danger" data-btn="remove" data-id="${queen_bee.id}">Удалить</a>
            </div>
        </div>
    </div>
`//удалив из кода бади карточки создадим функцию, которая правильно обработает шаблон, в которую вставим шаблон кода в виде строки для рендера с динамическими значениями options, для повторяющейся виртуальной карточки

function render() {//создадим функцию для рендера  по виртуальному id
    const html = queen_bees.map(toHTML).join('')//toHTML = (queen_bee => toHTML(queen_bee)) создав некую переменную, которая будет выводить строку из шаблона, или массив соединённый по пустой строке
    document.querySelector('#queen_bees').innerHTML = html //получим его в ноду дом дерева на основе массива

}


render()//вызовем рендер для динамического вывода карточек через шаблон, работая с имеющимся массивом

const priceModal = $.modal({//создадим модальное окно для цены
    title: 'Цена на товар', //с неким заголовком у модального окна
    closable: true, //с некой ключом указывающим на то, что модальное окно закрывается
    width: '400px',//с некоторым установленным размером по ширине
    footerButtons: [
        {text: 'Закрыть', type: 'primary', handler() {
            priceModal.close()
        }}
    ]//и с неким массивом имеющим опреленные свойства, для существующих кнопок у модального окна
})//эти пары в объекте options автоматически передаются в созданную приватную функцию 

const confirmModal = $.modal({//создадим модальное окно для удаления карточек
    title: 'Вы уверены?', //с неким заголовком у модального окна
    closable: true, //с некой ключом указывающим на то, что модальное окно закрывается
    width: '400px',//с некоторым установленным размером по ширине
    footerButtons: [
        {text: 'Отменить', type: 'secondary', handler() {
            confirmModal.close()
        }},
        {text: 'Удалить', type: 'danger', handler() {
            confirmModal.close()
        }}
    ]//и с неким массивом имеющим опреленные свойства, для существующих кнопок у модального окна
})//эти пары в объекте options автоматически передаются в созданную приватную функцию 

document.addEventListener('click', event => {//рендер вызывает виртуальные карточки, для работы же с модальным окном , а у нас есть кнопки, нам нужно вызвать слушателя, который при наличие в виртуальном шаблоне дата аргументов , установленных для соответствующих модальных окон, легко определить, указав необходимые для него свойства:
    event.preventDefault()//это свойство отменит дефолтное повидение
    const btnType = event.target.dataset.btn//это позволит понять в каком модальном окне нахолятся кнопки , по которому осуществляется клик, это м.о. с ценой
    const id = +event.target.dataset.id//это позволит понять к какой карточке относится та или иная кнопка(плюс переводит строку в число)
    const queen_bee = queen_bees.find(f => f.id === id)//это  позволит найти нужную карточку по которой будет осуществлён клик

    if (btnType === 'price') {        //при подтверждении окна цены мы через сеттаймаут меняем контекст окна цены
        // console.log('price') //проверяет в каком окне находится слушатель
        priceModal.setContent(` 
            <p>Цена за матку - ${queen_bee.title}: <strong>${queen_bee.price}руб.</strong></p>
        `)
        priceModal.open()//для чего, соответственно вызываем соответствующее окно 
        //console.log(id, queen_bee)
    } else if (btnType === 'remove') {//при подтверждении окна удаления карточки мы через сеттаймаут меняем контекст окна удалениякарточки
        confirmModal.setContent(`
        <p>Вы удаляете матку: <strong>${queen_bee.title}</strong></p>
        `)
        confirmModal.open()//для чего , соответственно вызываем требуемое окно.
    }    
})
