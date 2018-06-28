console.log('script.js linked');
window.onSpotifyWebPlaybackSDKReady = () => {
  const token =
    'BQAzhMzQ1V3AAXTlcjAokP_ieM0BKgot0E1D3Hryx_n2HGeviLw1spWu2VbiosAHzdUf8F07ezCGzdcp88CBZrkV5zH9CPTaN_FpjgOWqOny3Pai502D0IJ69MF_AFBoTEG0vFKlxn0c0KWVaabBp4FYTzcDiofP';
  const player = new Spotify.Player({
    name: 'music.fav',
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
  player.connect().then(success => {
    if (success) {
      console.log('The Web Playback SDK successfully connected to Spotify!');
    }
  });
