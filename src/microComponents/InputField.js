const InputField = ({
	type = "text",
	onChange,
	placeholder,
	defaultValue,
	defaultChecked,
}) => {
	return (
		<>
			<input
				type={type}
				placeholder={placeholder}
				onChange={onChange}
				defaultValue={defaultValue}
				defaultChecked={defaultChecked}
			/>
		</>
	);
};

export default InputField;
