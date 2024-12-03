import React from "react"
import Button from "./Button"


//создали класс, и унаследовали его от React.Component
class Header extends React.Component {
  render() {
    return (
      <header className="header">
          {this.props.nazvanie}
          {this.props.asd}
          <Button />
          <Button text="Button" />
      </header>
      )  }
}


export default Header
//по умолчанию экспортируем компонент Header









