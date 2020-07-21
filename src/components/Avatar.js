import React, { useEffect, useState } from 'react';
import styled from "styled-components";

const Icon = styled.img`
	background-color: yellow;
	border-radius: 50%;
	width: 3.2rem;
	height: 3.2rem;
	margin-right: 0.5rem;
`;

const defaultAvatar = "https://api.adorable.io/avatars/face/eyes4/nose3/mouth7/8e8895";
const avatarPrefix = "https://api.adorable.io/avatars/51/";

const Avatar = ({ mail }) => {
	const [ source, setSource ] = useState(avatarPrefix)
	useEffect(() => {
		if (mail) {
			setSource (avatarPrefix + mail)
		} else {
			setSource(defaultAvatar);
		}
	}, []);
	return (
		<Icon src={source} />
	)
};

export default Avatar;