import React, { useEffect } from 'react';
import styled from "styled-components";

import { BTN } from "./ContactsApp.style";
import Avatar from "./Avatar";

const Contact = styled.li`
	display: flex;
	align-items: center;
	background-color: #eee;
	border-bottom: 1px solid #ccc;
	padding: 0 0.5rem;
	height: 4.5rem;
	box-sizing: border-box;
`;
const Name = styled.span`
	font-size: 1.25rem;
	font-weight: 500;
	color: #777;
`;
const Spacer = styled.div`
	flex: 1 1 auto;
`;
const Action = styled(BTN)`
	margin-left: 0.5rem;
`;

const sendMail = address => () => {
	window.open(`mailto:${address}?subject=It's me&body=You are in my contact list`);
}
const phoneCall = num => () => {
	window.open(`tel:${num}`);
}

const ContactItem = ({ contact }) => {
	useEffect(() => {
	
	})
	return (
		<Contact>
			<Avatar mail={ contact.email } />
			<Name>{ contact.firstName } { contact.lastName }</Name>
			<Spacer />
			{ contact.email && <Action onClick={sendMail(contact.email)}>Email</Action> }
			{ contact.phone && <Action onClick={phoneCall(contact.phone)}>Call</Action> }
		</Contact>
	)
};

export default ContactItem;