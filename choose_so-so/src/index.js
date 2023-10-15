import {Select} from './select/select.js'
import './select/styles.scss' 

const select = new Select('#select',{
    placeholder: 'Выбери необходимое',
    // selectedId: '3',
    data: [
        {id: '1', value: 'Пчело-семья'},
        {id: '2', value: 'Пчело-пакет'},
        {id: '3', value: 'Матка'},
        {id: '4', value: 'Улий'},
        {id: '5', value: 'Пыльцеуловитель'},
        {id: '6', value: 'Дымарь'},
        {id: '7', value: 'Стамеска'},
        {id: '8', value: 'Мёдогонка'}
    ],
    onSelect(item) {
        console.log('Selected item', item)
    }
})

//для управления плагином в консоли, вводим window.s = select
window.s = select
