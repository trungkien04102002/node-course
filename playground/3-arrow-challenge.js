const tasks = {
    tasks:[{
        text:'Grocery shopping',
        completed: true
    },{
        text:'Clean yard',
        completed: false,
        test:'isOke'
    },{
        text:'Film course',
        completed: false
    }],
    getTasksTodo(){
        // const that  = this
        // const tasksTodo = that.tasks.filter((task)=>{
        //         return task.completed === true
        // })
        // return tasksTodo
        return this.tasks.filter((task)=> task.completed===false)
    },
    readingNote(){
        const that = this
        const book =  that.tasks.find((task)=>task.text==='Clean yard')
        return book
    }
}


console.log(tasks.getTasksTodo())