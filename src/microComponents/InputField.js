function InputField({type = "text", onChange, placeholder}){
    return (
        <div>
            <input type={type} placeholder={placeholder} onChange={onChange}/>
        </div>
    )
}

export default InputField;