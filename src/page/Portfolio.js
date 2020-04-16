// Libs
import React, { Component } from 'react';
import styled from 'styled-components';

// Components
import Header from '../components/Header';
import Home from '../components/Home';
import Medias from '../components/Medias';
import About from '../components/About';
import Experience from '../components/Experience';
import Work from '../components/Work';
import Footer from '../components/Footer';

// Image
import Spinner from '../assets/icons/y.png';

const Container = styled.div`
	${'' /* background-color: #183c52; */}
	background-color: #262e31;
	position: relative;
`;

const ContainerSpinner = styled.div`
	position: fixed;
	top: 0;
	bottom: 0;
	height: auto;	
	display: flex;
	justify-content: center;
	background: #262e31;
	z-index: 1;
`;

const Image = styled.img`
	width: 4%;
	align-self: center;
	-webkit-animation: spin 4s linear infinite;
	-moz-animation: spin 4s linear infinite;
	animation: spin 4s linear infinite;
	@-moz-keyframes spin { 100% { -moz-transform: rotate(360deg); } }
	@-webkit-keyframes spin { 100% { -webkit-transform: rotate(360deg); } }
	@keyframes spin { 100% { -webkit-transform: rotate(360deg); transform:rotate(360deg); } }

	@media(max-width: 648px) {
		width: 10%;
	}
`;

class Portfolio extends Component {

	componentDidMount () {
		setTimeout(() => {
			document.querySelector(Image).remove()
		}, 1000);
	}

  render() {
    return (
			<Container>
				<ContainerSpinner>
					<Image src={Spinner} />
				</ContainerSpinner>
				<Header />
				<Home />
				<Medias />
				<About />
				<Experience />
				<Work />
				<Footer />
			</Container>
    );
  }
}

export default Portfolio;
