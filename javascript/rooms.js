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
        'description': '<p>Then one night I saw friend log on. </p><br><p>Before I could initiate a conversation, friend sent me a message.</p><br><p>"go read" or "go leave"',
        'examineDescription': '<p>Read Message</p>',
        'directions': {
            'read': 'reading_message',
            'leave': 'leave_it'
        },
        'items': [],
        'npcs': {}
    }),
    
    reading_message = new Room ({
        'name': 'reading_messagee',
        'description': '<p>"We need to talk." </p><br><p>"go continue" or "go leave"</p>',
        'examineDescription': '<p></p>',
        'directions': {
            'continue': 'Lets_Talk',
            'leave': 'leave it'
        },
        'items': [],
        'npcs': {}
    }),
    
    Lets_Talk = new Room ({
        'name': 'Lets_Talk',
        'description': '<p> That was when friend told me about the <b>NoEnd House</b> </p><br><p>It got that name because no one had ever reached the final exit.</p><br><p>The rules were pretty simple and cliche: reach the final room of the building and you win &euro;500.</p><br><p>There were nine rooms in all.</p><br><p>"go goto" or "go not"</p>',
        'examineDescription': '<p></p>',
        'directions': {
            'goto': 'leave_house',
            'not': '#'
        },
        'items': [],
        'npcs': {}
    }),
    leave_house = new Room({
        'name': 'leave_house',
        'description': '<p>When I arrived, I immediately noticed something strange about the building.</p><br><p>Have you ever seen or read something that shouldnt be scary, but for some reason a chill crawls up your spine?</p><br><p>I walked toward the building </p>',
        'examineDescription': '',
        'directions': {
            'opendoor': 'open_door',
            'leavenow': 'leave_now',
            'round': 'look_around',
        },
        'items': [],
        'npcs': {}
    }),

    look_around = new Room({
        'name': 'look_around',
        'description': '<p>When I arrived, I immediately noticed something strange about the building.</p><br><p>Have you ever seen or read something that shouldnt be scary, but for some reason a chill crawls up your spine?</p><br><p>I walked toward the building </p>',
        'examineDescription': '',
        'directions': {
            'opendoor': 'open_door',
            'leavenow': 'leave_now',
            'lookaround': 'look_around',
        },
        'items': [],
        'npcs': {}
    }),
];