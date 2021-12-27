const Stack = require('../stack.js');
describe('stack', () => {
  let stack;

  it('push', () => {
    stack = new Stack(1);
    stack.push('value');
    expect(stack.head).toEqual({value: 'value', head: null});
    expect(stack.size).toBe(1);
  });

  it('push should throw an error when you try to push values beyond the capacity of array', () => {
    stack = new Stack(1);
    stack.push('value');
    expect(() => {
      stack.push('value2');
    }).toThrow('array is full');
  });

  it('pop', () => {
    stack = new Stack(1);
    stack.push('value');
    expect(stack.pop()).toBe('value');
    expect(stack.size).toBe(0);
    expect(stack.head).toBe(null);
  });

  it("pop should throw an error when you try to pop when it's empty", () => {
    stack = new Stack(0);
    expect(() => {
      stack.pop();
    }).toThrow('array is empty');
  });
});
