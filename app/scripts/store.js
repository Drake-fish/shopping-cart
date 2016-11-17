import React from 'react';

import Cart from './models/Cart';

export default {
    cart: new Cart(),
    merch: [{
        picture: 'https://upload.wikimedia.org/wikipedia/en/9/96/Jurassic_Park_logo.jpg',
        name: 'Jurassic Park',
        price: 10,
        description: 'Jurassic Park is one of the best movies every made its about Dinosaurs and they are pretty awesome!'
    }, {
        picture: 'https://upload.wikimedia.org/wikipedia/en/d/d9/StepbrothersMP08.jpg',
        name: 'Step Brothers',
        price: 10,
        description: 'The funniest movie ever made you will love this movie and want to watch it over and over and over and over and over and over and over and over'
    }, {
        picture: 'http://cdn.miramax.com/media/assets/Pulp-Fiction1.png',
        name: 'Pulp Fiction',
        price: 200,
        description: 'super duper awesome movie gotta watch this movie its the best'
    }]
};
