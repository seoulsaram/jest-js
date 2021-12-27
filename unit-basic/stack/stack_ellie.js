class Stack {
  constructor() {
    this._size = 0;
    this.head = null;
  }

  size() {
    return this._size;
  }

  push(item) {
    const node = {item, next: this.head};
  }

  pop() {
    if (this.array.length === 0) {
      throw new Error('Stack is empty');
    }
    return this.array.pop();
  }

  peek() {
    if (this.array.length === 0) {
      throw new Error('Stack is empty');
    }
    //return this.array[this.array.length - 1];
    return this.array[this.size() - 1];
  }
}

module.exports = Stack;
