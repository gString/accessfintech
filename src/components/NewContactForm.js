import React, { useState } from 'react';
import gql from "graphql-tag/src";
import { useMutation } from "@apollo/react-hooks";

import { BTN } from "./ContactsApp.style";
import {
	NewContact,
	ActionBar,
	Headline,
	FormBody,
	InputBox,
	InputLabel,
	InputLine
} from "./NewContactForm.styles";

const ADD_CONTACT = gql`
	mutation AddContact($firstName: String!,
						$lastName: String!,
						$phone: String,
						$email: String ) {
		addContact(firstName: $firstName,
					lastName: $lastName,
					phone: $phone,
					email: $email ) {
			firstName
    		lastName
    		phone
    		email
		}
	}
`;

const NewContactForm = () => {
	
	const [ firstName, setFirst ] = useState("");
	const [ lastName, setLast ] = useState("");
	const [ phone, setPhone ] = useState("");
	const [ email, setMail ] = useState("");
	
	const [ addContact, {data} ] = useMutation(ADD_CONTACT);
	
	const changeHandler = evt => {
		switch(evt.target.name) {
		    case "firstName":
		        setFirst(evt.target.value);
		        break;
		    case "lastName":
		        setLast(evt.target.value);
		        break;
		    case "tel":
		        setPhone(evt.target.value);
		        break;
		    case "email":
		        setMail(evt.target.value);
		        break;
		    default:
		        console.log("Error: Unrecognized name property in changeHandler");
		}
		console.log("new!", evt.target.name, evt.target.value);
	};
	const reset = () => {
		setFirst("");
		setLast("");
		setPhone("");
		setMail("");
	}
	const submit = async () => {
		await addContact({ variables: {
				firstName,
				lastName,
				phone,
				email
			} });
		reset();
	}
	
	return (
		<NewContact>
			<FormBody>
				<Headline>New Contact</Headline>
				<InputLine>
					<InputLabel>First Name:</InputLabel>
					<InputBox name="firstName"
							  onChange={changeHandler}
							  type="text"
							  value={firstName}
							  required/>
				</InputLine>
				<InputLine>
					<InputLabel>Last Name:</InputLabel>
					<InputBox name="lastName"
							  onChange={changeHandler}
							  type="text"
							  value={lastName}
							  required/>
				</InputLine>
				<InputLine>
					<InputLabel>Phone:</InputLabel>
					<InputBox name="tel"
							  onChange={changeHandler}
							  value={phone}
							  type="tel"/>
				</InputLine>
				<InputLine>
					<InputLabel>Email:</InputLabel>
					<InputBox name="email"
							  onChange={changeHandler}
							  value={email}
							  type="email"/>
				</InputLine>
			</FormBody>
			<ActionBar>
				<BTN type="button" onClick={reset}>Cancel</BTN>
				<BTN type="button" onClick={submit}>Save</BTN>
			</ActionBar>
		</NewContact>
	)
};

export default NewContactForm;