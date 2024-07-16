const Button = ({text, color, onClick, style, type}) => {

    return (
        /* text-primary text-secondary --> */
        <button type={type} className={`text-${color} ${style}`} onClick={onClick} >{text}</button>
    );
}

export default Button;