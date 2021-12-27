//배열의 사이즈 초기화 하기

//배열에 값 추가하기 (push)
//push 시, 원본 배열에 값이 추가됨.
//배열에 자리가 모자라면 error throw
//1. capacity 세팅 (constructor)
//2. push마다 size ++
//3. push 시 size와 capacity가 동일하면 error
//4. push시 size++하며 head의 값에 현재 추가된 노드 대입하여 해드값 업데이트
//총 필요한 props는 head, size, capacity

//배열에 값 삭제하기
//pop 시, 배열 사이즈를 --
//사이즈를 줄이면서 pop한 값 리턴하기
//더 이상 줄일 사이즈가 없을 때 error throw
//1. pop시 사이즈 --
//2. this.head = null
class Stack {
  head = null;
  size = 0;
  constructor(capacity) {
    this.capacity = capacity;
  }
  push(value) {
    if (this.capacity <= this.size) {
      throw new Error('array is full');
    }
    const node = {value: value, head: this.head};
    this.head = node;
    this.size++;
  }
  pop() {
    if (this.size === 0) {
      throw new Error('array is empty');
    }
    const node = this.head;
    this.head = null;
    this.size--;
    return node.value;
  }

  get size() {
    return this.size;
  }
}

module.exports = Stack;
