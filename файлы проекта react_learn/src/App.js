import React from "react"
import Header from "./components/Header"//импортировали Header
import Users from "./components/Users"//расширение файла не нужно только имя файла Users
import AddUser from "./components/AddUser"
import axios from "axios"

//урл для отправки api запросов: https://reqres.in/
const baseUrl = "https://reqres.in/api/users?page=1"



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




// class App extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       users: [
//     {
//       id: 1,
//       firstname: 'Bob',
//       lastname: 'Marley',
//       biograph: 'bla bla bla',
//       age: 40,
//       isHappy: false
//     },
//     {
//       id: 2,
//       firstname: 'Brad',
//       lastname: 'Pitt',
//       biograph: 'Крутой Актер из бойцовского клуба',
//       age: 44,
//       isHappy: true
//     }
//   ]
//     }
//     this.addUser = this.addUser.bind(this)
//     this.deleteUser = this.deleteUser.bind(this)
//     this.editUser = this.editUser.bind(this)
//   }
//   //this.addUser = this.addUser.bind(this) это означает что можно юзать состояния из компонента AddUser.js в текущем компоненте
//   // this.deleteUser = this.deleteUser.bind(this) тоже самое сделали для deleteUser, чтобы можно было юзать состояния в методе deleteUser
//   // и добавим в вызове компонента Users еще одну функцию как параметр, функция deleteUser, параметр в Users onDelete={this.deleteUser} 
//   //забиндили метод editUser это редактирование пользака. передадим его также в компонент User 


//   render() {
//     return ( <div>      
//       <Header nazvanie="Список пользователей" />
//       <main>
//         <Users users={this.state.users} onDelete={this.deleteUser} onEdit={this.editUser}/>
//       </main>
//       <aside>
//         <AddUser onAdd={this.addUser} />
//       </aside>

//     </div>)
// }


// deleteUser(id) {
//   this.setState({
//     users: this.state.users.filter((el) => el.id !==id)//тут прописали функцию с фильтром, в которой будет фильтроваться список всех элементов, кроме того, который передаем в функцию и выдаваиться в состояние 
//   })

// }


// //метод для редактирования. Его также биндим в конструкторе
// editUser(user) {
//   let allUsers = this.state.users
//   allUsers[user.id - 1] = user//тут мы меняем пользователя, на того пользака, которого мы получаем в качестве параметра
//   // сохраним далее состояние
//   this.setState({users: []}, () => {
//     this.setState({ users: [...allUsers] })
//   })
// }
// //в функции выше указали, мы сначала получили всех пользаков, потом изменили одного из них, так как мы его редачили, потом очистили весь список, потом записали новый список пользаков. Странно.......

// addUser(user) {
//   const id = this.state.users.length + 1//при обращении к методу будет прибавляться 1 в длинне массива
//   this.setState({ users: [...this.state.users, {id, ...user}] })
// }//...this.state.users означает что мы обращаемся ко всему списку пользаков, а ...user означает что мы обращаемся ко всем полям переданного нам объекта. передаем id и все поля из формы. id автоматом увеличивается на 1 каждый раз.

// }
// //сделаем тег main, онг типа тега div, но лучше загуглить
// //добавили компонент Users на наш сайт в теге main
// //свойства нужно обяз прописать в компоненте, потом по нему передавать значения
// // указали эту функцию в компоннеты AddUser, и там она присваивает значения. Путаюсь...
// // теперь нужно сделать функционал на кнопки удаления, чтобы вызывался параметр onDelete, а точнее метод который в него передается deleteUser. Перейдем в файл Users.js




// export default App


class App extends React.Component {
  constructor(props) {
    super(props)

    //тут мы получили данные из API
    axios.get(baseUrl).then((res) =>{
      // console.log(res.data.data)//взяли пользаков из api, теперь выведем их на экран. Теперь нужно поменять название ключей, так как в апи другие названия ключей идут, и не совпадают с нашими
      this.setState({ users: res.data.data })
    })

    this.state = {
      users: []
    }
    this.addUser = this.addUser.bind(this)
    this.deleteUser = this.deleteUser.bind(this)
    this.editUser = this.editUser.bind(this)
  }
  //this.addUser = this.addUser.bind(this) это означает что можно юзать состояния из компонента AddUser.js в текущем компоненте
  // this.deleteUser = this.deleteUser.bind(this) тоже самое сделали для deleteUser, чтобы можно было юзать состояния в методе deleteUser
  // и добавим в вызове компонента Users еще одну функцию как параметр, функция deleteUser, параметр в Users onDelete={this.deleteUser} 
  //забиндили метод editUser это редактирование пользака. передадим его также в компонент User 


  render() {
    return ( <div>      
      <Header nazvanie="Список пользователей" />
      <main>
        <Users users={this.state.users} onDelete={this.deleteUser} onEdit={this.editUser}/>
      </main>
      <aside>
        <AddUser onAdd={this.addUser} />
      </aside>

    </div>)
}


deleteUser(id) {
  this.setState({
    users: this.state.users.filter((el) => el.id !==id)//тут прописали функцию с фильтром, в которой будет фильтроваться список всех элементов, кроме того, который передаем в функцию и выдаваиться в состояние 
  })

}


//метод для редактирования. Его также биндим в конструкторе
editUser(user) {
  let allUsers = this.state.users
  allUsers[user.id - 1] = user//тут мы меняем пользователя, на того пользака, которого мы получаем в качестве параметра
  // сохраним далее состояние
  this.setState({users: []}, () => {
    this.setState({ users: [...allUsers] })
  })
}
//в функции выше указали, мы сначала получили всех пользаков, потом изменили одного из них, так как мы его редачили, потом очистили весь список, потом записали новый список пользаков. Странно.......

addUser(user) {
  const id = this.state.users.length + 1//при обращении к методу будет прибавляться 1 в длинне массива
  this.setState({ users: [...this.state.users, {id, ...user}] })
}//...this.state.users означает что мы обращаемся ко всему списку пользаков, а ...user означает что мы обращаемся ко всем полям переданного нам объекта. передаем id и все поля из формы. id автоматом увеличивается на 1 каждый раз.

}
//сделаем тег main, онг типа тега div, но лучше загуглить
//добавили компонент Users на наш сайт в теге main
//свойства нужно обяз прописать в компоненте, потом по нему передавать значения
// указали эту функцию в компоннеты AddUser, и там она присваивает значения. Путаюсь...
// теперь нужно сделать функционал на кнопки удаления, чтобы вызывался параметр onDelete, а точнее метод который в него передается deleteUser. Перейдем в файл Users.js




export default App















