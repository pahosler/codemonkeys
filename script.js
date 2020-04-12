const discord = () => {
  console.log('test');
  fetch('https://discordapp.com/api/guilds/698177341586800672/widget.json', {
    method: 'GET',
  })
    .then((res) => res.json())
    .then((json) => {
      document.getElementById(
        'button'
      ).innerHTML = `<a href=${json.instant_invite}>${json.name}<br/> Discord <br/>Instant Invite!</a>`;
    });
};
