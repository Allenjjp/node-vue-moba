module.exports = app => {
    const router = require('express').Router()
    const mongoose = require('mongoose')
    // const Article = require('../../models/Article')
    const Category = mongoose.model('Category')
    const Article = mongoose.model('Article')
    router.get('/news/init', async(req, res) => {
        const parent = await Category.findOne({
            name: '新闻分类'
        })
        const cats = await Category.find().where({
            parent: parent
        }).lean()
        const newsTitle = ["王者荣耀官方核心团招募公告(2020年第六期)", "狄某有话说 | 蒙犽“惨遭”蔡文姬抛弃，所以爱会消失对吗？", "猪八戒的设计灵感？百里守约怎么调？【王者零距离】实录播出，现场高能时刻等你解锁！", "【皮肤爆料】狂想玩偶喵！是你要的蒙犽皮肤吗~", "露娜英雄及皮肤特效优化&amp;最新bug修复进展【老亚瑟的答疑时间】", "9月21日抢先服不停机更新公告", "王者荣耀官方核心团招募公告(2020年第六期)", "云中君源·梦皮肤特效研讨会开启公告", "9月19日体验服停机更新公告", "9月17日体验服停机更新公告", "【探秘新版本，巅峰赢豪礼】活动开启公告", "抢先服新赛季更新，赛季年度皮肤上架，新版本福利等你来拿", "2020年秋冬赛事战令全新升级，终极奖励韩信星元皮肤等你拿！", "赛末冲刺享回馈，秋分登录领好礼", "时隔五年，廉颇再出皮肤，限时秒杀不容错过！", "2020年秋冬赛事战令全新升级，终极奖励韩信星元皮肤等你拿！", "2020年KPL秋季赛9月16日热血开赛，主场地域化全面升级", "2020年KPL秋季赛热血来袭，线下售票9月7日12:00开启！", "2020年KGL秋季赛选手大名单公布，9月13日该我上场！", "2020年KPL秋季赛大名单公布"]
        const newsList = newsTitle.map(title => {
            const randomCats = cats.slice(0).sort((a, b) => Math.random() - 0.5)
            return {
                categories: randomCats.slice(0, 2),
                title: title
            }
        })
        await Article.deleteMany({})
        await Article.insertMany(newsList)
        res.send(newsList)
    })

    router.get('/news/list', async(req, res) => {
        // const parent = await Category.findOne({
        //     name: '新闻分类'
        // }).populate({
        //     path: 'children',
        //     populate: {
        //         path: 'newsList'
        //     }
        // }).lean()

        const parent = await Category.findOne({
            name: '新闻分类'
        })
        const cats = await Category.aggregate([
            { 
                $match: {
                    parent: parent._id
                } 
            } ,
            {
                $lookup: { 
                    from: 'articles',
                    localField: '_id',
                    foreignField: 'categories',
                    as: 'newsList'
                }
            },
            {
                $addFields: {
                    'newsList': {
                        $slice: [
                            '$newsList',
                            5
                        ]
                    }
                }
            }
        ])
        const subCates = cats.map(v => v._id)
        cats.unshift({
            name: '热门',
            newsList: await Article.find().where({
                categories: {
                    $in: subCates
                }
            }).populate('categories').limit(5).lean()
        })

        cats.map(cat => {
            cat.newsList.map(news => {
                news.categoryName = cat.name === '热门' ? news.categories[0].name : cat.name
                return news
            })
            return cat
        })
        res.send(cats)
    })

    app.use('/web/api', router)
}