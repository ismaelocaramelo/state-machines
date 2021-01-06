
import counterMachine from "./counterMachine";


describe('Counter', () => {
  it('increments a counter', () => {
    const expectedValue = 1

    const actualState = counterMachine.transition('active', 'INCREMENT')

    expect(actualState.context).toStrictEqual({count: 1})
  })
})