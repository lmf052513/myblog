let randomTags = new Vue({
    el:'#randomTags',
    data:{
        tags:['huighfud','dfdsfdsf','dfsdf','dfsdfvbhgtko','fgfdjsigjdfs','fgioriytoijiogh','giojdfiosgj','huighfud','dfdsfdsf','dfsdf','dfsdfvbhgtko','fgfdjsigjdfs','fgioriytoijiogh','giojdfiosgj'],
    },
    computed:{
        //颜色随机生成
        randomColor(){
            return function () {
                let red = Math.random() * 255;
                let green = Math.random() * 255;
                let blue = Math.random() * 255;
                return `rgb(${red},${green},${blue})`
            }
           
        },
        randomFont(){
            return function () {
                return Math.floor(Math.random() * 20 + 12) + 'px';
            }
        }
    },
    created(){

    }
});
let hotPlace = new Vue({
    el:'#hot-place',
    data:{
        titleList:[{
            title:'this is title',
            link:'#'
        },
        {
            title:'this is title',
            link:'#'
        },
        {
            title:'this is title',
            link:'#'
        },
        {
            title:'this is title',
            link:'#'
        },
        {
            title:'this is title',
            link:'#'
        },
        {
            title:'this is title',
            link:'#'
        },
        {
            title:'this is title',
            link:'#'
        },
        {
            title:'this is title',
            link:'#'
        },
        {
            title:'this is title',
            link:'#'
        },
        {
            title:'this is title',
            link:'#'
        },
        {
            title:'this is title',
            link:'#'
        },
        {
            title:'this is title',
            link:'#'
        }]
    }
});
let hotComment = new Vue({
    el:'#hot-comment',
    data:{
        commentsList:[
            {
                userName:'djidj',
                ctime:'1周前',
                content:'i am xiaobai look like mengb',
                contentLink:'#'
            },
            {
                userName:'djidj',
                ctime:'1周前',
                content:'i am xiaobai look like mengb',
                contentLink:'#'
            },
            {
                userName:'djidj',
                ctime:'1周前',
                content:'i am xiaobai look like mengb',
                contentLink:'#'
            },
            {
                userName:'djidj',
                ctime:'1周前',
                content:'i am xiaobai look like mengb',
                contentLink:'#'
            }
        ]
    }
})