// Libs
import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
	padding: 0 15rem;
	height: 3.5rem;
	display: flex;
	justify-content: center;
	background-color: #0d2c40;
`;

const Text = styled.p`
	color: #c7c7c7;
	font-size: 1rem;
	letter-spacing: 2px;
`;

export default class components extends Component {
  render() {
    return (
			<Container>
				<Text>Build by Yasmin Miranda.</Text>
			</Container>
    );
  }
}
