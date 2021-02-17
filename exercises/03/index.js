import { createMachine, interpret } from "xstate";

const elBox = document.querySelector("#box");

const machine = createMachine({
  initial: "inactive",
  states: {
    inactive: {
      on: {
        MOUSEDOWN: "active",
      },
    },
    active: {
      on: {
        MOUSEUP: "inactive",
      },
    },
  },
});

// Create a service using interpret(...)
const service = interpret(machine).onTransition((state) => {
  elBox.dataset.state = state.value;
});

service.start();

elBox.addEventListener("mousedown", (event) => {
  // Send a mousedown event
  // ...
  service.send("MOUSEDOWN");
});

elBox.addEventListener("mouseup", (event) => {
  // Send a mouseup event
  // ...
  service.send("MOUSEUP");
});
