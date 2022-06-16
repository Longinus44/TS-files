"use strict";
class Door {
    constructor() {
        this.isDoorOpened = false;
    }
    setLenght(lenght) {
        this.lenght = lenght;
    }
    setWidth(width) {
        this.width = width;
    }
    setcolor(color) {
        this.color = color;
    }
    sethandle(handle) {
        this.handle = handle;
    }
    open() {
        this.isDoorOpened = true;
        return this.isDoorOpened;
    }
    close() {
        this.isDoorOpened = false;
        return this.isDoorOpened;
    }
}
let myDoor = new Door();
myDoor.setLenght(25);
myDoor.setWidth(20);
myDoor.setcolor('brown');
myDoor.sethandle('silver');

if (myDoor.open()) {
    console.log("door is open");
}
else {
    myDoor.close();
    console.log("door is closed");
}
//# sourceMappingURL=Door.js.map