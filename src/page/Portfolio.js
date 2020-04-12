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

const Container = styled.div`
	${'' /* background-color: #183c52; */}
	background-color: #262e31;
`;

class Portfolio extends Component {

  render() {
    return (
			<Container>
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
