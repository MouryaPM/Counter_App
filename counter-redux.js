const redux = require("redux");

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }
  return state;
};

const store = redux.createStore(counterReducer);
console.log(store.getState());

const counterSubscribe = () => {
  const latestStore = store.getState();
  console.log("Latest:", latestStore);
};

store.subscribe(counterSubscribe);

store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });

{
  /**
1.store
2.reducer function
3.subscribe
4.dispatch
*/
}
