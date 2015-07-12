const initialState = 0;

export default function counter2(state: Object = initialState, event: Object): Object {
  switch (event.type) {
    case "COUNTER2_INCREMENTED":
      console.info(`counter2 ack ${event.type}: event =`, event);
      return state + 1;
    default:
      console.warn("counter2 ack unknown event: state =", state, "event =", event);
      return state;
  }
}
