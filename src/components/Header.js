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
	color: #fff;
`;

const List = styled.ul`
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
	color: #fff;
	text-decoration: none;
	&:hover {
    color: #64ffda;
  }

	@media(max-width: 648px) {
		margin-bottom: 5rem;
	}
`;

const MenuImage = styled.img`
	display: none;
	@media(max-width: 648px) {
		display: flex;
		margin-right: 1.5rem;
		width: ${(props) => props.close ? '25px' : '30px'};
	}
`;

const ContainerListMob = styled.div`
	margin-top: 20rem;
	position: fixed;
	z-index: 2;
	width: 100%;
	height: 100vh;
	background-image: linear-gradient(15deg, #13547a 0%, #183c52 100%);
`;

const ContainerClose = styled.div`
	display: none;
	@media(max-width: 648px) {
		display: flex;
		margin: 0 2rem 0;
	}
`; 

const ListMobile = styled.ul`
	display: none;
	@media(max-width: 648px) {
    height: 85%;
		display: flex;
    justify-content: center;
    flex-direction: column;
	}
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
		console.log(this.state.isOpenMenu);
	}

	renderList = () => (
		<ContainerListMob>
			<ContainerClose>
				<MenuImage close src={MenuClose} alt="Menu Close" onClick={this.handleMenu} />
			</ContainerClose>
			<ListMobile>
				<ListItem href='#About'>About</ListItem>
				<ListItem href='#Experiece'>Experience</ListItem>
				<ListItem href='#Work'>Work</ListItem>
			</ListMobile>
		</ContainerListMob>
	)

  render() {
    return (
			<Container>
				<Text>Y</Text>
				<MenuImage src={MenuOpen} alt="Menu Open" onClick={this.handleMenu} />
				<List>
					<ListItem href='#About'>About</ListItem>
					<ListItem href='#Experiece'>Experience</ListItem>
					<ListItem href='#Work'>Work</ListItem>
				</List>
				{ this.state.isOpenMenu && this.renderList() }
			</Container>
    );
  }
}
