import { createMachine, assign } from "xstate";

const temperatureMachine = createMachine({
  initial: "active",
  context: { C: 0, F: 0 },
  states: {
    active: {
      on: {
        CELSIUS: {
          actions: assign({
            C: (_, event) => event.value,
            F: (_, event) =>
              event.value.length ? +event.value * (9 / 5) + 32 : "",
          }),
        },
        FAHRENHEIT: {
          actions: assign({
            F: (_, event) => event.value,
            C: (_, event) =>
              event.value.length ? (+event.value - 32) * (5 / 9) : "",
          }),
        },
      },
    },
  },
});

export default temperatureMachine;
