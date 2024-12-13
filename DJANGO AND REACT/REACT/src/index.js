import React from "react"
import ReactDOM from 'react-dom/client'
import './index.css'
import App from "./App"



// import ReactDOM from "react-dom"
// вместо ReactDOM импортируем ReactDOMClient, будем его юзать
// import * as ReactDOMClient from 'react-dom/client'



// const root = ReactDOMClient.createRoot(document.getElementById("root"))
const root = ReactDOM.createRoot(document.getElementById("root"))


root.render(<App />)











