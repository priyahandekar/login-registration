const InputField = ({ type = "text", onChange, placeholder }) => {
	return (
		<>
			<input type={type} placeholder={placeholder} onChange={onChange} />
		</>
	);
};

export default InputField;
