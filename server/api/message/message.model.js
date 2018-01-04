'use strict';

import mongoose from 'mongoose';
import {registerEvents} from './message.events';

var MessageSchema = new mongoose.Schema({
  id: String,
  name: String,
  message: String
});

registerEvents(MessageSchema);
export default mongoose.model('Message', MessageSchema);
