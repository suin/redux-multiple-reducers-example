export function increment() {
  console.info("counter1 increment action was invoked.");
  return {
    type: "COUNTER1_INCREMENTED"
  };
}
