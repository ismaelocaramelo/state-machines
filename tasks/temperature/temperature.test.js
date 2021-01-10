import temperatureMachine from "./temperatureMachine";

describe("Temperature GUI", () => {
  it("expects C is empty", () => {
    expect(temperatureMachine.context.C).toBe(0);
  });

  it("expects F is empty", () => {
    expect(temperatureMachine.context.F).toBe(0);
  });
});
