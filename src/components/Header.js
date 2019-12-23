// Libs
import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
	height: 6rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: #183c52;
`;

const Text = styled.p`
	margin-left: 2rem;
	font-size: 2rem;
	color: #c7c7c7;
`;

const List = styled.span`
	width: 25%;
	display: flex;
	justify-content: space-evenly;
`;

const ListItem = styled.a`
	letter-spacing: 2px;
	color: #c7c7c7;
	text-decoration: none;
	&:hover {
    color: #64ffda;
  }
`;

export default class Header extends Component {
  render() {
    return (
			<Container>
				<Text>Y</Text>
				<List>
					<ListItem href='#About'>About</ListItem>
					<ListItem href='#Experiece'>Experience</ListItem>
					<ListItem href='#Work'>Work</ListItem>
				</List>
			</Container>
    );
  }
}
