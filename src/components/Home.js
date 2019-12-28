// Libs
import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
	padding: 11% 15% 0;
	height: 80vh;

	@media(max-width: 648px) {
		padding: 11% 13% 0;
		height: 100%;
	}
`;

const Line = styled.div`
	margin-bottom: 3rem;
	width: 6%;
	height: .1rem;
	background-color: #c7c7c7;
`;

const Text = styled.p`
	margin-top: ${(props) => props.marginT && '1rem'};
	margin-bottom: ${props => props.marginB};
	width: ${(props) => props.width && '35%'};
	color: ${props => props.color};
	font-size: ${props => props.fontSize};
	letter-spacing: 2px;

	@media(max-width: 960px) {
		width: ${(props) => props.width && '55%'};
	}
	@media(max-width: 648px) {
		width: ${(props) => props.width && '100%'};
		font-size: ${props => props.fontSizeMob};
	}
`;

const Ball = styled.div`
	margin-top: ${props => props.marginT};
	margin-left: ${props => props.marginL};
	width: 10rem;
	height: 10rem;
	background-color: #c7c7c721;
	border-radius: 50%;
`;

class Home extends Component {
  render() {
    return (
			<Container>
				<Line />
				<Text 
					marginB={'.5rem'}
					color={'#64ffda'}
					fontSize={'1rem'}
				>
					Hi, i am
				</Text>
				<Text 
					marginT
					marginB={'2.5rem'}
					color={'#c7c7c7'}
					fontSize={'4rem'}
					fontSizeMob={'2.5rem'}
				>
					Yasmin Miranda.
				</Text>
				<Text 
					width
					color={'#DEDEDE'} 
					fontSize={'1.5rem'}
				>
					I am a front-end developer and marketing student at the Getúlio Vargas Foundation. I was born and live in Rio de Janeiro, Brazil.
				</Text>
				<Ball marginT={'-6rem'} marginL={'-3rem'} />
				<Ball marginT={'-6rem'} marginL={'-3rem'} />
				<Ball marginT={'-12rem'} marginL={'2rem'} />
			</Container>
    );
  }
}

export default Home;
