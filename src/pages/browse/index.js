import React from 'react';
import Album from '../../assets/images/album.jpg';

import { Container, Title, List, Playlist } from './styles';

const Browse = () => (
  <Container>
    <Title>Navegar</Title>

    <List>
      <Playlist href="">
        <img src={Album} alt="Playlist" />
      </Playlist>
    </List>
  </Container>
);

export default Browse;
