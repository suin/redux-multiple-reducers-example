export function increment() {
  console.info("counter2 increment action was invoked.");
  return {
    type: "COUNTER2_INCREMENTED"
  };
}
