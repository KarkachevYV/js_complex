Element.prototype.appendAfter = function(element) {//прототип через указанный метод позволяет создать элемент footer в  дом-дереве
    element.parentNode.insertBefore(this, element.nextSibling)//реализация из стек оверфлоу с необходимой корректировкой
}

function noop() {}//некая пустая функция

function _createModalFooter(buttons = []) {//создаём некую приватную функцию для кнопок модального окна
    if (buttons.length === 0) {
        return document.createElement('div')//условие для создания пустого дива
    }
    const wrap = document.createElement('div')//иначе создаётся  корневой элемент нода
    wrap.classList.add('modal-footer')//и класс у ноды
//а для создания необходимых кнопок мы используем forEach пробегаясь по которой создаётся необходимое кол-во кнопок
    buttons.forEach(btn => {//где buttons один из объектов, для которого создаётся нода, со следующими свойствами, они должны быть такие же как в footerButtons
        const $btn = document.createElement('button')
        $btn.textContent = btn.text
        $btn.classList.add('btn')
        $btn.classList.add(`btn-${btn.type || 'secondary'}`)
        $btn.onclick = btn.handler || noop//пробежавшись по свойствам и создав их

        wrap.appendChild($btn)//создаём кнопки в нужном месте в модальном 
    })
    return wrap//выводим виртуальные кнопки в дом дерево
}



function _createModal(options) {//создаём некую приватную функцию , о чём говорит нижнее подчёркивание, через замыкания open & close и передадим в него пары из объекта созданного в плагине, при этом для универсальности будем испоьзовать ${}, в который будем передавать соответствующие пары, при этом для исключения не праваильного поведения сразу же будем устанавливать для пар дефолтные значения, чтобы не появлялись баги.
    const DEFAULT_WIDTH = '600px'//для ширины модального окна таким дефолтным значениме будет данная переменная, соответственно для всех пар дефолтные значения будут указываться через || в динамическом объекте ${}, кроме булевого значения, для которого будет указан тернарный оператор в случае истины и лжи, при этом, чтобы элемент крестик стал рабочим мы применим к нему дата атрибут, соответственно такой же аргумент мы применим и для поля modal-overlay модального окна со значением true.,
    // при этом должен быть создан  клик по которому будет обеспечена прослушивание событий, который создаём при помощи addEventListener('click',  listener) 
    const modal = document.createElement('div')// создаём переменную для взаимодействия из модального окна
    modal.classList.add('ymodal')//при этом обраившись к методу создания классов мы создадим виртуально класс ymodal
    modal.insertAdjacentHTML('afterbegin', `        
        <div class="modal-overlay" data-close="true">
            <div class="modal-window" style="width: ${options.width || DEFAULT_WIDTH}">
                <div class="modal-header">
                    <span class="modal-title">${options.title || 'Окно'}</span>
                    ${options.closable ? `<span class="modal-close" data-close="true">&times;</span>` : ''}
                </div>
                <div class="modal-body" data-content>
                    ${options.content || ''}                   
                </div> 
            </div> 
        </div>        
    `)//а обратившиь к методу создания структур html  мы вставим вторым параметром вырезанный рабочий кусок из кода body , тем самым виртуально создалим модальное окно, будучи уже созданное в коде html, при этом первый div  с классом ymodal не включаем, ибо он виртуально создан выше по коду, вставляем в некую позицию :'afterbegin', которая указывается первым параметром, в данном методе.
    const footer = _createModalFooter(options.footerButtons)//создаём ноду футтера
    footer.appendAfter(modal.querySelector('[data-content]'))//вставляем ноду футтера в нужное место ноды модального окна
    document.body.appendChild(modal)// вставляем modal в дом-дерево, с помощью метода appendChild
    return modal//и возвращаем виртуальную переменную
}


$.modal = function(options) {//создаём свой плагин(node)
    // после создания приватной функции  и виртуального модального окна в виде modal, мы её вызываем в своём плагине, для чего создаём приватную переменную через $.
    const  ANIMATION_SPEED = 200    //данная переменная создаётсядля анимации модального окна
    const $modal = _createModal(options)// $ - говорит о том, что виртуальная переменная(элемент)создана(н) при помощи метода создания тегов
    let closing = false//вводятся 1 изменяемая переменная(флаг) указывающая на факт закрытия модального окна
    let destroyed = false//вводится 2 изменяемая переменная(флаг) указывающая на факт ликвидации модального окна и его слушателя, которая является элементом защиты кода, которые обеспечивают условия работы всех методов модального окна
    
    const modal = {
        open() {
            if (destroyed) {//создав данную проверку 
                return console.log('Modal is destroyed')
            }
            !closing && $modal.classList.add('open')
        },
        close() {
            closing = true
            $modal.classList.remove('open')
            $modal.classList.add('hide')
            setTimeout(() => {
                $modal.classList.remove('hide')
                closing = false  
                if (typeof options.onclose === 'function') {//если метод в наличие и он функция 
                    options.onclose()//то метод вызывается и он соответственно попадает в прототипы, что позволяет к нему обратиться в новом плагине
                }             
            }, ANIMATION_SPEED)
        }
    }

    const listener = event => {//функция создана для легкого удаления слушателя 
        if (event.target.dataset.close) {
            modal.close()//вызов метода закрывает модальное окно
        }
    }

    $modal.addEventListener('click',  listener)//после создания клика,  клик(слушатель) должен быть удален, и для этого используется метод destroy(разрушитель)
    
    return Object.assign(modal, {//который мы создаём в публичном объекте через вызов метода assign из глобального объекта Object, для которого первым парметром является переменная объект включающая все описанные методы модального окна, а вторым метод  destroy который добавляется(объявляется) в переменную modal
        destroy() {//который имеет необходимый функционал:
            $modal.parentNode.removeChild($modal)//обычный способ удаления модального окна (node) из дом дерева
            $modal.removeEventListener('click', listener)//обычный способ удаления слушателя(клика)
            destroyed = true//при этом переменная проверки фиксирует данные удаления,  значением истины
        },
        setContent(html) {// и второй дополнительный метод, позволяющий динамически менять любое содержимое модального окна
            $modal.querySelector('[data-content]').innerHTML =html
        }// метод создающий контекст модального окна через setContent
    })
}