require('../src/db/mongoose')

const User = require('../src/models/user')

const updateAgeAndCount = async (id,age) => {
    const user = await User.findByIdAndUpdate(id,{age})
    const count = await User.countDocuments({age})
    return count
}

updateAgeAndCount('62bac695eeb16391c7968e3f',19).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log('Error ',e)
})