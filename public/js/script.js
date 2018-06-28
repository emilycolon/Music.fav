// console.log('script.js linked');
// window.onSpotifyWebPlaybackSDKReady = () => {
//   const token =
//     'BQALiJBuZ2adZkyLAlGPvd2eXXX20xwth3sO2CQyGvfq420U2EiCe43bi1gqeHK9I0tq2a4wYwYZ7U8hVozeZrG6WTNh6B7atoA9slWgoVTPAhoaaRWp6a526T9Ql8YJPUVCTmLykFrSu6iDAl02TSVDIpcj6bNO';
//   const player = new Spotify.Player({
//     name: 'music.fav',
//     getOAuthToken: cb => {
//       cb(token);
//     }
//   });

//   // Error handling
//   player.addListener('initialization_error', ({ message }) => {
//     console.error(message);
//   });
//   player.addListener('authentication_error', ({ message }) => {
//     console.error(message);
//   });
//   player.addListener('account_error', ({ message }) => {
//     console.error(message);
//   });
//   player.addListener('playback_error', ({ message }) => {
//     console.error(message);
//   });

//   // Playback status updates
//   player.addListener('player_state_changed', state => {
//     console.log(state);
//   });

//   // Ready
//   player.addListener('ready', ({ device_id }) => {
//     console.log('Ready with Device ID', device_id);
//   });

//   // Not Ready
//   player.addListener('not_ready', ({ device_id }) => {
//     console.log('Device ID has gone offline', device_id);
//   });

//   // Connect to the player!
//   player.connect();
// };
