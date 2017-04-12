// import Vue from 'vue'
// import App from './App.vue'

// new Vue({
//   el: 'body',
//   components: { App }
// })

// new Vue({
//     el:'#app',
//     data:{
//       msg: 'hello js!'
//     }
// })
var versionNo = '2.6.0'
if(!localStorage.getItem('versionNo')) {
    console.log('set')
    localStorage.setItem('versionNo',versionNo)
} else {
    console.log(localStorage.getItem('versionNo'))
}

new Vue({
    el: 'div',
    data:{
        msg: 'hello js!'
    }
})