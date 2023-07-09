const url = '/cities';


export const geoApiOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '97312f0e43msh1ebf142ac58badfp145a8bjsn26883f25afd9',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};

export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";

fetch('/cities', options)
    .then(response => response.json())
    .then(response => console.log(response))
    then(err => console.log(err));




try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}