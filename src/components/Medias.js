// Libs
import React, { Component } from 'react';
import styled from 'styled-components';

// Images
import github from '../assets/icons/github.png';
import codepen from '../assets/icons/codepen.png';
import linkedin from '../assets/icons/linkedin.png';

const Container = styled.div`
	position: fixed;
	top: 20rem;
	bottom: 0;
	width: 5%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Image = styled.img`
	width: 40px;
	margin-bottom: 1rem;
`;

const Text = styled.p`
	margin-top: 10rem;
	width: 100%;
	color: #64ffda;
	letter-spacing: 3px;
	transform: rotate(270deg);
`;

const Line = styled.div`
	margin-top: 1rem;
	margin-bottom: 1rem;
	width: ${(props) => props.width};
	height: .1rem;
	background-color: #000;
	transform: rotate(270deg);
`;

export default class Medias extends Component {
  render() {
    return (
      <Container>
				<a href="https://github.com/mymrtt" target="_blank">
					<Image src={github} alt="GitHub" />
				</a>
				<a href="https://codepen.io/mymrtt" target="_blank">
					<Image src={codepen} alt="CodePen" />
				</a>
				<a href="https://www.linkedin.com/in/yasmin-miranda/" target="_blank">
					<Image src={linkedin} alt="LinkedIn" />
				</a>
				<Line width={'30%'} />
				<Text>mymrtt@gmail.com</Text>
			</Container>
    );
  }
}
