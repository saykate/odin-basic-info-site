const EventEmitter = require('events');

//Create emitter class
class MyEmitter extends EventEmitter { }

//Init object
const myEmitter = new MyEmitter()

//create Event listener
myEmitter.on('event', () => console.log("Event Fired!"))

//Init event
myEmitter.emit('event')
myEmitter.emit('event')
myEmitter.emit('event')