import React from "react"


class AddUser extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      firstname: "",
      lastname: "",
      biograph: "",
      age: 1,
      isHappy: false
    }      
  }
  //сделали конструктор с состоянием для полей пользака

  render() {
    
    return (
        <form ref={(el) => this.myForm = el}>
          <input placeholder="Имя" onChange={(e) => this.setState({ firstname: e.target.value }) } />
          <input placeholder="Фамилия" onChange={(e) => this.setState({ lastname: e.target.value }) } />
          <textarea placeholder="Биография" onChange={(e) => this.setState({ biograph: e.target.value }) } ></textarea>
          <input placeholder="Возраст" onChange={(e) => this.setState({ age: e.target.value }) } />

          <label htmlFor="isHappy">Счастлив?</label>
          <input type="checkbox" id="isHappy" onChange={(e) => this.setState({ isHappy: e.target.checked }) } />
          <button type="button" onClick={() => {
            this.myForm.reset()
            this.props.onAdd({
              firstname: this.state.firstname,
              lastname: this.state.lastname,
              biograph: this.state.biograph,
              age: this.state.age,
              isHappy: this.state.isHappy,
          })
         }
         }>Добавить</button>
        </form>

      
      )

    }
}

//делаем форму для получения данных
//id не запрашиваем, так как формируется автоматом. Будет просто его прибавлять
// <label htmlFor="isHappy"></label>
// это надпись к чекбоксу. htmlFor пишем, чтобы было видно к чему относится надпись. И пишем не просто for, а именно htmlFor, так как в jsx обычный for означает цикл. Внутри тега просто текст вопроса
// также создали тег для кнопки
// <button type="button">Добавить</button>
// и указали тип type="button", этот тип означает что страница не будет перезагружаться, так как мы реакт приложение делаем

// добавим этот компонент в App.js в тег aside
// и добавим стили к форме
// теперь сделаем конструктор с состоянием для ввода полей пользака
//далее сделаем обработчики событий onChange в полях формы
// теперь нужно сделать так, чтобы элемент добавился в состояние списка пользаков
// можно обратиться из AddUser к Users, но это не очень, это сложно
// лучше оба компонента передать в файл App.js, и там перезаписывать значения в состояниях. И начальные состояния тоже туда закинуть

// добавили обработчик событий в кнопку, при клике, будет срабатывать функция вывода в консоль пользака
// обработчик событий вот он onClick={() => this.props.onAdd()}
// теперь укажаем тег ref={(el) => this.myForm = el} вформе для очистки формы после добавления данных из нее
// теперь через myForm можно обращаться к нашей форме


export default AddUser



