import React, { useEffect, useState, Fragment } from 'react';
import styled from "styled-components";

import ContactItem from "./ContactItem";

const List = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
`;
const FilterBox = styled.input`
	width: 100%;
	box-sizing: border-box;
	line-height: 1.5rem;
	border-radius: 0;
	border: 1px solid #ddd;
	margin-bottom: 0.7rem;
`;

const filterContact = (contact, filter) => {
	for ( const key in contact ) {
		if ( contact[key] && contact[key].toString().indexOf(filter) !== -1 ) {
			return true
		}
	}
	return false;
}

const ListView = ({list}) => {
	const [filter, setFilter] = useState("");
	const [ filteredList, setFilteredList ] = useState([]);
	useEffect(() => {
		filterTheList();
	}, [list, filter]);
	
	const filterTheList = () => {
		if ( filter.length > 0 && list.length > 0 ) {
			setFilteredList(list.filter( contact => filterContact(contact, filter) ));
		} else {
			setFilteredList(list);
		}
	}
	const handleFilter = evt => {
		setFilter(evt.target.value);
	};
	
	return (
		<Fragment>
			<FilterBox onChange={handleFilter} />
			<List>
				{ filteredList && filteredList.length > 0 && filteredList.map( item => <ContactItem key={item.id} contact={item} />) }
			</List>
		</Fragment>
	)
};

export default ListView;