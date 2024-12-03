import React from "react"

class Image extends React.Component {
  render() {
    return (
      <img src={this.props.image}/>
      )  
	}
}


export default Image

//при вызове текущего компонента мы можем передать путь к файлу, который хотим отобразить


