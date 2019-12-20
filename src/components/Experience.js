// Libs
import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
	padding: 0 15rem;
	height: 60vh;
`;

const Line = styled.div`
	margin-bottom: 3rem;
	width: ${(props) => props.width};
	height: .1rem;
	background-color: #c7c7c7;
`;

const Text = styled.p`
	margin-left: ${(props) => props.marginL && '1rem'};
	width: ${(props) => props.width && '60%'};
	font-size: ${props => props.fontSize};
	color: ${(props) => props.color ? '#64ffda' : '#c7c7c7'};
	letter-spacing: 2px;

	&:hover {
    color: ${(props) => props.hover && '#64ffda'};
  }
`;

const ContainerContent = styled.div`
	padding-top: 5rem;
	display: flex;
	justify-content: center;
`;

const ContainerExperience = styled.div`
	margin-left: 1.5rem;
	border-left: 1px dotted #c7c7c7;
`;

export default class components extends Component {
  render() {
    return (
			<Container>
				<Line width={'10%'} />
				<Text fontSize={'2rem'} color>Experience</Text>
				<ContainerContent>
					<ContainerExperience>
						<Text marginL color>1STi</Text>
						<Text marginL hover>Jr. Front-end Developer</Text>
						<Text marginL hover fontSize={'.7rem'}>Jan. 2019 - Present</Text>
					</ContainerExperience>
				</ContainerContent>
			</Container>
    );
  }
}
