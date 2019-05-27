//引入express模块
const express = require("express");
//定义路由级中间件
const router = express.Router();
//引入数据模型模块
const TabUser = require("../models/tab_user");

// 查询所有后台用户信息路由
router.get("/tab_user", (req, res) => {
    TabUser.find({})
    .sort({ update_at: -1 })
    .then(tab_users => {
      res.json(tab_users);
    })
    .catch(err => {
      console.log(2);
      res.json(err);
    });
});

// 通过ObjectId查询单个后台用户信息路由
router.get("/tab_user/:id", (req, res) => {
    TabUser.findById(req.params.id)
    .then(tab_user => {
      res.json(tab_user);
    })
    .catch(err => {
      res.json(err);
    });
});

// 添加一个后台用户信息路由
router.post("/tab_user", (req, res) => {
  //使用Hero model上的create方法储存数据
  TabUser.create(req.body, (err, tab_user) => {
    if (err) {
      res.json(err);
    } else {
      res.json(tab_user);
    }
  });
});

//更新一条后台用户信息数据路由
router.put("/tab_user/:id", (req, res) => {
    TabUser.findOneAndUpdate(
    { _id: req.params.id },
    {
      $set: {
        usercode : req.body.usercode,
        username : req.body.username,
        pwd : req.body.pwd,
        ssex : req.body.ssex,
        role : req.body.role
      }
    },
    {
      new: true
    }
  )
    .then(tab_user => res.json(tab_user))
    .catch(err => res.json(err));
});

// 添加图片路由
router.put("/addpic/:id", (req, res) => {
    TabUser.findOneAndUpdate(
    { _id: req.params.id },
    {
      $push: {
        imgArr: req.body.url
      }
    },
    {
      new: true
    }
  )
    .then(tab_user => res.json(tab_user))
    .catch(err => res.json(err));
});

//删除一条后台用户信息路由
router.delete("/tab_user/:id", (req, res) => {
    TabUser.findOneAndRemove({
    _id: req.params.id
  })
    .then(tab_user => res.send(`${tab_user.title}删除成功`))
    .catch(err => res.json(err));
});

module.exports = router;

