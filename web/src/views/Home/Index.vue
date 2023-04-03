<template>
    <div>
        <index-animation></index-animation>
        <Header background="transparent"></Header>
        <Footer fixed></Footer>
        <div class="common">
            <div class="home">
                <p>{{ info.introduction }}</p>
                <!-- <p>{{ info.introduction }}</p> -->
            </div>
        </div>
    </div>
</template>

<script>


let timerAgain;
import IndexAnimation from '@/components/IndexAnimation';
import Header from "@/components/Header"
import Footer from '@/components/Footer.vue';
export default {
    props: {

    },
    components: {
        IndexAnimation,
        Header,
        Footer
    },
    data() {
        return {
            info: {
                introduction: "",
                introductionTarget: "有志者,事竟成",
            },
        };
    },
    computed: {
        introductionTargetNum() {
            return this.info.introductionTarget.length
        }
    },
    created() {

    },
    mounted() {
        this.typing()
    },
    watch: {

    },
    methods: {
        typing() {
            // console.log("typingAgain",this);
            this.info.introduction = ""
            let i = 0;
            let timer = null;
            console.time("a");

            let typingAgain = () => {
                if (i <= this.info.introductionTarget.length) {
                    this.info.introduction =
                        this.info.introductionTarget.slice(0, i++) + "_"
                    timer = setTimeout(typingAgain, 100);
                } else {
                    this.info.introduction = this.info.introductionTarget; //结束打字,移除 _ 光标
                    clearTimeout(timer);
                    console.timeEnd("a");
                }
            }
            typingAgain()

            timerAgain = setTimeout(this.typing, this.info.introductionTarget.length * 1000)
        },

    },
    // 删掉他，就能看到内存泄露的表现
    beforeDestroy() {
        clearTimeout(timerAgain);
        this.timerAgain = null;
    }
};
</script>

<style scoped lang="less">
.home {
    position: absolute;
    top: 50%;
    width: 100%;
    text-align: center;
    transform: translateY(-50%);
    font-size: 0.96rem;

    font-weight: 500;

    p {
        color: #fdd835;
    }
}
</style>
