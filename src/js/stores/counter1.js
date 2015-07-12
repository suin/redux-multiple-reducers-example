const initialState = 0;

export default function counter1(state = initialState, event) {
  switch (event.type) {
    case "COUNTER1_INCREMENTED":
      console.info(`counter1 ack ${event.type}: event =`, event);
      return state + 1;
    default:
      console.warn("counter1 ack unknown event: state =", state, "event =", event);
      return state;
  }
}
