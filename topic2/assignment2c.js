    var events = require('events');
var eventEmitter = new events.EventEmitter();

const firstHandler = () =>{
    console.log("First Event")

}

const secondHandler = () =>{
    console.log("Second Event")

}

const thirdHandler = () =>{
    console.log("Third Event")

}

eventEmitter.on('one',firstHandler);
eventEmitter.on('two',secondHandler);
eventEmitter.on('three', thirdHandler);

eventEmitter.emit('three');
eventEmitter.emit('one');
eventEmitter.emit('two');