<template>
    <div class="" :class= "[{reading: ifCourseStatus('Normal')}]">
        <div class="top"></div>
            <div class="pic">
                <!--<img :src="lockIcon[lockStatus]">-->
                <div class="bg-pic":class="lockStatus">'</div>
            </div>
            <div class="font">
                <div class="fl">
                    <!--课程标题-->
                    <h1 :class= "classLevel">{{courseProcess.title}}</h1>
                    <!--起始,结束,耗时1-->
                    <div v-if="ifCourseStatus('Graduated')">
                        <p>{{courseProcess.startTime}}<span> ~ </span>{{courseProcess.endTime}}</p>
                        <p>您总共花了{{courseProcess.costTime}}天完成该课程</p>
                    </div>
                    <div v-else-if="ifCourseStatus('Normal')">
                        <p>报名时间: {{courseProcess.startTime}}</p>
                        <p>课程有效期至: {{courseProcess.limitTime}}</p>
                    </div>
                    <div v-else-if="ifCourseStatus('UnStudy')">
                        <p v-for="introPara in courseProcess.introduction">{{introPara}}</p>
                        <p>课程价格: {{courseProcess.price}}</p>
                    </div>
                </div>
                <!--课程小节-->
                <div class="fr">
                    <p>{{courseProcess.totalClass}}<span>课程小节</span></p>

                </div>
            </div>
        <div class="bottom"></div>



    </div>
</template>
<script>
    export default {
        data () {
            return {
                courseStatus: {
                    Graduated: 'Y',
                    Normal: 'N',
                    Pause: 'P',
                    Expire: 'E',
                    NotActice: 'I',
                    UnStudy: 'X',
                },
                lockIcon: {
                    lock: '../pic/jieduan-on.png',
                    read: '../pic/suo-ico.png',
                }
            }
        },
        methods: {
            ifCourseStatus(status) {
                return this.courseProcess.status === this.courseStatus[status]
            },
            ifCourseLevel(level) {
                return this.courseProcess.level === level
            }
        },
        computed: {
            classLevel() {
              return {
                  primary: this.ifCourseStatus('Graduated') && this.ifCourseLevel('primary'),
                  advance: this.ifCourseStatus('Graduated') && this.ifCourseLevel('advance'),
              }
            },
            lockStatus() {
                if (this.ifCourseStatus('Normal')) {
                    return 'study'
                } else if (this.ifCourseStatus('Graduated')) {
                    if (this.ifCourseLevel('primary')) {
                        return 'graduated-primary'
                    } else if (this.ifCourseLevel('advance')) {
                        return 'graduated-advance'
                    }
                } else if (this.ifCourseStatus('UnStudy')) {
                    return 'lock'
                }
            },
            isShow() {
                return true;
            },
        },
        props: {
            courseProcess: {
                type: Object,
            },
        },
    };
</script>
<style>
    .reading{
        background-color: red;
    }
    .primary{
        color: green;
    }
    .advance{
        color: blue;
    }
    .graduated-advance{
        background-image: url("../pic/graduated.png");
    }
    .graduated-primary{
        background-image:  url("../pic/graduated.png");
    }
    .lock{
        background-image:  url("../pic/suo-ico.png");
    }
    .study{
        background-image:  url("../pic/jieduan-on.png");
    }
    .bg-pic{
        width:100px;
        height:100px;
    }
</style>
