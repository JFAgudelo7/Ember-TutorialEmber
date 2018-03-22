import Route from '@ember/routing/route';

export default Route.extend({
	model(){
		return[{
			id: 'grand-old-mansion',
			title: 'Grand Old Mansion',
			owner:'Veruca',
			city: 'Medellin',
			category: 'Estate',
			bedrooms: '15',
			image: 'https://upload.wikimedia.org/wikipedia/commons/a/a2/Igualada_5.JPG',
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
		},{
			id: 'urban-living',
			title: 'Urban Living',
			owner:'Mike',
			city: 'Bogota',
			category: 'Condo',
			bedrooms: '1',
			image: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Poble_nou-barcelona_-_panoramio_%285%29.jpg',
			description: 'Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
		},{
			id: 'downtown-charm',
			title: 'Downtown charm',
			owner:'Violet',
			city: 'Cali',
			category: 'Apartment',
			bedrooms: '2',
			image: 'https://upload.wikimedia.org/wikipedia/commons/b/bf/Paseo_mar%C3%ADtimo_Torrevieja.JPG',
			description: 'Excepteur sint occaecat cupidatat non	proident, sunt in culpa qui officia.',
		}];
	}
});
