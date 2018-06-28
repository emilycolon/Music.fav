// leaving this code in for presentation purposes.  The authentication token
// listed below is only good for 60 minutes.  If loading the project any other
// time than within 60 mins of this token being generated, errors will appear
// in the JS Console due to lack of authentication.

window.onSpotifyWebPlaybackSDKReady = () => {
  const token =
    'BQBloUMD7ZBUErUf0NRN1ljedPKmpyQG4H9eUvq2qR9LGIAqi-ZV5h5YUnOulQVT8WrKDMcuOC8lHZMaEUwO_R5LOzCjhgCdrPrqNMpDhFtooSrztPxW6C99mYZlL6GjtOptNT38tbo3yJGtiDcmB-dzY1tHusCe';
  const player = new Spotify.Player({
    name: 'Web Playback SDK Quick Start Player',
    getOAuthToken: cb => {
      cb(token);
    }
  });

  // Error handling
  player.addListener('initialization_error', ({ message }) => {
    console.error(message);
  });
  player.addListener('authentication_error', ({ message }) => {
    console.error(message);
  });
  player.addListener('account_error', ({ message }) => {
    console.error(message);
  });
  player.addListener('playback_error', ({ message }) => {
    console.error(message);
  });

  // Playback status updates
  player.addListener('player_state_changed', state => {
    console.log(state);
  });

  // Ready
  player.addListener('ready', ({ device_id }) => {
    console.log('Ready with Device ID', device_id);
  });

  // Not Ready
  player.addListener('not_ready', ({ device_id }) => {
    console.log('Device ID has gone offline', device_id);
  });

  // Connect to the player!
  player.connect();
};
