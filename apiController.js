export const APIController = {
  clientId: '',
  redirectUri:
    'https://nextjszbn6cq-llpy--3000.local-corp.webcontainer.io/authorization',

  getTopArtists: async () => {
    const result = await fetch(
      'https://api.spotify.com/v1/me/top/artists?limit=1',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: '',
        },
      }
    );
    const data = await result.json();
    return data.items[0];
  },
};
