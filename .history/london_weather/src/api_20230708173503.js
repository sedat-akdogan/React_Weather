const url = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities';


export const geoApiOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '97312f0e43msh1ebf142ac58badfp145a8bjsn26883f25afd9',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};

export const GEO_




try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}