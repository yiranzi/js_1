<template>
  <div id="app">
    <div>
      <span>1234</span>
      <!--需要一个对象 key是class 值是true false-->
      <p :class="{'test': isTest}">{{msg}}</p>
<!--直接传入一个对象也可以-->
      <p :class="testObject">{{msg}}</p>
      <p :class="testCalc">{{msg}}</p>
      <p :class="testMethod(1)">{{msg}}</p>
      <p :class="[testMethod(1),testCalc]">{{msg}}</p>

      <span>{{myCalc}}</span>
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
        testObject: {
            'test2': true,
        },
        isTest: true,
        number: 10,
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
  },
    computed: {
      myCalc () {
          return this.number + 1
      },
        testCalc: function(){
          return{
              'test': true
          }
        }
    },
    methods: {
      testMethod: function(index){
          return{
              'test2': index === 1
          }
      }
    }
}
</script>

<style>
  .test{
    font-size: 30px;
  }
  .test2{
    color: green;
  }
</style>


