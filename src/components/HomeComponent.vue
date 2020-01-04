<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item>1</mt-swipe-item>
            <mt-swipe-item>2</mt-swipe-item>
            <mt-swipe-item>3</mt-swipe-item>
        </mt-swipe>

    </div>
</template>


<script>
    import {Toast} from 'mint-ui';

    export default {
        data() {
            return {}
        },
        created() {
            this.getBanner();
        },
        methods: {
            getBanner() {
                this.$axios({
                    url: 'http://api.miaowu.best/api/chats/getChatList?c=26706f8610d742f291d803f889ddb3cb',
                    method: 'get'
                }).then(result => {
                    console.log("============");
                    console.log(result.data);
                    console.log("============");
                    console.log(result);
                }).catch(e=>{
                    console.log(e);
                });

                this.$axios.get("http://api.miaowu.best/api/chats/getChatList?c=26706f8610d742f291d803f889ddb3cb").then(result => {
                    Toast("123");
                });

                // this.$axios.get("http://api.miaowu.best/api/chats/getChatList?c=26706f8610d742f291d803f889ddb3cb").then(result => {
                //     console.log(result.body);
                //     if (result.body.status == 0) {
                //         Toast("加载成功");
                //     } else {
                //         Toast("失败了");
                //     }
                // })

            }
        }
    }
</script>

<style lang="scss" scoped>
    .mint-swipe {
        height: 300px;

        .mint-swipe-item {
            &:nth-child(1) {
                background-color: red;
            }

            &:nth-child(2) {
                background-color: lightblue;
            }

            &:nth-child(3) {
                background-color: gold;
            }
        }
    }

</style>