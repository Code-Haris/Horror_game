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
        'description': '<p>Then one night I saw friend log on. </p><br><p>Before I could initiate a conversation, friend sent me a message.</p><br><br><b>Commands:</b><br><p>go read it</p><br><p>go will not</p><br><p>examine<p>',
        'examineDescription': '<p>You have new message</p>',
        'directions': {
            'readit': 'reading_message',
            'willnot': 'leave_it'
        },
        'items': [],
        'npcs': {}
    }),

    leave_it = new Room({
        'name': 'leave_it',
        'description': '<p>You dont want to read the message, but you are interested what friend want </p><br><br><b>Commands:</b><br><p>go read it</p><br><p>examine</p>',
        'examineDescription': '<p>You need money, but what friend want after all these years?</p>',
        'directions': {
            'readit': 'reading_messagee',
        },
        'items': [],
        'npcs': {}
    }),
    
    reading_message = new Room ({
        'name': 'reading_messagee',
        'description': '<p>"We need to talk." </p><br><br><b>Commands:</b><br><p>go continue</p><br><p>go will not</p><br><p>examine</p>',
        'examineDescription': '<p>Old friend wanna to talk with you</p>',
        'directions': {
            'continue': 'Lets_Talk',
            'willnot': 'leave it'
        },
        'items': [],
        'npcs': {}
    }),
    
    Lets_Talk = new Room ({
        'name': 'Lets_Talk',
        'description': '<p> That was when friend told me about the <b>NoEnd House</b> </p><br><p>It got that name because no one had ever reached the final exit.</p><br><p>The rules were pretty simple and cliche: reach the final room of the building and you win &euro;500.</p><br><p>There were nine rooms in all.</p><br><br><b>Commands</b><br><p>go go to</p><br><p>go no way</p><br><p>examine</p>',
        'examineDescription': '<p>Friend explain solution for extra money and you need it</p>',
        'directions': {
            'goto': 'leave_house',
            'noway': 'no_way'
        },
        'items': [],
        'npcs': {}
    }),
    no_way = new Room({
        'name': 'no_way',
        'description': '<p>You are too scared already??</p><br><br><b>Commands:</b><br><p>go to house</p><br><p>start over</p>',
        'examineDescription': '<p>...</p>',
        'directions': {
            'tohouse': 'leave_house',
            'start': 'start'
        },
        'items': [],
        'npcs': {}
    }),
    leave_house = new Room({
        'name': 'leave_house',
        'description': '<p>I arrived, what now?</p><br><p><b>Commands:</b></p><br><p>open door</p><br><p>leave now</p><br><p>round</p><br><p>examine</p>',
        'examineDescription': '<p>Noticed something strange about the building.</p><br><p>Have you ever seen or read something that shouldnt be scary, but for some reason</p><br><p> a chill crawls up your spine?</p><br></p>',
        'directions': {
            'opendoor': 'opening_door',
            'leavenow': 'leaving',
            'round': 'look_around',
        },
        'items': [],
        'npcs': {}
    }),

    opening_door = new Room({
        'name': 'opening_door',
        'description': '<p>I opened the front door.</p><br><p><b>Commands:</b></p><p>examine</p><br><p>go first floor</p><br><p>go sign</p>',
        'examineDescription': '<p>The room looked like a normal hotel lobby decorated for Halloween.</p><br><p>A sign was posted in place of a worker.</p>',
        'directions': {
            'firstfloor': 'going_to_first_floor',
            'sign': 'reading_sign',
        },
        'items': [],
        'npcs': {}
    }),
    reading_sign = new Room({
        'name': 'reading_sign',
        'description': '<p>Read the sign</p><br><p><b>Commands:</b></p><p>"examine"</p><br><p> "go opendoor"</p>',
        'examineDescription': '<p>"Room 1 this way. Eight more follow. Reach the end and you win!"</p>',
        'directions': {
            'opendoor': 'opening_door',
        },
        'items': [],
        'npcs': {}
    }),
];