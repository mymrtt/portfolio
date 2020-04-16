// Libs
import React, { Component } from 'react';
import styled from 'styled-components';

// Image 
import instagram from '../assets/work/work-ig.png';

const Container = styled.div`
	padding: 0 15%;
	height: 80vh;

	@media(max-width: 648px) {
		padding: 0 10%;
		height: 100%;
	}
`;

const Line = styled.div`
	margin-bottom: 3rem;
	width: ${(props) => props.width};
	height: .1rem;
	background-color: #fff;
`;

const Text = styled.p`
	margin-left: ${(props) => props.marginL};
	font-size: ${props => props.fontSize};
	color: ${(props) => props.color ? '#64ffda' : '#fff'};
	letter-spacing: 2px;

	&:hover {
    color: ${(props) => props.hover && '#64ffda'};
  }
`;

const ContainerList = styled.div`
	display: flex;

	@media(max-width: 648px){
		align-items: center;
		flex-direction: column;
	}
`;

const List = styled.ul`
	padding: 0;
	width: 15%;
	height: 45vh;
	border: 1px solid #c7c7c721;
	border-radius: 6px;

	@media(max-width: 648px) {
		width: 100%;
		height: auto;
		display: flex;
	}
`;

const ListItem = styled.li`
	padding: 1rem;
	display: flex;
	justify-content: center;
	color: #fff;
	border: .1px solid #c7c7c721;
	border-color: ${(props) => props.isSelected ? '#c7c7c7' : '#c7c7c721'};
	list-style: none;
	cursor: pointer;
	font-size: 1.2rem;
`;

const Figure = styled.figure`
	width: 50%;
	display: flex;
	flex-direction: column;
	align-items: center;
	transition: 0.3s;

	a {
		text-decoration: none;
		color: #64ffda;
	}

  @media(max-width: 648px) {
	margin: 0;
	width: 100%;
  }
`;

const Image = styled.img`
	width: 50%;
	opacity: .8;
	border-radius: 5px;
	transition: 0.3s;
	cursor: pointer;

	@media(max-width: 648px) {
		width: 100%;
  }
`;

const ContainerWork = styled.div`
	width: 70%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export default class Work extends Component {
	state = {
		workList: ['Instagram'],
		openWork: false,
	}

	handleOpenWork = () => {
		this.setState({ openWork: !this.state.openWork });
	}

	renderWork = () => (
		<ContainerWork onClick={this.handleOpenWork}>
			<Figure>
				<Image 
					src={instagram}
					alt="Instagram"
				/>
				<Text>I recreated a user profile on instagram using the css grid and this project was developed through 
				<b><a href="https://codepen.io/mymrtt/pen/MNYxNy" target="_blank" rel="noopener noreferrer"> Codepen</a></b>.</Text>
			</Figure>
		</ContainerWork>
	)

  render() {
    return (
			<Container id="Work">
				<Line width={'10%'} />
					<Text fontSize={'2rem'} color>Work</Text>
					<ContainerList>
						<List>
							{this.state.workList.map(item => (
								<ListItem onClick={this.handleOpenWork} isSelected={this.state.openWork}>{item}</ListItem>
							))}
						</List>
						{this.state.openWork && this.renderWork()}
					</ContainerList>
			</Container>
    );
  }
}
