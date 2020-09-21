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
        const newsTitle = ["王者荣耀官方核心团招募公告(2020年第六期)", "狄某有话说 | 蒙犽“惨遭”蔡文姬抛弃，所以爱会消失对吗？", "猪八戒的设计灵感？百里守约怎么调？【王者零距离】实录播出，现场高能时刻等你解锁！", "【皮肤爆料】狂想玩偶喵！是你要的蒙犽皮肤吗~", "露娜英雄及皮肤特效优化&amp;最新bug修复进展【老亚瑟的答疑时间】"]
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

    app.use('/web/api', router)
}