/**
 * Message model events
 */

'use strict';

import {EventEmitter} from 'events';
var MessageEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
MessageEvents.setMaxListeners(0);

// Model events
var events = {
  save: 'save',
  remove: 'remove'
};

// Register the event emitter to the model events
function registerEvents(Message) {
  for(var e in events) {
    let event = events[e];
    Message.post(e, emitEvent(event));
  }
}

function emitEvent(event) {
  return function(doc) {
    MessageEvents.emit(`${event}:${doc._id}`, doc);
    MessageEvents.emit(event, doc);
  };
}

export {registerEvents};
export default MessageEvents;
