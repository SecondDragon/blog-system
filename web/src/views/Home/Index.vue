<template>
    <div>
        <index-animation></index-animation>
        <div class="common">
            <div class="home">
                <p>{{ info.introduction }}</p>
            </div>
        </div>
    </div>
</template>

<script>
let i = 0;
let timer = null;
import IndexAnimation from '@/components/IndexAnimation';
export default {
    props: {

    },
    components: {
        IndexAnimation
    },
    data() {
        return {
            info: {
                introduction: "",
                introductionTarget: "I can do it!",
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

            if (i < this.introductionTargetNum) {
                this.info.introduction = this.info.introductionTarget.slice(0, i++) + "_"
                timer=setTimeout(this.typing,100)
            } else { 
                this.info.introduction = this.info.introductionTarget; //结束打字,移除 _ 光标
                clearTimeout(timer);
            }
            
        }

    },
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
    color: #fff;
    font-weight: 500;
}
</style>
