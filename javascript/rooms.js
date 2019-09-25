// Author: Haris Kravarevic
// Base Room class
class Room {
    constructor(params) {
        this.name = params.name;
        this.description = params.description;
        this.examineDescription = params.examineDescription;
        this.directions = params.directions;
        this.items = params.items;
        this.npcs = params.npcs;
    }
}
// Example Room
// corridor = new Room ({
//     'name': 'corridor',
//     'description': '<p>You walk down a narrow corridor. Humming that same song you always hum when you get nervous.</p>',
//     'examineDescription': '<p>You looked around the room but did not find anything.</p>',
//     'directions': {
//         'north': 'clearing1',
//         'south': 'clearing2'
//     },
//     'items': [{ 
//         'name': 'key',
//         'description': 'You see a shiny metalic object in the far distance.',
//         'pickupDes': 'You walked towards the shiny metalic object and found a <b>key</b>!',
//         'taken': false
//     }, {
//         'name':  'bat',
//         'description': 'You see a wooden object with a baseball ingraved onto it.',
//         'pickupDes': 'You walked towards the wooden objet and found a baseball <b>bat</b>!',
//         'taken': false
//     }],
//     'npcs': {}
// }),

// Room Objects
const rooms = [
    start = new Room ({
        'name': 'start',
        'description': '<p>You heard something and you are scared. Go to creepy building <b>left</b> or <b>foward</b></p>',
        'examineDescription': '<p></p>',
        'directions': {
            'left': 'building1',
            'foward': 'foward1'
        },
        'items': [],
        'npcs': {}
    }),
    
    building1 = new Room ({
        'name': 'building1',
        'description': '<p>You entered in some creepy Building, search first floor, basemant</b>. </p>',
        'examineDescription': '<p>You looked around the room but did not find anything.</p>',
        'directions': {
            'first': 'first_floor',
            'basemant': 'basemant1'
        },
        'items': [],
        'npcs': {}
    }),
    
    foward1 = new Room ({
        'name': 'foward1',
        'description': '<p> You start to run and You see a women running <b>follow</b> , <b>anotherway</b>. </p>',
        'examineDescription': '<p>You looked around the room but did not find anything.</p>',
        'directions': {
            'follow': 'follow_woman',
            'anotherway': 'another_way'
        },
        'items': [],
        'npcs': {}
    })
];