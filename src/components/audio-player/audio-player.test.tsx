import * as React from 'react';
import * as renderer from 'react-test-renderer';

import AudioPlayer from './audio-player';

const mock = {
  song: {
    src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`
  }
};

it(`AudioPlayer is rendered correctly`, () => {
  const {song} = mock;
  const onPlayButtonClick = jest.fn();

  const tree = renderer.create(<AudioPlayer
    isPlaying={false}
    isLoading={true}
    onPlayButtonClick={onPlayButtonClick}
    renderAudio={jest.fn()}
    src={song.src}
  />).toJSON();

  expect(tree).toMatchSnapshot();
});
