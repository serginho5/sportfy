import React, { Component } from 'react';
import Album from '../../assets/images/album.jpg';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as PlaylistDetailsActions } from '../../store/ducks/playlistDetails';
import { Container, Header, SongList } from './styles';
import ClockIcon from '../../assets/images/clock.svg';
import PlusIcon from '../../assets/images/plus.svg';


class Playlist extends Component {
  componentDidMount() {
    this.loadPlaylistDetails();
  }

  loadPlaylistDetails = () => {
    const { id } = this.props.match.params;
    this.props.getPlaylistDetailsRequest(id);
  }

  render() {
    return (
      <Container>
        <Header>
          <img src={Album} alt="Playlist"
          />
          <div>
            <span>PLAYLIST</span>
            <h1>Rock Forever</h1>
            <p>13 Músicas</p>

            <button>PLAY</button>
          </div>
        </Header>
        <SongList cellPadding={0} cellSpacing={0}>
          <thead>
            <th />
            <th>Título</th>
            <th>Artista</th>
            <th>Álbum</th>
            <th><img src={ClockIcon} alt="Duração" /></th>
          </thead>

          <tbody>
            <tr>
              <td><img src={PlusIcon} alt="Adicionar" /></td>
              <td>Papercut</td>
              <td>Linkin Park</td>
              <td>Hybrid Theory</td>
              <td>3:26</td>
            </tr>
            <tr>
              <td><img src={PlusIcon} alt="Adicionar" /></td>
              <td>Papercut</td>
              <td>Linkin Park</td>
              <td>Hybrid Theory</td>
              <td>3:26</td>
            </tr>
            <tr>
              <td><img src={PlusIcon} alt="Adicionar" /></td>
              <td>Papercut</td>
              <td>Linkin Park</td>
              <td>Hybrid Theory</td>
              <td>3:26</td>
            </tr>
            <tr>
              <td><img src={PlusIcon} alt="Adicionar" /></td>
              <td>Papercut</td>
              <td>Linkin Park</td>
              <td>Hybrid Theory</td>
              <td>3:26</td>
            </tr>
            <tr>
              <td><img src={PlusIcon} alt="Adicionar" /></td>
              <td>Papercut</td>
              <td>Linkin Park</td>
              <td>Hybrid Theory</td>
              <td>3:26</td>
            </tr>
            <tr>
              <td><img src={PlusIcon} alt="Adicionar" /></td>
              <td>Papercut</td>
              <td>Linkin Park</td>
              <td>Hybrid Theory</td>
              <td>3:26</td>
            </tr>
            <tr>
              <td><img src={PlusIcon} alt="Adicionar" /></td>
              <td>Papercut</td>
              <td>Linkin Park</td>
              <td>Hybrid Theory</td>
              <td>3:26</td>
            </tr>
          </tbody>
        </SongList>
      </Container>
    );
  }
}


const mapStateToProps = state => ({
  playlistDetails: state.playlistDetails,
});

const mapDispatchToProps = dispatch => bindActionCreators(PlaylistDetailsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Playlist);
