import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import './index.css';
import ContactsApp from "./components/ContactsApp";

const client = new ApolloClient({
	uri: 'http://localhost:4520',
});

ReactDOM.render(
	<React.StrictMode>
		<ApolloProvider client={client}>
			<ContactsApp />
		</ApolloProvider>
	</React.StrictMode>,
	document.getElementById('js-root'),
);