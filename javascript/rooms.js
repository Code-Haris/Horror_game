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
        'description': '<p>Then one night I saw friend log on. </p><br><p>Before I could initiate a conversation, friend sent me a message.</p><hr><br><br><b>Commands:</b><hr><br><p>go read it</p><br><p>go will not</p><br><p>examine<p><hr>',
        'examineDescription': '<p>You have new message</p>',
        'directions': {
            'read it': 'reading_message',
            'will not': 'leave_it'
        },
        'items': [],
        'npcs': {}
    }),

    leave_it = new Room({
        'name': 'leave_it',
        'description': '<p>You dont want to read the message, but you are interested what friend want </p><hr><br><br><b>Commands:</b><hr><br><p>go read it</p><br><p>examine</p><hr>',
        'examineDescription': '<p>You need money, but what friend want after all these years?</p>',
        'directions': {
            'read it': 'reading_messagee',
        },
        'items': [],
        'npcs': {}
    }),
    
    reading_message = new Room ({
        'name': 'reading_messagee',
        'description': '<p>"We need to talk." </p><hr><br><br><b>Commands:</b><hr><br><p>go continue</p><br><p>go will not</p><br><p>examine</p><hr>',
        'examineDescription': '<p>Old friend wanna to talk with you</p>',
        'directions': {
            'continue': 'Lets_Talk',
            'will not': 'leave it'
        },
        'items': [],
        'npcs': {}
    }),
    
    Lets_Talk = new Room ({
        'name': 'Lets_Talk',
        'description': '<p> That was when friend told me about the <b>NoEnd House</b> </p><br><p>It got that name because no one had ever reached the final exit.</p><br><p>The rules were pretty simple and cliche: reach the final room of the building and you win &euro;500.</p><br><p>There were nine rooms in all.</p><hr><br><br><b>Commands</b><hr><br><p>go go to</p><br><p>go no way</p><br><p>examine</p><hr>',
        'examineDescription': '<p>Friend explain solution for extra money and you need it</p>',
        'directions': {
            'go to': 'leave_house',
            'no way': 'no_way'
        },
        'items': [],
        'npcs': {}
    }),
    no_way = new Room({
        'name': 'no_way',
        'description': '<p>You are too scared already??</p><hr><br><br><b>Commands:</b><hr><br><p>go to house</p><br><p>start over</p><hr>',
        'examineDescription': '<p>...</p>',
        'directions': {
            'to house': 'leave_house',
            'start': 'start'
        },
        'items': [],
        'npcs': {}
    }),
    leave_house = new Room({
        'name': 'leave_house',
        'description': '<p>I arrived, what now?</p><br><br><p><hr><b>Commands:</b><hr></p><br><p>open door</p><br><p>leave now</p><br><p>round</p><br><p>examine</p><hr>',
        'examineDescription': '<p>Noticed something strange about the building.</p><br><p>Have you ever seen or read something that shouldnt be scary, but for some reason</p><br><p> a chill crawls up your spine?</p><br></p>',
        'directions': {
            'open door': 'opening_door',
            'leave now': 'leaving',
            'round': 'look_around',
        },
        'items': [],
        'npcs': {}
    }),

    opening_door = new Room({
        'name': 'opening_door',
        'description': '<p>I opened the front door.</p><br><p><hr><b>Commands:</b><hr></p><br><p>examine</p><br><p>go first floor</p><br><p>go sign</p><hr>',
        'examineDescription': '<p>The room looked like a normal hotel lobby decorated for Halloween.</p><br><p>A sign was posted in place of a worker.</p>',
        'directions': {
            'first floor': 'going_to_first_floor',
            'sign': 'reading_sign',
        },
        'items': [],
        'npcs': {}
    }),
    reading_sign = new Room({
        'name': 'reading_sign',
        'description': '<p>Read the sign</p><br><p><hr><b>Commands:</b><hr></p><br><p>"examine"</p><br><p> "go opendoor"</p><hr>',
        'examineDescription': '<p>"Room 1 this way. Eight more follow. Reach the end and you win!"</p>',
        'directions': {
            'open door': 'opening_door',
        },
        'items': [],
        'npcs': {}
    }),
    check_more = new Room({
        'name': 'check_more',
        'description': '<p>The decor resembled the Halloween aisle of a K-Mart,</p><br><p>complete with sheet ghosts and animatronic zombies that gave a static growl when you passed by.</p><br><p><hr><b>Commands:</b><hr></p><p>"examine"</p><br><p> "go exit door"</p><br><p>go check more</p><hr>',
        'examineDescription': '<p>Nothing new here</p>',
        'directions': {
            'exit door': 'exit_door',
        },
        'items': [],
        'npcs': {}
    }),
    exit_door = new Room({
        'name': 'exit_door',
        'description': '<p>brushed through the fake spider webs and headed for the second room.</p><br><p><hr><b>Commands:</b><hr></p><p>"examine"</p><br><p> "go second room"</p><hr>',
        'examineDescription': '<p>Nothing interesting here</p>',
        'directions': {
            'second room': 'second_room',
        },
        'items': [],
        'npcs': {}
    }),
    second_room = new Room({
        'name': 'second_room',
        'description': '<p>You were greeted by fog as I opened the door to room two.</p><br><p><hr><b>Commands:</b><hr></p><p>"examine"</p><br><p> "go second room"</p><hr>',
        'examineDescription': '<p>The room definitely upped the ante in terms of technology.</p><br><p>Not only was there a fog machine,</p><br><p>but a bat hung from the ceiling and flew in a circle. Scary.</p><br><p>They seemed to have a Halloween soundtrack that one</p><br><p> would find in a 99 cent store on loop somewhere in the room.</p>',
        'directions': {
            '#': '#',
        },
        'items': [],
        'npcs': {}
    }),
];