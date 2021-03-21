import test from './component1.js';
new Vue({
  el: "#app",
  data: {
    message: 'dataTest'
  },

  render() {
    const h = arguments[0];
    return h(test, ["123"]);
  }

});