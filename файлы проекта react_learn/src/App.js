import React from "react"
import Header from "./components/Header"//импортировали Header
import Users from "./components/Users"//расширение файла не нужно только имя файла Users
import AddUser from "./components/AddUser"

// import ReactDOM from "react-dom"
// import Image from "./components/Image"
// import foto from "./img/foto.png"

//создали класс, и унаследовали его от React.Component
// class Header extends React.Component {
//   render() {
//     return (
//       <header>{this.props.nazvanie}{this.props.asd}</header>
//       )  }
// }

//слово function писать не нужно так как мы наследуем компонент, и изх него берем функцию. И вызываем ее
//{this.props.nazvanie} это свойство функции компонента, как аргумент функции. Когда его будем вызывать в другом классе, то можно передавать параметр с нужным значением. Можно указывать несколько свойств, также в фигурных скобках

// class App extends React.Component {

//   constructor(props) {
//   super(props)
//     this.state = {
//       helpText: "Help text", 
//       userData: ""
//     }
//     this.inputClick = this.inputClick.bind(this)
//   }


//   // helpText = "Help text"

//   componentDidUpdate(prevProp){
//     if (this.state.helpText !== "Help")
//       console.log("Some")
//   }


//   render() {
//     return ( <div className="name">
//     <Header nazvanie="Шапка сайта" asd="1" />
//     <Header nazvanie="Шарфик сайта" asd="2" />
//     <Header nazvanie="Варежки сайта" asd="3" />

//     <h1>{this.state.helpText}</h1>
//     <h2>{this.state.userData}</h2>
    
//     <input placeholder={this.state.helpText}
//     onChange={event => this.setState({userData: event.target.value})}
//     onClick={this.inputClick} 
//     onMouseEnter={this.mouseOver} />

//     <p>{ this.state.helpText === "Help text" ? "Yes1": "No" }</p>

//     <Image image={foto} />
//     <img src={foto} />
//     </div>
    
//       )  }

//     inputClick(){
//       this.setState({helpText: "Изменено" })
      
//       console.log("Clicked")
//     } 
    
//     mouseOver = () => console.log("Mouse Over")
// }

// //<Header nazvanie="Шапка сайта" asd="1"/> это вызов компонента

// export default App

// <Image image="./img/foto.png"/>




class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [
    {
      id: 1,
      firstname: 'Bob',
      lastname: 'Marley',
      biograph: 'bla bla bla',
      age: 40,
      isHappy: false
    },
    {
      id: 2,
      firstname: 'Brad',
      lastname: 'Pitt',
      biograph: 'Крутой Актер из бойцовского клуба',
      age: 44,
      isHappy: true
    }
  ]
    }
    this.addUser = this.addUser.bind(this)
  }
  //this.addUser = this.addUser.bind(this) это означает что можно юзать состояния из компонента AddUser.js в текущем компоненте

  render() {
    return ( <div>      
      <Header nazvanie="Список пользователей" />
      <main>
        <Users users={this.state.users}/>
      </main>
      <aside>
        <AddUser onAdd={this.addUser} />
      </aside>

    </div>)
}

addUser(user) {
  const id = this.state.users.length + 1//при обращении к методу будет прибавляться 1 в длинне массива
  this.setState({ users: [...this.state.users, {id, ...user}] })
}//...this.state.users означает что мы обращаемся ко всему списку пользаков, а ...user означает что мы обращаемся ко всем полям переданного нам объекта. передаем id и все поля из формы. id автоматом увеличивается на 1 каждый раз.

}
//сделаем тег main, онг типа тега div, но лучше загуглить
//добавили компонент Users на наш сайт в теге main
//свойства нужно обяз прописать в компоненте, потом по нему передавать значения
// указали эту функцию в компоннеты AddUser, и там она присваивает значения. Путаюсь...

export default App


















