// Libs
import React, { Component } from 'react';
import styled from 'styled-components';

// Images 
import yasmin from '../assets/yasmin.jpg';

const Container = styled.div`
	padding: 0 15rem;
	height: 90vh;
`;

const Line = styled.div`
	margin-bottom: 3rem;
	width: ${(props) => props.width};
	height: .1rem;
	background-color: #c7c7c7;
`;

const ContainerDescription = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Text = styled.p`
	width: ${(props) => props.width && '60%'};
	font-size: ${props => props.fontSize};
	color: ${(props) => props.color ? '#64ffda' : '#c7c7c7'};
	letter-spacing: 2px;
`;

const ContainerTec = styled.span`
	display: flex;
`;

const TextTec = styled.p`
	margin-left: 1rem;
	color: #8892b0;
	letter-spacing: 2px;
	&:before {
    content: "♦ ";
  }
`;

const Image = styled.img`
	width: 18rem;
	border-radius: 50%;
	opacity: 0.5;
	cursor: pointer;
	transition: 0.3s;
	&:hover {
    opacity: 1;
  }
`;

export default class components extends Component {
  render() {
    return (
			<Container>
				<Line width={'10%'} />
					<Text fontSize={'2rem'} color>About me</Text>
				<ContainerDescription>
					<Text fontSize={'1.5rem'} width>I am Yasmin, I am a Junior Front-End <strong>Developer</strong> and <strong>Marketing</strong> student at the Getúlio Vargas Foundation. I was born and live in Rio de Janeiro, Brazil.</Text>
					<Image src={yasmin} alt="Yasmin Miranda" />
				</ContainerDescription>
				<Line width={'3%'} />
				<Text fontSize={'1.2rem'}>Some technologies I work with:</Text>
				<ContainerTec>
					<TextTec>HTML5 & CSS3</TextTec>
					<TextTec>JavaScript</TextTec>
				</ContainerTec>
				<ContainerTec>
					<TextTec>ReactJS</TextTec>
					<TextTec>React Native</TextTec>
					<TextTec>Styled-Component</TextTec>
				</ContainerTec>
				<Text fontSize={'1.2rem'}>Soft Skills:</Text>
				<ContainerTec>
					<TextTec>Team work</TextTec>
					<TextTec>Flexibility</TextTec>
				</ContainerTec>
				<ContainerTec>
					<TextTec>Empathy</TextTec>
					<TextTec>Proactivity</TextTec>
				</ContainerTec>
				<ContainerTec>
					<TextTec>Resilience</TextTec>
					<TextTec>Collaboration</TextTec>
				</ContainerTec>
			</Container>
    );
  }
}
