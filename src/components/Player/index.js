import React from 'react';
import Slider from 'rc-slider';

import { Container, Current, Volume, Progress, Controls, Time, ProgressSlider } from './styles';
import album from '../../assets/images/album.jpg';
import VolumeIcon from '../../assets/images/volume.svg';
import ShuffeIcon from '../../assets/images/shuffle.svg';
import BackwardIcon from '../../assets/images/backward.svg';
import PlayIcon from '../../assets/images/play.svg';
import ForwardIcon from '../../assets/images/forward.svg';
import RepeatIcon from '../../assets/images/repeat.svg';


const Player = () => (
  <Container>
    <Current>
      <img
        src={album} alt="cover" />
      <div>
        <span>Times like these</span>
        <small>Foo Fighters</small>
      </div>
    </Current>

    <Progress>
      <Controls>
        <button>
          <img src={ShuffeIcon} alt="Shuffle" />
        </button>
        <button>
          <img src={BackwardIcon} alt="Backward" />
        </button>
        <button>
          <img src={PlayIcon} alt="Play" />
        </button>
        <button>
          <img src={ForwardIcon} alt="Forward" />
        </button>
        <button>
          <img src={RepeatIcon} alt="Repeat" />
        </button>
      </Controls>

      <Time>
        <span>1:39</span>
        <ProgressSlider>
          <Slider
            railStyle={{ background: '#404040', borderRadius: 10 }}
            trackStyle={{ background: '#1ed760' }}
            handleStyle={{ border: 0 }}
          />
        </ProgressSlider>
        <span>4:24</span>
      </Time>
    </Progress>


    <Volume>
      <img src={VolumeIcon} alt="Volume" />
      <Slider
        railStyle={{ background: '#404040', borderRadius: 10 }}
        trackStyle={{ background: '#fff' }}
        handleStyle={{ display: 'none' }}
        value={100}
      />
    </Volume>
  </Container>
);

export default Player;
