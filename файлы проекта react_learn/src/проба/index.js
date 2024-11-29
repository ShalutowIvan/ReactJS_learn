import React from "react"
// import ReactDOM from "react-dom"
//вместо ReactDOM импортируем ReactDOMClient, будем его юзать
import * as ReactDOMClient from 'react-dom/client'

//скопировали наш код из файла шпоры
const inputClick = () => console.log("Clicked")
const mouseOver = () => console.log("Mouse Over")
const helpText = "Help text"
//const element = <input placeholder={helpText} onClick={inputClick} onMouseEnter={mouseOver} /> //можно прописывать анонимные функции. Но пропишем обычную. функции js в html коде пишем в фигурных скобках. Точнее стрелочные функции прописали. Выше указали функции, а теперь их записали в итоговый html код. И его передадим в рендер ниже
//также можно и обычный текст вставлять через переменную. То есть можно выводить переменную в любом месте кода html. Также можно прописать код в круглых скобках, тогда можно писать несколько тегов html, но их нужно оборачивать в тег div
const element = (<div>
<h1>{helpText}</h1>
<input placeholder={helpText} onClick={inputClick} onMouseEnter={mouseOver} />
<p>{ helpText === "Help text" ? "Yes": "No" }</p>
</div>)
// const app = document.getElementById("app")
// ReactDOM.render(element, app)//можно так рендерить, а можно и по другому
// ReactDOMClient - это другой объект для создания клиента. Обращаемся к объекту и к методу createRoot, в методе указываем в какой объект html будем все помещать. В нашем случае в тег div у которого id равен app. И запишем результат этого метода в константу
const app = ReactDOMClient.createRoot(document.getElementById("app"))//то есть как бы сделали переменную, которая соответствует элементу html 
// теперь у константы есть метод render, и в нее можно помещать другую инфу
app.render(element)





