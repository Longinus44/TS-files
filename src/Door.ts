class Door {
    lenght!: number;
    width!: number;
    color!: string;
    handle!: string;

    private isDoorOpened: boolean


    constructor() {
        this.isDoorOpened = false;
    }

    setLenght(lenght: number): void {
        this.lenght = lenght;
    }
    setWidth(width: number): void {
        this.width = width;
    }
    setcolor(color: string): void {
        this.color = color;
    }
    sethandle(handle: string): void {
        this.handle = handle;
    }

    open(): boolean {
        this.isDoorOpened = true;
        return this.isDoorOpened;
    }

    close(): boolean {
        this.isDoorOpened = false;
        return this.isDoorOpened;
    }

}

let myDoor: Door = new Door()
  myDoor.setLenght(25);
  myDoor.setWidth (20);
  myDoor.setcolor('brown');
  myDoor.sethandle('silver');


if(myDoor.open()){
    console.log("door is open");
}else{
    myDoor.close();
    console.log("door is closed");
}