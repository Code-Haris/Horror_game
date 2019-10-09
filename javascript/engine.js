// Author: Haris Kravarevic
// TODO: Refactor these from being global
let currentRoom = 'start';
const commands = ['go [direction]', 'pickup [item]', 'examine', 'equipment'];

// SCORES OBJECT
let leaderboard = []

if (window.File && window.FileReader && window.FileList && window.Blob) {
  // Great success! All the File APIs are supported.
} else {
  alert('The File APIs are not fully supported in this browser.');
}

/** For typerwriter effect */
var i = 0;
var txt = 'Lorem ipsum typing effect!';
speed = 50;

//Testing for saves







//End of script. Script dont work but at least there is no error :D :D:D

function typeWriter() {
    if (i < txt.length) {
    // document.getElementById("console-text").innerHTML += txt.charAt(i);
    let content = document.querySelector('#console-text');
    let text = document.createElement('p');
    content.appendChild(text);
    text.innerHTML += txt.charAt(i);

    // $('#console-text').append(txt);
    i++;
    setTimeout(typeWriter, speed);
  }
}


/**
 * Appends the game's text onto the DOM elements
 * @param  {} value
 */
function exportLog(value) {
    // $('#console-text').append(value);
    // txt = value;
    // typeWriter();

    let content = document.querySelector('#console-text');
    let text = document.createElement('p');
    text.classList.add('typewriter');
    text.innerHTML = value;
    content.appendChild(text);
}

function exportText(value) {
    let content = document.querySelector('#console-text1');
    let text = document.createElement('p');
    text.classList.add('typewriter');
    text.innerHTML = value;
    content.appendChild(text);
}

/**
 * Changes the room
 * @param  {} dir
 */

function changeRoom(dir) {

    const cr = currentRoom;
    currentroomX = cr;

    const room = rooms.filter(roo => roo.name.includes(cr));

    if (room[0].directions[dir] !== undefined) {
        currentRoom = room[0].directions[dir];
        const nextRoom = rooms.filter(roo => (roo.name.includes(currentRoom))  );
        exportLog(`<h2>${nextRoom[0].name.toUpperCase()}</h2>`);
        exportLog(nextRoom[0].description);
    }
    else {
        exportLog('<p>You cannot go that way</p>');
    }
}

/**
 * Show the help menu
 */
function showHelp() {
    exportLog('<p><b>Here is the help: </b></p><br><br><p>go [direction]</p><br><p>pickup [item]</p><br><p>examine</p><br><p>equipment</p><br><p>Equip (right or left) item</p>');
    exportLog('<p><ul>');
    for (let i = 0; i < commands.length; i++) {
        exportLog(`<li> ${commands[i]} </li>`);
    }
    exportLog('</ul></p>');
}

/**
 * Examines the room for any objects and returns
 * the first description of any object not picked up.
 */
function examineRoom() {
    const room = rooms.filter(roo => roo.name.includes(currentRoom));

    // Check if room is undefined/empty and return the room's examine description.
    if (room[0].items <= 0 || room[0].items === undefined) {
        exportLog(`<p>${room[0].examineDescription}</p>`);
        return;
    }

    let items = [];

    // Check each element for an object and return the object's description.
    room[0].items.forEach(function(element) {
        if (element.taken === false) {
            items.push(`<p>${element.description}</p>`);
        }
    });

    exportLog(`<p>${items[0]}</p>`);

}

// Pickup's an object if it is in the room
function pickup(name) {
    const room = rooms.filter(roo => roo.name.includes(currentRoom));
    if (room[0].items <= 0 || room[0].items === undefined) {
        exportLog('<p>You looked around the room but did not find anything to pickup.</p>');
        return;
    }

    let item = [];

    /**
     *  Loop through each item and if it exists and is not taken
     *  then add it to the inventory, and make the 'taken' property
     * to true.
     */
    room[0].items.forEach(function(element) {
        if (element.taken === false && element.name === name) {
            player.inventory.push(element.name);
            element.taken = true;
            item.push(element.name);
            exportLog(`<p>${element.pickupDes}</p>`);
        }
    });

    if (item === undefined || item.length <= 0) {
        return exportLog(`<p>You looked for a <b>${name}</b> and could not find it.</p>`);
    }
}

