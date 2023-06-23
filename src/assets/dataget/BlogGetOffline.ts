
var blogList = [
    {
        id:1,
        title: "今天是美好的一天",
        date:new Date('2023-06-21T10:30:00+08:00')
    },
    {
        id:2,
        title: "今天可能是美好的一天",
        date:new Date('2023-06-22T11:30:00+08:00')
    },
    {
        id:3,
        title: "今天应该是美好的一天",
        date:new Date('2023-06-23T11:30:00+08:00')
    }
]

const blogMap = new Map();
blogMap.set(1,{
    title: "今天是美好的一天",
    date:new Date('2023-06-21T10:30:00+08:00'),
    message:"No.1"
})
blogMap.set(2,{
    title: "今天可能是美好的一天",
    date:new Date('2023-06-22T11:30:00+08:00'),
    message:"No.2"
})
blogMap.set(3,{
    title: "今天应该是美好的一天",
    date:new Date('2023-06-23T11:30:00+08:00'),
    message:"No.3"
})



export function getBlogList(){
    return blogList;
}

export function getBlogMessage(id:Number){
    return blogMap.get(id)
}