import "../Button/Button.css"

const Button = (props) => {
    return <button className="BtnItem" onClick={props.onClick}> {props.label} </button>
}

export default Button