/**
 * Show the inventory menu
 */
function showInventory() {
    if (player.inventoryIsEmpty()) {
        exportLog('<p>You are not carrying anything.</p>');
        return;
    }

    exportLog('<p>Here is your inventory: </p>');
    exportLog('<p>');
    console.log("Fuck you: " + player.inventory)

    // Master Fred
    for (item of player.inventory) {
        exportLog(`<h4 style="color: cyan;"> ${item}</h4><br>`)
    }

    //for (let i = 0; i < player.inventory.length; i++) {
    //    exportLog(`<li> ${player.inventory[i]} </li>`);
    //}
    //exportLog('</p>');
}
/**
 * equipItem
 * Equip's an item from the inventory
 * specified by the user
 *
 * @param  {} hand
 * @param  {} item
 */

let isEquipped = false;

function equipItem(hand, item, dir) {
    let inven = [];

    isEquipped = true


    let newObj = ifTestSomething()
    rooms[1].directions = {...newObj, ...rooms[1].directions}
    console.log(rooms[1].directions)

    //let currentroomTHIS = rooms.filter(room => room.name.includes(dir))
    //currentroomTHIS[0].directions.isEquipped = true

    //console.log(currentroomTHIS[0].directions.isEquipped)
    // Push the item to inven if it is in the inventory
    player.charInventory.forEach(function (element) {
        if (element === item) {
            inven.push(item);
        }
    });

    // Check if we have an item or not
    if (inven.length <= 0 || inven === undefined) {
        exportLog(`<p><b>${item}</b> is not in the inventory</p>`);
        return;
    }

    // Check hand and equip if hand is correct
    if (hand === 'left') {
        player.equipLefttHand(item);
        return;
    }
    else if (hand === 'right') {
        player.equipRightHand(item);
        return;
    }
    else {
        exportLog(`<p><b>${hand}</b> is an invalid command.</p>`);
        return;
    }
}

/**
 * showEquipment
 * Show's the player's equipment
 */
function showEquipment() {
    if (player.leftHandIsEmpty !== false) {
        exportLog(`<p>You have a <b>${player.leftHand}</b> in the left hand.</p>`);
    }
    else {
        exportLog(`<p>You have a <b>nothing</b> in the left hand.</p>`);
    }

    if (player.rightHandIsEmpty !== false) {
        exportLog(`<p>You have a <b>${player.rightHand}</b> in the right hand.</p>`);
    }
    else {
        exportLog(`<p>You have a <b>nothing</b> in the right hand.</p>`);
    }
}

// TES TEST TEST TEST TEST
function ifTestSomething() {
    if(isEquipped) {
        let newObj = {
            "behind me" : "somewhere_else"
        }
        return newObj
    } else {
        let newObj = {
            "behind me" : "behind_me"
        }
        return newObj
    }
}

/**
 * Get the room and change it
 * @param  {} input
 */
function playerInput(input) {
    let arr = input.split(' ')
    console.log(arr)
    let a, rest
    [a, ...rest] = arr
    const command = a
    console.log(command)
    const direction = rest.join(' ')
    const roomdir = rest.join('_')
    console.log(roomdir)
    let newObj = {
        [direction] : roomdir,
    }
    rooms[1].directions = {...newObj, ...rooms[1].directions}
    console.log(rooms[1].directions)

    player.moves =+ 1;
    let myObj = {
        "name" : "etwas",
        "score" : 2
    }
    localStorage.setItem(player.name, player.moves); // Changed little bit the line --> was making bug before
    $('#status-moves').text(`Moves: ${player.moves}`);

    switch(command) {
        case 'go':
            //const dir = input.split(" ")[1];
            dir = direction
            console.log(dir)
            changeRoom(dir);


        break;
        case 'help':
            showHelp();
        break;
        case 'inventory':
            showInventory();
        break;
        case 'examine':
            examineRoom();
        break;
        case 'pickup':
            const item = input.split(' ')[1];
            pickup(item);
        break;
        case 'equip':
            const hand = input.split(' ')[1];
            const itm = input.split(' ')[2];
            equipItem(hand, itm, dir);
        break;
        case 'equipment':
            showEquipment();
        break;
        default:
            exportLog('<p>Invalid command</p>');
    }
}

