<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item>1</mt-swipe-item>
            <mt-swipe-item>2</mt-swipe-item>
            <mt-swipe-item>3</mt-swipe-item>
        </mt-swipe>

        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
                <img src="../images/menu1.png" alt="#">
                <div class="mui-media-body">Home</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
                <img src="../images/menu2.png" alt="#">
                <div class="mui-media-body">Email</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
                <img src="../images/menu3.png" alt="#">
                <div class="mui-media-body">Chat</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
                <img src="../images/menu4.png" alt="#">
                <div class="mui-media-body">location</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
                <img src="../images/menu5.png" alt="#">
                <div class="mui-media-body">Search</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
                <img src="../images/menu6.png" alt="#">
                <div class="mui-media-body">Phone</div></a></li>
        </ul>


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
        height: 200px;

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

    .mui-table-view, .mui-grid-view{
        background-color: white;
        img{
            width: 60px;
            height: 60px;
        }
    }

    .mui-media-body{
        font-size: 13px;
    }

</style>