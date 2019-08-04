export const initialState = {
  value: 0
};

export function increment() {
  this.setState({ value: this.state.value + 1 });
}

export function decrement() {
  this.setState({ value: this.state.value - 1 });
}
