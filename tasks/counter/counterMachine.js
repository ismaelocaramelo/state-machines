
import { createMachine, assign} from "xstate";

const counterMachine = createMachine({
  initial: 'active',
  context: {count: 0},
  states: {
    active: {
      on: {
        'INCREMENT': {
          actions: assign({count: ctx => ctx.count + 1})
        }
      }
    }
  }
})

export default counterMachine

