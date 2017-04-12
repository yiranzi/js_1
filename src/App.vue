<template>
  <div id="app">
    <div>
      <span>1234</span>
      <span>{{msg}}</span>
      <first v-for="(course, key) in course" :courseProcess = course></first>
      <!--<first :courseProcess = course></first>-->
    </div>
  </div>
</template>

<script>
    import first from './components/first.vue'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      course: [
          {
              title: '初级入门课',
              intoduction: ['好', '不好', '很好'],
              status: 'Y',
              level: 'primary',
              startTime: '2015.01.12',
              endTime: '2015.01.12',
              costTime: '8',
              limitTime: '2000.09.09',
              introduction: ['面向菜鸟', '很不错的课', '学完就很好了'],
              price: 100,
              totalClass: 7,
          },
          {
              title: '股票投资课',
              intoduction: ['好', '不好', '很好'],
              status: 'Y',
              level: 'advance',
              startTime: '2015.01.12',
              endTime: '2015.01.12',
              costTime: '8',
              limitTime: '2000.09.09',
              introduction: ['面向股民', '很不错的课', '学完就很好了'],
              price: 100,
              totalClass: 7,
          },
          {
              title: '初级入门课',
              intoduction: ['好', '不好', '很好'],
              status: 'N',
              level: 'primary',
              startTime: '2015.01.12',
              endTime: '2015.01.12',
              costTime: '8',
              limitTime: '2000.09.09',
              introduction: ['面向菜鸟', '很不错的课', '学完就很好了'],
              price: 100,
              totalClass: 7,
          },
          {
              title: '股票投资课',
              intoduction: ['好', '不好', '很好'],
              status: 'X',
              level: 'advance',
              startTime: '2015.01.12',
              endTime: '2015.01.12',
              costTime: '8',
              limitTime: '2000.09.09',
              introduction: ['面向股民', '很不错的课', '学完就很好了'],
              price: 100,
              totalClass: 7,
          },
      ]
    }
  },
  components: {
      first,
  }
}
</script>

<style>
</style>


