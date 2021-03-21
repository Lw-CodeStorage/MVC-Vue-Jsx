import test from './component1.js'
new Vue({
    el: "#app",
    data:{
        message:'dataTest'
    },
    render() {
        return (<test>123</test>)
      }

})
