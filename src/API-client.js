const URL = 'https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=colombia&api_key=c0cad4399ba74f0e30c069fbb0cba72d&format=json';

function getArtists() {
	return fetch(URL)
	.then(response =>  response.json())
	.then(data =>  data.topartists.artist)
	.then(artists => artists.map(artist => {
		return {
			name: artist.name,
			image: artist.image[3]['#text'],
			likes: 200,
			comments: 150,
		}
	}))
}

export {getArtists}