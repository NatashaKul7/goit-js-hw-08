import throttle from 'lodash.throttle';

const iframe = document.getElementById('vimeo-player');
const iframePlayer = new Vimeo.Player(iframe);
