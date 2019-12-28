// Libs
import React, { Component } from 'react';
import styled from 'styled-components';

// Image
import MenuOpen from '../assets/icons/menuOpen.png';
import MenuClose from '../assets/icons/menuClose.png';


const Container = styled.div`
	height: 6rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	${'' /* background-color: #183c52; */}
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

	@media(max-width: 1024px) {
		width: 55%;
	}
	@media(max-width: 648px) {
		display: none;
	}
`;

const ListItem = styled.a`
	letter-spacing: 2px;
	color: #c7c7c7;
	text-decoration: none;
	&:hover {
    color: #64ffda;
  }
`;

const MenuImage = styled.img`
	margin-right: 1.5rem;
	width: 30px;
`;


export default class Header extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isOpenMenu: false,
		}
	}

	handleMenu = () => {
		this.setState({ isOpenMenu: !this.state.isOpenMenu });
	}


  render() {
    return (
			<Container>
				<Text>Y</Text>
				<MenuImage src={MenuOpen} alt="Open Menu" onClick={this.handleMenu} />
				<List>
					<ListItem href='#About'>About</ListItem>
					<ListItem href='#Experiece'>Experience</ListItem>
					<ListItem href='#Work'>Work</ListItem>
				</List>
			</Container>
    );
  }
}
