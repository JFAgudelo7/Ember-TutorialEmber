export default function(){
  this.namespace = '/api';

  this.get('/rentals', function(){
    return{
      data: [{
        type: 'rentals',
        id: 'grand-old-mansion',
        attributes:{
          title: 'Grand Old Mansion',
          owner:'Veruca',
          city: 'Medellin',
          category: 'Estate',
          bedrooms: '15',
          image: 'https://upload.wikimedia.org/wikipedia/commons/a/a2/Igualada_5.JPG'
        }
      },{
        type: 'rentals',
        id: 'urban-living',
        attributes:{
          title: 'Urban Living',
          owner:'Mike',
          city: 'Bogota',
          category: 'Condo',
          bedrooms: '1',
          image: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Poble_nou-barcelona_-_panoramio_%285%29.jpg'
        }
      },{
        type: 'rentals',
        id: 'downtown-charm',
        attributes:{
          title: 'Downtown charm',
          owner:'Violet',
          city: 'Cali',
          category: 'Apartment',
          bedrooms: '2',
          image: 'https://upload.wikimedia.org/wikipedia/commons/b/bf/Paseo_mar%C3%ADtimo_Torrevieja.JPG'
        }
      }]
    };
  });
}




//export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.3.x/shorthands/
  */
//}
