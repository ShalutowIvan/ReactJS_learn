import React from "react"
// import ReactDOM from "react-dom"
//вместо ReactDOM импортируем ReactDOMClient, будем его юзать
import * as ReactDOMClient from 'react-dom/client'
import './css/main.css'

//скопировали наш код из файла шпоры
// const inputClick = () => console.log("Clicked")
// const mouseOver = () => console.log("Mouse Over")
// const helpText = "Help text"
//const element = <input placeholder={helpText} onClick={inputClick} onMouseEnter={mouseOver} /> //можно прописывать анонимные функции. Но пропишем обычную. функции js в html коде пишем в фигурных скобках. Точнее стрелочные функции прописали. Выше указали функции, а теперь их записали в итоговый html код. И его передадим в рендер ниже
//также можно и обычный текст вставлять через переменную. То есть можно выводить переменную в любом месте кода html. Также можно прописать код в круглых скобках, тогда можно писать несколько тегов html, но их нужно оборачивать в тег div
// const element = (<div>
// <h1>{helpText}</h1>
// <input placeholder={helpText} onClick={inputClick} onMouseEnter={mouseOver} />
// <p>{ helpText === "Help text" ? "Yes": "No" }</p>
// </div>)
// const app = document.getElementById("app")
// ReactDOM.render(element, app)//можно так рендерить, а можно и по другому
// ReactDOMClient - это другой объект для создания клиента. Обращаемся к объекту и к методу createRoot, в методе указываем в какой объект html будем все помещать. В нашем случае в тег div у которого id равен app. И запишем результат этого метода в константу
// const app = ReactDOMClient.createRoot(document.getElementById("app"))//то есть как бы сделали переменную, которая соответствует элементу html 
// теперь у константы есть метод render, и в нее можно помещать другую инфу
// app.render(element)

// функции!!!!!!!!!!!!!!!

// const helpText = "Help text"
// const inputClick = () => console.log("Clicked")
// const mouseOver = () => console.log("Mouse Over")
//сделаем функцию которая возвращает html код, который был до этого

// function Header(){
//   return (<header>Шапка сайта</header> )
// }
// const Header = () => {
//   return (<header>Шапка сайта</header> )
// }

//добавили компонент шапку в наш app
// function App(){
//   return (<div>
// <Header />

// <h1>{helpText}</h1>
// <input placeholder={helpText} onClick={inputClick} onMouseEnter={mouseOver} />
// <p>{ helpText === "Help text" ? "Yes1": "No" }</p>
// </div>)
// //возвращаем просто в скобках
// }
// const App = () => {
//   return (<div>
// <Header />

// <h1>{helpText}</h1>
// <input placeholder={helpText} onClick={inputClick} onMouseEnter={mouseOver} />
// <p>{ helpText === "Help text" ? "Yes1": "No" }</p>
// </div>)
// //возвращаем просто в скобках
// }

// const app = ReactDOMClient.createRoot(document.getElementById("app"))

// app.render(<App />)

// сделаем еще один компонент
// теперь создадим класс
// классы!!!!!!!!!!!!!!!!!!!!!!!!!




//создали класс, и унаследовали его от React.Component
// class Header extends React.Component {
//   render() {
//     return (
//       <header>{this.props.nazvanie}{this.props.asd}</header>
//       )  }
// }

// //слово function писать не нужно так как мы наследуем компонент, и изх него берем функцию. И вызываем ее
// //{this.props.nazvanie} это свойство функции компонента, как аргумент функции. Когда его будем вызывать в другом классе, то можно передавать параметр с нужным значением. Можно указывать несколько свойств, также в фигурных скобках

// class App extends React.Component {
//   helpText = "Help text"

//   render() {
//     return ( <div className="name">
//     <Header nazvanie="Шапка сайта" asd="1"/>
//     <Header nazvanie="Шарфик сайта" asd="2"/>
//     <Header nazvanie="Варежки сайта" asd="3"/>

//     <h1>{this.helpText}</h1>
//     <input placeholder={this.helpText} onClick={this.inputClick} onMouseEnter={this.mouseOver} />
//     <p>{ this.helpText === "Help text" ? "Yes1": "No" }</p>
//     </div>
//       )  }

//     inputClick = () => console.log("Clicked")
//     mouseOver = () => console.log("Mouse Over")
// }
//если в класс писать функции или переменные, то не нужно писать перед ними слово const. При обращении к переменным нужно писать слво this. Это как бы обращение к переменной класса
// также при вызове компонентов можно писать свойства, названия свойства могут быть любые. 

import App from "./App"//это иморт из файла. Также для импорта из файла, в файле из которого делается импорт, нужно сделать экспорт.


const app = ReactDOMClient.createRoot(document.getElementById("app"))

app.render(<App />)

//работает все точно также с классами
// разобьем код по файлам...












