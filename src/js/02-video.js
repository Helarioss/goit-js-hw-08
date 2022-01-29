import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const PLAYER_CURRENT_TIME = 'videoplayer-current-time';
const iframeRef = document.querySelector('#vimeo-player');
const player = new Player(iframeRef);

player.setCurrentTime(localStorage.getItem(PLAYER_CURRENT_TIME));

player.on(
  'timeupdate',
  throttle(event => {
    localStorage.setItem(PLAYER_CURRENT_TIME, event.seconds);
  }, 1000),
);
