const EventResponse = require('./EventResponse');

class EventIgnoreResponse extends EventResponse {
  EventResponse.placeholder = true;
}

module.exports = EventIgnoreResponse;
