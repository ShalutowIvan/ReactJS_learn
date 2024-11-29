import React from "react"
// import ReactDOM from "react-dom"
import Header from "./components/Header"//импортировали Header
import Image from "./components/Image"
import foto from "./img/foto.png"

//создали класс, и унаследовали его от React.Component
// class Header extends React.Component {
//   render() {
//     return (
//       <header>{this.props.nazvanie}{this.props.asd}</header>
//       )  }
// }

//слово function писать не нужно так как мы наследуем компонент, и изх него берем функцию. И вызываем ее
//{this.props.nazvanie} это свойство функции компонента, как аргумент функции. Когда его будем вызывать в другом классе, то можно передавать параметр с нужным значением. Можно указывать несколько свойств, также в фигурных скобках

class App extends React.Component {

  constructor(props) {
  super(props)
    this.state = {
      helpText: "Help text", 
      userData: ""
    }
    this.inputClick = this.inputClick.bind(this)
  }


  // helpText = "Help text"

  render() {
    return ( <div className="name">
    <Header nazvanie="Шапка сайта" asd="1"/>
    <Header nazvanie="Шарфик сайта" asd="2"/>
    <Header nazvanie="Варежки сайта" asd="3"/>

    <h1>{this.state.helpText}</h1>
    <h2>{this.state.userData}</h2>
    
    <input placeholder={this.state.helpText}
    onChange={event => this.setState({userData: event.target.value})}
    onClick={this.inputClick} 
    onMouseEnter={this.mouseOver} />

    <p>{ this.state.helpText === "Help text" ? "Yes1": "No" }</p>

    <Image image={foto} />
    <img src={foto} />
    </div>
    

      )  }

    inputClick(){
      this.setState({helpText: "Изменено" })
      
      console.log("Clicked")
    } 
    

    mouseOver = () => console.log("Mouse Over")
}

//<Header nazvanie="Шапка сайта" asd="1"/> это вызов компонента



export default App


// <Image image="./img/foto.png"/>






