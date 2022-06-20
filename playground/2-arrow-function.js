const eventt = {
    name: 'Party',
    guestList: ['Kien','Dep','Trai'],
    printGuestList(){
        console.log('Guest list for ' + this.name)
        const that = this
        this.guestList.forEach(function(guest){
            console.log(guest + 'is attending ' + that.name)
        })
    }
}
eventt.printGuestList()

sum = x => x + x + x
console.log(sum(4))