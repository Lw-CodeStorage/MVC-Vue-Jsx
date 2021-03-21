export default {
  data() {
    return {
      data: '123'
    };
  },

  render() {
    const h = arguments[0];
    return h("p", [this.data]);
  }

};