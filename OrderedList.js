class OrderedList {
    constructor() {
        this.data = []
    }
}
OrderedList.prototype.insert = function (item) {
    //bsearch

    //sequential search
    var pos = 0;
    for (; pos < this.data.length; pos++) {
        if (item < this.data[pos])
            break;
        else
            pos++;
    }
    this.data.splice(pos,0,item)
}

OrderedList.prototype.bSearch(item){
    
}

var myOL = new OrderedList();
myOL.insert(5);
myOL.insert(2);
myOL.insert(6)