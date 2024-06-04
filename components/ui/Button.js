const Button = ({text, color, onClick}) => {

    return (
        /* text-primary text-secondary --> */
        <button type="button" className={`text-${color}`} onClick={onClick} >{text}</button>
    );
}

export default Button;