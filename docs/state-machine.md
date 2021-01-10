# State-machines

- What is a state?
- What is a state machine?
- Benefits
- Drackbacks
- Vocabulary
- Examples (bowling and others)

## What is a state?

It's a description of the status of a system that is waiting to execute a transition.

## What is a state machine?

It’s an abstract concept whereby the machine can have different states, but at a given time fulfills only one of them.

## Key concepts

- Actions
- State
- Transitions

Actions are the side-effects which happen basically in two moments:

- On entry state
- On exit state

Example: Doing HTTP request on entry.

State describes a particular behaviour of the machine. State is define as how the state reacts to events

Transitions is the instantaneous transfer from one state to another.

## Why we should design with state machine modelling?

User interface software is event driven. Each user interface object can respond to external events such as those supplied by a user, the operating system, or the application itself.
For instance, when a user clicks a button on a screen, an event is supplied to the applica­tion and the application can be programmed to respond to this event by executing a sequence of code. When the sequence of code completes execution, the application stops and waits for the next event to be supplied.
The sequence of external events supplied to the application determines **the flow of control**.

It is common for more than half the budget of a client-server project to be spent on the development and maintenance of the user interface. The reason for this is the complexity of the code that is written in the event handlers of user interface objects.

Despite the amount of code that is written. The bottom-up approach code can be difficult to understand and review thoroughly:

• the code can be difficult to test in a systematic and thorough way;
• the code can contain bugs even after extensive testing and bug fixing;
• the code can be difficult to enhance without introducing unwanted side-effects;
• the quality of the code tends to deteriorate as enhancements are made to it.
• There is no abstract view of the software (we have to go line-by-line to understand the overall picture)
• The contexts are not explicit (Many of the event handlers contain conditional statements to determine the context in which an event occurs)

## Benefits of state machine

- Centralize all of the possible scenarios in one area
- Make impossible states actually impossible
- Defined execution path

## Let's build one following the guidelines

See [Simple State Machine](./simpleStateMachine.js)

## Drawbacks of state machine

![](./assets/drawback_image_00.png)

![](./assets/drawback_image_01.png)

If number of states grows too large, so does the complexity of the verification procedure, possibly making the technique unusable.
The number of states of a model can be enormous. For example, consider a system composed by n processes, each having m states. Then, the asynchronous composition of these processes may have m^n states.

![](./assets/drawback_image_02.png)

We can conclude:

- Finite state machines cannot model user interfaces without being extended
- The number of states increased rapidly with only a modest rise in the complexity of the system being modelled
- There were many duplicated states and events
- The state transition diagram was large and difficult to read
- State transition diagrams are not scalable

## Solution with statecharts

What is a statechart?

> A visual formalism for complex systems (Harel, 1987)

Most UIs are event driven, meaning that the user interface components themselves generate events when the user interacts with them. These events typically trigger actions attached directly to the UI components.

The implementation of the UI component somehow decides what to do, what to show, what to stop doing and what to stop showing.

This is called the **Event Action** paradigm, because the action is tightly coupled to the event.

Concepts: https://statecharts.github.io/concepts.html

Start with Xtate https://xstate.js.org/docs/about/concepts.html

https://www.smashingmagazine.com/2018/01/rise-state-machines/

References:

- http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.261.3888&rep=rep1&type=pdf
