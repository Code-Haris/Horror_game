// author: Haris Kravarevic
// Base Character Class
// TODO: Add more methods
class Character {
    constructor(params) {
        this.charName = params.charName;
        this.charInventory = params.charInventory;
        this.charLeftHand = params.charLeftHand;
        this.charRightHand = params.charRightHand;
        this.charReady = params.charReady;
        this.charMoves = params.charMoves;
    }

    // Getters and Setters
    get name() {
        return this.charName;
    }
    set name(newName) {
        this.charName = newName;
    }

    get ready() { 
        return this.charReady;
    }
    set ready(bool) { 
        this.charReady = bool; 
    }

    get inventory() {
        return this.charInventory;
    }

    set inventory(item) {
        this.charInventory.push(item);
    }

    get rightHand() {
        return this.charRightHand;
    }

    set rightHand(item) {
        this.charRightHand.push(item);
    }

    get leftHand() {
        return this.charLeftHand;
    }

    set leftHand(item) {
        this.charLeftHand.push(item);
    }

    get moves() {
        return this.charMoves;
    }

    set moves(val) {
        this.charMoves += val;
    }

    // Methods
    // Inventory
    inventoryIsEmpty() {
        if (this.charInventory.length <= 0) {
            return true;
        }

        return false;
    }

    removeItem(item) {
        if (this.charInventory.includes(item)) {
            this.charInventory.splice(this.charInventory.indexOf(item));
        } else {
            console.log(`Failed to remove item ${item}. Check whether ${item} is in the iventory array or not.`);
        }
    }

    // Equip
    // Right Hand
    rightHandIsEmpty() {
        if (this.charRightHand.length <= 0) {
            return true;
        }

        return false;
    }

    removeRightHand() {
        if (!this.rightHandIsEmpty()) {
            this.charRightHand = [];
        }
    }
    equipRightHand(item) {
        const index = this.charInventory.indexOf(item);
        if (this.rightHandIsEmpty()) {
            this.charRightHand.push(item);
        }
        else {
            this.removeRightHand();
            this.charRightHand.push(item);
        }

        this.charInventory.splice(index, 1);
        exportLog(`<p><b>${item}</b> has been equipped to the right hand.</p>`);
    }

    // Left Hand
    leftHandIsEmpty() {
        if (this.charLeftHand.length <= 0) {
            return true;
        }

        return false;
    }

    removeLeftHand() {
        if (!this.leftHandIsEmpty()) {
            this.charLeftHand = [];
        }
    }
    equipLefttHand(item) {
        const index = this.charInventory.indexOf(item);
        if (this.leftHandIsEmpty()) {
            this.charLeftHand.push(item);
        }
        else {
            this.removeLeftHand();
            this.charLeftHand.push(item);
        }

        this.charInventory.splice(index, 1);
        exportLog(`<p><b>${item}</b> has been equipped to the left hand.</p>`);
    }
}

// Character Objects
let player = new Character ({
    'charName': 'Player',
    'charInventory': [],
    'charLeftHand': 'nothing',
    'charRightHand': 'nothing',
    'charReady': false,
    'charMoves': 0
});

class CharacterContainer {
    constructor() {
        this.characters = []
    }

    characterAdd(character) {
        this.characters.push(character)
    }

    //getter
    getCharacters() {
        console.log(this.characters)
    }
}

let characterContainer = new CharacterContainer()