const InputField = ({ type = "text", onChange, placeholder, defaultValue }) => {
	console.log(defaultValue, "defaultValue");
	return (
		<>
			<input
				type={type}
				placeholder={placeholder}
				onChange={onChange}
				defaultValue={defaultValue}
			/>
		</>
	);
};

export default InputField;
