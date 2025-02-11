class Event {
  //event type: click or view
  //page: link
  //entity: article/project/talk
  constructor(eventType, page, entity) {
    this.eventType = eventType;
    this.page = page;
    this.entity = entity;
  }
}

class WebsiteAnalytics {
  constructor(events) {
    this.events = events;
  }
  //(2)write a function to store the events
  pushEvent(event) {}

  /**
   * (3)Function to count the number of events of a specific type based on the entity
   * @param {*} eventType
   * @param {*} entity
   */
  countEvents(eventType, entity) {}
}
