// Libs
import React, { Component } from 'react';
import styled from 'styled-components';

// Images 
import yasmin from '../assets/yasmin.jpg';

const Container = styled.div`
	padding: 0 15%;
	height: 90vh;

	@media(max-width: 648px) {
		padding: 0 10%;
		padding-top: 7rem;
		height: 100%;
	}
`;

const Line = styled.div`
	margin-bottom: 3rem;
	width: ${(props) => props.width};
	height: .1rem;
	background-color: #fff;
`;

const ContainerDescription = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	@media(max-width: 960px) {
		margin: 4rem 0;
		flex-direction: column-reverse;
	}
`;

const Text = styled.p`
	width: ${(props) => props.width && '60%'};
	font-size: ${props => props.fontSize};
	color: ${(props) => props.color ? '#64ffda' : '#fff'};
	letter-spacing: 2px;

	@media(max-width: 960px) {
		margin-top: ${(props) => props.marginT};
		width: ${(props) => props.width && '82%'};
	}
	@media(max-width: 648px) {
		width: ${(props) => props.width && '100%'};
	}
`;

const ContainerTec = styled.span`
	width: 23rem;
	display: flex;
	flex-wrap: wrap;

	@media(max-width: 648px) {
		width: 15rem;
	}
`;

const TextTec = styled.p`
	margin-left: 1rem;
	color: #8892b0;
	letter-spacing: 2px;
	&:before {
    content: "♦ ";
  }

	@media(max-width: 648px) {
		margin-left: .5rem;
	}
`;

const Image = styled.img`
	width: 18rem;
	border-radius: 50%;
	cursor: pointer;
	transition: 0.3s;
	opacity: 0.8;
	
	&:hover {
		opacity: 0.5;
  }
`;

export default class About extends Component {
	state = { 
		technologies: [
			'HTML5 & CSS3',
			'JavaScript',
			'ReactJS',
			'React Native',
			'NodeJS',
			'MySQL'
		],
		softSkills: [
			'Team work',
			'Flexibility',
			'Empathy',
			'Proactivity',
			'Resilience',
			'Collaboration',
		]
	}

  render() {
    return (
			<Container id="About">
				<Line width={'10%'} />
					<Text fontSize={'2rem'} color>About me</Text>
				<ContainerDescription>
					<Text fontSize={'1.5rem'} width marginT={'3rem'}>I am Yasmin, I am a Junior Front-End <strong>Developer</strong> and <strong>Marketing student</strong> at the Getúlio Vargas Foundation. I was born and live in Rio de Janeiro, Brazil.</Text>
					<Image src={yasmin} alt="Yasmin Miranda" />
				</ContainerDescription>
				<Line width={'3%'} />
				<Text fontSize={'1.2rem'}>Some technologies I work with:</Text>
				<ContainerTec>
					{this.state.technologies.map(tec => (
						<TextTec>{tec}</TextTec>
					))}
				</ContainerTec>
				<Text fontSize={'1.2rem'}>Soft Skills:</Text>
				<ContainerTec>
					{this.state.softSkills.map(skills => (
						<TextTec>{skills}</TextTec>
					))}
				</ContainerTec>
			</Container>
    );
  }
}
