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

class RoomContainer {
    constructor() {
        this.rooms = []
    }

    addRoom(room) {
        this.rooms.push(room)
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
        'description': '<p>Then one night I saw friend log on. </p><br><p>Before I could initiate a conversation, friend sent me a message.</p><br><p>Shell I <b>read it</b> or <b>will not</b>?',
        'examineDescription': '<p style="color: #0357ff;">You have new message</p>',
        'directions': {
            'read it': 'reading_message',
            'will not': 'leave_it',
            'reach' : 'reach_that'
        },
        'items': [],
        'npcs': {}
    }),

  //   leave_it = new Room({
  //       'name': 'leave_it',
  //       'description': '<p>You dont want to read the message, but you are interested what friend want </p><br>and you should <b>read it</b>',
  //       'examineDescription': '<p style="color: #0357ff;">You need money, really fast, you have unpaid invoices :D</p>',
  //       'directions': {
  //           'read it': 'reading_messagee',
  //       },
  //       'items': [],
  //       'npcs': {}
  //   }),
    
  //   reading_message = new Room ({
  //       'name': 'reading_messagee',
  //       'description': '<p>"We need to talk." </p><br><p>hmm I don`t know should I <b>continue</b> or <b>will not</b>',
  //       'examineDescription': '<p style="color: #0357ff;">Old friend wanna to talk with you</p>',
  //       'directions': {
  //           'continue': 'Lets_Talk',
  //           'will not': 'leave it'
  //       },
  //       'items': [],
  //       'npcs': {}
  //   }),
    
  //   Lets_Talk = new Room ({
  //       'name': 'Lets_Talk',
  //       'description': '<p> That was when friend told me about the <b>NoEnd House</b> </p><br><p>It got that name because no one had ever reached the final exit.</p><br><p>The rules were pretty simple and cliche: reach the final room of the building and you win &euro;500.</p><br><p>There were nine rooms in all.</p><br><p>I would like to <b>go to</b> and try but maybe I`m too scared and <b>will not</b></p> ',
  //       'examineDescription': '<p style="color: #0357ff;">Friend explain solution for extra money and you need it</p>',
  //       'directions': {
  //           'go to': 'leave_house',
  //           'no way': 'no_way'
  //       },
  //       'items': [],
  //       'npcs': {}
  //   }),
  //   no_way = new Room({
  //       'name': 'no_way',
  //       'description': '<p>You are too scared already??</p><hr><br><p>then go <b>to house</b> or maybe <b>start</b> over?',
  //       'examineDescription': '<p style="color: #0357ff;">...</p>',
  //       'directions': {
  //           'to house': 'leave_house',
  //           'start': 'start'
  //       },
  //       'items': [],
  //       'npcs': {}
  //   }),
  //   leave_house = new Room({
  //       'name': 'leave_house',
  //       'description': '<p>I arrived, what now?</p><br><p>shell I <b>open door</b> ? <br><p>or this is a bad idea and I`m scared and <b>leave now</b></p> ',
  //       'examineDescription': '<p style="color: #0357ff;">Noticed something strange about the building.</p><br><p style="color: #0357ff;">Have you ever seen or read something that shouldnt be scary, but for some reason</p><br><p style="color: #0357ff;"> a chill crawls up your spine?</p><br></p>',
  //       'directions': {
  //           'open door': 'opening_door',
  //           'leave now': 'leaving',
  //       },
  //       'items': [],
  //       'npcs': {}
  //   }),
  //   leaving = new Room({
  //       'name': 'leaving',
  //       'description': '<p>I was too scared and left. Now I can stop paying or <b>start</b> over?</p>',
  //       'examineDescription': '',
  //       'directions': {
  //           'start': 'start',
            
  //       },
  //       'items': [],
  //       'npcs': {}
  //   }),

  //   opening_door = new Room({
  //       'name': 'opening_door',
  //       'description': '<p>I opened the front door.</p><br>I can see a <b>sign</b>, </p><br><p>there are stairs for <b>first floor</b>,</p><br><p>',
  //       'examineDescription': '<p style="color: #0357ff;">The room looked like a normal hotel lobby decorated for Halloween.</p><br><p style="color: #0357ff;">A sign was posted in place of a worker.</p><br><p style="color: #0357ff;"> Maybe I should <b>check more</b></p>',
  //       'directions': {
  //           'first floor': 'going_to_first_floor',
  //           'sign': 'reading_sign',
  //           'check more': 'check_more',
  //       },
  //       'items': [],
  //       'npcs': {}
  //   }),

  //   going_to_first_floor = new Room({
  //       'name': 'going_to_first_floor',
  //       'description': '<p>You cannot go to first floor at this moment</p><br>',
  //       'examineDescription': '<p style="color: #0357ff;">What is with this <b>sign</b>? </p><br><p>maybe is something here, wanna <b>check more</b>?</p><br>',
  //       'directions': {
  //           'sign': 'reading_sign',
  //           'check more': 'check_more',
  //       },
  //       'items': [],
  //       'npcs': {}
  //   }),

  //   reading_sign = new Room({
  //       'name': 'reading_sign',
  //       'description': '<p>I`m looking the sign, what should I do now? maybe <b>open door</b> and get inside?</p><br>',
  //       'examineDescription': '<p style="color: #0357ff;">"Room 1 this way. Eight more follow. Reach the end and you win!"</p>',
  //       'directions': {
  //           'open door': 'opening_door',
  //       },
  //       'items': [],
  //       'npcs': {}
  //   }),
  //   check_more = new Room({
  //       'name': 'check_more',
  //       'description': '<p>The decor resembled the Halloween aisle of a K-Mart,</p><br><p>complete with sheet ghosts and animatronic zombies that gave a static growl when you passed by.</p><br><p>There is foward <b>exit door</b> ',
  //       'examineDescription': '<p style="color: #0357ff;">Nothing new here</p>',
  //       'directions': {
  //           'exit door': 'exit_door',
  //       },
  //       'items': [],
  //       'npcs': {}
  //   }),
  //   exit_door = new Room({
  //       'name': 'exit_door',
  //       'description': '<p>brushed through the fake spider webs and headed for the <b>second room.</b></p><br>',
  //       'examineDescription': '<p style="color: #0357ff;">Nothing interesting here</p><br><p style="color: #0357ff;">I didn`t see a stereo, but I guessed they must have used a PA system</p>',
  //       'directions': {
  //           'second room': 'second_room',
  //       },
  //       'items': [],
  //       'npcs': {}
  //   }),
  //   second_room = new Room({
  //       'name': 'second_room',
  //       'description': '<p>I reached for the doorknob and my heart sank to my knees.</p><br>',
  //       'examineDescription': '<p style="color: #0357ff;">I did not want to open that <b>next room</b> door.</p><br><p style="color: #0357ff;">A feeling of dread hit me so hard I could barely even think.</p><br>',
		//  'directions': {
  //           'next room': 'next_room',
  //       },
  //       'items': [],
  //       'npcs': {}
  //   }),
  //       next_room = new Room({
  //       'name': 'next_room',
  //       'description': '<p> Logic overtook me after a few terrified moments, and I shook it off and entered the next room.</p><br>',
  //       'examineDescription': '<p style="color: #0357ff;">I think I should <b>search</b> this room, maybe find something interesting</p><br>',
		//  'directions': {
  //           'search': 'search_something1'
  //       },
  //       'items': [],
  //       'npcs': {}
  //   }),
  //       search_something1 = new Room({
  //       'name': 'search_something1',
  //       'description': '<p> On the surface, it looked like a normal room.</p><br>',
  //       'examineDescription': '<p style="color: #0357ff;">There was a chair in the middle of the wood paneled floor.</p><br><br><p style="color: #0357ff;"> A single lamp in the corner did a poor job of lighting the area,</p><br><p style="color: #0357ff;">  casting a few shadows across the floor and walls.</p><br><br><p style="color: #0357ff;">That was the problem. Shadows. Plural.</p><br><p>Scary already... maybe <b>deep search</b> make difference?',
		//  'directions': {
  //           'deep search': 'deep_search',
  //       },
  //       'items': [],
  //       'npcs': {}
  //   }),
  //       deep_search = new Room({
  //       'name': 'deep_search',
  //       'description': '<p> With the exception of the chair`s, there were others.</p><br><p> I had barely walked in the door and I was already terrified.</p><br><p>I know something wasn`t right.</p><br>',
  //       'examineDescription': '<p style="color: #0357ff;">There is a door, what is with this door? <b>open door1</b>? not sure...I m scared</p><br>',
		//  'directions': {
  //           'open door1': 'open_door1',
  //       },
  //       'items': [],
  //       'npcs': {}
  //   }),
  //       open_door1 = new Room({
  //       'name': 'open_door1',
  //       'description': '<p>I tried to open the door I came through. It was locked from the other side.</p><br>',
  //       'examineDescription': '<p style="color: #0357ff;">That set me off. Was someone locking the fucking doors as I progressed?</p><br><p style="color: #0357ff;">There was no way. I would have heard them</p><br> <p style="color: #0357ff;"> I need to <b>think</b> what to do</p>',
		//  'directions': {
  //           'think': 'think_now',
  //       },
  //       'items': [],
  //       'npcs': {}
  //   }),
  //       think_now = new Room({
  //       'name': 'think_now',
  //       'description': '<p>Was it a mechanical lock that set automatically? Maybe.</p><br><p>But I was too scared to really think.</p><br>',
  //       'examineDescription': '<p style="color: #0357ff;">I`m scared I want <b>turn back</b>!</p>',
		//  'directions': {
  //           'turn back': 'turn_back',
  //       },
  //       'items': [],
  //       'npcs': {}
  //   }),
  //        turn_back = new Room({
  //       'name': 'turn_back',
  //       'description': '<p> I turned back to the room and the shadows were gone.</p><br>',
  //       'examineDescription': '<p style="color: #0357ff;">The chair`s shadow remained, but the others were gone.</p><br><p style="color: #0357ff;">Would like to test this and <b>walk around</b> and see what happend with shadows</p>',
		//  'directions': {
  //           'walk around': 'walk_around',
  //       },
  //       'items': [],
  //       'npcs': {}
  //   }),
  //        walk_around = new Room({
  //       'name': 'walk_around',
  //       'description': '<p>slowly began to walk.</p><br><p>Nothing happend, maybe need to <b>walk more</b> or this is a stupid idea',
  //       'examineDescription': '<p style="color: #0357ff;"> I used to hallucinate when I was a kid,</p><br><p style="color: #0357ff;">so I wrote off the shadows as a figment of my imagination.</p><br><p style="color: #0357ff;"> I began to feel better as I made it to the halfway point of the room.</p>',
		//  'directions': {
  //            'walk more': 'walking_more',
  //       },
  //       'items': [],
  //            'npcs': {}
  //        }),
  //       walking_more = new Room({
  //       'name': 'walking_more',
  //       'description': '<p> I looked down as I took my steps and that`s when I saw it.</p><br>',
  //       'examineDescription': '<p style="color: #0357ff;">Or didn`t see it. My shadow wasn`t there.</p><br><p style="color: #0357ff;">I`m scared as fuck wanna <b>run</b> from here!</p>',
		//  'directions': {
  //           'run': 'run_to_door',
  //       },
  //       'items': [],
  //       'npcs': {}
  //   }),

        
  //        run_to_door = new Room({
  //       'name': 'run_to_door',
  //       'description': '<p> You get in The fourth. Room was possibly the most disturbing.</p><br>',
  //       'examineDescription': '<p style="color: #0357ff;"> As I closed the door, </p><br><p style="color: #0357ff;">all light seemed to be sucked out and put back into the previous room.</p><br><p style="color: #0357ff;"><b>stay there</b> and think what to do next</p>',
		//  'directions': {
  //           'stay there': 'stay_there',
  //       },
  //       'items': [],
  //       'npcs': {}
  //   }),
		// stay_there = new Room({
  //       'name': 'stay_there',
  //       'description': '<p>  I stood there, surrounded by darkness, not able to move.</p><br><p>I`m not afraid of the dark and never have been,</p><br><p> but I was absolutely terrified.</p><br><p>Its dead silence I want to <b>hear anything</b> and <b>move foward</b></p>',
  //       'examineDescription': '<p style="color: #0357ff;"> All sight had left me.</p>',
		//  'directions': {
  //           'hear anything': 'hear_anything',
  //           'move foward': 'moving_foward'
  //       },
  //       'items': [],
  //       'npcs': {}
  //   }),
		
		// hear_anything = new Room({
  //       'name': 'hear_anything',
  //       'description': '<p>  I couldn`t hear anything. It was dead silence.</p><p><hr><b style="color: #02fa86;">Commands:</b><hr></p><p>"examine"</p><br><p> "go run"</p><hr>',
  //       'examineDescription': '<p style="color: #0357ff;"> When you`re in a sound-proof room, you can still hear yourself breathing.</p><br><p> You can hear yourself being alive.</p>',
		//  'directions': {
  //           'move foward': 'moving_foward',
  //       },
  //       'items': [],
  //       'npcs': {}
  //   }),
    //     moving_foward = new Room({
    //     'name': 'moving_foward',
    //     'description': '<p>I moved few steps and you step on something</p>',
    //     'examineDescription': '<p style="color: #0357ff;"> I don`t see almost anything and I`m scared to <b>reach that</b> </p>',
    //      'directions': {
    //         'touch it': 'reach_that',
    //     },
    //     'items': [],
    //     'npcs': {}
    // }),

    reach_that = new Room ({
    'name': 'reach_that',
    'description': '<p>What is that? hmm.. ',
    'examineDescription': '',
    'directions': {
        //'isEquipped' : false,
        '#': '#',
    },
    'items': [{ 
        'name': 'flashlight',
        'description': '<img src="./img/flashlight.png" alt="flashlight" style="width:100px;height:100px;">',
        'pickupDes': '<p style="color: #0357ff;">you picked up a flashlight!</p> ',
        'taken': false,
    }],
    'npcs': {}
}),
         new_room = new Room({
        'name': 'behind_me',
        'description': '<p>I felt something behind me.</p><br><p>I spun around wildly but could barely even see my nose.</p><br><p>I knew it was there, though.</p>',
        'examineDescription': '<p style="color: #0357ff;">Regardless of how dark it was, I knew something was there.</p><br><p style="color: #0357ff;">Good I have flashlight, maybe should <b>exuip</b></p><br>',
         'directions': {
            'touch it': 'reach_that',
        },
        'items': [],
        'npcs': {}
    }),
         new_else = new Room({
        'name': 'somewhere_else',
        'description': '<p>I felt something behind me.</p><br><p>I spun around wildly but could barely even see my nose.</p><br><p>I knew it was there, though.</p>',
        'examineDescription': '<p style="color: #0357ff;">Regardless of how dark it was, I knew something was there.</p><br><p style="color: #0357ff;">Good I have flashlight, maybe should <b>exuip</b></p><br>',
         'directions': {
            'touch it': 'reach_that',
        },
        'items': [],
        'npcs': {}
    }),


];

let roomContainer = new RoomContainer()

for ( let item of rooms ) {
    roomContainer.addRoom(item)
}

class Insurance {
    constructor(name) {
        this.name = name
    }
}