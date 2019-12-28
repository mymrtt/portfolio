// Libs
import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
	padding: 0 15%;
	height: 60vh;

	@media(max-width: 648px) {
		padding: 0 13%;
	}
`;

const Line = styled.div`
	margin-bottom: 3rem;
	width: ${(props) => props.width};
	height: .1rem;
	background-color: #c7c7c7;
`;

const Text = styled.p`
	margin-left: ${(props) => props.marginL && '1rem'};
	width: ${(props) => props.width && '75%'};
	font-size: ${props => props.fontSize};
	color: ${(props) => props.color ? '#64ffda' : '#c7c7c7'};
	letter-spacing: 2px;

	&:before {
    content: ${(props) => props.before && "♦ "};;
  }
`;

const TextTec = styled.p`
	margin-left: 1rem;
	color: #8892b0;
	letter-spacing: 2px;
	&:before {
    content: "♦ ";
  }
`;

const ContainerContent = styled.div`
	padding-top: 5rem;
	display: flex;
	justify-content: center;
`;

const ContainerExperience = styled.div`
	width: 30%;
	display: flex;
	flex-direction: column;
	cursor: pointer;

	@media(max-width: 1024px) {
		width: 80%;
	}
`;

const WrapperExperience = styled.div`
	margin-left: 1.5rem;
	width: 100%;
	border-left: 1px dotted #c7c7c7;
`;

const ContainerMoreInfos = styled(WrapperExperience)`
	margin-top: 1.8rem;
	position: relative;

	&::after {
		content: '';
    position: absolute;
    top: 0;
    left: 6rem;
    width: 0;
    height: 0;
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    border-top: 15px solid #64ffda;
	}
`;

export default class Experience extends Component {
	constructor(props){
		super(props);
		
		this.state = { isOpen: false };
	}

	handleExperience = () => {
		this.setState({ isOpen: !this.state.isOpen });
	}
 
	renderMoreInfos = () => (
		<ContainerMoreInfos>
			<Text marginL width>What I use, besides the technologies mentioned above:</Text>
			<TextTec>Stylization with Styled-Components</TextTec>
			<TextTec>Internationalization with 118n</TextTec>
			<TextTec>Automated tests with Cypress</TextTec>
		</ContainerMoreInfos>
	);

  render() {
    return (
			<Container id="Experiece">
				<Line width={'10%'} />
				<Text fontSize={'2rem'} color>Experience</Text>
				<ContainerContent>
					<ContainerExperience>
						<WrapperExperience 
							onMouseEnter={this.handleExperience}
							onMouseLeave={this.handleExperience}
						>
							<Text marginL color>1STi</Text>
							<Text marginL>Jr. Front-end Developer</Text>
							<Text marginL fontSize={'.7rem'}>Jan. 2019 - Present</Text>
						</WrapperExperience>
						{this.state.isOpen && this.renderMoreInfos()}
					</ContainerExperience>
				</ContainerContent>
			</Container>
    );
  }
}
