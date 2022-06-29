require('../src/db/mongoose')

const Task = require('../src/models/task')

// Task.deleteOne({_id:'62b80f0c47bab29df239fb6d'}).then((task) => {
//     console.log(task)
//     return Task.countDocuments( { completed:false})
// }).then((result) => {
//     console.log(result)
// }).catch((e) =>{
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed:false})
    return count
}

deleteTaskAndCount('62bac619eeb16391c7968e37').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log('Error ',e)
})

