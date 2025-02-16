import type React from "react";
import styled from "styled-components";

interface Props {
	children: React.ReactNode;
	backgroundColor?: string;
	color?: string;
}

const MyButton: React.FC<Props> = ({ children, backgroundColor, color }) => {
	const StyledButton = styled.button`
		background-color: ${backgroundColor || "#007bff"};
		color: ${color || "#ffffff"};
		border: none;
		padding: 10px 20px;
		border-radius: 5px;
		cursor: pointer;
	`;

	return <StyledButton>{children}</StyledButton>;
};

export default MyButton;
