import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const PLAYER_CURRENT_TIME = 'videoplayer-current-time';
const iframeRef = document.querySelector('#vimeo-player');
const player = new Player(iframeRef);

const time = localStorage.getItem(PLAYER_CURRENT_TIME);
if (time) {
  player.setCurrentTime(time);
}

player.on(
  'timeupdate',
  throttle(event => {
    localStorage.setItem(PLAYER_CURRENT_TIME, event.seconds);
  }, 1000),
);
