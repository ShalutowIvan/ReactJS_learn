// курс дударя
// https://www.youtube.com/watch?v=h8psMIltC1Q&list=PLDyJYA6aTY1lpbNh66kFpF62QpJyzliT2&index=3
// или курс другой:
// https://www.youtube.com/watch?v=kz23xxukY5s&t=261s
// еще есть UbiTV:
// https://www.youtube.com/watch?v=GNrdg3PzpJQ&t=672s
// вроде тоже норм. Там он показывает приложение реакта. Как оно работает не понятно.
// еще один курс:
// https://www.youtube.com/watch?v=UvssjybWRvA&list=PLMlifxDLpB1CAtLxKmIE5FfGZkNx5K5XX&index=2
// надо смотреть, вроде норм



// чтобы подключить react нужно в теге head скопировать эти 2 ссылки:
{/* <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script> */}
// их взяли со страницы документации:
// https://ru.legacy.reactjs.org/docs/cdn-links.html
// вставлять их нужно именно в теге head чтобы скрипты работали в теле body страницы
// также нужно скопировать скри babel со страницы
// https://babeljs.io/docs/babel-standalone
// нужно преобразовывать react js код в стандартный JSON, чтобы все обрабатывалось в браузере. Для этого нужна библиотека babel
// babel требует чтобы все файлы скриптов шли с типом babel
// <script type="text/babel">
// поэтому нужно прописать это в подключение библиотеки реакт в head
// теперь реакт подключен
// сделаем тег div для начала в html
// теперь начнем писать код JS
// ReactDOM.render()//обратились к объекту ReactDOM и вызвали через него метод render. За счет ReactDOM мы можем обращаться к нашей странице и выбирать из нее какие либо объекты. А за счет метода render мы будем говорить что именно будем помещать в определенный html тег
// ReactDOM.render()
// ReactDOM.render(<h1>Привет</h1>, document.getElementById("app"));//тут мы обратились к элементу по id app и туда запишем тег h1 с текстом
//чтобы увидеть что скрипт работает, нужно запустить наш файл с помощью live server. В VS code можно установить расширение, которое имитирует сервер. И можно запускать html с помощью сервера
// в функцию render можно передавать только 1 тег, то есть несколько тегов h1 нельзя передавать. Но передать тег div, и в него передать несколько тегов которые нам нужны. Так будет работать. 
ReactDOM.render(<div>
<h1>Привет</h1>
<h2>Мир</h2>
</div>
, document.getElementById("app"));
//мы написали html структуру, потому используем JSX. Это такой функционал для написания html кода в render
// ост 3 урок





















