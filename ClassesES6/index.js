const animal0 = {
    name: 'Animal0',
    age: 5,
    hasTeil: true
}
console.log(animal0) // в js мы можем создавать объекты просто как переменные, 
//при этом в js существует и специальный синтаксис class с помощью которого объекты создавать удобнее
class Animal {// классы записываются только с большой буквы

    static type = 'ANIMAL'//статические переменные родителя не наследуются при создании дочерних объектов

    constructor(options) { //для инициализации начальных полей объекта данного класса реализуется специаотный метод constructor параметром которого будет некий оюъект options
        this.name = options.name
        this.age = options.age
        this.hasTeil = options.hasTeil //инициализация осуществляется через ключевое слово this, т.е. через контекст, который будет указывать на текущий объет
    }
    voice() {
        console.log('I am Animal')
    }
}
// const animal = new Animal({ //тогда, подобное создание нового объекта автоматически становиться дочерним и принимает как все свойства, так и все методы не только глобального, но и его непосредственного родителя Animal
//     name: 'Animal',
//     age: 5,
//     hasTeil: true
// })
//при этом мы также можем создавать дочерние классы, через ключевое слово extends
class Cat extends Animal {
    static type = 'Cat'
    constructor(options) {//и даже добавлять свои поля через конструктор, но делается это с обязательным вызовом конструктора родителя используя ключевое слово super с параметром options
        super(options)
        this.color = options.color
    }
    voice() {//и даже перетирать родительский метод для своих дочерних объектов
        super.voice()//однако указав вызов родительского метода, сначала вызовется он и уже потом лишь переопределённый метод, и это бывает полезно
        console.log('I am Cat')
    }
    get ageInfo() {//геттеры и сеттеры также широко используются в классах
        return this.age * 7
    } 
    set ageInfo(newAge) {
        this.age = newAge//newAge = cat.ageInfo -новый возраст для дочерних объектов Cat
    }
}

const cat = new Cat({//при этом создавая новую переменную от дочернего класса, все переменные и методы родительского класса будут также доступны и мы лишь переназначаем им свои значения 
    name: 'Cat',
    age: 10,
    hasTeil: true,
    color: 'black'
})

///Практическое применение классов в js

class Component {// создадим некий класс Компонент
    constructor(selector) {// в конструктор которого введём некий параметр селектор
        this.$el = document.querySelector(selector)//у которого $el - некая приватная переменная содержащая некую дом ноду
    }
    hide() {//объявим некую функцию скрывающую элементы
        this.$el.style.display = 'none'
    }
    show() {//а также некую функцию показывающую элементы
        this.$el.style.display = 'block'
    }
}

class Box extends Component {// создадим дочерний класс
    constructor(options) {//у конструктора которого будет передаватся объект опций
        super(options.selector)//для его функционирования требуется вызвать конструктор родительского класса через ключевое слово супер с параметром opotions.selector
        this.$el.style.width = this.$el.style.height = options.size + 'px'// инициализируем поля селектора size, ими являются поля ширины и высоты , которые равны опции соответствующего селектора плюс строке пиксель
        this.$el.style.background = options.color//аналогично получаем поле селектора color, которым является background 
    }
}

const box1 = new Box({//теперь создадим пару переменных от дочернего класса с id = 'box1' , id = 'box2', с соответствующими парами ключ-значение, которые уже инициализированы в родительском классе
    selector: '#box1',
    size: 100,
    color: 'red'
})//для этого после указания требуемых полей новых переменных , в коде html создадим соответствующие теги с соответствующими id, после чего получим в приложении соответствующие боксы с соответсвующими квадратами

const box2 = new Box({
    selector: '#box2',
    size: 120,
    color: 'blue'
})

class Circle extends Box {//соответственно, мы также можем создать и новый дочерний класс уже от класса второго уровня, который будет уже кругом
    constructor(options) {
        super(options)

        this.$el.style.borderRadius = '50%'//для этого лишь инициализируем соответствующий элемент borderRadius для квадрата со значением 50% 
    }
}

const c = new Circle({//а объявив некую переменную как новый объект круг, с соответствующими наследственными полями соответствующими кругу, и их значениями, и добавив соотвествующий тег с соответствующим id 
    selector: '#circle',
    size: 90,
    color: 'green'
}) // получим созданный виртуально с использованием языка js - круг
//используя таким образом классы мы можем выносить определённую логику в отдельные базовые классы и потом этим свободно пользоваться, при этом расширяя эту логику, по своему усмотрению, когда это необходимо, и при помощи создания дочерних классов.