// Libs
import React, { Component } from 'react';
import styled from 'styled-components';

// Image 
import instagram from '../assets/work/work-ig.png';

const Container = styled.div`
	padding: 0 15rem;
	height: 80vh;
`;

const Line = styled.div`
	margin-bottom: 3rem;
	width: ${(props) => props.width};
	height: .1rem;
	background-color: #c7c7c7;
`;

const Text = styled.p`
	margin-left: ${(props) => props.marginL};
	font-size: ${props => props.fontSize};
	color: ${(props) => props.color ? '#64ffda' : '#c7c7c7'};
	letter-spacing: 2px;

	&:hover {
    color: ${(props) => props.hover && '#64ffda'};
  }
`;

const Figure = styled.figure`
	position: relative;
`;

const Image = styled.img`
	width: 20rem;
	opacity: .8;
	border-radius: 5px;
	transition: 0.3s;
${'' /* 
	&:hover {
		opacity: .4;
	} */}
`;

const ContainerIg = styled.div`
	position: absolute;
	top: 0;
	padding: 2rem;
	width: 20%;
	height: 90%;
	display: flex;
	justify-content: center;
	flex-direction: column;
	background-color:  #40404040;
`;


export default class Work extends Component {
	constructor(props){
		super(props);
		
		this.state = {
			isIgOpen: false,
		}
	}

	handleIgOpen = () => {
		this.setState({ isIgOpen: !this.state.isIgOpen});
	}

	renderIgDescription = () => (
		<ContainerIg>
			<Text color>I recreated a user profile on instagram using css grid.</Text>
			<Text color>I developed this project through codepen.</Text>
			<Text color>Click to view! :)</Text>
		</ContainerIg>
	);

  render() {
    return (
			<Container id="Work">
				<Line width={'10%'} />
					<Text fontSize={'2rem'} color>Work</Text>
					<Text fontSize={'1.5rem'}>under construction.</Text>
					<Figure>
						<a href="https://codepen.io/mymrtt/pen/MNYxNy" target="_blank">
							<Image 
								src={instagram}
								alt="Instagram"
								onMouseEnter={this.handleIgOpen}
								onMouseLeave={this.handleIgOpen}
							/>
						</a>
						{ this.state.isIgOpen && this.renderIgDescription() }
					</Figure>
			</Container>
    );
  }
}
