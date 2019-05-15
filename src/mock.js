import Mock from 'mockjs' // 引入mockjs

const Random = Mock.Random // Mock.Random 是一个工具类，用于生成各种随机数据

let data = [] // 用于接受生成数据的数组

for (let i = 0; i < 200; i++) { // 可自定义生成的个数
  let template = {
    'id': Random.integer(1, 100), // 生成1到100之间的整数
    'date': Random.date(), // 生成一个随机日期,可加参数定义日期格式
    'age': Random.integer(1, 100), // 生成随机年龄
    'name': Random.cname(), // 生成姓名
    'address': Random.county(true).replace(/\s+/g, ''), // 生成地址
    'gender': Random.cword('男女', 1), // 生成性别
    'zip': /[0-9]{6}/ // 生成邮编
  }
  data.push(template)
}

Mock.mock('/components/Home', 'post', data) // 根据数据模板生成模拟数据
