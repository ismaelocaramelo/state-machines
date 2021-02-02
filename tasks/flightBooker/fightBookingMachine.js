import { createMachine, assign } from "xstate";

export const flightMachine = createMachine({
  id: "flight",
  initial: "editing",
  context: {
    startDate: undefined,
    returnDate: undefined,
    trip: "oneWay",
  },
  states: {
    editing: {
      on: {
        "startDate.UPDATE": {
          actions: assign({
            startDate: (_, event) => event.value,
          }),
        },
        "returnDate.UPDATE": {
          actions: assign({
            returnDate: (_, event) => event.value,
          }),
          cond: (context) => context.trip === "roundTrip",
        },
        SET_TRIP: {
          actions: assign({
            trip: (_, event) => event.value,
          }),
          cond: (_, event) =>
            event.value === "oneWay" || event.value === "roundTrip",
        },
        SUBMIT: {
          target: "submitted",
          cond: (context) => {
            if (context.trip === "oneWay") {
              return !!context.startDate;
            } else {
              return (
                !!context.startDate &&
                !!context.returnDate &&
                context.returnDate > context.startDate
              );
            }
          },
        },
      },
    },
    submitted: {
      type: "final",
    },
  },
});
