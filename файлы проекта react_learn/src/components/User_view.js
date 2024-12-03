import React from "react"
import { IoCloseCircleSharp, IoHammerSharp } from 'react-icons/io5'


class User_view extends React.Component { 
  user = this.props.user//то есть мы тут прописали параметр компонента, который будем указывать при вызове. А ниже уже будет работать с этой переменной с условиями. Название параметра мы тут указали, он называется user. В другой функции по нему также нужно будет обращаться, и в него передавать значения. 

  render() {
    
    return (
      <div className="user">
        <IoCloseCircleSharp className="delete-icon" />
        <IoHammerSharp className="edit-icon" />
        <h3>{this.user.firstname} {this.user.lastname}</h3>
        <p>{this.user.biograph}</p>
        <b>{this.user.isHappy === true ? 'Счастлив :)' : 'Грустно :('}</b>
        </div>
      )

    }
}


export default User_view



