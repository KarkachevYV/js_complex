const queen_bees = [
    {id: 1, title: 'Средне-Русская', price: 1500, img: 'https://th.bing.com/th/id/R.98a747ac8207681d5a3887fe86e86a8a?rik=fuP7%2bwdJHfslyA&riu=http%3a%2f%2fwww.pchelu.com.ua%2fsites%2fdefault%2ffiles%2fpictures%2farticles%2fsrednerusskaya-poroda-pchel.jpg&ehk=V84u6zJls%2fet%2b9wWJouytAvsrfnKYihiMhmMSD1haMg%3d&risl=&pid=ImgRaw&r=0'},
    {id: 2, title: 'Карпатка', price: 1000, img: 'https://th.bing.com/th/id/R.552fef6dbe8de61a4d7595698e3392de?rik=NTFiiKlkOXAimQ&riu=http%3a%2f%2fwww.pchelu.com.ua%2fsites%2fdefault%2ffiles%2fpictures%2farticles%2fkarpatskaya-poroda-pchel.jpg&ehk=yobkRE7Cb53gQfEjfmsv2O1XGv1pAl1JPGbNOhtdkRA%3d&risl=&pid=ImgRaw&r=0'},
    {id: 3, title: 'Итальянка', price: 1100, img: 'https://th.bing.com/th/id/R.c17f70f3a29bb7a54a16f13d9bcc17e9?rik=eTnSUQa%2bQttgnw&riu=http%3a%2f%2fwww.pchelu.com.ua%2fsites%2fdefault%2ffiles%2fpictures%2farticles%2fitalyanskaja-poroda-pchel.jpg&ehk=uYJEXya3Opa9AZ%2fYaUpmDd2c8bMUpP0BX%2fY0ZjOxhvQ%3d&risl=&pid=ImgRaw&r=0'}
]//создадим некий массив для отработки и приминения модального окна на практике... 



const modal = $.modal({//для дальнейшей реализации модального окна и для реализации плагина, в его options необходимо передать объект
    title: 'Пасека Каркача', //с неким заголовком у модального окна
    closable: true, //с некой ключом указывающим на то, что модальное окно закрывается
    content: `        
        <p>Lorem ipsum dolor sit.</p>
    `, //с неким контекстом(содержанием контекста)
    width: '400px',//с некоторым установленным размером по ширине
    footerButtons: [
        {text: 'Ok', type: 'primary', handler() {
            console.log('Primery btn clicked')
            modal.close()
        }},
        {text: 'Cancel', type: 'danger', handler() {
            console.log('Denger btn clicked')
            modal.close()
        }}
    ]//и с неким массивом имеющим опреленные свойства, для существующих кнопок у модального окна
})//эти пары в объекте options автоматически передаются в созданную приватную функцию 
