import React, { useState } from 'react';
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

import NewContactForm from "./NewContactForm";
import ListView from "./ListView";
import { Wrapper, ListPanel, AppHeader, AppTitle, BTN } from "./ContactsApp.style";

const GET_CONTACTS = gql`{
  contacts {
    id, firstName, lastName, phone, email
  }
}`;

const ContactsApp = () => {
	const [ newFormVisible, setNewFormVisible ] = useState(false);
	const { loading, error, data } = useQuery(GET_CONTACTS);
	
	const toggleForm = () => {
		setNewFormVisible(!newFormVisible);
	}
	
	return (
		<Wrapper>
			<ListPanel>
				<AppHeader>
					<AppTitle>Contacts</AppTitle>
					<BTN onClick={toggleForm}>{ newFormVisible ? "Close" : "New"}</BTN>
				</AppHeader>
				{ data
					? <ListView loading={loading} list={data.contacts} />
					: <p>LOADING</p>
				}
			</ListPanel>
			{ newFormVisible ? <NewContactForm /> : null }
		</Wrapper>
	)
};

export default ContactsApp;