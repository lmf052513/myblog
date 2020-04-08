let everyDay = new Vue({
    el:'#every-day',
    data:{
        content:'dhfgudhuigd',
    },
    computed:{
        getContent(){
            return this.content;
        }
    },
    created(){
        //请求数据给content赋值
        axios({
            methods:'get',
            url:'/queryEveryDay'
        }).then(res => {
            console.log(res.data.data[0].content);
            this.content = res.data.data[0].content
            
        }).catch(err => {
            console.log(err)
        })
    }
})

let articleList = new Vue({
    el:'#article-list',
    data:{
        articleList:[
            {
                title:'这是标题',
                content:'安装时可能不支持高版本，我使用了composer require laravel/passport ~4.0安装后执行迁移时nothing to migrate，需要手动注册Provider， 在config/app.php中providers中添加Laravel\Passport\PassportServiceProvider::class。执行php artisan passport:install时提示“There are no commands defined in the “passport” namespace.” 需要执行cache:clear和config:cache 更新缓存。...',
                date:'2019-12-06',
                views:100,
                tags:'test1 test2',
                id:'1',
                link:'#',
            },
            {
                title:'这是标题',
                content:'安装时可能不支持高版本，我使用了composer require laravel/passport ~4.0安装后执行迁移时nothing to migrate，需要手动注册Provider， 在config/app.php中providers中添加Laravel\Passport\PassportServiceProvider::class。执行php artisan passport:install时提示“There are no commands defined in the “passport” namespace.” 需要执行cache:clear和config:cache 更新缓存。...',
               date:'2019-12-06',
                views:100,
                tags:'test1 test2',
                id:'1',
                link:'#',
            },
            {
                title:'这是标题',
                content:'安装时可能不支持高版本，我使用了composer require laravel/passport ~4.0安装后执行迁移时nothing to migrate，需要手动注册Provider， 在config/app.php中providers中添加Laravel\Passport\PassportServiceProvider::class。执行php artisan passport:install时提示“There are no commands defined in the “passport” namespace.” 需要执行cache:clear和config:cache 更新缓存。...',
               date:'2019-12-06',
                views:100,
                tags:'test1 test2',
                id:'1',
                link:'#',
            },
            {
                title:'这是标题',
                content:'安装时可能不支持高版本，我使用了composer require laravel/passport ~4.0安装后执行迁移时nothing to migrate，需要手动注册Provider， 在config/app.php中providers中添加Laravel\Passport\PassportServiceProvider::class。执行php artisan passport:install时提示“There are no commands defined in the “passport” namespace.” 需要执行cache:clear和config:cache 更新缓存。...',
               date:'2019-12-06',
                views:100,
                tags:'test1 test2',
                id:'1',
                link:'#',
            }
        ]
    }
})