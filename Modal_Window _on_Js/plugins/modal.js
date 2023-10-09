function _createModal(options) {//создаём некую приватную функцию , о чём говорит нижнее подчёркивание, через замыкания open & close
    const modal = document.createElement('div')// создаём переменную для взаимодействия из модального окна
    modal.classList.add('ymodal')//при этом обраившись к методу создания классов мы создадим виртуально класс vmodal
    modal.insertAdjacentHTML('afterbegin', `        
        <div class="modal-overlay">
            <div class="modal-window">
                <div class="modal-header">
                    <span class="modal-title">Modal title</span>
                    <span class="modal-close">&times;</span>
                </div>
                <div class="modal-body">
                    <p>Lorem ipsum dolor sit.</p>
                    <p>Lorem ipsum dolor sit.</p>
                </div>
                <div class="modal-footer">
                <button type="button">Ok</button>
                <button type="button">Cancel</button>
                </div> 
            </div> 
        </div>        
    `)//а обратившиь к метоу создания структур html  мы вставим вторым параметром вырезанный рабочий кусок из кода body , тем самым виртуально создалим модальное окно, будучи уже созданное в коде html, при этом первый div  с классом vmodal не включаем, ибо он виртуально создан выше по коду, вставляем в некую позицию :'afterbegin', которая указывается первым параметром, в данном методе.
    document.body.appendChild(modal)//предварительно вставив modal в дом-дерево, с помощью метода appendChild
    return modal//и возвращаем виртуальную переменную
}


$.modal = function(options) {//создаём свой плагин
    // после создания приватной функции  и виртуального модального окна в виде modal, мы её вызываем в своём плагине, для чего создаём приватную переменную через $.
    const  ANIMATION_SPEED = 200    
    const $modal = _createModal(options)// $ - говорит о том, что виртуальная переменная создана при помощи метода создания тегов
    let closing = false
    
    
    
        return {//с использованием замыкания
            
            open() {
                !closing && $modal.classList.add('open')
            },
            close() {
                closing = true
                $modal.classList.remove('open')
                $modal.classList.add('hide')
                setTimeout(() => {
                    $modal.classList.remove('hide')
                    closing = false
                }, ANIMATION_SPEED)
            },
            destroy() {}
        }
    }