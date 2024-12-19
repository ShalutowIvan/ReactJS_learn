import "./Button.css"

// export default function Button({ children }) {
//     function handleClick() {
//         console.log("раз кнопка нажата ")
//     }

//     const handleMouseEnter = () => {console.log('раз навели мышкой')}
//     return (
//         <button className="button" onClick={handleClick} onMouseEnter={handleMouseEnter}>{children}</button>
//     )
// }

export default function Button({ children, klicker, isActive}) {
    // console.log("отобразили кнопку")
    let classes = 'button'
    if (isActive) classes += ' active'



    // return (
    //     <button className={isActive ? 'button active': 'button'} onClick={klicker} >{children}</button>
    // )
    return (
        <button className={classes} onClick={klicker} >{children}</button>

    )

}