function playerName(input) {
    if (player.name === 'Player') {
        const upper = input.replace(/^\w/, c => c.toUpperCase());
        player.name = upper;

        localStorage.setItem(player.name, player.moves)

        let playerObj = {
            "name" : player.name,
            "score" : player.score
        }

        leaderboard.push(playerObj)

        // TODO: Refactor these appends
        exportText(`<p>You are <b>${player.name}</b> </p>`);
        $('#player-name').attr('placeholder','Please type your command...');
        setTimeout(function () { exportText(`<p>If you dare type start to start the game. &#128540;</p>`);}, 1000);
        return;
    }

    switch(input) {
        case 'start':
            $('#player-creation').remove();
            $('#play-area').css('visibility', 'visible');
            $('#player-input').val('');
            setTimeout(function() {$('#player-input').focus();}, 10);
            exportLog(`<h2>${start.name.toUpperCase()}</h2>`);
            exportLog(start.description);
            player.ready = true;
            player.moves =+ 1;
            localStorage.setItem(player.name, player.moves)
        break;
        default:
            $('#console-text1').append(`<p>Invalid command</p>`);
    }
}

// TODO: Implement audio manager
function toggleAudio() {


    // Toggles audio
}
function intro() {
    exportText('<p style="font-size:150px;color:red">&#9760;</p>');
    setTimeout(function () { exportText('<p>Let me start by saying that was addicted to heroin.</p>');}, 300);
    setTimeout(function () { exportText('<p>We were friends in college and continued to be after I graduated</p>');}, 300);
    setTimeout(function () { exportText('<p>We were friends in college and continued to be after I graduated</p>');}, 300);
    setTimeout(function () { exportText('<p>Notice that I said "I".</p>');}, 400);
    setTimeout(function () { exportText('<p>Friend dropped out after two years of barely cutting it.</p>'); }, 500);
    setTimeout(function () { exportText('<p> After I moved out of the dorms and into a small apartment,</p>'); }, 600);
    setTimeout(function () { exportText('<p> I didnt see my friend as much.</p>'); }, 700);
    setTimeout(function () { exportText('<p> We would talk online every now and then (AIM was king in pre-Facebook years).</p>'); }, 800);
    setTimeout(function () { exportText('<p>There was a period where he wasnt online for about five weeks straight.</p>'); }, 900);
    setTimeout(function () { exportText('<p>I wasnt worried</p>'); }, 1000);
    setTimeout(function () { exportText('<p>He was a pretty notorious flake and drug addict, so I assumed he just stopped caring.</p>'); }, 1100);
    setTimeout(function () { exportText('<h1>Welcome To NoEnd House</h1>'); }, 1300);
    setTimeout(function () { exportText('<p style="color: #0bd9e0;">Developed by </p><br><p style="color: #02fa86;"> Haris Kravarevic, Sabastian Malcher, Mohammed Faraman, László Sándor</p><br><p style="color: #0bd9e0;">Copyright (c) 2019</p>'); }, 1400);
    setTimeout(function () { exportText('<p> Commands in the game ["go[direction]", "pickup[item]", "examine", "equipment"]</p>'); }, 1600);
    setTimeout(function() {document.querySelector('#player-name').style.visibility = 'visible';}, 1500);
    setTimeout(function() {document.querySelector('.caret').style.visibility = 'visible';}, 1500);
}

/**
 * When the DOM is ready, execute
 * @param  {} document
 * @param  {} .ready(function(
 */
$(document).ready(function() {
    intro();
    /**
     * Get the key pressed.
     * If 'Enter' then get the value of input
     * @param  {} document
     * @param  {} .keypress(function(key
     */
    $(document).keypress(function(key) {
        if (key.which === 13 && $('#player-input').is(':focus')) {
            if (player.ready) {
                let value = $('#player-input').val().toLowerCase();
                $('#player-input').val('');
                playerInput(value);
            }
        } else if (key.which === 13 && $('#player-name').is(':focus')) {
            let value = $('#player-name').val().toLowerCase();
            $('#player-name').val('');
            playerName(value);
        }
    });

});
