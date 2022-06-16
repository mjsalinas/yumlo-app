// import { AppRegistry } from "react-native";
// import React from "react";
// import App from "./App";
// import { name as appName } from "./app.json";
// import { Provider } from "react-redux";
// import reducer from "./src/Reducer";

// const store = configureStore({
//     reducer: {user: reducer},
//   });

// const ReduxProvider = () => {
//   return (
//     <Provider store={store}>
//       <App />
//     </Provider>
//   );
// };

// AppRegistry.registerComponent(appName, () => ReduxProvider);

import { AppRegistry } from "react-native";
import React from "react";
import { Provider } from "react-redux";
// import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";

function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <span>{count}</span>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
    </div>
  );
}

const initialState = {
  value: 0,
  status: "idle",
};

const selectCount = (state) => state.counter.value;

const { reducer, actions } = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
});

export const { increment, decrement, incrementByAmount } = actions;

export const store = configureStore({
  reducer: {
    counter: reducer,
  },
});


// root.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <Counter />
//     </Provider>
//   </React.StrictMode>
// );

AppRegistry.registerComponent(appName, () => {
  <Provider store={store}>
    <Counter />
  </Provider>;
});
