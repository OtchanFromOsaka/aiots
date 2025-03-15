import type { FC, PropsWithChildren } from "hono/jsx";

interface AioToggleSwitchProps {
  isChecked?: boolean | null;
  onChange?: (isChecked: boolean) => void;
  height?: number;
  width?: number;
  backgroundColor?: string;
  checkedBackgroundColor?: string;
  thumbSize?: number;
  thumbColor?: string;
  transitionSeconds?: number;
  id?: string;
  name?: string;
  disabled?: boolean;
  children?: any;
}

const AioToggleSwitch: FC<AioToggleSwitchProps> = ({
	isChecked = false,
	onChange,
	height = 24,
	width = 48,
	backgroundColor = "#ccc",
	checkedBackgroundColor = "#2196F3",
	thumbSize = 20,
	thumbColor = "#fff",
	transitionSeconds = 0.3,
	id,
	name,
	disabled = false,
	children,
}) => {
	const handleChange = (e: Event) => {
		const target = e.target as HTMLInputElement;
		const newChecked = target.checked;
		onChange?.(newChecked);
	};

	let thumbOffset: number;
	if (isChecked === null) {
		thumbOffset = (width - thumbSize) / 2;
	} else if (isChecked) {
		thumbOffset = width - thumbSize - (height - thumbSize) / 2;
	} else {
		thumbOffset = (height - thumbSize) / 2;
	}

	const containerStyle = {
		position: "relative",
		display: "inline-block",
		width: `${width}px`,
		height: `${height}px`,
		opacity: disabled ? "0.6" : "1",
	};

	const inputStyle = {
		opacity: "0",
		width: "0",
		height: "0",
	};

	const sliderStyle = {
		position: "absolute",
		cursor: disabled ? "not-allowed" : "pointer",
		top: "0",
		left: "0",
		right: "0",
		bottom: "0",
		backgroundColor:
			isChecked === true ? checkedBackgroundColor : backgroundColor,
		borderRadius: `${height}px`,
		transition: `background-color ${transitionSeconds}s`,
	};

	const thumbStyle = {
		position: "absolute",
		content: '""',
		height: `${thumbSize}px`,
		width: `${thumbSize}px`,
		left: `${thumbOffset}px`,
		top: `${(height - thumbSize) / 2}px`,
		backgroundColor: thumbColor,
		borderRadius: "50%",
		transition: `left ${transitionSeconds}s`,
		boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	};

	return (
		<label style={containerStyle}>
			<input
				type="checkbox"
				checked={isChecked === null ? false : isChecked}
				onChange={handleChange}
				style={inputStyle}
				id={id}
				name={name}
				disabled={disabled}
			/>
			<span style={sliderStyle}>
				<span style={thumbStyle}>
					{children}
				</span>
			</span>
		</label>
	);
};

export default AioToggleSwitch;
