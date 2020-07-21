import styled from "styled-components";

export const NewContact = styled.form`
	width: 36vw;
	box-sizing: border-box;
	padding: 2rem;
		font-size: .9rem;
`;
export const FormBody = styled.fieldset`
	border: none;
	outline: none;
	padding: 0;
`;
export const Headline = styled.legend`
	font-size: 1.7rem;
	padding: 0;
`;
export const InputLine = styled.label`
	width: 100%;
	display: flex;
	justify-content: space-between;
	margin: 0.7rem 0;
	line-height: 2rem;
`;
export const InputLabel = styled.span`
	width: 6.5rem;
`;
export const InputBox = styled.input`
	flex: 1 1 auto;
	border: 1px solid #ccc;
	padding: 0 .4rem;
`;
export const ActionBar = styled.footer`
	padding-top: 1rem;
	display: flex;
	justify-content: space-between;
`;