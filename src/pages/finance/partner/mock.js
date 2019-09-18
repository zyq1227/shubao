import Mock from 'mockjs'

const { list } = new Mock.mock({
    'list|50': [{
        "key|+1": 1,
        "code": '@integer(0,100)',
        "name": "@name()",
        "income": '@integer(0,100)',
        "vip": '@integer(0,100)',
        "already": '@integer(0,100)',
        "not": '@integer(0,100)'
    }]
})

export default list